// Copyright 2017-2018 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { MockState } from './types';

export default async function send ({ requests, db }: MockState, method: string, params: Array<any>): Promise<any> {
  if (!requests[method]) {
    throw new Error(`provider.send: Invalid method '${method}'`);
  }

  return requests[method](db, params);
}
