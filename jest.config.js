const config = require('@polkadot/dev/config/jest');

module.exports = Object.assign({}, config, {
  moduleNameMapper: {
    '@polkadot/api-(observable|rx)(.*)$': '<rootDir>/packages/api-$1/src/$2',
    '@polkadot/rpc-(core|provider|rx)(.*)$': '<rootDir>/packages/rpc-$1/src/$2',
    '@polkadot/extrinsics(.*)$': '<rootDir>/packages/type-extrinsics/src/$1',
    '@polkadot/jsonrpc(.*)$': '<rootDir>/packages/type-jsonrpc/src/$1',
    '@polkadot/storage(.*)$': '<rootDir>/packages/type-storage/src/$1',
    '@polkadot/types(.*)$': '<rootDir>/packages/types/src/$1'
  }
});
