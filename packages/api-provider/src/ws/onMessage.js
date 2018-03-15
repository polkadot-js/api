// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { JsonRpcResponse } from '../types';
import type { WsState } from './types';

module.exports = function onMessage (self: WsState): (MessageEvent) => void {
  return (message: MessageEvent): void => {
    // flowlint-next-line unclear-type:off
    const response: JsonRpcResponse = JSON.parse(((message.data: any): string));
    const handler = self.handlers[response.id];

    if (!handler) {
      self.l.error(`Unable to find handler for id=${response.id}`);
      return;
    }

    try {
      const result = self.coder.decodeResponse(response);

      handler.callback(null, result);
    } catch (error) {
      handler.callback(error);
    }

    delete self.handlers[response.id];
  };
};
