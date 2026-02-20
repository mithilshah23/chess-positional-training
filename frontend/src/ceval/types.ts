// --- Search configuration ---

export type SearchBy = { movetime: number } | { depth: number } | { nodes: number };

// --- Work unit sent to the engine ---

export interface Work {
  variant: string;         // 'standard', 'chess960', etc.
  threads: number;
  hashSize: number | undefined;
  stopRequested: boolean;

  initialFen: string;
  currentFen: string;
  moves: string[];         // UCI moves from initialFen to currentFen
  search: SearchBy;
  multiPv: number;
  ply: number;

  emit: (ev: EvalResult) => void;
}

// --- Evaluation result from the engine ---

export interface EvalResult {
  fen: string;
  depth: number;
  nodes: number;
  millis: number;
  cp?: number;             // centipawns (white's perspective)
  mate?: number;           // mate in N (positive = white mates)
  bestmove: string;
}

// --- Engine state ---

export enum CevalState {
  Initial,
  Loading,
  Idle,
  Computing,
  Failed,
}

// --- Engine interface ---

export interface CevalEngine {
  getState(): CevalState;
  start(work: Work): void;
  stop(): void;
  destroy(): void;
  engineName: string | undefined;
}
