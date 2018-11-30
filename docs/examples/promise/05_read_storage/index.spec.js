// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

const ApiPromise = require('../../../../packages/api/src/promise').default;

const Alice = '5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ';

describe.skip('promise - 05 read storage', () => {
  let api;

  beforeEach(async () => {
    api = await ApiPromise.create();
    jest.setTimeout(30000);
  });

  afterEach(() => {
    jest.setTimeout(5000);
  });

  it('makes various api.query available', () => {
    expect(api.query.system).toBeDefined();
    expect(api.query.timestamp).toBeDefined();
    expect(api.query.balances).toBeDefined();
    expect(api.query.session).toBeDefined();
  });

  it('makes api.query.session available', () => {
    expect(api.query.session).toBeDefined();
  });

  it('retrieves the validators via rpc calls', async () => {
    const validators = await api.query.session.validators();

    expect(validators[0].toString()).toEqual("5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ");
  });

  it('retrieves the account nonce via rpc calls', async () => {
    const accountNonce = await api.query.system.accountNonce(Alice);

    expect(accountNonce.toNumber()).toEqual(0);
  });

  it('retrieves the block period via rpc calls', async () => {
    const blockPeriod = await api.query.timestamp.blockPeriod();

    expect(blockPeriod.toNumber()).toEqual(5);
  });

  it('obtains validator balances', async () => {
    const validators = await api.query.session.validators();
    expect(String(validators[0])).toEqual("5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ");

    const aliceBalance = await api.query.balances.freeBalance(validators[0]);
    expect(String(aliceBalance)).toBe("1152921504606846976");
  });
});
