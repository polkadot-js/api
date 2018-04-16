// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { JsonRpcResponse } from '../types';
import type { WsState } from './types';

module.exports = function onMessageResult (self: WsState, response: JsonRpcResponse): void {
  const handler = self.handlers[response.id];

  if (!handler) {
    self.l.error(`Unable to find handler for id=${response.id}`);
    return;
  }

  try {
    const { subscription } = self.handlers[response.id];
    const result = self.coder.decodeResponse(response);

    if (subscription) {
      // flowlint-next-line unclear-type:off
      self.subscriptions[((result: any): number)] = {
        callback: subscription
      };
    }

    handler.callback(null, result);
  } catch (error) {
    handler.callback(error);
  }

  delete self.handlers[response.id];
};
