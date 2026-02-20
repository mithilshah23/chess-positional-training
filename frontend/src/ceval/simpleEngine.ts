import { CevalEngine, CevalState, Work } from './types';
import { Protocol } from './protocol';

/** How long to wait for a single evalFen() before considering the engine dead. */
const EVAL_TIMEOUT_MS = 30_000;

/**
 * SimpleEngine -- wraps a single-threaded Stockfish WASM Web Worker with the
 * UCI Protocol handler. Based on the Lichess analyse tools spec Section 5.
 *
 * Includes automatic recovery: if the worker crashes (memory OOB, etc.) the
 * broken worker is terminated and a fresh one is spawned on the next call.
 */
export class SimpleEngine implements CevalEngine {
  private failed: Error | undefined;
  private protocol = new Protocol();
  private worker: Worker | undefined;

  constructor(private wasmJsUrl: string) {}

  get engineName(): string | undefined {
    return this.protocol.engineName;
  }

  getState(): CevalState {
    if (!this.worker) return CevalState.Initial;
    if (this.failed) return CevalState.Failed;
    if (!this.protocol.engineName) return CevalState.Loading;
    return this.protocol.isComputing() ? CevalState.Computing : CevalState.Idle;
  }

  /**
   * If the engine previously failed, tear it down so the next start() creates
   * a fresh worker and protocol instance.
   */
  private recoverIfNeeded(): void {
    if (this.failed) {
      console.warn('[SimpleEngine] Recovering from previous failure…');
      this.worker?.terminate();
      this.worker = undefined;
      this.protocol = new Protocol();
      this.failed = undefined;
    }
  }

  start(work: Work): void {
    this.recoverIfNeeded();
    this.protocol.compute(work);

    if (!this.worker) {
      this.worker = new Worker(this.wasmJsUrl);
      this.worker.addEventListener('message', (e) => {
        this.protocol.received(e.data);
      });
      this.worker.addEventListener('error', (err) => {
        console.error('[SimpleEngine] Worker error:', err);
        this.failed = err.error ?? new Error(err.message ?? 'Worker crashed');
      });
      this.protocol.connected((cmd) => this.worker?.postMessage(cmd));
    }
  }

  stop(): void {
    this.protocol.compute(undefined);
  }

  destroy(): void {
    this.worker?.terminate();
    this.worker = undefined;
  }

  /**
   * Send ucinewgame to clear the hash table for a fresh position.
   */
  newGame(): void {
    this.protocol.newGame();
  }

  /**
   * Convenience: evaluate a FEN and return a promise that resolves with the result.
   * This wraps the event-driven Protocol into a simple async call.
   *
   * Includes a timeout so that if the engine crashes mid-evaluation the promise
   * rejects instead of hanging forever.
   */
  evalFen(opts: {
    initialFen: string;
    currentFen: string;
    moves: string[];
    depth: number;
    ply: number;
    variant: string;
    threads?: number;
    hashSize?: number;
  }): Promise<{ cp?: number; mate?: number; bestmove: string; depth: number }> {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject(new Error('[SimpleEngine] evalFen timed out'));
      }, EVAL_TIMEOUT_MS);

      const work: Work = {
        variant: opts.variant,
        threads: opts.threads ?? 1,
        hashSize: opts.hashSize ?? 16,
        stopRequested: false,
        initialFen: opts.initialFen,
        currentFen: opts.currentFen,
        moves: opts.moves,
        search: { depth: opts.depth },
        multiPv: 1,
        ply: opts.ply,
        emit: (ev) => {
          clearTimeout(timer);
          resolve({
            cp: ev.cp,
            mate: ev.mate,
            bestmove: ev.bestmove,
            depth: ev.depth,
          });
        },
      };
      this.start(work);
    });
  }
}
