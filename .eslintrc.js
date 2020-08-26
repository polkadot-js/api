const base = require('@polkadot/dev/config/eslint');

module.exports = {
  ...base,
  parserOptions: {
    ...base.parserOptions,
    project: [
      './tsconfig.json'
    ]
  },
  rules: {
    ...base.rules,
    // add override for any (a metric ton of them, initial conversion)
    '@typescript-eslint/no-explicit-any': 'off',
    // these should be removed, there are 8 of them as errors
    '@typescript-eslint/no-non-null-assertion': 'off',
    // this seems very broken atm, false positives
    '@typescript-eslint/unbound-method': 'off'
  }
};
