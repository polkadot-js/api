// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { MockState, MockState$Subscription$Callback } from './types';

module.exports = async function subscribe (self: MockState, method: string, params: Array<any>): Promise<number> {
  self.l.debug(() => ['subscribe', method, params]);

  if (self.subscriptions[method]) {
    const callback = ((params.pop(): any): MockState$Subscription$Callback);
    const id = ++self.subscriptionId;

    self.subscriptions[method].callbacks[id] = callback;
    self.subscriptionMap[id] = method;

    callback(null, self.subscriptions[method].lastValue);

    return id;
  }

  throw new Error(`provider.subscribe: Invalid method '${method}'`);
};
