// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

const ApiPromise = require('../../../../packages/api/src/promise').default;

const Alice = '5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ';

describe('promise - 05 read storage', () => {
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

  it.skip('makes api.query.session available', () => {
    // FIXME - why isn't .session available??
    expect(api.query.session).toBeDefined();
  });

  it.skip('retrieves the account nonce, block period, and validators via rpc calls', async () => {
    const [accountNonce, blockPeriod, validators] = await Promise.all([
      api.query.system.accountNonce(Alice),
      api.query.timestamp.blockPeriod(),
      api.query.session.validators()
    ]);

    expect([accountNonce, blockPeriod.toNumber(), validators]).toEqual([0, 5, []]);
  });

  it.skip('obtains validator balances', async () => {
    const validators = await api.query.session.validators();
    const validatorBalances = await validators.map((authorityId) =>
      api.query.balances.freeBalance(authorityId)
    );

    expect(validatorBalances).toEqual(1);
  });
});
