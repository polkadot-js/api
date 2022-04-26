// Copyright 2017-2022 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';

import path from 'path';
import yargs from 'yargs';

import * as substrateDefs from '@polkadot/types/interfaces/definitions';
import { WebSocket } from '@polkadot/x-ws';

import { generateInterfaceTypes } from './generate/interfaceRegistry';
import { generateTsDef } from './generate/tsDef';
import { generateDefaultLookup } from './generate';

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

  if (endpoint) {
    if (endpoint.startsWith('wss://') || endpoint.startsWith('ws://')) {
      try {
        const websocket = new WebSocket(endpoint);

        websocket.onclose = (event: { code: number; reason: string }): void => {
          console.error(`disconnected, code: '${event.code}' reason: '${event.reason}'`);
          process.exit(1);
        };

        websocket.onerror = (event: unknown): void => {
          console.error(event);
          process.exit(1);
        };

        websocket.onopen = (): void => {
          console.log('connected');
          websocket.send('{"id":"1","jsonrpc":"2.0","method":"state_getMetadata","params":[]}');
        };

        websocket.onmessage = (message: unknown): void => {
          generateDefaultLookup(path.join(process.cwd(), input), (JSON.parse((message as Record<string, string>).data) as Record<string, HexString>).result);
        };
      } catch (error) {
        process.exit(1);
      }
    } else {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const metaHex = (require(path.join(process.cwd(), endpoint)) as Record<string, HexString>).result;

      generateDefaultLookup(path.join(process.cwd(), input), metaHex);
    }
  }

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
  process.exit(0);
}
