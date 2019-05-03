// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import testingPairs from '@polkadot/keyring/testingPairs';

import Api from '../../src/promise';

describe.skip('e2e queries', () => {
  const keyring = testingPairs({ type: 'ed25519' });
  let api;

  beforeEach(async (done) => {
    if (!api) {
      api = await Api.create();
    }

    jest.setTimeout(30000);
    done();
  });

  it('makes the runtime, rpc, state & extrinsics available', () => {
    expect(api.genesisHash).toBeDefined();
    expect(api.runtimeMetadata).toBeDefined();
    expect(api.runtimeVersion).toBeDefined();
    expect(api.rpc).toBeDefined();
    expect(api.query).toBeDefined();
    expect(api.tx).toBeDefined();
    expect(api.derive).toBeDefined();
  });

  it('queries state for a balance', async () => {
    const balance = await api.query.balances.freeBalance(keyring.alice.address());

    expect(
      balance.isZero()
    ).toBe(false);
  });

  it('subscribes to rpc', (done) => {
    api.rpc.chain.subscribeNewHead((header) => {
      expect(header.blockNumber.isZero()).toBe(false);

      done();
    });
  });

  it('subscribes to finalized', (done) => {
    api.rpc.chain.subscribeFinalizedHeads((header) => {
      expect(header.blockNumber.isZero()).toBe(false);

      done();
    });
  });

  it('subscribes to derive', (done) => {
    api.derive.chain.subscribeNewHead((header) => {
      expect(header.blockNumber.isZero()).toBe(false);

      done();
    });
  });

  it('subscribes to queries', (done) => {
    api.query.system.accountNonce(keyring.ferdie.address(), (nonce) => {
      expect(nonce instanceof BN).toBe(true);

      done();
    });
  });

  it.skip('subscribes to queries (default)', (done) => {
    api.query.staking.validators(keyring.ferdie.address(), (prefs) => {
      expect(prefs.unstakeThreshold.toNumber()).toBe(3);

      done();
    });
  });

  it('subscribes to multiple results (freeBalance.multi)', (done) => {
    api.query.balances.freeBalance.multi([
      keyring.alice.address(),
      keyring.bob.address(),
      keyring.ferdie.address(),
      '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFabHE'
    ], (balances) => {
      expect(balances).toHaveLength(4);

       console.error(balances);

       done();
    });
  });

  it('makes a query at a specific block', async () => {
    const header = await api.rpc.chain.getHeader();
    const events = await api.query.system.events.at(header.hash);

    expect(events.length).not.toEqual(0);
  });
});
