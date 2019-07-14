const base = require('@polkadot/dev/config/eslint');

module.exports = {
  ...base,
  rules: {
    ...base.rules,
    // add override for any (a metric ton of them, initial conversion)
    '@typescript-eslint/no-explicit-any': 'off',
    // these should be removed, there are 8 of them as errors
    '@typescript-eslint/no-non-null-assertion': 'off'
  }
};
