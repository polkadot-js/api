// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import testingPairs from '@polkadot/keyring/testingPairs';

import Api from '../../src/promise';

const keyring = testingPairs();

describe.skip('e2e transactions', () => {
  let api;
  let nonce;

  beforeEach(async () => {
    api = await Api.create();
    jest.setTimeout(30000);
  });

  afterEach(() => {
    jest.setTimeout(5000);
  });

  it('makes a transfer', async (done) => {
    const nonce = await api.query.system.accountNonce(keyring.dave.address());

    await api.tx.balances
      .transfer('12ghjsRJpeJpUQaCQeHcBv9pRQA3tdcMxeL8cVk9JHWJGHjd', 12345)
      .sign(keyring.dave, nonce)
      .send((status) => {
        if (status.type === 'Finalised' && status.events && status.events.length) {
          done();
        }
      });
  });

  it('makes a proposal', async () => {
    const nonce = await api.query.system.accountNonce(keyring.alice.address());

    // don't wait for status, just get hash
    const hash = await api.tx.democracy
      .propose(api.tx.consensus.setCode('0xdeadbeef'), 10000)
      .sign(keyring.alice, nonce)
      .send();

    expect(
      hash.toString()
    ).not.toEqual('0x');
  });
});
