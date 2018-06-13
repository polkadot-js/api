// Copyright 2017-2018 @polkadot/api-provider authors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { WsState } from './types';

const onClose = require('./onClose');
const onError = require('./onError');
const onMessage = require('./onMessage');
const onOpen = require('./onOpen');

module.exports = function connect (self: WsState): void {
  self.websocket = new WebSocket(self.endpoint);

  self.websocket.onclose = onClose(self);
  self.websocket.onerror = onError(self);
  self.websocket.onmessage = onMessage(self);
  self.websocket.onopen = onOpen(self);
};
