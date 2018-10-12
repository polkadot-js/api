#!/usr/bin/env node
// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

require('@babel/register')({
  extensions: ['.js', '.ts'],
  plugins: [
    ['module-resolver', {
      alias: {
        '^@polkadot/types(.*)': './packages/types/src\\2'
      }
    }]
  ]
});

require('./MetadataJsonDecode.ts');
