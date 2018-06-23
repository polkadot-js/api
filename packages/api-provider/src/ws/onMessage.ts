// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { JsonRpcResponse } from '../types';
import { WsState } from './types';

import isUndefined from '@polkadot/util/is/undefined';

import onMessageResult from './onMessageResult';
import onMessageSubscribe from './onMessageSubscribe';

export default function onMessage (self: WsState): (MessageEvent) => void {
  return (message: MessageEvent): void => {
    self.l.debug(() => ['received', message.data]);

    const response: JsonRpcResponse = JSON.parse(((message.data: any): string));

    return isUndefined(response.method)
      ? onMessageResult(self, response)
      : onMessageSubscribe(self, response);
  };
}
