#!/usr/bin/env node
// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
/* eslint-disable @typescript-eslint/no-var-requires */

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

const path = require('path');
const yargs = require('yargs');
const substrateDefs = require('../interfaces/definitions');
const { generateInterfaceRegistry } = require('./generateTypes/interfaceRegistry');
const { generateTsDef } = require('./generateTypes/tsDef');

const { input, package } = yargs.strict().options({
  input: {
    description: 'The directory to use for the user definitions',
    type: 'string',
    required: true
  },
  package: {
    description: 'The package name & path to use for the user types',
    type: 'string',
    required: true
  }
}).argv;

const userDefs = require(path.join(process.cwd(), input, 'definitions.ts'));
const userKeys = Object.keys(userDefs);
const filteredBase = Object
  .entries(substrateDefs)
  .filter(([key]) => {
    if (userKeys.includes(key)) {
      console.warn(`Override found for ${key} in user types, ignoring in @polkadot/types`);

      return false;
    }

    return true;
  })
  .reduce((defs, [key, value]) => {
    defs[key] = value;

    return defs;
  }, {});

const allDefs = {
  '@polkadot/types/interfaces': filteredBase,
  [package]: userDefs
};

generateTsDef(allDefs, path.join(process.cwd(), input), package);
generateInterfaceRegistry(allDefs, path.join(process.cwd(), input, 'interfaceRegistry.ts'));
