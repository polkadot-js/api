// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { MockState } from './types';

module.exports = async function send (self: MockState, method: string, params: Array<mixed>): Promise<mixed> {
  throw new Error('provider.send not implemented');
};
