// Copyright 2017-2020 @polkadot/typegen authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import path from 'path';
import yargs from 'yargs';
import { formatNumber } from '@polkadot/util';

import generateConst from './generate/consts';
import generateQuery from './generate/query';
import generateTx from './generate/tx';

if (typeof WebSocket === 'undefined') {
  (global as any).WebSocket = require('websocket').w3cwebsocket;
}

let websocket: any = null;

function generate (metaHex: string, pkg: string | undefined, output: string, isStrict?: boolean): void {
  console.log(`Generating from metadata, ${formatNumber((metaHex.length - 2) / 2)} bytes`);

  const extraTypes = pkg
    ? { [pkg]: require(path.join(process.cwd(), output, 'definitions')) }
    : {};

  generateConst(path.join(process.cwd(), output, 'augment.consts.ts'), metaHex, extraTypes, isStrict);
  generateQuery(path.join(process.cwd(), output, 'augment.query.ts'), metaHex, extraTypes, isStrict);
  generateTx(path.join(process.cwd(), output, 'augment.tx.ts'), metaHex, extraTypes, isStrict);

  process.exit(0);
}

function onSocketClose (event: any): void {
  console.error(`disconnected, code: '${event.code}' reason: '${event.reason}'`);

  process.exit(1);
}

function onSocketError (event: any): void {
  console.error(event);

  process.exit(1);
}

function onSocketOpen (): boolean {
  console.log('connected');

  websocket.send('{"id":"1","jsonrpc":"2.0","method":"state_getMetadata","params":[]}');

  return true;
}

export default function main (): void {
  const { endpoint, output, package: pkg, strict: isStrict } = yargs.strict().options({
    endpoint: {
      description: 'The endpoint to connect to, e.g. wss://kusama-rpc.polkadot.io or relative file to JSON output',
      type: 'string',
      required: true
    },
    output: {
      description: 'The target directory to write the data to',
      type: 'string',
      required: true
    },
    package: {
      description: 'Optional package in output location (for extra definitions)',
      type: 'string'
    },
    strict: {
      description: 'Turns on stirct mode, not outputting genric versions',
      type: 'boolean'
    }
  }).argv;

  if (endpoint.startsWith('wss://') || endpoint.startsWith('ws://')) {
    websocket = new WebSocket(endpoint);
    websocket.onclose = onSocketClose;
    websocket.onerror = onSocketError;
    websocket.onopen = onSocketOpen;
    websocket.onmessage = (message: any): void => {
      generate(JSON.parse(message.data).result, pkg, output, isStrict);
    };
  } else {
    generate(require(path.join(process.cwd(), endpoint)).result, pkg, output, isStrict);
  }
}
