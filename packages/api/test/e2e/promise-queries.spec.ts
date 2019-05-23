// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import testingPairs from '@polkadot/keyring/testingPairs';
import { EventRecord, Header } from '@polkadot/types';
import { LinkageResult } from '@polkadot/types/codec/Linkage';
import { ApiPromiseInterface } from '@polkadot/api/promise/types';

import Api from '@polkadot/api/promise';
import WsProvider from '@polkadot/rpc-provider/ws';

const ZERO = new BN(0);
const WS_URL = 'ws://127.0.0.1:9944';
// const WS_URL = 'wss://poc3-rpc.polkadot.io/';

describe('e2e queries', () => {
  const keyring = testingPairs({ type: 'ed25519' });
  let api: ApiPromiseInterface;

  beforeEach(async (done) => {
    if (!api) {
      api = await Api.create({
        provider: new WsProvider(WS_URL)
      });
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

    expect(balance).toBeInstanceOf(BN);
  });

  it('subscribes to rpc', (done) => {
    api.rpc.chain.subscribeNewHead((header) => {
      expect(header.blockNumber.isZero()).toBe(false);

      done();
    }).then().catch();
  });

  it('subscribes to finalized', (done) => {
    api.rpc.chain.subscribeFinalizedHeads((header) => {
      expect(header.blockNumber.isZero()).toBe(false);

      done();
    }).then().catch();
  });

  it('subscribes to derive', (done) => {
    api.derive.chain.subscribeNewHead((header) => {
      expect(header.blockNumber.isZero()).toBe(false);

      done();
    }).then().catch();
  });

  it('subscribes to queries', (done) => {
    api.query.system.accountNonce(keyring.ferdie.address(), (nonce) => {
      expect(nonce instanceof BN).toBe(true);

      done();
    }).then().catch();
  });

  it.skip('subscribes to queries (default)', (done) => {
    api.query.staking.validators(keyring.ferdie.address(), (prefs) => {
      expect(prefs.unstakeThreshold.toNumber()).toBe(3);

      done();
    }).then().catch();
  });

  it('subscribes to a linked map (staking.validators)', (done) => {
    api.query.staking.validators((prefs) => {
      expect(prefs instanceof LinkageResult).toBe(true);

      done();
    }).then().catch();
  });

  it('subscribes to multiple results (freeBalance.multi)', (done) => {
    api.query.balances.freeBalance.multi([
      keyring.alice.address(),
      keyring.bob.address(),
      '5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y',
      keyring.ferdie.address()
    ], (balances) => {
      expect(balances).toHaveLength(4);

      done();
    }).then().catch();
  });

  it('subscribes to multiple results (api.queryMulti)', (done) => {
    return api.queryMulti([
      [api.query.balances.freeBalance, keyring.alice.address()],
      [api.query.balances.freeBalance, keyring.bob.address()],
      [api.query.balances.freeBalance, '5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y'],
      [api.query.balances.freeBalance, keyring.ferdie.address()]
    ], (balances: Array<BN>) => {
      expect(balances).toHaveLength(4);

      done();
    });
  });

  it('subscribes to derived balances (balances.all)', (done) => {
    api.derive.balances.all(
      keyring.alice.address(),
      (all) => {
        expect(all.accountId.toString()).toEqual(keyring.alice.address());

        expect(all.freeBalance).toBeDefined();
        expect(all.freeBalance.gt(ZERO)).toBe(true);

        expect(all.availableBalance).toBeDefined();
        expect(all.availableBalance.gt(ZERO)).toBe(true);

        expect(all.reservedBalance).toBeDefined();
        expect(all.lockedBalance).toBeDefined();
        expect(all.vestedBalance).toBeDefined();
        done();
      }
    ).then().catch();
  });

  it('makes a query at a latest block (specified)', async () => {
    const header: any = await api.rpc.chain.getHeader();
    const events: any = await api.query.system.events.at(header.hash);

    expect(events.length).not.toEqual(0);
  });

  it('subscribes to events', (done) => {
    api.query.system.events((events) => {
      expect(events).not.toHaveLength(0);
      done();
    }).then().catch();
  });

  it('queries state using double map key', async () => {
    // TODO Update ['any', '0x1234'] to the key of a known event topic and update '[]' to the expected value
    const eventTopics = await api.query.system.eventTopics(['any', '0x1234']);

    expect(eventTopics.toString()).toEqual('[]');
  });

  it('subscribes to queries using double map key', async (done) => {
    // TODO Update ['any', '0x1234'] to the key of a known event topic and update '[]' to the expected value
    api.query.system.eventTopics(['any', '0x1234'], (eventTopics) => {
      expect(eventTopics.toString()).toEqual('[]');
      done();
    }).then().catch();
  });
});
