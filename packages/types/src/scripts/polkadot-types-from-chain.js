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
const generateConst = require('./generateTypes/consts').default;
const generateQuery = require('./generateTypes/query').default;

const { endpoint, output } = yargs.strict().options({
  endpoint: {
    description: 'The endpoint to connect to, e.g. wss://kusama-rpc.polkadot.io',
    type: 'string',
    required: true
  },
  output: {
    description: 'The target directory to write the data to',
    type: 'string',
    required: true
  }
}).argv;
let websocket = null;

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
  const data = JSON.parse(message.data);
  const metaHex = data.result;

  console.log(`Received metadata, ${formatNumber((metaHex.length - 2) / 2)} bytes`);

  generateConst(path.join(process.cwd(), output, 'consts.types.ts'), metaHex);
  generateQuery(path.join(process.cwd(), output, 'query.types.ts'), metaHex);

  process.exit(0);
}

websocket = new WebSocket(endpoint);
websocket.onclose = onSocketClose;
websocket.onerror = onSocketError;
websocket.onmessage = onSocketMessage;
websocket.onopen = onSocketOpen;
