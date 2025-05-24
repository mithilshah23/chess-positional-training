import { h, VNode } from 'snabbdom';

export function clockContent(time?: number, decay?: number): VNode {
  if (!time && time !== 0) return h('span', '-');
  if (time == 2147483647) return h('span');

  const millis = time + (decay || 0);

  return millis > 1000 * 60 * 60 * 24 ? correspondence(millis) : realTime(millis);
}

const realTime = (millis: number) => {
  const date = new Date(millis);

  const hours = Math.floor(millis / (1000 * 60 * 60));
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();
  const milliseconds = Math.floor(date.getUTCMilliseconds() / 100);

  return h('span.clock--realtime.font-monospace', [
    (hours > 0 ? pad2(hours) + ':' : '') + pad2(minutes) + ':' + pad2(seconds),
    h('tenths', '.' + milliseconds.toString()),
  ]);
};

const correspondence = (ms: number) => {
  const date = new Date(ms),
      minutes = pad2(date.getUTCMinutes()),
      seconds = pad2(date.getSeconds());
  let hours: number,
      str = '';
  if (ms >= 86400 * 1000) {
    const days = date.getUTCDate() - 1;
    hours = date.getUTCHours();
    str += (days === 1 ? 'One day' : `${days} days`) + ' ';
    if (hours !== 0) str += `${hours} hours`;
  } else if (ms >= 3600 * 1000) {
    hours = date.getUTCHours();
    str += bold(pad2(hours)) + ':' + bold(minutes);
  } else {
    str += bold(minutes) + ':' + bold(seconds);
  }
  return h('span.clock--correspondence', str);
};

const pad2 = (num: number) => (num < 10 ? '0' : '') + num;
const prefixInteger = (num: number, length: number): string => (num / Math.pow(10, length)).toFixed(length).slice(2);
const bold = (x: string) => `<b>${x}</b>`;
