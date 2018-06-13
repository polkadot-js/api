// Copyright 2017-2018 @polkadot/api-provider authors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

if (typeof WebSocket === 'undefined') {
  global.WebSocket = require('websocket').w3cwebsocket;
}
