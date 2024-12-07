import { Chessground } from 'chessground';
import { h } from 'snabbdom';
import { Ctrl } from '../ctrl';
import { Game, Renderer } from '../interfaces';
import OngoingGames from '../ongoingGames';
import { href } from '../routing';

export const renderHome: Renderer = ctrl => (ctrl.auth.me ? userHome(ctrl) : anonHome());

const userHome = (ctrl: Ctrl) => [
    h('div', [
        h('div', [
            h('h2.mt-5', 'Game Settings'),
            h('div.mb-3', [
                h('label.form-label', { attrs: { for: 'level' } }, 'Computer Level (1-8):  '),
                h('input', {
                    attrs: {
                        type: 'number',
                        id: 'level',
                        value: ctrl.level,
                        min: 1,
                        max: 8,
                        class: 'form-control'
                    },
                    on: {
                        input: (e: Event) => ctrl.level = Number((e.target as HTMLInputElement).value)
                    }
                })
            ]),

            h('div.mb-3', [
                h('label.form-label', { attrs: { for: 'clockLimit' } }, 'Clock Limit (minutes):  '),
                h('input', {
                    attrs: {
                        type: 'number',
                        id: 'clockLimit',
                        value: ctrl.clockLimit,
                        min: 1,
                        max: 180,
                        class: 'form-control'
                    },
                    on: {
                        input: (e: Event) => ctrl.clockLimit = Number((e.target as HTMLInputElement).value)
                    }
                })
            ]),

            h('div.mb-3', [
                h('label.form-label', { attrs: { for: 'clockIncrement' } }, 'Clock Increment (seconds):  '),
                h('input', {
                    attrs: {
                        type: 'number',
                        id: 'clockIncrement',
                        value: ctrl.clockIncrement,
                        min: 0,
                        max: 60,
                        class: 'form-control'
                    },
                    on: {
                        input: (e: Event) => ctrl.clockIncrement = Number((e.target as HTMLInputElement).value)
                    }
                })
            ]),
            h('h2.mt-5', 'Play Against Computer'),
            h('div.mt-5', [
                h(
                    'button.btn.btn-outline-primary.btn-lg',
                    {
                        attrs: { type: 'button' },
                        on: { click: ctrl.playAiFromWinningPos },
                    },
                    `From Winning Position`
                ),
                h(
                    'button.btn.btn-outline-primary.btn-lg',
                    {
                        attrs: { type: 'button' },
                        on: { click: ctrl.playAiFromEqualPos },
                    },
                    `From Equal Position`
                )
            ]),
        ]),

        h('h2.mt-5', 'Games in progress'),
        h('div.games', renderGames(ctrl.games)),

        h('h2.mt-5.mb-3', 'About'),
        renderAbout(),
        renderSuggestions()
    ]),
];




const renderGames = (ongoing: OngoingGames) =>
  ongoing.games.length ? ongoing.games.map(renderGameWidget) : [h('p', 'No ongoing games at the moment')];

const renderGameWidget = (game: Game) =>
  h(
    `a.game-widget.text-decoration-none.game-widget--${game.id}`,
    {
      attrs: href(`/game/${game.gameId}`),
    },
    [
      h('span.game-widget__opponent', [
        h('span.game-widget__opponent__name', game.opponent.username || 'Anon'),
        game.opponent.rating && h('span.game-widget__opponent__rating', game.opponent.rating),
      ]),
      h(
        'span.game-widget__board.cg-wrap',
        {
          hook: {
            insert(vnode) {
              const el = vnode.elm as HTMLElement;
              Chessground(el, {
                fen: game.fen,
                orientation: game.color,
                lastMove: game.lastMove.match(/.{1,2}/g),
                viewOnly: true,
                movable: { free: false },
                drawable: { visible: false },
                coordinates: false,
              });
            },
          },
        },
        'board'
      ),
    ]
  );

const anonHome = () => [
  h('div.login.text-center', [
    renderAbout(),
    h('div.big', [h('p', 'Please log in to continue.')]),
    h(
      'a.btn.btn-primary.btn-lg.mt-5',
      {
        attrs: href('/login'),
      },
      'Login with Lichess'
    ),
  ]),
];

const renderAbout = () =>
    h('div.about', [
        h('p', [
            'You’re ahead. Victory is within reach. But then, it slips away. Sound familiar? ',
            h('br'),
            'Chess Middle Game Trainer is your secret weapon for mastering the middle game. It’s designed for those critical moments when you’ve worked hard to gain the upper hand, yet closing the deal feels elusive. ',
            'Sharpen your skills. Convert those winning positions into wins.',
            h('br'),
            'Train smarter, finish stronger.',
        ])
    ]);

const renderSuggestions = () =>
    h('div.about', [
        h('p', [
            h('small', [
                'Created by ',
                h('a', { attrs: { href: 'https://www.linkedin.com/in/mithilshah23/', target: '_blank' } }, 'Mithil'),
                ', drop your thoughts ',
                h('a', { attrs: { href: 'https://forms.gle/1m1c4mcXea8NqXsU8', target: '_blank' } }, 'here!')
            ])
        ])
    ]);



