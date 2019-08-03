import typescript from 'rollup-plugin-typescript2';

export default {
  input: './packages/api/src/index.ts',
  plugins: [
    typescript()
  ],
  output: {
    file: './build/rollup/api.js',
    format: 'iife',
    name: 'polkadotApi'
  }
};
