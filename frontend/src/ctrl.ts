import {Auth} from "./auth";
import {GameCtrl} from "./game";
import {Challenge, Page} from "./interfaces";
import {Stream} from "./ndJsonStream";
import OngoingGames from "./ongoingGames";
import {SeekCtrl} from "./seek";
import ChallengeCtrl from "./challenge";
import {FenArrayType} from "./enums/fenArrayType.enum";
import {getRandomFenFromArray} from "./utils/getRandomFenFromArray";
import {SimpleEngine} from "./ceval/simpleEngine";

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
  engine: SimpleEngine;
  customFENInput?: HTMLInputElement;
  customFen?: string;
  target?: string;
  endgamePath?: string;
  availablePositionsLoading: boolean = false;

  challenges: { in: Challenge[]; out: Challenge[] } = { in: [], out: [] };
  pollChallenges: () => Promise<void>;
  private challengeInterval?: number;
  level: number = 3;
  clockLimit: number = 10;
  clockIncrement: number = 0;
  playerRequiredColor: string = "random";

  constructor(readonly redraw: () => void) {
    this.challenges = { in: [], out: [] };
    this.engine = new SimpleEngine('stockfish-nnue-16-single.js');
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
    await this.setupStreamsAndGames();
    this.redraw();
  };

  openEndGame = async () => {
    this.page = "endgame";
    await this.setupStreamsAndGames();
    this.redraw();
  }

  private async setupStreamsAndGames() {
    if (this.auth.me) {
      await this.stream?.close();
      this.games.empty();

      // Reset the total number of ongoing games
      this.games.totalGame = 0;

      // Open the first stream for game counting
      await this.auth.openStream("/api/stream/event", {}, (msg) => {
        if (msg.type === "gameStart") {
          this.games.incrementGameCount();
        }
      });

      // Open the second stream for game-specific events
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
    if (this.endgamePath != null) {
      const backendUrl = process.env.BACKEND_URL || "http://localhost:8080";
      fetch(`${backendUrl}/endgame/start`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: this.auth?.me?.id,
          endgamePath: this.endgamePath
        })
      }).catch(() => {
        console.warn("/endgame/start endpoint failed");
      });
      this.endgamePath = undefined;
      this.availablePositionsLoading = false;
    }
    const fen = (fenArrayType == FenArrayType.CustomFen) ? (this.customFen ?? "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1") : getRandomFenFromArray(fenArrayType);
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
      let turn: string = this.playerRequiredColor;
      this.playerRequiredColor = "random";
      return turn;
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
      case FenArrayType.Chess960:
        return "chess960";
      case FenArrayType.CustomFen:
        return "custom";
      default:
        return "standard-opening";
    }
  }

    private getGamePhase(fenType: FenArrayType): string {
        if (fenType == FenArrayType.CustomFen) { return "unknown"; }
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
    const fen = (fenArrayType == FenArrayType.CustomFen) ? (this.customFen ?? "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1") : getRandomFenFromArray(fenArrayType);
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

}
