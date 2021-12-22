#!/usr/bin/env node
// Copyright 2017-2021 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

let main;

try {
  main = require('../extractChain.cjs').main;
} catch (error) {
  require('./aliases.cjs');

  main = require('../src/extractChain.ts').main;
}

main();
