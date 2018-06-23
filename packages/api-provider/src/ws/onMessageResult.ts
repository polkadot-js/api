// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { JsonRpcResponse } from '../types';
import { WsState } from './types';

export default function onMessageResult (self: WsState, response: JsonRpcResponse): void {
  self.l.debug(() => ['handling: response =', response, 'id =', response.id]);

  const handler = self.handlers[response.id];

  if (!handler) {
    self.l.error(`Unable to find handler for id=${response.id}`);
    return;
  }

  try {
    const { subscription } = self.handlers[response.id];
    const result = self.coder.decodeResponse(response);

    if (subscription) {
      self.subscriptions[result as number] = {
        callback: subscription
      };
    }

    handler.callback(null, result);
  } catch (error) {
    handler.callback(error, undefined);
  }

  delete self.handlers[response.id];
}
