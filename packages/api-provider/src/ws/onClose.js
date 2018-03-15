// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { WsState } from './types';

const connect = require('./connect');

module.exports = function onClose (self: WsState): () => void {
  return (): void => {
    self.l.debug(() => ['disconnected from', self.endpoint]);

    self.isConnected = false;

    if (self.autoConnect) {
      setTimeout(() => connect(self), 1000);
    }
  };
};
