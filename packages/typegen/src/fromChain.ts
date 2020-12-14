// Copyright 2017-2020 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import path from 'path';
import yargs from 'yargs';

import { formatNumber } from '@polkadot/util';
import { WebSocket } from '@polkadot/x-ws';

import { generateDefaultConsts, generateDefaultQuery, generateDefaultRpc, generateDefaultTx } from './generate';
import { HEADER, writeFile } from './util';

function generate (metaHex: string, pkg: string | undefined, output: string, isStrict?: boolean): void {
  console.log(`Generating from metadata, ${formatNumber((metaHex.length - 2) / 2)} bytes`);

  const extraTypes = pkg
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    ? { [pkg]: require(path.join(process.cwd(), output, 'definitions')) as Record<string, any> }
    : {};

  generateDefaultConsts(path.join(process.cwd(), output, 'augment-api-consts.ts'), metaHex, extraTypes, isStrict);
  generateDefaultQuery(path.join(process.cwd(), output, 'augment-api-query.ts'), metaHex, extraTypes, isStrict);
  generateDefaultRpc(path.join(process.cwd(), output, 'augment-api-rpc.ts'), extraTypes);
  generateDefaultTx(path.join(process.cwd(), output, 'augment-api-tx.ts'), metaHex, extraTypes, isStrict);

  writeFile(path.join(process.cwd(), output, 'augment-api.ts'), (): string =>
    [
      HEADER('chain'),
      ...[
        '@polkadot/api/augment/rpc',
        ...['consts', 'query', 'tx', 'rpc'].filter((key) => !!key).map((key) => `./augment-api-${key}`)
      ].map((path) => `import '${path}';\n`)
    ].join('')
  );

  process.exit(0);
}

export function main (): void {
  const { endpoint, output, package: pkg, strict: isStrict } = yargs.strict().options({
    endpoint: {
      description: 'The endpoint to connect to (e.g. wss://kusama-rpc.polkadot.io) or relative path to a file containing the JSON output of an RPC state_getMetadata call',
      required: true,
      type: 'string'
    },
    output: {
      description: 'The target directory to write the data to',
      required: true,
      type: 'string'
    },
    package: {
      description: 'Optional package in output location (for extra definitions)',
      type: 'string'
    },
    strict: {
      description: 'Turns on strict mode, no output of catch-all generic versions',
      type: 'boolean'
    }
  }).argv;

  if (endpoint.startsWith('wss://') || endpoint.startsWith('ws://')) {
    try {
      const websocket = new WebSocket(endpoint);

      websocket.onclose = (event: { code: number; reason: string }): void => {
        console.error(`disconnected, code: '${event.code}' reason: '${event.reason}'`);
        process.exit(1);
      };

      websocket.onerror = (event: any): void => {
        console.error(event);
        process.exit(1);
      };

      websocket.onopen = (): void => {
        console.log('connected');
        websocket.send('{"id":"1","jsonrpc":"2.0","method":"state_getMetadata","params":[]}');
      };

      websocket.onmessage = (message: any): void => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        generate(JSON.parse(message.data).result, pkg, output, isStrict);
      };
    } catch (error) {
      process.exit(1);
    }
  } else {
    // eslint-disable-next-line @typescript-eslint/no-var-requires,@typescript-eslint/no-unsafe-member-access
    generate(require(path.join(process.cwd(), endpoint)).result, pkg, output, isStrict);
  }
}
