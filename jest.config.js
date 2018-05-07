const config = require('@polkadot/dev/config/jest');

module.exports = Object.assign({}, config, {
  moduleNameMapper: {
    '@polkadot/api-(format|jsonrpc|provider|rx)(.*)$': '<rootDir>/packages/api-$1/src/$2',
    '@polkadot/api(.*)$': '<rootDir>/packages/api/src/$1'
  }
});
