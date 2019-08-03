import typescript from 'rollup-plugin-typescript2';

export default {
  input: './packages/api/src/index.ts',
  plugins: [
    typescript({
      tsconfigOverride: {
        module: 'ES2015'
      }
    })
  ],
  output: {
    file: './build/rollup-api.min.js',
    format: 'iife'
  }
};
