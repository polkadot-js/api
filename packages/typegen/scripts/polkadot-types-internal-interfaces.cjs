#!/usr/bin/env node
// Copyright 2017-2021 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

let main;

try {
  main = require('../interfacesTs.cjs').main;
} catch (error) {
  process.env.JEST_WORKER_ID = '123';

  require('./aliases.cjs');

  main = require('../src/interfacesTs.ts').main;
}

main();
