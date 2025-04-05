import { Chessground } from 'chessground';
import { Color } from 'chessops';
import { h, VNode } from 'snabbdom';
import {BoardCtrl, GameCtrl} from '../game';

export const renderBoard = (ctrl: BoardCtrl) =>
  h(
    'div.game-page__board',
    h(
      'div.cg-wrap',
      {
        hook: {
          insert(vnode) {
            ctrl.setGround(Chessground(vnode.elm as HTMLElement, ctrl.chessgroundConfig()));
          },
        },
      },
      'loading...'
    )
  );

export const renderPlayer = (
  ctrl: BoardCtrl,
  color: Color,
  clock: VNode,
  name: string,
  title?: string,
  rating?: number,
  aiLevel?: number
) => {
  return h(
    'div.game-page__player',
    {
      class: {
        turn: ctrl.chess.turn == color,
      },
    },
    [
      h('div.game-page__player__user', [
        title && h('span.game-page__player__user__title.display-5', title),
        h('span.game-page__player__user__name.display-5', aiLevel ? `Stockfish level ${aiLevel}` : name || 'Anon'),
        h('span.game-page__player__user__rating', rating || ''),
      ]),
      h('div.game-page__player__clock.display-6', clock),
    ]
  );
};

export const renderEvalBar = (ctrl: GameCtrl) => {
    if (!ctrl.showEvalBar || !ctrl.game.evalData) return null;
    const isBlack = ctrl.pov === 'black';
    const evalData = ctrl.game.evalData;
    const evalValue = evalData.evaluation;
    const mate= evalData.mate;
    const cgContainer = document.getElementsByTagName('cg-container')[0] as HTMLElement;
    const isMate = mate != null;
    if (typeof evalValue !== 'number' && !isMate) {
        return null;
    }
    let winProbability: number;
    if (isMate) {
        if (mate>0) winProbability = 1;
        else winProbability = 0;
    }
    else {
        winProbability= 1 / (1 + Math.exp(-0.4 * evalValue));
    }
    const percentage = (1 - winProbability) * 100;
    const showEvalValueTop = percentage < 50;
    const height = Math.max(0, Math.min(100, percentage));
    let cgContainerHeight = cgContainer?.style?.height;
    if (!cgContainerHeight) {
        cgContainerHeight = "auto";
    }
    return h('div#evalBar', { class: { 'black-bottom': isBlack }, attrs: {'style': `height: ${cgContainerHeight};`} }, [
        h('div.blackBar', { attrs: { style: `height: ${height}%;` } }),
        h('div.evalNum', {
            attrs: {
                style: `top: ${showEvalValueTop ? '97%' : 'auto'}; bottom: ${showEvalValueTop ? 'auto' : '97%'};`
            }
        }, `${isMate ? 'M' + Math.abs(mate) : Math.abs(evalValue).toFixed(1)}` )
    ]);
};