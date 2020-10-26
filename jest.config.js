// Copyright 2017-2020 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

const config = require('@polkadot/dev/config/jest');

module.exports = Object.assign({}, config, {
  moduleNameMapper: {
    '@polkadot/api-contract(.*)$': '<rootDir>/packages/api-contract/src/$1',
    '@polkadot/api-derive(.*)$': '<rootDir>/packages/api-derive/src/$1',
    // eslint-disable-next-line sort-keys
    '@polkadot/api(.*)$': '<rootDir>/packages/api/src/$1',
    '@polkadot/metadata(.*)$': '<rootDir>/packages/metadata/src/$1',
    '@polkadot/rpc-(core|provider)(.*)$': '<rootDir>/packages/rpc-$1/src/$2',
    '@polkadot/types-known(.*)$': '<rootDir>/packages/types-known/src/$1',
    // eslint-disable-next-line sort-keys
    '@polkadot/types(.*)$': '<rootDir>/packages/types/src/$1'
  },
  modulePathIgnorePatterns: [
    '<rootDir>/packages/api/build',
    '<rootDir>/packages/api-derive/build',
    '<rootDir>/packages/api-contract/build',
    '<rootDir>/packages/metadata/build',
    '<rootDir>/packages/rpc-core/build',
    '<rootDir>/packages/rpc-provider/build',
    '<rootDir>/packages/types/build',
    '<rootDir>/packages/types-known/build'
  ],
  resolver: '@polkadot/dev/config/jest-resolver'
});
