// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { JsonRpcResponse } from '../types';
import type { WsState } from './types';

const isUndefined = require('@polkadot/util/is/undefined');

const onMessageResult = require('./onMessageResult');
const onMessageSubscribe = require('./onMessageSubscribe');

module.exports = function onMessage (self: WsState): (MessageEvent) => void {
  return (message: MessageEvent): void => {
    self.l.debug(() => ['received', message.data]);

    // flowlint-next-line unclear-type:off
    const response: JsonRpcResponse = JSON.parse(((message.data: any): string));

    return isUndefined(response.method)
      ? onMessageResult(self, response)
      : onMessageSubscribe(self, response);
  };
};
