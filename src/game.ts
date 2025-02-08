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

export interface BoardCtrl {
  chess: Chess;
  ground?: CgApi;
  chessgroundConfig: () => CgConfig;
  setGround: (cg: CgApi) => void;
}

export class GameCtrl implements BoardCtrl {
  game: Game;
  pov: Color;
  chess: Chess = Chess.default();
  lastMove?: [Key, Key];
  lastUpdateAt: number = Date.now();
  ground?: CgApi;
  redrawInterval: ReturnType<typeof setInterval>;

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
    if(this.game.chatLine){
        const opponentColor = this.pov === "white" ? "Black" : "White";
        if (this.game.chatLine.text == opponentColor+" offers draw"){
          const acceptDraw = confirm(`${opponentColor} offers a draw. Accept?`);
          if (acceptDraw) {
            this.draw();
          } else {
            this.game.drawRejected = true;
            this.rejectDraw();
          }
        }
        if (this.game.chatLine.text == opponentColor+" declines draw"){
          this.game.drawRejected = true;
          alert(`${opponentColor} has declined the draw.`);
        }
        this.game.chatLine = null;
    } else {
      const setup = this.game.initialFen == 'startpos' ? defaultSetup() : parseFen(this.game.initialFen).unwrap();
      this.chess = Chess.fromSetup(setup).unwrap();
      const moves = this.game.state.moves.split(' ').filter((m: string) => m);
      moves.forEach((uci: string) => this.chess.play(parseUci(uci)!));
      const lastMove = moves[moves.length - 1];
      this.lastMove = lastMove && [lastMove.substr(0, 2) as Key, lastMove.substr(2, 2) as Key];
      this.lastUpdateAt = Date.now();
      this.ground?.set(this.chessgroundConfig());
      if (this.chess.turn == this.pov) this.ground?.playPremove();
    }
  };

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

  draw = async () => {
    await this.root.auth.fetchBody(`/api/board/game/${this.game.id}/draw/true`, { method: 'post' });
  };

  rejectDraw = async () => {
    await this.root.auth.fetchBody(`/api/board/game/${this.game.id}/draw/false`, { method: 'post' });
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
