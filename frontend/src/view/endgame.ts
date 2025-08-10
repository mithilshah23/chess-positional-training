import {Renderer} from "../interfaces";
import {anonHome, positionButton} from "./home";
import {Ctrl} from "../ctrl";
import {h, VNode} from "snabbdom";
import {FenArrayType} from "../enums/fenArrayType.enum";
import rawData from "../static/endgamedatabase.json";


export const renderEndGamePage: Renderer = ctrl => (ctrl.auth.me ? userHome(ctrl) : anonHome());

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

                ...data.categories.flatMap(category => [

                    h('h2.mb-3', category.name),

                    ...category.subcategories.map(sub =>
                        h('div.mb-4', [
                            h('h3.text-muted.mb-2', sub.name),
                            h('div.d-flex.flex-wrap.gap-2',
                                sub.games.map((game, idx) => {
                                    const btn = positionButton(
                                        ctrl,
                                        `${idx + 1}`,
                                        FenArrayType.CustomFen
                                    ) as ClickableVNode;

                                    const originalClick = btn.data.on.click;
                                    btn.data.on.click = () => {
                                        ctrl.customFen = game.fen;
                                        ctrl.target = game.target;
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


