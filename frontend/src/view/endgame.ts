import {Renderer} from "../interfaces";
import {anonHome, showPlayerSelectionDialog} from "./home";
import {Ctrl} from "../ctrl";
import {h, VNode} from "snabbdom";
import {FenArrayType} from "../enums/fenArrayType.enum";
import rawData from "../static/endgamedatabase.json";

const backendUrl = process.env.BACKEND_URL || "http://localhost:8080";

export const renderEndGamePage: Renderer = ctrl => {
    if (!ctrl.availablePositionsLoading) {
        ctrl.availablePositionsLoading = true;
        fetchAvailablePositions(ctrl);
    }
    return (ctrl.auth.me ? userHome(ctrl) : anonHome());
};

interface Game {
    readonly fen: string;
    readonly target: string;
}

interface Subcategory {
    readonly name: string;
    readonly games: Game[];
}

interface Category {
    readonly name: string;
    readonly icons: string[];
    readonly subcategories: Subcategory[];
}

interface JSONData {
    readonly categories: Category[];
}

const data = rawData as JSONData

type ClickableVNode = VNode & {
    data: {
        on: {
            click: () => void
        }
    }
}

/* ── Category icon mapping using chess unicode characters ── */

const categoryIcons: Record<string, string> = {
    'Basic': '♚',
    'Pawn': '♟',
    'Bishop': '♝',
    'Knight': '♞',
    'Knight-Bishop': '♞♝',
    'Rook-Pawn': '♜♟',
    'Rook-Pieces': '♜♝♞',
    'Queen': '♛',
    'Checkmate in...': '♚',
};

/* ── Track expanded state ── */

let expandedCategory: number | null = null;
let expandedSubcategory: string | null = null;

const userHome: (ctrl: Ctrl) => VNode[] = (ctrl) => [
    h('div.endgame-layout', [
        /* Left sidebar navigation */
        h('nav.endgame-sidebar', [
            h('div.endgame-sidebar__title', 'Endgame Training'),
            ...data.categories.map((category, categoryIndex) =>
                h('div.endgame-sidebar__category', [
                    /* Category header — click to expand/collapse */
                    h('div.endgame-sidebar__cat-header', {
                        class: { 'endgame-sidebar__cat-header--active': expandedCategory === categoryIndex },
                        on: {
                            click: () => {
                                expandedCategory = expandedCategory === categoryIndex ? null : categoryIndex;
                                expandedSubcategory = null;
                                ctrl.redraw();
                            }
                        }
                    }, [
                        h('span.endgame-sidebar__cat-icon', categoryIcons[category.name] || '♔'),
                        h('span.endgame-sidebar__cat-name', category.name),
                        h('span.endgame-sidebar__cat-arrow', expandedCategory === categoryIndex ? '▾' : '▸'),
                    ]),
                    /* Subcategories (shown when category is expanded) */
                    ...(expandedCategory === categoryIndex
                        ? category.subcategories.map((sub, subIndex) => {
                            const subKey = `${categoryIndex}-${subIndex}`;
                            const isSubExpanded = expandedSubcategory === subKey;
                            return h('div.endgame-sidebar__subcategory', [
                                h('div.endgame-sidebar__sub-header', {
                                    class: { 'endgame-sidebar__sub-header--active': isSubExpanded },
                                    on: {
                                        click: () => {
                                            expandedSubcategory = isSubExpanded ? null : subKey;
                                            ctrl.redraw();
                                        }
                                    }
                                }, [
                                    h('span.endgame-sidebar__sub-name', sub.name),
                                    h('span.endgame-sidebar__sub-count', `${sub.games.length}`),
                                ]),
                                /* Game buttons (shown when subcategory is expanded) */
                                ...(isSubExpanded
                                    ? [h('div.endgame-sidebar__games', 
                                        sub.games.map((game, gameIndex) => {
                                            const started = !!startedPositions?.[categoryIndex]?.[subIndex]?.[gameIndex];
                                            const completed = !!completedPositions?.[categoryIndex]?.[subIndex]?.[gameIndex];
                                            const statusClass = completed
                                                ? 'endgame-sidebar__game--completed'
                                                : started
                                                    ? 'endgame-sidebar__game--started'
                                                    : '';
                                            return h(`div.endgame-sidebar__game.${statusClass}`, {
                                                on: {
                                                    click: () => {
                                                        ctrl.customFen = game.fen;
                                                        ctrl.target = game.target;
                                                        ctrl.endgamePath = `${categoryIndex}/${subIndex}/${gameIndex}`;
                                                        ctrl.level = 8;
                                                        showPlayerSelectionDialog(ctrl, FenArrayType.CustomFen, false);
                                                    }
                                                }
                                            }, `${gameIndex + 1}`);
                                        })
                                    )]
                                    : [])
                            ]);
                        })
                        : [])
                ])
            )
        ]),
        /* Right content area — instructions / info */
        h('div.endgame-content', [
            expandedCategory !== null && expandedSubcategory !== null
                ? renderSubcategoryDetail(ctrl, expandedCategory, expandedSubcategory)
                : renderEndgameWelcome()
        ])
    ])
];

const renderEndgameWelcome = () =>
    h('div.endgame-welcome', [
        h('h2', 'Endgame Training'),
        h('p', 'Select a category from the sidebar to begin practicing endgame positions.'),
        h('div.endgame-welcome__tips', [
            h('h4', 'How it works:'),
            h('ul', [
                h('li', 'Browse categories by piece type in the sidebar'),
                h('li', 'Expand a subcategory to see available positions'),
                h('li', 'Click a position number to start practicing'),
                h('li', [
                    h('span.endgame-legend__dot.endgame-legend__dot--default', ''),
                    ' Not started  ',
                    h('span.endgame-legend__dot.endgame-legend__dot--started', ''),
                    ' In progress  ',
                    h('span.endgame-legend__dot.endgame-legend__dot--completed', ''),
                    ' Completed',
                ]),
            ]),
        ]),
    ]);

const renderSubcategoryDetail = (ctrl: Ctrl, catIdx: number, subKey: string) => {
    const parts = subKey.split('-');
    const subIdx = parseInt(parts[1]);
    const category = data.categories[catIdx];
    const sub = category.subcategories[subIdx];
    if (!sub) return renderEndgameWelcome();

    return h('div.endgame-detail', [
        h('h3', `${category.name} — ${sub.name}`),
        h('p.text-muted', `${sub.games.length} positions available`),
        h('div.endgame-detail__grid',
            sub.games.map((game, gameIndex) => {
                const started = !!startedPositions?.[catIdx]?.[subIdx]?.[gameIndex];
                const completed = !!completedPositions?.[catIdx]?.[subIdx]?.[gameIndex];
                const btn = positionButton(
                    ctrl, `${gameIndex + 1}`, FenArrayType.CustomFen, started, completed
                ) as ClickableVNode;
                const originalClick = btn.data.on.click;
                btn.data.on.click = () => {
                    ctrl.customFen = game.fen;
                    ctrl.target = game.target;
                    ctrl.endgamePath = `${catIdx}/${subIdx}/${gameIndex}`;
                    originalClick();
                };
                return btn;
            })
        ),
    ]);
};


export function positionButton(ctrl: Ctrl, text: string, fenType: FenArrayType, started: boolean, completed: boolean) {
    return h(
        `button.btn.${started ? (completed ? 'btn-success' : 'btn-warning') : 'btn-outline-primary'}.btn-lg`,
        {
            attrs: { type: 'button' },
            on: {
                click: () => {
                    if (fenType === FenArrayType.MateInFewMoves || fenType === FenArrayType.CustomFen) ctrl.level = 8;
                    showPlayerSelectionDialog(ctrl, fenType, false);
                }
            }
        },
        text
    );
}

let startedPositions: Record<string, any> | null = null;
let completedPositions: Record<string, any> | null = null;

async function fetchAvailablePositions(ctrl: Ctrl) {
    try {
        const res = await fetch(`${backendUrl}/endgame/stats`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: ctrl.auth.me?.id })}
            );
        if (!res.ok) {
            console.warn(`Backend responded with status ${res.status}`);
            return;
        }
        const data = await res.json();
        startedPositions = data.startedPositions;
        completedPositions = data.completedPositions;
        ctrl.redraw();
    } catch {
        startedPositions = null;
        completedPositions = null;
    }
}
