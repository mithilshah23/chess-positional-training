import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import scss from 'rollup-plugin-scss';
import sass from 'sass';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';

export default args => ({
  input: 'src/main.ts',
  output: {
    file: args['config-prod'] ? 'dist/index.min.js' : 'index.js',
    format: 'iife',
    name: 'LichessDemo',
    plugins: args['config-prod']
      ? [
          terser({
            safari10: false,
            output: { comments: false },
          }),
        ]
      : [],
  },
  plugins: [
    resolve({ browser: true }),
    typescript(),
    commonjs(),
    scss({
      include: ['scss/*'],
      output: args['config-prod'] ? './dist/style.min.css' : './style.css',
      runtime: sass,
      ...(args['config-prod'] ? { outputStyle: 'compressed' } : {}),
    }),
    copy({
      targets: [
        {
          src: [
            'node_modules/stockfish/src/stockfish-nnue-16-single.js',
            'node_modules/stockfish/src/stockfish-nnue-16-single.wasm'
          ],
          dest: args['config-prod'] ? 'dist' : './'
        }
      ],
      copyOnce: true
    }),
  ],
});
