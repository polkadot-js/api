// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { MockState } from './types';

module.exports = async function send ({ requests, storage }: MockState, method: string, params: Array<any>): Promise<any> {
  if (!requests[method]) {
    throw new Error(`provider.send: Invalid method '${method}'`);
  }

  return requests[method](storage, params);
};
