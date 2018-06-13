// Copyright 2017-2018 @polkadot/api-provider authors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { WsState } from './types';

module.exports = function onOpen (self: WsState): () => boolean {
  return (): boolean => {
    self.l.debug(() => ['connected to', self.endpoint]);

    self.isConnected = true;
    self.emitter.emit('connected');

    Object.keys(self.queued).forEach((id) => {
      try {
        self.websocket.send(
          // flowlint-next-line unclear-type:off
          self.queued[((id: any): number)]
        );

        // flowlint-next-line unclear-type:off
        delete self.queued[((id: any): number)];
      } catch (error) {
        self.l.error(error);
      }
    });

    return true;
  };
};
