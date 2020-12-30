#!/usr/bin/env node
// Copyright 2017-2020 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */

let main;

try {
  main = require('../fromDefs').main;
} catch (error) {
  require('@babel/register')({
    extensions: ['.js', '.ts'],
    plugins: [
      ['module-resolver', {
        alias: {
          '^@polkadot/metadata(.*)': './packages/metadata/src\\1',
          '^@polkadot/typegen(.*)': './packages/typegen/src\\1',
          '^@polkadot/types-known(.*)': './packages/types-known/src\\1',
          '^@polkadot/types(.*)': './packages/types/src\\1'
        }
      }]
    ]
  });

  main = require('../src/fromDefs.ts').main;
}

main();
