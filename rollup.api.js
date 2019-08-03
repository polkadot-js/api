import typescript from 'rollup-plugin-typescript2';

export default {
  external: ['@polkadot/util', '@polkadot/util-crypto'],
  input: './packages/api/src/index.ts',
  plugins: [
    typescript()
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