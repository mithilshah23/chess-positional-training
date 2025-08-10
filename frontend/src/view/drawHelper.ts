import {Display} from "../game";

export function createEvalBadgeSvg(display: Display): string {
    const safeText = display.eval.replace(/[<>]/g, '');
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25">
      <rect width="30" height="25" rx="5" ry="5" fill="${display.color}" opacity="0.9"/>
      <text x="15" y="18" font-size="16" font-family="Arial" fill="white" text-anchor="middle">${safeText}</text>
    </svg>
  `;
}
