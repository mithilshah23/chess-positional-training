import { Chessground } from 'chessground';
import { h } from 'snabbdom';
import {Ctrl, FenArrayType} from '../ctrl';
import { Game, Renderer } from '../interfaces';
import OngoingGames from '../ongoingGames';
import { href } from '../routing';

export const renderHome: Renderer = ctrl => (ctrl.auth.me ? userHome(ctrl) : anonHome());

const userHome = (ctrl: Ctrl) => [
    h('div', { attrs: { align: 'center' } },[
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
                h('label.form-label', { attrs: { for: 'clockLimit' } }, 'Clock Limit (3-180 mins): '),
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
                h('label.form-label', { attrs: { for: 'clockIncrement' } }, 'Clock Increment (0-60 secs):  '),
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
            h('h2.mt-4', 'Play From Winning Position'),
            h('div.mt-2', [
                h(
                    'button.btn.btn-outline-primary.btn-lg',
                    {
                        attrs: { type: 'button' },
                        on: {click: () => showPlayerSelectionDialog(ctrl, FenArrayType.WinningArrayOpening)},
                    },
                    `Opening`
                ),
                h(
                    'button.btn.btn-outline-primary.btn-lg',
                    {
                        attrs: { type: 'button' },
                        on: {click: () => showPlayerSelectionDialog(ctrl, FenArrayType.WinningArray)}
                    },
                    `Middle Game`
                ),
                h(
                    'button.btn.btn-outline-primary.btn-lg',
                    {
                        attrs: { type: 'button' },
                        on: {click: () => showPlayerSelectionDialog(ctrl, FenArrayType.WinningArrayEndGame)}
                    },
                    `End Game`
                ),
            ]),
            h('h2.mt-4', 'Play from Equal Position'),
            h('div.mt-2', [
                h(
                    'button.btn.btn-outline-primary.btn-lg',
                    {
                        attrs: { type: 'button' },
                        on: {click: () => showPlayerSelectionDialog(ctrl, FenArrayType.EqualArrayOpening)},
                    },
                    `Opening`
                ),
                h(
                    'button.btn.btn-outline-primary.btn-lg',
                    {
                        attrs: { type: 'button' },
                        on: {click: () => showPlayerSelectionDialog(ctrl, FenArrayType.EqualArray)}
                    },
                    `Middle Game`
                ),
                h(
                    'button.btn.btn-outline-primary.btn-lg',
                    {
                        attrs: { type: 'button' },
                        on: {click: () => showPlayerSelectionDialog(ctrl, FenArrayType.EqualArrayEndGame)},
                    },
                    `End Game`
                )
            ]),
            h('h2.mt-4', 'Play from Losing Position'),
            h('div.mt-2', [
                h(
                    'button.btn.btn-outline-primary.btn-lg',
                    {
                        attrs: { type: 'button' },
                        on: {click: () => showPlayerSelectionDialog(ctrl, FenArrayType.LosingArrayOpening)},
                    },
                    `Opening`
                ),
                h(
                    'button.btn.btn-outline-primary.btn-lg',
                    {
                        attrs: { type: 'button' },
                        on: {click: () => showPlayerSelectionDialog(ctrl, FenArrayType.LosingArray)}
                    },
                    `Middle Game`
                ),
                h(
                    'button.btn.btn-outline-primary.btn-lg',
                    {
                        attrs: { type: 'button' },
                        on: {click: () => showPlayerSelectionDialog(ctrl, FenArrayType.LosingArrayEndGame)},
                    },
                    `End Game`
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

function showPlayerSelectionDialog(ctrl: Ctrl, fenArrayType: FenArrayType) {
    const existingDialog = document.querySelector('.popup-dialog');
    if (existingDialog) {
        document.body.removeChild(existingDialog);
    }
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'popup-dialog';
    optionsDiv.style.position = 'fixed';
    optionsDiv.style.top = '50%';
    optionsDiv.style.left = '50%';
    optionsDiv.style.transform = 'translate(-50%, -50%)';
    optionsDiv.style.padding = '20px';
    optionsDiv.style.backgroundColor = 'white';
    optionsDiv.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    optionsDiv.style.borderRadius = '8px';
    optionsDiv.style.zIndex = '1000';
    optionsDiv.style.border = '2px solid #ccc';

    if (window.innerWidth < 550) {
        optionsDiv.innerHTML = `
        <p style="margin-bottom: 20px; font-weight: bold; font-size: 20px;">Select your opponent:</p>
        <button id="play-computer" class="btn btn-outline-primary" style="width: 100%;">Play Against Computer</button>
        <button id="play-human" class="btn btn-outline-primary" style="width: 100%;">Play Against Human</button>
    `;
    }
    else {
        optionsDiv.innerHTML = `
        <p style="margin-bottom: 20px; font-weight: bold; font-size: 20px;">Select your opponent:</p>
        <button id="play-computer" class="btn btn-outline-primary">Play Against Computer</button>
        <button id="play-human" class="btn btn-outline-primary">Play Against Human</button>
    `;
    }

    document.body.appendChild(optionsDiv);

    document.getElementById('play-computer')?.addEventListener('click', () => {
        ctrl.playAiFromPosition(fenArrayType);
        closeOption();
    });

    document.getElementById('cancel-option')?.addEventListener('click', () => {
        closeOption();
    });

    document.addEventListener('click', (event) => {
        const target = event.target as Element;
        const existingDialog = document.querySelector('.popup-dialog');
        if (existingDialog && optionsDiv && !optionsDiv.contains(target) && !target.closest('button')) {
            closeOption();
        }
    });


    document.getElementById('play-human')?.addEventListener('click', () => {
        closeOption();
        optionsDiv.className = 'popup-dialog';
        optionsDiv.style.top = '50%';
        optionsDiv.style.left = '50%';
        optionsDiv.style.transform = 'translate(-50%, -50%)';
        optionsDiv.style.padding = '20px';
        optionsDiv.style.backgroundColor = 'white';
        optionsDiv.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        optionsDiv.style.borderRadius = '8px';
        optionsDiv.style.zIndex = '1001';
        optionsDiv.style.border = '2px solid #ccc';

        optionsDiv.innerHTML = `
            <label for="opponent-username" style="display: block; margin-bottom: 10px; font-weight: bold; font-size: 18px;">
                Enter the Lichess username of your opponent:</label>

            <input id="opponent-username" type="text" class="form-control" style="margin-bottom: 15px; width: 100%;" />
            <div style="text-align: center;">
                <button id="cancel-dialog" class="btn btn-outline-secondary">Cancel</button>
                <button id="confirm-dialog" class="btn btn-outline-primary">Confirm</button>
            </div>
        `;

        document.body.appendChild(optionsDiv);

        document.getElementById('confirm-dialog')?.addEventListener('click', () => {
            const usernameInput = (document.getElementById('opponent-username') as HTMLInputElement).value;
            if (usernameInput) {
                ctrl.playHumanFromPosition(FenArrayType.WinningArrayOpening, usernameInput);
            }
            closeOption();
        });

        document.getElementById('cancel-dialog')?.addEventListener('click', () => {
            closeOption();
        });
    });

    function closeOption() {
        if (optionsDiv && optionsDiv.parentNode) {
            document.body.removeChild(optionsDiv);
        }
    }
}







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

const renderAbout = () => h('div.about', [
    h('p', [
        'Chess Positional Training is your secret weapon for mastering the game—whether it’s the opening, the middle game, or the endgame. It’s about converting winning positions into victories, escaping losing endgames, and finding clarity in complex middlegames. Ready to elevate your chess?',
        h('br'), h('br'),
        h('strong', 'How it Works:'),
        h('br'),
        h('ul', [
            h('li', [
                h('strong', 'Start Where You Want: '),
                'Choose to practice openings, midgame, or endgame positions based on your needs.'
            ]),
            h('li', [
                h('strong', 'Play Anyone, Anywhere: '),
                'Challenge friends or play against an AI. Every game begins from a random position, eliminating the need for memorized openings.'
            ]),
            h('li', [
                h('strong', 'Choose Your Challenge: '),
                'Play from an advantage, equal, or losing position to practice specific scenarios and improve your decision-making.'
            ]),
        ]),
    ])
]);

const renderSuggestions = () =>
    h('div.about', [
        h('p', [
            h('small', [
                // 'Created by ',
                // h('a', { attrs: { href: 'https://www.linkedin.com/in/mithilshah23/', target: '_blank' } }, 'Mithil'),
                'Drop your thoughts ',
                h('a', { attrs: { href: 'https://forms.gle/1m1c4mcXea8NqXsU8', target: '_blank' } }, 'here!')
            ])
        ])
    ]);



