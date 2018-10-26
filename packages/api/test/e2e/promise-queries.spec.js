// Copyright 2017-2018 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import testingPairs from '@polkadot/keyring/testingPairs';

import ApiPromise from '../../src/promise';

const keyring = testingPairs();

describe.skip('e2e queries', () => {
  let api;

  beforeEach(async () => {
    api = await ApiPromise.create();

    console.error(api);
  });

  it('makes the runtime, rpc, state & extrinsics available', () => {
    expect(api.genesisHash).toBeDefined();
    expect(api.runtimeMetadata).toBeDefined();
    expect(api.runtimeVersion).toBeDefined();
    expect(api.rpc).toBeDefined();
    expect(api.query).toBeDefined();
    expect(api.tx).toBeDefined();
  });

  it('queries state for a balance', async () => {
    const balance = await api.query.balances.freeBalance(keyring.alice.address());

    expect(
      balance.isZero()
    ).toBe(false);
  });

  it('subscribes to queries', (done) => {
    api.rpc.chain.subscribeNewHead((header) => {
      expect(header.blockNumber.isZero()).toBe(false);

      done();
    });
  });
});
