#!/usr/bin/env node
// Copyright 2017-2020 @polkadot/typegen authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
/* eslint-disable @typescript-eslint/no-var-requires */

try {
  require('./interfacesTs');
} catch (error) {
  require('@babel/register')({
    extensions: ['.js', '.ts'],
    plugins: [
      ['module-resolver', {
        alias: {
          '^@polkadot/jsonrpc(.*)': './packages/jsonrpc/src\\1',
          '^@polkadot/metadata(.*)': './packages/metadata/src\\1',
          '^@polkadot/types(.*)': './packages/types/src\\1'
        }
      }]
    ]
  });

  require('../src/interfacesTs.ts');
}
