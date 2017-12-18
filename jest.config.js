const config = require('@polkadot/dev/config/jest');

module.exports = Object.assign({}, config, {
  moduleNameMapper: {
    '@polkadot/api-(format|jsonrpc|provider)(.*)$': '<rootDir>/packages/api-$1/src/$2'
  }
});
