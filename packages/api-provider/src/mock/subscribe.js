// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { MockState, MockState$Subscription$Callback } from './types';

module.exports = async function subscribe (self: MockState, method: string, params: Array<mixed>): Promise<number> {
  self.l.debug(() => ['subscribe', method, params]);

  if (self.subscriptions[method]) {
    // flowlint-next-line unclear-type:off
    const callback = ((params.pop(): any): MockState$Subscription$Callback);
    const id = ++self.subscriptionId;

    self.subscriptions[method].callbacks[id] = callback;
    self.subscriptionMap[id] = method;

    callback(null, self.subscriptions[method].lastValue);

    return id;
  }

  throw new Error(`provider.subscribe: Invalid method '${method}'`);
};
