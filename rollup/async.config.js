import {nodeResolve} from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import includePaths from 'rollup-plugin-includepaths';
export default {
  input: './esm/async.js',
  plugins: [
    includePaths({
      include: {
        '@ungap/create-content': 'node_modules/@ungap/degap/create-content.js'
      },
    }),
    nodeResolve(),
    terser()
  ],
  context: 'null',
  moduleContext: 'null',
  output: {
    exports: 'named',
    file: './async.js',
    format: 'iife',
    name: 'uhtml'
  }
};