#!/usr/bin/env node
// Copyright 2017-2020 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0
/* eslint-disable @typescript-eslint/no-var-requires */

let main;

try {
  main = require('../extractChain').default;
} catch (error) {
  require('@babel/register')({
    extensions: ['.js', '.ts'],
    plugins: [
      ['module-resolver', {
        alias: {
          '^@polkadot/api-derive(.*)': './packages/api-derive/src\\1',
          // eslint-disable-next-line sort-keys
          '^@polkadot/api(.*)': './packages/api/src/\\1',
          '^@polkadot/metadata(.*)': './packages/metadata/src\\1',
          '^@polkadot/rpc-core(.*)': './packages/rpc-core/src\\1',
          '^@polkadot/rpc-provider(.*)': './packages/rpc-provider/src\\1',
          '^@polkadot/types-known(.*)': './packages/types-known/src\\1',
          // eslint-disable-next-line sort-keys
          '^@polkadot/types(.*)': './packages/types/src\\1'
        }
      }]
    ]
  });

  main = require('../src/extractChain.ts').default;
}

main();
