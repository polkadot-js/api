// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { WsState } from './types';

export default function onOpen (self: WsState): () => boolean {
  return (): boolean => {
    self.l.debug(() => ['connected to', self.endpoint]);

    self.isConnected = true;
    self.emitter.emit('connected');

    Object.keys(self.queued).forEach((id) => {
      try {
        self.websocket.send(
          self.queued[((id: any): number)]
        );

        delete self.queued[((id: any): number)];
      } catch (error) {
        self.l.error(error);
      }
    });

    return true;
  };
};
