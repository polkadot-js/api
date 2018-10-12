// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import testingPairs from '@polkadot/keyring/testingPairs';

import Api from '../../src/promise';

const keyring = testingPairs();

describe.skip('e2e transfer', () => {
  let api;

  beforeEach(async () => {
    api = await Api.create();
  });

  it('makes a transfer', async () => {
    const nonce = await api.query.system.accountNonce(keyring.alice.address());
    const hash = await api.tx.balances
      .transfer(keyring.bob.address(), 12345)
      .sign(keyring.alice, nonce)
      .send();

    expect(
      hash.toString()
    ).not.toEqual('0x');
  });
});
