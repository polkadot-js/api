// Copyright 2017-2021 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

const alias = {
  '^@polkadot/api-(augment|base|derive)(.*)': './packages/api-\\1/src\\2',
  '^@polkadot/api(.*)': './packages/api/src/\\1',
  '^@polkadot/rpc-(augment|core|provider)(.*)': './packages/rpc-\\1/src\\2',
  '^@polkadot/types-(augment-lookup|augment-registry|augment|codec|create|known|metadata|support)(.*)': './packages/types-\\1/src\\2',
  '^@polkadot/types(.*)': './packages/types/src\\1'
};

require('@babel/register')({
  extensions: ['.js', '.ts'],
  plugins: [
    ['module-resolver', { alias }]
  ]
});
