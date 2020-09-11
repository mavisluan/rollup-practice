import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';
import image from '@rollup/plugin-image'
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/App.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'esm'
    }
  ],
  "external": [
    'react',
    'react-dom',
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    postcss(),
    resolve(),
    commonjs(),
    image(),
  ]
};