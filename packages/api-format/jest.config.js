const config = require('@polkadot/dev/jest.config');

module.exports = Object.assign({}, config, {
  moduleNameMapper: {
    '@polkadot/api-jsonrpc(.*)$': '<rootDir>/../api-jsonrpc/src/$1'
  }
});
