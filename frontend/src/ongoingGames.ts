import { Game } from './interfaces';
import page from 'page';

export default class OngoingGames {
  games: Game[] = [];
  autoStart: Set<string> = new Set();
  totalGame: number = 0;

  onStart = (game: Game) => {
    this.remove(game);
    if (game.compat.board) {
      this.games.push(game);
      if (!this.autoStart.has(game.id)) {
        // only open last game or newly created one
        if(!game.hasMoved && this.games.length >= this.totalGame) {
          page(`/game/${game.gameId}`);
        }
      }
      this.autoStart.add(game.id);
    } else console.log(`Skipping game ${game.gameId}, not board compatible`);
  };

  incrementGameCount = () => {
    this.totalGame += 1;
  };

  onFinish = (game: Game) => this.remove(game);

  empty = () => {
    this.games = [];
  };

  private remove = (game: Game) => {
    this.games = this.games.filter(g => g.gameId != game.id);
  };
}
