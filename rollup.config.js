import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';
import image from '@rollup/plugin-image'
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';

export default [
  {
    input: 'src/App.js',
    output: [
      {
        file: pkg.client,
        format: 'cjs',
        name: 'client',
        exports: 'default'
      },
      {
        file: pkg.module,
        name: 'css',
        format: 'esm',
        exports: 'default'
      }
    ],
    "external": [
      'react',
      'react-dom',
      'http',
      'url',
      'https',
      'zlib',
      'util',
      'net',
      'fs',
      'stream',
      'assert',
      'tty',
      'os', 
      'child_process',
      'events',
      'tls',
      'utf-8-validate',
      'bufferutil',
      'crypto'
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**'
      }),
      postcss(),
      resolve({preferBuiltins: true}),
      commonjs(),
      json(),
      image(),
    ]
  },
  {
    input: 'server/server.js',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        name: 'server',
        exports: 'default'
      },
    ],
    "external": [
      'express',
      'crypto',
      'http',
      'url',
      'https',
      'zlib',
      'util',
      'net',
      'fs',
      'stream',
      'assert',
      'tty',
      'path',
      'os',
      'tls',
      'bufferutil',
      'utf-8-validate',
      'events',
      'querystring',
      'buffer',
      'domain',
      'child_process',
      'dgram',
      'timers',
      'string_decoder',
      'aws-sdk',
    ],
    plugins: [
      babel({
        exclude: ['node_modules/**']
      }),
      json(),
      resolve({preferBuiltins: true}),
      commonjs(),
    ]
  }
];
