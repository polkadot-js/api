// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { JsonRpcResponse } from '../types';
import type { WsState } from './types';

module.exports = function onMessageSubscribe (self: WsState, response: JsonRpcResponse): void {
  const handler = self.subscriptions[response.subscription];

  if (!handler) {
    self.l.error(`Unable to find handler for subscription=${response.subscription}`);
    return;
  }

  try {
    const result = self.coder.decodeResponse(response);

    handler.callback(null, result);
  } catch (error) {
    handler.callback(error);
  }
};
