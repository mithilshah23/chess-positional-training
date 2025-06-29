import { Ctrl } from './ctrl';
import { Game } from './interfaces';
import { Api as CgApi } from 'chessground/api';
import { Config as CgConfig } from 'chessground/config';
import { Stream } from './ndJsonStream';
import { Color, Key } from 'chessground/types';
import { opposite, parseUci } from 'chessops/util';
import {Chess, defaultSetup, fen} from 'chessops';
import { makeFen, parseFen } from 'chessops/fen';
import { chessgroundDests } from 'chessops/compat';
import { Move } from 'chessops/types';

export interface BoardCtrl {
  chess: Chess;
  ground?: CgApi;
  chessgroundConfig: () => CgConfig;
  setGround: (cg: CgApi) => void;
}

export interface MoveEvaluation {
  uci: string;
  fen: string;
  evalCP: number | null;
  mate: number | null;
}

export interface ProcessedMove {
  source: string;
  fen: string;
  dest: string;
  evalCP: number | null;
  mate: number | null;
  display: Display
}

export interface Display {
  eval: string,
  color: string
}

export class GameCtrl implements BoardCtrl {
  game: Game;
  pov: Color;
  chess: Chess = Chess.default();
  lastMove?: [Key, Key];
  lastUpdateAt: number = Date.now();
  ground?: CgApi;
  redrawInterval: ReturnType<typeof setInterval>;
  showEvalBar?: boolean;
  showHint?: boolean;
  currentSelectedCell?: string | null;

  constructor(game: Game, readonly stream: Stream, private root: Ctrl) {
    this.game = game;
    this.pov = this.game.black.id == this.root.auth.me?.id ? 'black' : 'white';
    this.onUpdate();
    this.redrawInterval = setInterval(root.redraw, 100);
    this.createPromotionModal();
  }

  onUnmount = () => {
    if(this.stream) {
      this.stream.close();
    }
    clearInterval(this.redrawInterval);
  };

  private onUpdate = () => {
    const opponentColor = this.pov === "white" ? "Black" : "White";
    if(this.game.chatLine) {
        if (this.game.chatLine.text == opponentColor+" declines draw") {
          this.game.drawRejected = true;
          alert(`${opponentColor} has declined the draw.`);
        }
        else if(this.game.chatLine.text == "Takeback declined" && this.game.offerTakeback) {
          alert(`${opponentColor} has declined the takeback.`);
        }
        this.game.chatLine = null;
    } else {
      this.currentSelectedCell = null;
      this.game.movesEval = null;
      const opponentLetter = (this.pov == 'white') ? 'b':'w';
      const opponentDraw =  this.game.state[opponentLetter + "draw"]
      const opponentTakeback = this.game.state[opponentLetter + "takeback"]
      const playerDraw = this.game.state[this.pov[0] + "draw"]
      const playerTakeback = this.game.state[this.pov[0] + "takeback"]
      if(opponentDraw){
        const acceptDraw = confirm(`${opponentColor} offers a draw. Accept?`);
        if (acceptDraw) {
          this.acceptDraw();
        } else {
          this.rejectDraw();
        }
      }
      else if(opponentTakeback){
        const acceptTakeback = confirm(`${opponentColor} offers a takeback. Accept?`);
        if (acceptTakeback) {
          this.acceptTakeback();
        } else {
          this.rejectTakeback();
        }
      }
      else if(!(playerTakeback || playerDraw)) {
        if(this.game.moveCnt != this.game.state.moves.length) {
          this.game.offerTakeback = false;
        }
      }
      this.game.moveCnt = this.game.state.moves.length
      const setup = this.game.initialFen == 'startpos' ? defaultSetup() : parseFen(this.game.initialFen).unwrap();
      this.chess = Chess.fromSetup(setup).unwrap();
      const moves = this.game.state.moves.split(' ').filter((m: string) => m);
      moves.forEach((uci: string) => this.chess.play(parseUci(uci)!));
      const isBlackComputer = typeof this.game.black.aiLevel === 'number' ||
          ['maia1', 'maia5', 'maia9'].includes(this.game.black.name);

      const isWhiteComputer = typeof this.game.white.aiLevel === 'number' ||
          ['maia1', 'maia5', 'maia9'].includes(this.game.white.name);

      const isComputerOpponent = isBlackComputer || isWhiteComputer;
      // if (isComputerOpponent) {
      //   this.fetchStockfishEval(fen, depth).then(data => {
      //     this.game.evalData = data;
      //   }).catch(error => {
      //     console.error("Fetch error:", error);
      //     this.game.evalData = null;
      //   });
      // }
      if(this.chess.turn==this.pov && isComputerOpponent) {
        this.analyzePosition();
      }
      const lastMove = moves[moves.length - 1];
      this.lastMove = lastMove && [lastMove.substr(0, 2) as Key, lastMove.substr(2, 2) as Key];
      this.lastUpdateAt = Date.now();
      this.ground?.set(this.chessgroundConfig());
      if (this.chess.turn == this.pov) this.ground?.playPremove();
    }
  };

  // deprecated method
  private async fetchStockfishEval(fen: string, depth: number): Promise<number | null> {
    const stockfishApiUrl = 'https://stockfish.online/api/s/v2.php';
    try {
      const encodedFen = encodeURIComponent(fen);
      const url = `${stockfishApiUrl}?fen=${encodedFen}&depth=${depth}`;
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.error('Stockfish API error:', error);
      return null;
    }
  }
  private async fetchStockfishEvalWorkerNode(fen: string, depth: number): Promise<{
    success: boolean;
    evaluation: number | null;
    mate: number | null;
    bestmove: string;
    continuation: string;
  }> {
    try {
      const engine = await this.root.stockfishReady;

      let evaluation: number | null = null;
      let mate: number | null = null;
      let bestmove: string = '';
      let continuation: string = '';

      engine.postMessage('uci');
      engine.postMessage('isready');
      engine.postMessage(`position fen ${fen}`);
      engine.postMessage(`go depth ${depth}`);

      await new Promise<void>((resolve) => {
        const handler = (e: any) => {
          const m = (e.data ?? e).toString();
          if (m.startsWith('info depth') && m.includes(`depth ${depth}`)) {
            const scoreCpMatch = /score cp (-?\d+)/.exec(m);
            const scoreMateMatch = /score mate (-?\d+)/.exec(m);
            const pvMatch = m.match(/pv\s((?:[a-h][1-8][a-h][1-8]\s?)+)/);
            if (scoreCpMatch) {
              evaluation = parseInt(scoreCpMatch[1], 10) / 100;
              mate = null;
            } else if (scoreMateMatch) {
              mate = parseInt(scoreMateMatch[1], 10);
              evaluation = null;
            }
            if (pvMatch) {
              continuation = pvMatch[1];
            }
          }
          if (m.startsWith('bestmove')) {
            bestmove = m;
            engine.onmessage = null;
            resolve();
          }
        };
        engine.onmessage = handler;
      });

      if (this.chess.turn === 'black') {
        if (evaluation !== null) {
          evaluation = -evaluation;
        }
        if (mate !== null) {
          mate = -mate;
        }
      }

      return {
        success: true,
        evaluation,
        mate,
        bestmove,
        continuation,
      };
    } catch (e) {
      console.error('[SF] Stockfish eval failed:', e);
      return {
        success: false,
        evaluation: null,
        mate: null,
        bestmove: '',
        continuation: '',
      };
    }
  }

  private async getEvalFromFen(fen: string, depth: number, moveLength: number, opponentMove: boolean = true): Promise<{
    success: boolean;
    evaluation: number | null;
    mate: number | null;
    bestmove: string;
  }> {
    if (this.game.state.moves.length != moveLength || this.root.page == 'home' || this.game.stopEval) {
      return {
        success: false,
        evaluation: null,
        mate: null,
        bestmove: ''
      };
    }
    try {
      const engine = await this.root.stockfishReady;

      let evaluation: number | null = null;
      let mate: number | null = null;
      let bestmove: string = '';
      engine.postMessage('isready');
      if (this.game.variant.key == 'chess960') {
        engine.postMessage('setoption name UCI_Chess960 value true');
      } else {
        engine.postMessage('setoption name UCI_Chess960 value false');
      }
      engine.postMessage(`position fen ${fen}`);
      engine.postMessage(`go depth ${depth}`);

      await new Promise<void>((resolve) => {
        const handler = (e: any) => {
          const m = (e.data ?? e).toString();
          if (m.includes(`info depth ${depth}`)) {
            const scoreCpMatch = /score cp (-?\d+)/.exec(m);
            const scoreMateMatch = /score mate (-?\d+)/.exec(m);
            if (scoreCpMatch != null) {
              evaluation = parseInt(scoreCpMatch[1], 10)/10;
              mate = null;
            } else if (scoreMateMatch != null) {
              mate = parseInt(scoreMateMatch[1], 10);
              evaluation = null;
            }
          }
          if (m.startsWith('bestmove')) {
            bestmove = m;
            engine.onmessage = null;
            resolve();
          }
        };
        engine.onmessage = handler;
      });
      return {
        success: true,
        evaluation: (opponentMove)? ((evaluation!=null)?-evaluation: null) : evaluation,
        mate: (opponentMove)? ((mate!=null)?-mate: null) : mate,
        bestmove: bestmove
      };
    } catch (e) {
      console.error('[SF] Stockfish eval failed:', e);
      return {
        success: false,
        evaluation: null,
        mate: null,
        bestmove: ''
      };
    }
  }

  async analyzePosition() {
    try {
      this.game.stopEval = false;
      const moveLength = this.game.state.moves.length;
      const currEval = await this.getEvalFromFen(makeFen(this.chess.toSetup()), 20, moveLength, false);
      this.game.evalData = currEval;
      const movesEval: MoveEvaluation[] = await this.evaluateAllLegalMoves(this.chess, moveLength);
        const grouped: Record<string, ProcessedMove[]> = {};
        for (const move of movesEval) {
          const source = move.uci.substring(0, 2);
          // todo: promotion handling
          const dest = move.uci.substring(2, 4);

          const processedMove: ProcessedMove = {
            source: source,
            fen: move.fen,
            dest: dest,
            evalCP: move.evalCP,
            mate: move.mate,
            display: {eval: "", color:"green"}
          };

          processedMove.display = this.getDisplayString(processedMove);

          if (!grouped[source]) {
            grouped[source] = [];
          }

          grouped[source].push(processedMove);
        }

        const bestMoves = this.findBestMoves(grouped);
        this.game.bestMoves = bestMoves;
        this.game.movesEval = grouped;

    } catch (error) {
      console.error('Analysis failed:', error);
    }
  }

   private getMoveValue(move: ProcessedMove): number {
    if (move.mate !== null) {
      if (move.mate > 0) {
        return 1000000 - move.mate;
      } else {
        return -1000000 + move.mate;
      }
    }
    return move.evalCP !== null ? move.evalCP : -Infinity;
  }



   private findBestMoves(groupedMoves: Record<string, ProcessedMove[]>): Record<string, Display> {
    const bestMoves: Record<string, Display> = {};

    for (const [source, moves] of Object.entries(groupedMoves)) {
      let bestMove: ProcessedMove | null = null;
      let bestValue = -Infinity;

      for (const move of moves) {
        const value = this.getMoveValue(move);
        if (value > bestValue) {
          bestValue = value;
          bestMove = move;
        }
      }
      if (bestMove) {
        bestMoves[source] = this.getDisplayString(bestMove);
      }
    }
    return bestMoves;
  }

  private getDisplayString(move: ProcessedMove): Display{
    let evalStr: string = "";
    let colorStr: string = "green";
    if (move.evalCP != null) {
      if(move.evalCP>0){
        evalStr += "+";
      }
      else if (move.evalCP<0) {
        evalStr += "-";
        if (move.evalCP>-10){
          colorStr = "orange";
        }
        else {
          colorStr = "red";
        }
      }
      if(Math.abs(move.evalCP) > 10){
        evalStr += Math.round(Math.abs(move.evalCP));
      }
      else {
        evalStr += Math.abs(move.evalCP);
      }
    } else if (move.mate) {
      if(move.mate>0){
        evalStr = "+M"+move.mate;
      }
      else{
        colorStr = "red";
        evalStr = "-M"+Math.abs(move.mate);
      }
    }
    return {eval: evalStr, color: colorStr};
  }

  private async evaluateAllLegalMoves(
      pos: Chess,
      moveLength: number,
      depth: number = 15
  ): Promise<MoveEvaluation[]> {
    const moveEvals: MoveEvaluation[] = [];
    const legalMoves = pos.allDests();
    let moveCount = 0;

    for (const [fromSquare, dests] of legalMoves) {
      for (const toSquare of dests) {
        moveCount++;
        const uci = `${this.squareToUci(fromSquare)}${this.squareToUci(toSquare)}`;
        const newPos = pos.clone();
        const move: Move = {
          from: fromSquare,
          to: toSquare,
          promotion: undefined
        };
        newPos.play(move);
        const fen = makeFen(newPos.toSetup());
        const result = await this.getEvalFromFen(fen, depth, moveLength);
        moveEvals.push({
          uci,
          fen,
          evalCP: result.evaluation,
          mate: result.mate
        });
      }
    }
    return moveEvals;
  }

  private squareToUci(square: number): string {
    const files = 'abcdefgh';
    const file = files[square % 8];
    const rank = Math.floor(square / 8) + 1;
    return file + rank;
  }

  timeOf = (color: Color) => this.game.state[`${color[0]}time`];

  userMove = async (orig: Key, dest: Key) => {
    const getPieceAt = (fen: string, position: Key): string | null => {
      const rows = fen.split(" ")[0].split("/");
      const file = position.charCodeAt(0) - 97;
      const rank = 8 - parseInt(position[1]);
      const row = rows[rank];
      let fileIndex = 0;

      for (const char of row) {
        if (parseInt(char)) {
          fileIndex += parseInt(char);
        } else {
          if (fileIndex === file) return char;
          fileIndex++;
        }
      }
      return null;
    };
    const board = document.querySelector('cg-board');
    board?.querySelectorAll('.square-highlight').forEach(el => el.remove());
    this.showHint = false;
    const isPromotion = (orig: Key, dest: Key): boolean => {
      const pawnStartRow = this.pov === 'white' ? '7' : '2';
      const promotionRow = this.pov === 'white' ? '8' : '1';
      const fen = (this.ground?.state as unknown as { fen: string })?.fen;
      const piece = getPieceAt(fen, orig);

      return <boolean>(
          piece &&
          piece.toLowerCase() === 'p' &&
          orig[1] === pawnStartRow &&
          dest[1] === promotionRow
      );
    };

    if (isPromotion(orig, dest)) {
      this.showPromotionModal(orig, dest);
    } else {
      const move = `${orig}${dest}`;
      this.ground?.set({ turnColor: opposite(this.pov) });
      await this.root.auth.fetchBody(`/api/board/game/${this.game.id}/move/${move}`, { method: 'post' });
    }
  };

  private createPromotionModal() {
    const modal = document.createElement('div');
    modal.id = 'promotionModal';
    modal.style.display = 'none';
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.background = 'white';
    modal.style.border = '1px solid #ccc';
    modal.style.borderRadius = '8px';
    modal.style.padding = '16px';
    modal.style.zIndex = '1000';
    modal.style.textAlign = 'center';
    modal.innerHTML = `
        <h4>Choose a piece to promote:</h4>
        <div class="promotion-buttons">
            <button id="promoteKnight" class="btn btn-secondary">
                <i class="fas fa-chess-knight"></i> Knight
            </button>
            <button id="promoteBishop" class="btn btn-secondary">
                <i class="fas fa-chess-bishop"></i> Bishop
            </button>
            <button id="promoteRook" class="btn btn-secondary">
                <i class="fas fa-chess-rook"></i> Rook
            </button>
            <button id="promoteQueen" class="btn btn-secondary">
                <i class="fas fa-chess-queen"></i> Queen
            </button>
        </div>
    `;

    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    overlay.style.display = 'none';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = '999';

    document.body.appendChild(modal);
    document.body.appendChild(overlay);

    const style = document.createElement('style');
    style.textContent = `
        .promotion-buttons {
            display: flex;
            justify-content: center;
            gap: 10px;
            flex-wrap: wrap;
        }
        
        .promotion-buttons button {
            font-size: 24px;
            padding: 10px;
            min-width: 100px;
        }

        @media (max-width: 600px) {
            #promotionModal {
                border: 3px solid #666 !important;
                width: 90%;
                max-width: 300px;
                padding: 10px;
            }

            .promotion-buttons {
                gap: 8px;
                flex-direction: column;
            }

            .promotion-buttons button {
                width: 100%;
                font-size: 20px;
                padding: 8px;
                min-width: unset;
            }
        }
    `;
    document.head.appendChild(style);
  }

  private showPromotionModal(orig: Key, dest: Key) {
    const modal = document.getElementById('promotionModal') as HTMLElement;
    const overlay = document.getElementById('overlay') as HTMLElement;

    if (modal && overlay) {
      modal.style.display = 'block';
      overlay.style.display = 'block';

      const addPromotionListener = (buttonId: string, piece: string) => {
        const button = document.getElementById(buttonId);
        if (button) {
          button.replaceWith(button.cloneNode(true));
          const newButton = document.getElementById(buttonId);
          newButton?.addEventListener('click', () => this.handlePromotion(orig, dest, piece));
        }
      };

      addPromotionListener('promoteQueen', 'q');
      addPromotionListener('promoteRook', 'r');
      addPromotionListener('promoteBishop', 'b');
      addPromotionListener('promoteKnight', 'n');
    }
  }

  private handlePromotion(orig: Key, dest: Key, piece: string) {
    const modal = document.getElementById('promotionModal');
    const overlay = document.getElementById('overlay');

    if (modal && overlay) {
      modal.style.display = 'none';
      overlay.style.display = 'none';
    }

    const move = `${orig}${dest}${piece}`;
    this.ground?.set({ turnColor: opposite(this.pov) });
    this.root.auth.fetchBody(`/api/board/game/${this.game.id}/move/${move}`, { method: 'post' });
  }

  resign = async () => {
    await this.root.auth.fetchBody(`/api/board/game/${this.game.id}/resign`, { method: 'post' });
  };

  offerDraw = async () => {
    this.game.offerDraw = true
    await this.root.auth.fetchBody(`/api/board/game/${this.game.id}/draw/true`, { method: 'post' });
  };

  acceptDraw = async () => {
    await this.root.auth.fetchBody(`/api/board/game/${this.game.id}/draw/true`, { method: 'post' });
  };

  rejectDraw = async () => {
    await this.root.auth.fetchBody(`/api/board/game/${this.game.id}/draw/false`, { method: 'post' });
  };

  offerTakeback = async () => {
    this.game.offerTakeback = true
    await this.root.auth.fetchBody(`/api/board/game/${this.game.id}/takeback/true`, { method: 'post' });
  };

  acceptTakeback = async () => {
    await this.root.auth.fetchBody(`/api/board/game/${this.game.id}/takeback/true`, { method: 'post' });
  };

  rejectTakeback = async () => {
    await this.root.auth.fetchBody(`/api/board/game/${this.game.id}/takeback/false`, { method: 'post' });
  };

  playing = () => this.game.state.status == 'started';

  chessgroundConfig = () => ({
    orientation: this.pov,
    fen: makeFen(this.chess.toSetup()),
    lastMove: this.lastMove,
    turnColor: this.chess.turn,
    check: !!this.chess.isCheck(),
    movable: {
      free: false,
      color: this.playing() ? this.pov : undefined,
      dests: chessgroundDests(this.chess),
    },
    events: {
      move: this.userMove,
      select: (square: string) => {
        if(this.currentSelectedCell == square) {
          this.currentSelectedCell = null;
        }
        else {
          this.currentSelectedCell = square;
        }
      }
    },
  });

  setGround = (cg: CgApi) => (this.ground = cg);

  static open = (root: Ctrl, id: string): Promise<GameCtrl> =>
    new Promise<GameCtrl>(async resolve => {
      let ctrl: GameCtrl;
      let stream: Stream;
      const handler = (msg: any) => {
        if (ctrl) ctrl.handle(msg);
        else {
          // Gets the gameFull object from the first message of the stream,
          // make a GameCtrl from it, then forward the next messages to the ctrl
          ctrl = new GameCtrl(msg, stream, root);
          resolve(ctrl);
        }
      };
      stream = await root.auth.openStream(`/api/board/game/stream/${id}`, {}, handler);
    });

  private handle = (msg: any) => {
    switch (msg.type) {
      case 'gameFull':
        this.game = msg;
        this.onUpdate();
        this.root.redraw();
        break;
      case 'gameState':
        this.game.state = msg;
        this.onUpdate();
        this.root.redraw();
        break;
      case 'chatLine':
        this.game.chatLine = msg;
        this.onUpdate();
        this.root.redraw();
        break;

      default:
        console.error(`Unknown message type: ${msg.type}`, msg);
    }
  };
}
