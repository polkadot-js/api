// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { JsonRpcResponse } from '../types';
import { WsState } from './types';

export default function onMessageSubscribe (self: WsState, response: JsonRpcResponse): void {
  self.l.debug(() => ['handling: response =', response, 'subscription =', response.params.subscription]);

  const handler = self.subscriptions[response.params.subscription];

  if (!handler) {
    self.l.error(`Unable to find handler for subscription=${response.params.subscription}`);
    return;
  }

  try {
    const result = self.coder.decodeResponse(response);

    handler.callback(null, result);
  } catch (error) {
    handler.callback(error);
  }
}
