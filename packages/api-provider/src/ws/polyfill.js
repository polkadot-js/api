// ISC, Copyright 2017 Jaco Greeff
// @flow

if (typeof WebSocket === 'undefined') {
  global.WebSocket = require('websocket').w3cwebsocket;
}
