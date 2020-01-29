#!/usr/bin/env node
// Copyright 2017-2020 @polkadot/dev authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('@babel/register')({
  extensions: ['.js', '.ts'],
  plugins: [
    ['module-resolver', {
      alias: {
        '^@polkadot/metadata(.*)': './packages/metadata/src\\1',
        '^@polkadot/types(.*)': './packages/types/src\\1'
      }
    }]
  ]
});

// eslint-disable-next-line @typescript-eslint/no-var-requires
const chalk = require('chalk');

if (process.env.npm_execpath.includes('yarn')) {
  process.exit(0);
}

const blank = ''.padStart(75);

console.error(
  chalk.white.bold.bgRed(
    `${blank}\n   ${chalk.bold('FATAL: The use of yarn is required, install via npm is not supported.')}   \n${blank}`
  )
);
console.error(`\n   Technical explanation: All the projects in the ${chalk.bold('@polkadot')} family use \n   yarn workspaces, along with hoisting of dependencies. Currently only\n   yarn supports package.json workspaces, hence the limitation.\n\n\n   If yarn is not available, you can get it from https://yarnpkg.com/\n\n\n`);

process.exit(1);
