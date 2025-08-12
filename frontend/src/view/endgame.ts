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

const userHome: (ctrl: Ctrl) => VNode[] = (ctrl) => [
    h('div.container', { attrs: { align: 'left' } }, [
        h('div.row.g-4', [
            h('div.col-12', [
                ...data.categories.flatMap((category, categoryIndex) => [
                    h('h2.mb-3', category.name),
                    ...category.subcategories.map((sub, subIndex) =>
                        h('div.mb-4', [
                            h('h3.text-muted.mb-2', sub.name),
                            h('div.d-flex.flex-wrap.gap-2',
                                sub.games.map((game, gameIndex) => {
                                    const started = !!startedPositions?.[categoryIndex]?.[subIndex]?.[gameIndex];
                                    const completed = !!completedPositions?.[categoryIndex]?.[subIndex]?.[gameIndex];
                                    const btn = positionButton(
                                        ctrl, `${gameIndex + 1}`, FenArrayType.CustomFen, started, completed
                                    ) as ClickableVNode;
                                    const originalClick = btn.data.on.click;
                                    btn.data.on.click = () => {
                                        ctrl.customFen = game.fen;
                                        ctrl.target = game.target;
                                        ctrl.endgamePath = `${categoryIndex}/${subIndex}/${gameIndex}`;
                                        originalClick();
                                    };
                                    return btn;
                                })
                            )
                        ])
                    )
                ])
            ])
        ])
    ])
];


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


