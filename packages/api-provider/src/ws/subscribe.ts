// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { ProviderInterface$Callback } from '../types';
import { WsState } from './types';

import send from './send';

export default async function subscribe (self: WsState, method: string, params: Array<any>, subscription: ProviderInterface$Callback): Promise<number> {
  const id = await send(self, method, params, subscription);

  return id as number;
}
