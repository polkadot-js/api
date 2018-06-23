// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { WsState } from './types';

import assert from '@polkadot/util/assert';
import isNull from '@polkadot/util/is/null';

export default function onOpen (self: WsState): () => boolean {
  return (): boolean => {
    assert(!isNull(self.websocket), 'WebSocket cannot be null in onOpen');

    self.l.debug(() => ['connected to', self.endpoint]);

    self.isConnected = true;
    self.emitter.emit('connected');

    Object.keys(self.queued).forEach((id) => {
      try {
        // @ts-ignore checked above
        self.websocket.send(
          self.queued[id]
        );

        delete self.queued[id];
      } catch (error) {
        self.l.error(error);
      }
    });

    return true;
  };
};
