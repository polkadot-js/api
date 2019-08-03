import typescript from 'rollup-plugin-typescript2';

export default {
  input: './packages/api/src/index.ts',
  plugins: [
    typescript()
  ],
  output: {
    file: './packages/api/build/rollup-api.min.js',
    format: 'iife',
    name: 'polkadotApi'
  }
};
