const config = require('@polkadot/dev/jest.config');

module.exports = Object.assign({}, config, {
  moduleNameMapper: {
    '@polkadot/api-format(.*)$': '<rootDir>/../api-format/src/$1',
    '@polkadot/api-jsonrpc(.*)$': '<rootDir>/../api-jsonrpc/src/$1',
    '@polkadot/api-provider(.*)$': '<rootDir>/../api-provider/src/$1'
  }
});
