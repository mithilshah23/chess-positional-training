import { VNode } from 'snabbdom';
import { Ctrl } from './ctrl';

export type Page = 'home' | 'game' | 'seek' | 'challenge' | 'tv';

export type MaybeVNodes = (VNode | string | undefined)[];
export type Renderer = (ctrl: Ctrl) => MaybeVNodes;

export interface Game {
  [key: string]: any;
}


export interface Challenge {
  id: string;
  status: 'created' | 'offline' | 'canceled' | 'declined' | 'accepted';
  challenger?: {
    id: string;
    name: string;
    rating: number;
    provisional?: boolean;
    online?: boolean;
    lag?: number;
  };
  destUser?: {
    id: string;
    name: string;
    rating: number;
    provisional?: boolean;
    online?: boolean;
  };
  variant: {
    key: string;
    name: string;
    short: string;
  };
  rated: boolean;
  speed: string;
  timeControl: {
    type: 'clock' | 'correspondence' | 'unlimited';
    limit?: number;    // in seconds
    increment?: number; // in seconds
    daysPerTurn?: number;
  };
  color: 'random' | 'white' | 'black';
  perf: {
    icon: string;
    name: string;
  };
  direction: 'in' | 'out';
  [key: string]: any;
}