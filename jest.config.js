const config = require('@polkadot/dev/config/jest');

module.exports = Object.assign({}, config, {
  moduleNameMapper: {
    '@polkadot/api-(format|jsonrpc|provider|rx)(.*)$': '<rootDir>/packages/api-$1/src/$2',
    '@polkadot/api(.*)$': '<rootDir>/packages/api/src/$1',
    '@polkadot/extrinsics(.*)$': '<rootDir>/packages/type-extrinsics/src/$1',
    '@polkadot/jsonrpc(.*)$': '<rootDir>/packages/type-jsonrpc/src/$1',
    '@polkadot/params(.*)$': '<rootDir>/packages/type-params/src/$1',
    '@polkadot/primitives(.*)$': '<rootDir>/packages/type-primitives/src/$1',
    '@polkadot/storage(.*)$': '<rootDir>/packages/type-storage/src/$1'
  }
});
