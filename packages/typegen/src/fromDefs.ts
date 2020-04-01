// Copyright 2017-2020 @polkadot/typegen authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import path from 'path';
import yargs from 'yargs';
import * as substrateDefs from '@polkadot/types/interfaces/definitions';

import { generateInterfaceTypes } from './generate/interfaceRegistry';
import { generateTsDef } from './generate/tsDef';

export default function main (): void {
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
    .reduce((defs: any, [key, value]) => {
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
