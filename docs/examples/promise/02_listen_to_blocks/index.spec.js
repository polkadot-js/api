// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

const ApiPromise = require('../../../../packages/api/src/promise').default;

describe('promise - 02 listen to blocks', () => {
  let api;

  beforeEach(async () => {
    api = await ApiPromise.create();
  });

  it('makes the rpc.chain available', () => {
    expect(api.rpc.chain).toBeDefined();
  });

  it('creates a subscription id when subscribing to the best block', async () => {
    const subscriptionId = await api.rpc.chain.subscribeNewHead();

    expect(subscriptionId).toEqual(3);
  });
});
