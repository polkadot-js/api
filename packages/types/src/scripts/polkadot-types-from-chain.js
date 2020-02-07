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

if (typeof WebSocket === 'undefined') {
  global.WebSocket = require('websocket').w3cwebsocket;
}

const path = require('path');
const yargs = require('yargs');
const { formatNumber } = require('@polkadot/util');
const generateConst = require('./generate/consts').default;
const generateQuery = require('./generate/query').default;
const generateTx = require('./generate/tx').default;

const { endpoint, output, package, strict: isStrict } = yargs.strict().options({
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
    description: 'Optional package in output location (for extra definitions)'
  },
  strinct: {
    description: 'Turns on stirct mode, not outputting genric versions',
    type: 'boolean'
  }
}).argv;
let websocket = null;

function generate (metaHex) {
  console.log(`Generating from metadata, ${formatNumber((metaHex.length - 2) / 2)} bytes`);

  const extraTypes = package
    ? { [package]: require(path.join(process.cwd(), output, 'definitions')) }
    : {};

  generateConst(path.join(process.cwd(), output, 'augment.consts.ts'), metaHex, extraTypes, isStrict);
  generateQuery(path.join(process.cwd(), output, 'augment.query.ts'), metaHex, extraTypes, isStrict);
  generateTx(path.join(process.cwd(), output, 'augment.tx.ts'), metaHex, extraTypes, isStrict);

  process.exit(0);
}

function onSocketClose (event) {
  console.error(`${endpoint} disconnected, code: '${event.code}' reason: '${event.reason}'`);

  process.exit(1);
}

function onSocketError (event) {
  console.error(event);

  process.exit(1);
}

function onSocketOpen () {
  console.log(`${endpoint} connected`);

  websocket.send('{"id":"1","jsonrpc":"2.0","method":"state_getMetadata","params":[]}');

  return true;
}

function onSocketMessage (message) {
  generate(JSON.parse(message.data).result);
}

if (endpoint.startsWith('wss://') || endpoint.startsWith('ws://')) {
  websocket = new WebSocket(endpoint);
  websocket.onclose = onSocketClose;
  websocket.onerror = onSocketError;
  websocket.onmessage = onSocketMessage;
  websocket.onopen = onSocketOpen;
} else {
  generate(require(path.join(process.cwd(), endpoint)).result);
}
