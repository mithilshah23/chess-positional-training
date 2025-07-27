import {Color} from 'chessground/types';
import { opposite } from 'chessground/util';
import { h } from 'snabbdom';
import { GameCtrl } from '../game';
import { Renderer } from '../interfaces';
import { clockContent } from './clock';
import '../../scss/_game.scss';
import {renderBoard, renderEvalBar, renderMoveEval, renderPlayer} from './board';

function addEvalCondition(ctrl: GameCtrl) {
    renderMoveEval(ctrl)
    if (!ctrl.playing()) {
        ctrl.showEvalBar = true;
        return;
    }
    const isBlackComputer = typeof ctrl.game.black.aiLevel === 'number' ||
        ['maia1', 'maia5', 'maia9'].includes(ctrl.game.black.name);

    const isWhiteComputer = typeof ctrl.game.white.aiLevel === 'number' ||
        ['maia1', 'maia5', 'maia9'].includes(ctrl.game.white.name);

    const isComputerOpponent = isBlackComputer || isWhiteComputer;
    if (!(isComputerOpponent)) {
        return;
    }
    return h('div.btn-group.mt-4', [
        h(
            'button.btn.btn-secondary.me-2',
            {
                attrs: { type: 'button' },
                on: {
                    click: () => {
                        ctrl.showEvalBar = !(ctrl.showEvalBar ?? false);
                    }
                }
            },
            (ctrl.showEvalBar ?? false) ? 'Hide Eval Bar' : 'Show Eval Bar'
        ),
        h(
            'button.btn.btn-secondary',
            {
                attrs: { type: 'button' },
                on: {
                    click: () => {
                        ctrl.showHint = !(ctrl.showHint ?? false);
                    }
                }
            },
            (ctrl.showHint ?? false) ? ((ctrl.game.movesEval)?'Hide Evaluation':'Calculating...') : 'Show Evaluation'
        )
    ]);
}

export const renderGame: (ctrl: GameCtrl) => Renderer = ctrl => _ =>
  [
    h(
      `div.game-page.game-page--${ctrl.game.id}`,
      {
        hook: {
          destroy: ctrl.onUnmount,
        },
      },
      [
        renderGamePlayer(ctrl, opposite(ctrl.pov)),
          h('div.eval-board-container.board-wrapper', [
              renderEvalBar(ctrl),
              renderBoard(ctrl),
          ]),
        renderGamePlayer(ctrl, ctrl.pov),
        addEvalCondition(ctrl),
        ctrl.playing() ? renderButtons(ctrl) : renderState(ctrl),
      ]
    ),
  ];

const renderButtons = (ctrl: GameCtrl) => {
    const hasMoreThanOneMove = ctrl.game.state.moves.split(' ').length > 1;
    const hasRejectedDraw = ctrl.game.offerDraw;
    const hasRejectedTakeback = ctrl.game.offerTakeback;
    const isOpponentAi = (ctrl.pov === "white" && ctrl.game.black.aiLevel) || (ctrl.pov === "black" && ctrl.game.white.aiLevel)
    if(isOpponentAi) {
        if(!hasMoreThanOneMove){
            return h('div.btn-group.mt-1', [
                h(
                    'button.btn.btn-secondary',
                    {
                        attrs: {type: 'button', disabled: !ctrl.playing()},
                        on: {
                            click() {
                                if (confirm('Abort game?')) ctrl.resign();
                            },
                        },
                    },
                    'Abort'
                )]);
        }
        else {
            return h('div.btn-group.mt-1', [
                h(
                    'button.btn.btn-secondary.me-2',
                    {
                        attrs: {type: 'button', disabled: !ctrl.playing()},
                        on: {
                            click() {
                                ctrl.game.stopEval = true;
                                setTimeout(()=>{
                                    ctrl.acceptTakeback();
                                }, 1000);
                            },
                        },
                    },
                    'Undo'
                ),
                h(
                    'button.btn.btn-secondary',
                    {
                        attrs: {type: 'button', disabled: !ctrl.playing()},
                        on: {
                            click() {
                                if (confirm('Confirm resign?')) ctrl.resign();
                            },
                        },
                    },
                    'Resign'
                )])
        }
    }
    if(!hasMoreThanOneMove) {
        return h('div.btn-group.mt-1', [
            h(
            'button.btn.btn-secondary',
            {
                attrs: {type: 'button', disabled: !ctrl.playing()},
                on: {
                    click() {
                        if (confirm('Abort game?')) ctrl.resign();
                    },
                },
            },
            'Abort'
        )]);
    }
    if(!hasRejectedDraw && hasRejectedTakeback) {
        return h('div.btn-group.mt-1', [
            h(
                'button.btn.btn-secondary.me-2',
                {
                    attrs: {type: 'button', disabled: !ctrl.playing()},
                    on: {
                        click() {
                            if (confirm('Offer a draw?')) ctrl.offerDraw();
                        },
                    },
                },
                'Draw'
            ),
            h(
                'button.btn.btn-secondary',
                {
                    attrs: {type: 'button', disabled: !ctrl.playing()},
                    on: {
                        click() {
                            if (confirm('Confirm resign?')) ctrl.resign();
                        },
                    },
                },
                'Resign'
            )
        ]);
    }
    else if(hasRejectedDraw && !hasRejectedTakeback){
        return h('div.btn-group.mt-1', [
            h(
                'button.btn.btn-secondary.me-2',
                {
                    attrs: {type: 'button', disabled: !ctrl.playing()},
                    on: {
                        click() {
                            if (confirm('Offer a takeback?')) ctrl.offerTakeback();
                        },
                    },
                },
                'Takeback'
            ),
            h(
                'button.btn.btn-secondary',
                {
                    attrs: {type: 'button', disabled: !ctrl.playing()},
                    on: {
                        click() {
                            if (confirm('Confirm resign?')) ctrl.resign();
                        },
                    },
                },
                'Resign'
            )
        ]);
    }
    else if(hasRejectedDraw && hasRejectedTakeback){
        return h('div.btn-group.mt-1', [
            h(
                'button.btn.btn-secondary',
                {
                    attrs: {type: 'button', disabled: !ctrl.playing()},
                    on: {
                        click() {
                            if (confirm('Confirm resign?')) ctrl.resign();
                        },
                    },
                },
                'Resign'
            )
        ]);
    }
    return  h('div.btn-group.mt-1', [
        h(
            'button.btn.btn-secondary.me-2',
            {
                attrs: {type: 'button', disabled: !ctrl.playing()},
                on: {
                    click() {
                        if (confirm('Offer a takeback?')) ctrl.offerTakeback();
                    },
                },
            },
            'Takeback'
        ),
        h(
            'button.btn.btn-secondary.me-2',
            {
                attrs: {type: 'button', disabled: !ctrl.playing()},
                on: {
                    click() {
                        if (confirm('Offer a draw?')) ctrl.offerDraw();
                    },
                },
            },
            'Draw'
        ),
        h(
            'button.btn.btn-secondary',
            {
                attrs: {type: 'button', disabled: !ctrl.playing()},
                on: {
                    click() {
                        if (confirm('Confirm resign?')) ctrl.resign();
                    },
                },
            },
            'Resign'
        )
    ]);

};

const renderState = (ctrl: GameCtrl) => {
    const game = ctrl.game;
    const initialFen = game.initialFen;
    const color = ctrl.pov;

    const pgnHeaders = [
        `[Event "Casual Game"]`,
        `[Site "https://lichess.org/${game.id}"]`,
        `[Date "${new Date(game.createdAt).toISOString().slice(0, 10)}"]`,
        `[Round "-"]`,
        `[White "${game.white.aiLevel ? "Stockfish Level " + game.white.aiLevel : game.white.name}"]`,
        `[Black "${game.black.aiLevel ? "Stockfish Level " + game.black.aiLevel : game.black.name}"]`,
        `[Result "${game.state.winner === "white" ? "1-0" : game.state.winner === "black" ? "0-1" : "1/2-1/2"}"]`,
        initialFen === "startpos" ? '[SetUp "0"]' : '[SetUp "1"]'
    ];

    if (initialFen !== "startpos") {
        pgnHeaders.push(`[FEN "${initialFen}"]`);
    }

    const moves = game.state.moves.split(" ");
    let formattedMoves = "";
    for (let i = 0; i < moves.length; i++) {
        if (i % 2 === 0) formattedMoves += `${Math.floor(i / 2) + 1}. `;
        formattedMoves += moves[i] + " ";
    }

    formattedMoves += game.state.winner === "white" ? "1-0" : game.state.winner === "black" ? "0-1" : "1/2-1/2";

    const pgn = `${pgnHeaders.join("\n")}\n\n${formattedMoves.trim()}`;

    return h('div.game-page__state', [
        h('span', 'Game ended by '),
        ctrl.game.state.status,
        h('br'),
        ...(ctrl.game.state.winner ? [
            ctrl.game.state.winner,
            h('span', ' won'),
            h('br')
        ] : []),
        h('span', 'Analyse game on '),
        h('br'),
        h('a', {
            attrs: {
                href: 'https://lichess.org/' + game.id + "/" + color,
                target: '_blank'
            },
            onclick: () => {
                window.gtag("event", "click", {
                    analysis_on: "lichess.org"
                });
            }
        }, 'Lichess'),
        h('span', '  |  '),
        h('a', {
            attrs: {
                href: 'https://www.chess.com/analysis?tab=analysis&pgn=' + encodeURIComponent(pgn),
                target: '_blank'
            },
            onclick: () => {
                window.gtag("event", "click", {
                    analysis_on: "chess.com"
                });
            }
        }, 'Chess.com'),
    ]);
};


const renderGamePlayer = (ctrl: GameCtrl, color: Color) => {
    const p = ctrl.game[color];

    const hasMoreThanOneMove = ctrl.game.state.moves.split(' ').length > 1;

    const clock = clockContent(
        ctrl.timeOf(color),
        color == ctrl.chess.turn && hasMoreThanOneMove && ctrl.playing() ? ctrl.lastUpdateAt - Date.now() : 0
    );

    return renderPlayer(ctrl, color, clock, p.name, p.title, p.rating, p.aiLevel);
};
