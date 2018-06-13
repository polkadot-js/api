// Copyright 2017-2018 @polkadot/api-provider authors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { HttpState } from './types';

module.exports = async function unsubscribe (self: HttpState, method: string, id: number): Promise<boolean> {
  throw new Error('Subscriptions has not been implemented');
};
