// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { WsState } from './types';

import onClose from './onClose';
import onError from './onError';
import onMessage from './onMessage';
import onOpen from './onOpen';

export default function connect (self: WsState): void {
  try {
    self.websocket = new WebSocket(self.endpoint);

    self.websocket.onclose = onClose(self);
    self.websocket.onerror = onError(self);
    self.websocket.onmessage = onMessage(self);
    self.websocket.onopen = onOpen(self);
  } catch (error) {
    self.l.error(error);
  }
}
