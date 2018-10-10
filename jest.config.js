const config = require('@polkadot/dev/config/jest');

module.exports = Object.assign({}, config, {
  moduleNameMapper: {
    '@polkadot/api-observable(.*)$': '<rootDir>/packages/api-observable/src/$1',
    '@polkadot/rpc-(core|provider|rx)(.*)$': '<rootDir>/packages/rpc-$1/src/$2',
    '@polkadot/extrinsics(.*)$': '<rootDir>/packages/type-extrinsics/src/$1',
    '@polkadot/jsonrpc(.*)$': '<rootDir>/packages/type-jsonrpc/src/$1',
    '@polkadot/params(.*)$': '<rootDir>/packages/type-params/src/$1',
    '@polkadot/primitives(.*)$': '<rootDir>/packages/type-primitives/src/$1',
    '@polkadot/storage(.*)$': '<rootDir>/packages/type-storage/src/$1',
    '@polkadot/types(.*)$': '<rootDir>/packages/types/src/$1'
  },
  modulePathIgnorePatterns: [
    '<rootDir>/packages/api/build',
    '<rootDir>/packages/api-observable/build',
    '<rootDir>/packages/api-provider/build',
    '<rootDir>/packages/api-rx/build',
    '<rootDir>/packages/types/build',
    '<rootDir>/packages/type-extrinsics/build',
    '<rootDir>/packages/type-jsonrpc/build',
    '<rootDir>/packages/type-storage/build/'
  ]
});
