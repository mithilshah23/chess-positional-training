import { Chessground } from 'chessground';
import { h } from 'snabbdom';
import {Ctrl, FenArrayType} from '../ctrl';
import {Challenge, Game, Renderer} from '../interfaces';
import OngoingGames from '../ongoingGames';
import { href } from '../routing';

export const renderHome: Renderer = ctrl => (ctrl.auth.me ? userHome(ctrl) : anonHome());

const userHome = (ctrl: Ctrl) => [
    h('div.container', { attrs: { align: 'left' } }, [
        h('div.row.g-4', [
            h('div.col-12', [
                h('div.card.p-3.mb-4', [
                    h('h2.mb-3', 'Game Positions'),
                    h('div.mb-4', [
                        h('h3.text-muted.mb-2', 'Play From Winning Position'),
                        h('div.d-grid.gap-2', [
                            positionButton(ctrl, 'Opening', FenArrayType.WinningArrayOpening),
                            positionButton(ctrl, 'Middle Game', FenArrayType.WinningArray),
                            positionButton(ctrl, 'End Game', FenArrayType.WinningArrayEndGame)
                        ])
                    ]),
                    h('div.mb-4', [
                        h('h3.text-muted.mb-2', 'Play From Equal Position'),
                        h('div.d-grid.gap-2', [
                            positionButton(ctrl, 'Opening', FenArrayType.EqualArrayOpening),
                            positionButton(ctrl, 'Middle Game', FenArrayType.EqualArray),
                            positionButton(ctrl, 'End Game', FenArrayType.EqualArrayEndGame)
                        ])
                    ]),
                    h('div.mb-4', [
                        h('h3.text-muted.mb-2', 'Play From Losing Position'),
                        h('div.d-grid.gap-2', [
                            positionButton(ctrl, 'Opening', FenArrayType.LosingArrayOpening),
                            positionButton(ctrl, 'Middle Game', FenArrayType.LosingArray),
                            positionButton(ctrl, 'End Game', FenArrayType.LosingArrayEndGame)
                        ])
                    ])
                ])
            ])
        ]),

        h('div.row.g-4', [
            h('div.col-12', [
                h('div.card.p-3', [
                    h('h2.mb-3', 'Challenges'),
                    h('div.challenges', renderChallenges(ctrl))
                ])
            ]),
            h('div.col-12', [
                h('div.card.p-3', [
                    h('h2.mb-3', 'Games in Progress'),
                    h('div.games', renderGames(ctrl.games))
                ])
            ])
        ]),

        h('div.card.p-3.mt-4', [
            h('h2.mb-3', 'About'),
            renderAbout()
        ]),

        h('div.card.p-3.mt-4', [
            renderSuggestions()
        ])
    ])
];

function positionButton(ctrl: Ctrl, text: string, fenType: FenArrayType) {
    return h(
        'button.btn.btn-outline-primary.btn-lg',
        {
            attrs: { type: 'button' },
            on: {
                click: () => showPlayerSelectionDialog(ctrl, fenType)
            }
        },
        text
    );
}



const renderGames = (ongoing: OngoingGames) =>
  ongoing.games.length ? ongoing.games.map(renderGameWidget) : [h('p', 'No ongoing games at the moment')];


const renderChallenges = (ctrl: Ctrl) => {
    if (!ctrl.challenges?.in?.length) return h('p', 'No incoming challenges at the moment');
    return ctrl.challenges.in.map(challenge =>
        h('div.challenge', [
            h('div.challenge-header', [
                h('div.challenge-info', [
                    h('strong', `${challenge.challenger?.name || 'Anonymous'}`),
                    h('div', [
                        h('span', `${challenge.variant.name} • `),
                        h('span', `${challenge.speed} • `),
                        h('span', `${formatTimeControl(challenge.timeControl)}`)
                    ])
                ])
            ]),
            h('div.challenge-actions', [
                h('button.btn.btn-sm.btn-success', {
                    on: { click: () => ctrl.acceptChallenge(challenge.id) }
                }, 'Accept'),
                h('button.btn.btn-sm.btn-danger', {
                    on: { click: () => ctrl.declineChallenge(challenge.id) }
                }, 'Decline')
            ])
        ])
    );
};

const formatTimeControl = (tc: Challenge['timeControl']) => {
    if (tc.type === 'clock') {
        const minutes = Math.floor((tc.limit || 0) / 60);
        return `${minutes}+${tc.increment}`;
    }
    if (tc.type === 'correspondence') {
        return `${tc.daysPerTurn} days/move`;
    }
    return 'Unlimited';
};



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
    const existingDialog = document.querySelector('.popup-overlay');
    if (existingDialog) {
        document.body.removeChild(existingDialog);
    }

    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '1000';

    // Create dialog container
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'popup-dialog';
    optionsDiv.style.backgroundColor = 'white';
    optionsDiv.style.borderRadius = '12px';
    optionsDiv.style.padding = '30px';
    optionsDiv.style.width = '90%';
    optionsDiv.style.maxWidth = '600px';
    optionsDiv.style.boxShadow = '0 8px 30px rgba(0,0,0,0.2)';
    optionsDiv.style.border = '1px solid #e0e0e0';

    if (window.innerWidth < 550) {
        optionsDiv.innerHTML = `
            <h2 style="margin: 0 0 25px 0; color: #333; font-size: 24px; text-align: center;">Select Opponent</h2>
            <div style="display: flex; flex-direction: column; gap: 15px;">
                <button id="play-computer" class="btn btn-primary" 
                    style="padding: 15px; font-size: 18px; border-radius: 8px;">
                    🖥️ Play vs Computer
                </button>
                <button id="play-human" class="btn btn-primary" 
                    style="padding: 15px; font-size: 18px; border-radius: 8px;">
                    👤 Play vs Human
                </button>
            </div>
        `;
    } else {
        optionsDiv.innerHTML = `
            <h2 style="margin: 0 0 30px 0; color: #333; font-size: 28px; text-align: center;">Select Your Opponent</h2>
            <div style="display: flex; flex-direction: column; gap: 20px;">
                <button id="play-computer" class="btn btn-primary" 
                    style="padding: 18px; font-size: 20px; border-radius: 10px;">
                    🖥️ Play Against Computer
                </button>
                <button id="play-human" class="btn btn-primary" 
                    style="padding: 18px; font-size: 20px; border-radius: 10px;">
                    👤 Play Against Human
                </button>
            </div>
        `;
    }

    overlay.appendChild(optionsDiv);
    document.body.appendChild(overlay);

    // Event listeners
    document.getElementById('play-computer')?.addEventListener('click', () => {
        const newContent = `
    <div style="display: flex; flex-direction: column; gap: 25px;">
        <h3 style="margin: 0; color: #333; font-size: 18px; text-align: center;">
            Computer Level (1- 8)
        </h3>
        <input id="opponent-level" type="number"
            placeholder="Computer Level (1- 8)"
            value="${ctrl.level}"
            style="padding: 12px; font-size: 16px; border: 2px solid #ddd; border-radius: 6px;">
        
        <h3 style="margin: 0; color: #333; font-size: 18px; text-align: center;">
            Clock limit (3 - 180 minutes)
        </h3>
        <input id="clock-limit" type="number"
            placeholder="Clock limit (3 - 180 minutes)"
            value="${ctrl.clockLimit}"
            style="padding: 12px; font-size: 16px; border: 2px solid #ddd; border-radius: 6px;">
        
        <h3 style="margin: 0; color: #333; font-size: 18px; text-align: center;">
            Clock Increment (0 - 60 seconds)
        </h3>
        <input id="clock-increment" type="number"
            placeholder="Clock Increment (0 - 60 seconds)"
            value="${ctrl.clockIncrement}"
            style="padding: 12px; font-size: 16px; border: 2px solid #ddd; border-radius: 6px;">
        
        <div style="display: flex; gap: 15px; justify-content: center;">
            <button id="cancel-dialog" class="btn btn-secondary" 
                style="padding: 12px 25px; font-size: 16px;">
                Cancel
            </button>
            <button id="confirm-play" class="btn btn-primary" 
                style="padding: 12px 25px; font-size: 16px;">
                Play
            </button>
        </div>
    </div>
`;
        optionsDiv.innerHTML = newContent;
        optionsDiv.style.padding = '40px 30px';
        optionsDiv.style.maxWidth = '500px';

        document.getElementById('confirm-play')?.addEventListener('click', () => {
            const opponentLevelInput = (document.getElementById('opponent-level') as HTMLInputElement).value;
            const clockLimitInput = (document.getElementById('clock-limit') as HTMLInputElement).value;
            const clockIncrementInput = (document.getElementById('clock-increment') as HTMLInputElement).value;

            const opponentLevel = parseInt(opponentLevelInput, 10);
            if (!isNaN(opponentLevel)) {
                ctrl.level = opponentLevel;
            }

            const clockLimit = parseInt(clockLimitInput, 10);
            if (!isNaN(clockLimit)) {
                ctrl.clockLimit = clockLimit;
            }

            const clockIncrement = parseInt(clockIncrementInput, 10);
            if (!isNaN(clockIncrement)) {
                ctrl.clockIncrement = clockIncrement;
            }
            ctrl.playAiFromPosition(fenArrayType);
            closeOption();
        });

        document.getElementById('cancel-dialog')?.addEventListener('click', () => {
            closeOption();
        });
    });


    document.getElementById('play-human')?.addEventListener('click', () => {
        const newContent = `
    <div style="display: flex; flex-direction: column; gap: 25px;">
        <h2 style="margin: 0; color: #333; font-size: 22px; text-align: center;">
            Enter Lichess Username
        </h2>
        <input id="opponent-username" type="text" 
            placeholder="Username..."
            style="padding: 12px; font-size: 16px; border: 2px solid #ddd; border-radius: 6px;">
        
        <h3 style="margin: 0; color: #333; font-size: 18px; text-align: center;">
            Clock limit (1 - 180 minutes)
        </h3>
        <input id="clock-limit" type="number"
            placeholder="Clock limit (1 - 180 minutes)"
            value="${ctrl.clockLimit}"
            style="padding: 12px; font-size: 16px; border: 2px solid #ddd; border-radius: 6px;">
        
        <h3 style="margin: 0; color: #333; font-size: 18px; text-align: center;">
            Clock Increment (0 - 60 seconds)
        </h3>
        <input id="clock-increment" type="number"
            placeholder="Clock Increment (0 - 60 seconds)"
            value="${ctrl.clockIncrement}"
            style="padding: 12px; font-size: 16px; border: 2px solid #ddd; border-radius: 6px;">
        
        <div style="display: flex; gap: 15px; justify-content: center;">
            <button id="cancel-dialog" class="btn btn-secondary" 
                style="padding: 12px 25px; font-size: 16px;">
                Cancel
            </button>
            <button id="confirm-dialog" class="btn btn-primary" 
                style="padding: 12px 25px; font-size: 16px;">
                Challenge
            </button>
        </div>
    </div>
`;

        optionsDiv.innerHTML = newContent;
        optionsDiv.style.padding = '40px 30px';
        optionsDiv.style.maxWidth = '500px';

        document.getElementById('confirm-dialog')?.addEventListener('click', () => {
            const usernameInput = (document.getElementById('opponent-username') as HTMLInputElement).value;
            const clockLimitInput = (document.getElementById('clock-limit') as HTMLInputElement).value;
            const clockIncrementInput = (document.getElementById('clock-increment') as HTMLInputElement).value;

            const clockLimit = parseInt(clockLimitInput, 10);
            if (!isNaN(clockLimit)) {
                ctrl.clockLimit = clockLimit;
            }

            const clockIncrement = parseInt(clockIncrementInput, 10);
            if (!isNaN(clockIncrement)) {
                ctrl.clockIncrement = clockIncrement;
            }

            if (usernameInput) {
                ctrl.playHumanFromPosition(fenArrayType, usernameInput);
            }
            closeOption();
        });

        document.getElementById('cancel-dialog')?.addEventListener('click', () => {
            closeOption();
        });
    });

    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            closeOption();
        }
    });

    function closeOption() {
        if (overlay && overlay.parentNode) {
            document.body.removeChild(overlay);
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
                'Challenge friend or play against an AI. Every game begins from a random position, eliminating the need for memorized openings.'
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
                'Drop your thoughts ',
                h('a', { attrs: { href: 'https://forms.gle/1m1c4mcXea8NqXsU8', target: '_blank' } }, 'here!')
            ])
        ])
    ]);



