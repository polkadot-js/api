// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { ProviderInterface$Callback } from '../types';
import type { HttpState } from './types';

module.exports = async function subscribe (self: HttpState, method: string, params: Array<mixed>, cb: ProviderInterface$Callback): Promise<number> {
  throw new Error('Subscriptions has not been implemented');
};
