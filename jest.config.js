const config = require('@polkadot/dev/config/jest');

module.exports = Object.assign({}, config, {
  moduleNameMapper: {
    '@polkadot/api-contract(.*)$': '<rootDir>/packages/api-contract/src/$1',
    '@polkadot/api-derive(.*)$': '<rootDir>/packages/api-derive/src/$1',
    '@polkadot/api-metadata(.*)$': '<rootDir>/packages/api-metadata/src/$1',
    '@polkadot/api(.*)$': '<rootDir>/packages/api/src/$1',
    '@polkadot/rpc-(core|provider)(.*)$': '<rootDir>/packages/rpc-$1/src/$2',
    '@polkadot/jsonrpc(.*)$': '<rootDir>/packages/type-jsonrpc/src/$1',
    '@polkadot/types(.*)$': '<rootDir>/packages/types/src/$1'
  },
  modulePathIgnorePatterns: [
    '<rootDir>/packages/api/build',
    '<rootDir>/packages/api-derive/build',
    '<rootDir>/packages/api-contract/build',
    '<rootDir>/packages/api-metadata/build',
    '<rootDir>/packages/rpc-core/build',
    '<rootDir>/packages/rpc-provider/build',
    '<rootDir>/packages/type-jsonrpc/build',
    '<rootDir>/packages/types/build'
  ]
});
