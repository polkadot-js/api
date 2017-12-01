const config = require('@polkadot/dev/config/jest');

module.exports = Object.assign({}, config, {
  moduleNameMapper: {
    '@polkadot/api-format(.*)$': '<rootDir>/packages/api-format/src/$1',
    '@polkadot/api-jsonrpc(.*)$': '<rootDir>/packages/api-jsonrpc/src/$1',
    '@polkadot/api-provider(.*)$': '<rootDir>/packages/api-provider/src/$1'
  }
});
