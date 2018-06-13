// Copyright 2017-2018 @polkadot/api-provider authors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { MockState } from './types';

module.exports = async function unsubscribe (self: MockState, _: string, id: number): Promise<boolean> {
  const method = self.subscriptionMap[id];

  self.l.debug(() => ['unsubscribe', id, method]);

  if (!method) {
    throw new Error(`Unable to find subscription for ${id}`);
  }

  delete self.subscriptionMap[id];
  delete self.subscriptions[method].callbacks[id];

  return true;
};
