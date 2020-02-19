#!/usr/bin/env node
// Copyright 2017-2020 @polkadot/typegen authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
/* eslint-disable @typescript-eslint/no-var-requires */

let main;

try {
  main = require('../fromDefs').default;
} catch (error) {
  require('@babel/register')({
    extensions: ['.js', '.ts'],
    plugins: [
      ['module-resolver', {
        alias: {
          '^@polkadot/metadata(.*)': './packages/metadata/src\\1',
          '^@polkadot/typegen(.*)': './packages/typegen/src\\1',
          '^@polkadot/types(.*)': './packages/types/src\\1'
        }
      }]
    ]
  });

  main = require('../sr/fromDefs.ts').default;
}

main();
