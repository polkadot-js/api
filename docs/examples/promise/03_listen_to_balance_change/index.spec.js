// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

const ApiPromise = require('../../../../packages/api/src/promise').default;

const Alice = '5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ';

describe('promise - 03 listen to balances change', () => {
  let api;

  beforeEach(async () => {
    api = await ApiPromise.create();
  });

  it('makes the query.balances available', () => {
    expect(api.query.balances).toBeDefined();
  });

  it('queries the balance', async () => {
    const aliceBalance = await api.query.balances.freeBalance(Alice);

    expect(String(aliceBalance)).toEqual('1152921504606846976');
  });
});
