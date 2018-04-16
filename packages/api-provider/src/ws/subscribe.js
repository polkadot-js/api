// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { ProviderInterface$Callback } from '../types';
import type { WsState } from './types';

const send = require('./send');

module.exports = async function subscribe (self: WsState, method: string, params: Array<mixed>, subscription: ProviderInterface$Callback): Promise<number> {
  const id = await send(self, method, params, subscription);

  // flowlint-next-line unclear-type:off
  return ((id: any): number);
};
