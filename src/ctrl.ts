import {Auth} from "./auth";
import {GameCtrl} from "./game";
import {Challenge, Page} from "./interfaces";
import {Stream} from "./ndJsonStream";
import OngoingGames from "./ongoingGames";
import {SeekCtrl} from "./seek";
import ChallengeCtrl from "./challenge";
import TvCtrl from "./tv";
import {FenArrayType} from "./enums/fenArrayType.enum";
import {getRandomFenFromArray} from "./utils/getRandomFenFromArray";

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export class Ctrl {
  auth: Auth = new Auth();
  stream?: Stream;
  page: Page = "home";
  games = new OngoingGames();
  game?: GameCtrl;
  seek?: SeekCtrl;
  challenge?: ChallengeCtrl;
  tv?: TvCtrl;
  stockfishReady: Promise<Worker | typeof globalThis>;
  stockfishEngine?: Worker | typeof globalThis;

  challenges: { in: Challenge[]; out: Challenge[] } = { in: [], out: [] };
  pollChallenges: () => Promise<void>;
  private challengeInterval?: number;
  level: number = 3;
  clockLimit: number = 10;
  clockIncrement: number = 0;
  playerRequiredColor: string = "random";

  constructor(readonly redraw: () => void) {
    this.challenges = { in: [], out: [] };
    this.stockfishReady = this.initEngine();
    this.pollChallenges = async () => {
      if (this.auth.me) {
        try {
          if (this.page == "home") {
            const data = await this.auth.fetchChallenges();
            this.challenges = data;
            this.redraw();
          }
        } catch (e) {
          console.log("Failed to poll challenges", e);
        }
      }
    };
  }

  openHome = async () => {
    this.page = "home";
    if (this.challengeInterval) {
      clearInterval(this.challengeInterval);
    }
    this.challengeInterval = window.setInterval(this.pollChallenges, 3000);
    await this.pollChallenges();
    if (this.auth.me) {
      await this.stream?.close();
      this.games.empty();
      //added to count number of games currently ongoing
      this.games.totalGame = 0;
      this.stream = await this.auth.openStream(
          "/api/stream/event",
          {},
          (msg) => {
            switch (msg.type) {
              case "gameStart":
                this.games.incrementGameCount();
                break;
            }
          }
      );
      this.stream = await this.auth.openStream(
        "/api/stream/event",
        {},
        (msg) => {
          switch (msg.type) {
            case "gameStart":
              this.games.onStart(msg.game);
              break;
            case "gameFinish":
              this.games.onFinish(msg.game);
              break;
            default:
            // console.warn(`Unprocessed message of type ${msg.type}`, msg);
          }
        }
      );
    }
    this.redraw();
  };

  private async initEngine(): Promise<Worker> {
    const worker = new Worker('stockfish-nnue-16-single.js');

    await new Promise<void>((resolve, reject) => {
      const timeout = setTimeout(() => reject('init timeout'), 5000);
      worker.onmessage = (e) => {
        const msg = e.data ?? e;
        if (typeof msg === 'string' && msg.startsWith('uciok')) {
          clearTimeout(timeout);
          resolve();
        }
      };
      worker.postMessage('uci');
    });

    this.stockfishEngine = worker;
    return worker;
  }

  openGame = async (id: string) => {
    this.page = "game";
    this.game = undefined;
    this.redraw();
    this.game = await GameCtrl.open(this, id);
    this.redraw();
  };

  playAiFromPosition = async (fenArrayType: FenArrayType) => {
    this.level = clamp(this.level, 1, 8);
    this.clockLimit = clamp(this.clockLimit, 3, 180);
    this.clockIncrement = clamp(this.clockIncrement, 0, 60);
    const fen = getRandomFenFromArray(fenArrayType);
    const turn = this.getTurnFromFEN(fen);
    window.gtag("event", "game_start", {
      position_type: this.getPositionType(fenArrayType),
      game_phase: this.getGamePhase(fenArrayType),
      opponent: "computer",
      difficulty_level: this.level,
      clock_limit: this.clockLimit,
      clock_increment: this.clockIncrement,
    });
    const variant: string = (fenArrayType == FenArrayType.Chess960) ? "chess960" : "standard";
    this.challenge = await ChallengeCtrl.make(
      {
        username: "ai",
        rated: false,
        level: this.level,
        variant: variant,
        "clock.limit": this.clockLimit * 60,
        "clock.increment": this.clockIncrement,
        fen: fen,
        color: turn,
      },
      this
    );
    this.page = "game";
    this.redraw();
  };

  private getTurnFromFEN(fen: string): string {
    if (this.playerRequiredColor != "random") {
      return this.playerRequiredColor;
    }
    const turn = fen.split(" ")[1];
    return turn === "w" ? "white" : "black";
  }

  private getPositionType(fenType: FenArrayType): string {
    switch (fenType) {
      case FenArrayType.WinningArray:
      case FenArrayType.WinningArrayEndGame:
      case FenArrayType.WinningArrayOpening:
        return "winning";
      case FenArrayType.EqualArray:
      case FenArrayType.EqualArrayEndGame:
      case FenArrayType.EqualArrayOpening:
        return "equal";
      case FenArrayType.LosingArray:
      case FenArrayType.LosingArrayEndGame:
      case FenArrayType.LosingArrayOpening:
        return "losing";
      case FenArrayType.MateInFewMoves:
        return "mating"
      default:
        return "standard-opening";
    }
  }

    private getGamePhase(fenType: FenArrayType): string {
        if (fenType.toString().includes("EndGame") || fenType == FenArrayType.MateInFewMoves) return "endgame";
        if (fenType.toString().includes("Opening") || fenType.toString().includes("_") || fenType == FenArrayType.DefaultOpening) return "opening";
        return "midgame";
    }

  async acceptChallenge(challengeId: string) {
    await this.auth.acceptChallenge(challengeId);
    this.challenges.in = this.challenges.in.filter((c) => c.id !== challengeId);
    this.challenges.out = this.challenges.out.filter(
      (c) => c.id !== challengeId
    );
    this.redraw();
  }

  async declineChallenge(challengeId: string) {
    await this.auth.declineChallenge(challengeId);
    this.challenges.in = this.challenges.in.filter((c) => c.id !== challengeId);
    this.challenges.out = this.challenges.out.filter(
      (c) => c.id !== challengeId
    );
    this.redraw();
  }

  playHumanFromPosition = async (
    fenArrayType: FenArrayType,
    username: string
  ) => {
    this.clockLimit = clamp(this.clockLimit, 1, 180);
    this.clockIncrement = clamp(this.clockIncrement, 0, 60);
    const fen = getRandomFenFromArray(fenArrayType);
    const turn = this.getTurnFromFEN(fen);
    window.gtag("event", "game_start", {
      position_type: this.getPositionType(fenArrayType),
      game_phase: this.getGamePhase(fenArrayType),
      opponent: "human",
      clock_limit: this.clockLimit,
      clock_increment: this.clockIncrement,
      username: username,
    });
    const variant: string = (fenArrayType == FenArrayType.Chess960) ? "chess960" : "standard";
    this.challenge = await ChallengeCtrl.make(
      {
        username: username,
        rated: false,
        variant: variant,
        "clock.limit": this.clockLimit * 60,
        "clock.increment": this.clockIncrement,
        fen: fen,
        color: turn,
      },
      this
    );
    this.page = "challenge";
    this.redraw();
  };

  watchTv = async () => {
    this.page = "tv";
    this.redraw();
    this.tv = await TvCtrl.open(this);
    this.redraw();
  };
}
