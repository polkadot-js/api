// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import WsProvider from '@polkadot/rpc-provider/ws';
import ApiPromise from '../../../src/promise';

describe('Kusama', (): void => {
  let api: ApiPromise;

  beforeEach(async (done): Promise<void> => {
    api = await ApiPromise.create({ provider: new WsProvider('wss://kusama-rpc.polkadot.io') });

    done();
  });

  it('retrieves the list of validators', async (): Promise<void> => {
    const intentions = await api.query.staking.validators();

    console.error(JSON.parse(JSON.stringify(intentions)))
  });
});
