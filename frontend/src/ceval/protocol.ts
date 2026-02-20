import { Work, EvalResult } from './types';

/**
 * UCI Protocol handler -- manages bidirectional communication with the Stockfish
 * Web Worker. Handles work queuing, option caching (only sends setoption when
 * values change), and proper stop/bestmove lifecycle.
 *
 * Based on the Lichess analyse tools spec Section 4.
 */
export class Protocol {
  public engineName: string | undefined;

  private work: Work | undefined;
  private currentEval: EvalResult | undefined;
  private nextWork: Work | undefined;
  private send: ((cmd: string) => void) | undefined;
  private options: Map<string, string> = new Map();

  connected(send: (cmd: string) => void): void {
    this.send = send;
    this.options = new Map([
      ['Threads', '1'],
      ['Hash', '16'],
      ['MultiPV', '1'],
    ]);
    this.send('uci');
  }

  private setOption(name: string, value: string | number): void {
    const v = value.toString();
    if (this.send && this.options.get(name) !== v) {
      this.send(`setoption name ${name} value ${v}`);
      this.options.set(name, v);
    }
  }

  received(command: string): void {
    const parts = command.trim().split(/\s+/g);

    if (parts[0] === 'uciok') {
      this.setOption('UCI_AnalyseMode', 'true');
      this.setOption('Analysis Contempt', 'Off');
      this.send?.('ucinewgame');
      this.send?.('isready');
    } else if (parts[0] === 'readyok') {
      this.swapWork();
    } else if (parts[0] === 'id' && parts[1] === 'name') {
      this.engineName = parts.slice(2).join(' ');
    } else if (parts[0] === 'bestmove') {
      const work = this.work;
      this.work = undefined;
      if (work && this.currentEval) {
        // Capture bestmove string
        this.currentEval.bestmove = command.trim();
        work.emit(this.currentEval);
      }
      this.swapWork();
    } else if (this.work && !this.work.stopRequested && parts[0] === 'info') {
      this.parseInfo(parts);
    }
  }

  private parseInfo(parts: string[]): void {
    let depth = 0,
      nodes: number | undefined,
      millis: number | undefined,
      isMate = false,
      povEv: number | undefined,
      evalType: string | undefined;

    for (let i = 1; i < parts.length; i++) {
      switch (parts[i]) {
        case 'depth':
          depth = parseInt(parts[++i]);
          break;
        case 'nodes':
          nodes = parseInt(parts[++i]);
          break;
        case 'time':
          millis = parseInt(parts[++i]);
          break;
        case 'score':
          isMate = parts[++i] === 'mate';
          povEv = parseInt(parts[++i]);
          if (parts[i + 1] === 'lowerbound' || parts[i + 1] === 'upperbound')
            evalType = parts[++i];
          break;
        case 'pv':
          // We don't need PV moves for per-move eval, but consume them
          i = parts.length;
          break;
      }
    }

    // Skip #0 (stalemate reported as mate 0)
    if (isMate && !povEv) return;

    if (nodes === undefined || millis === undefined || povEv === undefined) return;

    // Ignore upperbound/lowerbound
    if (evalType) return;

    // Convert from engine POV to white's perspective
    const ev = this.work!.ply % 2 === 1 ? -povEv : povEv;

    this.currentEval = {
      fen: this.work!.currentFen,
      depth,
      nodes,
      millis,
      cp: isMate ? undefined : ev,
      mate: isMate ? ev : undefined,
      bestmove: '',
    };
  }

  private stop(): void {
    if (this.work && !this.work.stopRequested) {
      this.work.stopRequested = true;
      this.send?.('stop');
    }
  }

  private swapWork(): void {
    if (!this.send || this.work) return;

    this.work = this.nextWork;
    this.nextWork = undefined;

    if (this.work) {
      this.currentEval = undefined;

      this.setOption('Threads', this.work.threads);
      this.setOption('Hash', this.work.hashSize || 16);
      this.setOption('MultiPV', Math.max(1, this.work.multiPv));

      if (this.work.variant === 'chess960') {
        this.setOption('UCI_Chess960', 'true');
      } else {
        this.setOption('UCI_Chess960', 'false');
      }

      this.send(
        ['position fen', this.work.initialFen, 'moves', ...this.work.moves].join(' ')
      );
      const [by, value] = Object.entries(this.work.search)[0];
      this.send(`go ${by} ${value}`);
    }
  }

  compute(nextWork: Work | undefined): void {
    this.nextWork = nextWork;
    this.stop();
    this.swapWork();
  }

  isComputing(): boolean {
    return !!this.work && !this.work.stopRequested;
  }

  /**
   * Send ucinewgame + isready to clear the hash table.
   * Call this when the board position changes entirely (new move played).
   */
  newGame(): void {
    this.send?.('ucinewgame');
    this.send?.('isready');
  }
}
