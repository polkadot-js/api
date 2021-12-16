#!/usr/bin/env node
// Copyright 2017-2021 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

const { alias } = require('./aliases.cjs');

let main;

try {
  main = require('../fromDefs.cjs').main;
} catch (error) {
  process.env.JEST_WORKER_ID = '123';

  require('@babel/register')({
    extensions: ['.js', '.ts'],
    plugins: [
      ['module-resolver', { alias }]
    ]
  });

  main = require('../src/fromDefs.ts').main;
}

main();
