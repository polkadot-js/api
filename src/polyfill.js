// ISC, Copyright 2017 Jaco Greeff
// @flow

if (typeof fetch === 'undefined') {
  require('isomorphic-fetch');
}

if (typeof WebSocket === 'undefined') {
  global.WebSocket = require('ws');
}
