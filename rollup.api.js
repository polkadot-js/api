import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  external: ['@polkadot/util', '@polkadot/util-crypto'],
  input: './packages/api/src/index.ts',
  plugins: [
    typescript(),
    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration —
    // consult the documentation for details:
    // https://github.com/rollup/rollup-plugin-commonjs
    resolve(),
    commonjs()
  ],
  output: {
    file: './build/rollup/api.js',
    format: 'iife',
    name: 'polkadotApi',
    globals: {
      '@polkadot/util': 'polkadotUtil',
      '@polkadot/util-crypto': 'polkadotUtilCrypto'
    }
  }
};