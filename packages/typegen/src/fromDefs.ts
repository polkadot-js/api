// Copyright 2017-2020 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import path from 'path';
import yargs from 'yargs';

import * as substrateDefs from '@polkadot/types/interfaces/definitions';

import { generateInterfaceTypes } from './generate/interfaceRegistry';
import { generateTsDef } from './generate/tsDef';

export function main (): void {
  const { input, package: pkg } = yargs.strict().options({
    input: {
      description: 'The directory to use for the user definitions',
      required: true,
      type: 'string'
    },
    package: {
      description: 'The package name & path to use for the user types',
      required: true,
      type: 'string'
    }
  }).argv;

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const userDefs = require(path.join(process.cwd(), input, 'definitions.ts')) as Record<string, any>;
  const userKeys = Object.keys(userDefs);
  const filteredBase = Object
    .entries(substrateDefs as Record<string, unknown>)
    .filter(([key]) => {
      if (userKeys.includes(key)) {
        console.warn(`Override found for ${key} in user types, ignoring in @polkadot/types`);

        return false;
      }

      return true;
    })
    .reduce((defs: Record<string, any>, [key, value]) => {
      defs[key] = value;

      return defs;
    }, {});

  const allDefs = {
    '@polkadot/types/interfaces': filteredBase,
    [pkg]: userDefs
  };

  generateTsDef(allDefs, path.join(process.cwd(), input), pkg);
  generateInterfaceTypes(allDefs, path.join(process.cwd(), input, 'augment-types.ts'));
}
