// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { WsState } from './types';

module.exports = function onClose (self: WsState): () => void {
  return (): void => {
    self.l.debug(() => ['disconnected from', self.endpoint]);

    self.isConnected = false;
    self.emitter.emit('disconnected');

    if (self.autoConnect) {
      setTimeout(() => {
        // FIXME: This is a circular dependency
        require('./connect')(self);
      }, 1000);
    }
  };
};
