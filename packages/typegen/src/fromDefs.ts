// Copyright 2017-2022 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';

import path from 'path';
import yargs from 'yargs';

import * as substrateDefs from '@polkadot/types/interfaces/definitions';

import { generateInterfaceTypes } from './generate/interfaceRegistry';
import { generateTsDef } from './generate/tsDef';
import { generateDefaultLookup } from './generate';
import { assertDir, assertFile, getMetadataViaWs } from './util';

type ArgV = { input: string; package: string; endpoint?: string; };

export function main (): void {
  const { endpoint, input, package: pkg } = yargs.strict().options({
    endpoint: {
      description: 'The endpoint to connect to (e.g. wss://kusama-rpc.polkadot.io) or relative path to a file containing the JSON output of an RPC state_getMetadata call',
      type: 'string'
    },
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
  }).argv as ArgV;

  const inputPath = assertDir(path.join(process.cwd(), input));
  let userDefs: Record<string, any> = {};

  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    userDefs = require(assertFile(path.join(inputPath, 'definitions.ts'))) as Record<string, any>;
  } catch (error) {
    console.error('ERROR: Unable to load user definitions:', (error as Error).message);
  }

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

  generateTsDef(allDefs, inputPath, pkg);
  generateInterfaceTypes(allDefs, path.join(inputPath, 'augment-types.ts'));

  if (endpoint) {
    if (endpoint.startsWith('wss://') || endpoint.startsWith('ws://')) {
      getMetadataViaWs(endpoint)
        .then((metadata) => generateDefaultLookup(inputPath, metadata))
        .catch(() => process.exit(1));
    } else {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const metaHex = (require(path.join(process.cwd(), endpoint)) as Record<string, HexString>).result;

      generateDefaultLookup(inputPath, metaHex);
    }
  }
}
