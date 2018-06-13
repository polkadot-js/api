// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { WsState } from './types';

const assert = require('@polkadot/util/assert');
const isUndefined = require('@polkadot/util/is/undefined');

const send = require('./send');

module.exports = async function unsubscribe (self: WsState, method: string, id: number): Promise<boolean> {
  assert(!isUndefined(self.subscriptions[id]), `Unable to find active subscription=${id}`);

  delete self.subscriptions[id];

  const result = await send(self, method, [id]);

  // flowlint-next-line unclear-type:off
  return ((result: any): boolean);
};
