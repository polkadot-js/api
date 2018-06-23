// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { WsState } from './types';

import assert from '@polkadot/util/assert';
import isUndefined from '@polkadot/util/is/undefined';

import send from './send';

export default async function unsubscribe (self: WsState, method: string, id: number): Promise<boolean> {
  assert(!isUndefined(self.subscriptions[id]), `Unable to find active subscription=${id}`);

  delete self.subscriptions[id];

  const result = await send(self, method, [id]);

  return ((result: any): boolean);
}
