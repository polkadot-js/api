#!/usr/bin/env node
// Copyright 2017-2021 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

let main;

try {
  main = require('../metadataMd.cjs').main;
} catch (error) {
  process.env.JEST_WORKER_ID = '123';

  require('@babel/register')({
    extensions: ['.js', '.ts'],
    plugins: [
      ['module-resolver', {
        alias: {
          '^@polkadot/types-codec(.*)': './packages/types-codec/src\\1',
          '^@polkadot/types-known(.*)': './packages/types-known/src\\1',
          '^@polkadot/types-support(.*)': './packages/types-support/src\\1',
          '^@polkadot/types(.*)': './packages/types/src\\1'
        }
      }]
    ]
  });

  main = require('../src/metadataMd.ts').main;
}

main();
