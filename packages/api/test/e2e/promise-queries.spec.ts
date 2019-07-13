// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';

import { HeaderExtended } from '@polkadot/api-derive';
import { DerivedBalances } from '@polkadot/api-derive/types';
import WsProvider from '@polkadot/rpc-provider/ws';
import testingPairs from '@polkadot/keyring/testingPairs';
import { LinkageResult } from '@polkadot/types/codec/Linkage';
import { Balance, EventRecord, Hash, Header, Index, Option, SessionIndex, ValidatorPrefs, Vector } from '@polkadot/types';

import Api from './../../src/promise';

const ZERO = new BN(0);
const WS_URL = 'ws://127.0.0.1:9944';
// const WS_URL = 'wss://poc3-rpc.polkadot.io/';

describe.skip('Promise e2e queries', () => {
  const keyring = testingPairs({ type: 'ed25519' });
  let api: Api;

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

  it('allows retrieval of an fallback entry (once-off query)', async () => {
    const nonce = await api.query.system.accountNonce('5DSo5RVtfrtgHoz2c7jK7Tca7FgJgpCzFnxoRVDeYUQcKPng');

    expect(nonce.toHex()).toEqual('0x0000000000000000');
  });

  it('allows retrieval of fallback when at query is made', async () => {
    const header = await api.rpc.chain.getHeader() as Header;
    const nonce = await api.query.system.accountNonce.at(header.hash, '5DSo5RVtfrtgHoz2c7jK7Tca7FgJgpCzFnxoRVDeYUQcKPng');

    expect(nonce.toHex()).toEqual('0x0000000000000000');
  });

  it('queries state for a balance', async () => {
    return (
      api.query.balances.freeBalance(keyring.alice.address, (balance: Balance) => {
        expect(balance).toBeInstanceOf(BN);
        expect(balance.isZero()).toBe(false);
      })
    );
  });

  it('subscribes to rpc', (done) => {
    return (
      api.rpc.chain.subscribeNewHead((header: Header) => {
        expect(header.blockNumber.isZero()).toBe(false);

        done();
      })
    );
  });

  it('subscribes to finalized', (done) => {
    return (
      api.rpc.chain.subscribeFinalizedHeads((header: Header) => {
        expect(header.blockNumber.isZero()).toBe(false);

        done();
      })
    );
  });

  it('subscribes to derive', (done) => {
    return (
      api.derive.chain.subscribeNewHead((header: HeaderExtended) => {
        expect(header.blockNumber.isZero()).toBe(false);

        done();
      })
    );
  });

  it('subscribes to queries', (done) => {
    return (
      api.query.system.accountNonce(keyring.ferdie.address, (nonce: Index) => {
        expect(nonce instanceof BN).toBe(true);

        done();
      })
    );
  });

  it.skip('subscribes to queries (default)', (done) => {
    return (
      api.query.staking.validators(keyring.ferdie.address, (prefs: ValidatorPrefs) => {
        expect(prefs.unstakeThreshold.toNumber()).toBe(3);

        done();
      })
    );
  });

  it('subscribes to a linked map (staking.validators)', (done) => {
    return (
      api.query.staking.validators((prefs: LinkageResult) => {
        expect(prefs instanceof LinkageResult).toBe(true);

        done();
      })
    );
  });

  it('subscribes to multiple results (freeBalance.multi)', (done) => {
    return (
      api.query.balances.freeBalance.multi([
        keyring.alice.address,
        keyring.bob.address,
        '5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y',
        keyring.ferdie.address
      ], (balances) => {
        expect(balances).toHaveLength(4);

        done();
      })
    );
  });

  it('subscribes to multiple results (api.queryMulti)', (done) => {
    return api.queryMulti([
      [api.query.balances.freeBalance, keyring.alice.address],
      [api.query.balances.freeBalance, keyring.bob.address],
      [api.query.balances.freeBalance, '5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y'],
      [api.query.balances.freeBalance, keyring.ferdie.address]
    ], (balances: Array<Balance>) => {
      expect(balances).toHaveLength(4);

      done();
    });
  });

  it('subscribes to derived balances (balances.all)', (done) => {
    return (
      api.derive.balances.all(
        keyring.alice.address,
        (all: DerivedBalances) => {
          expect(all.accountId.toString()).toEqual(keyring.alice.address);

          expect(all.freeBalance).toBeDefined();
          expect(all.freeBalance.gt(ZERO)).toBe(true);
          expect(all.availableBalance).toBeDefined();
          expect(all.availableBalance.gt(ZERO)).toBe(true);
          expect(all.reservedBalance).toBeDefined();
          expect(all.lockedBalance).toBeDefined();
          expect(all.vestedBalance).toBeDefined();
          done();
        }
      )
    );
  });

  it('can retrive header by hash', async () => {
    const latest = await api.rpc.chain.getHeader() as Header;
    const specific = await api.rpc.chain.getHeader(latest.hash) as Header;

    expect(latest.hash).toEqual(specific.hash);
  });

  it('makes a query at a latest block (specified)', async () => {
    const header = await api.rpc.chain.getHeader() as Header;
    const events = await api.query.system.events.at(header.hash) as Vector<EventRecord>;

    expect(events.length).not.toEqual(0);

    events.forEach(({ event: { data, method, section }, phase, topics }: EventRecord) => {
      console.error(phase.toString(), `: ${section}.${method}`, data.toString(), topics.toString());
    });
  });

  it('subscribes to events', (done) => {
    return (
      api.query.system.events((events) => {
        expect(events).not.toHaveLength(0);
        done();
      })
    );
  });

  describe('with plain type', () => {
    it('queries a correct value', async () => {
      const sessionIndex = await api.query.session.currentIndex() as SessionIndex;

      expect(sessionIndex.toNumber()).toBeGreaterThanOrEqual(0);
    });

    it('queries correct value at a specified block', async () => {
      const header = await api.rpc.chain.getHeader() as Header;
      const sessionIndex = await api.query.session.currentIndex.at(header.hash) as SessionIndex;

      expect(sessionIndex.toNumber()).toBeGreaterThanOrEqual(0);
    });

    it('subscribes to query and get correct result', (done) => {
      return api.query.session.currentIndex((sessionIndex: SessionIndex) => {
        expect(sessionIndex.toNumber()).toBeGreaterThanOrEqual(0);
        done();
      });
    });

    it('queries correct hash', async () => {
      const hash: Hash = await api.query.session.currentIndex.hash();

      expect(hash).toBeDefined();
    });

    it('gets correct key', async () => {
      const key = api.query.session.currentIndex.key();
      const sessionIndexData = await api.rpc.state.getStorage(key) as Option<any>;
      const sessionIndexRPC = new SessionIndex(sessionIndexData.unwrapOr(undefined));

      expect(sessionIndexRPC.toNumber()).toBeGreaterThanOrEqual(0);
    });

    it('queries correct size', async () => {
      const size = await api.query.session.currentIndex.size();

      expect(size).not.toHaveLength(0);
      expect(size.toNumber()).toBeGreaterThanOrEqual(0);
    });
  });

  describe('with map type', () => {
    it('queries correct value', async () => {
      const balance = await api.query.balances.freeBalance(keyring.alice.address) as Balance;

      expect(balance.isZero()).toBe(false);
    });

    it('queries correct value at a specified block', async () => {
      // assume the account Alice is only used in test(the balance of Alice does not change in this test case)
      const balance = await api.query.balances.freeBalance(keyring.alice.address);
      const header = await api.rpc.chain.getHeader() as Header;
      const balanceAt = await api.query.balances.freeBalance.at(header.hash, keyring.alice.address) as Balance;

      expect(balanceAt.isZero()).toBe(false);
      expect(balanceAt.toString()).toEqual(balance.toString());
    });

    it('subscribes to query and get correct result', async (done) => {
      // assume the account Alice is only used in test(the balance of Alice does not change in this test case)
      const balance = await api.query.balances.freeBalance(keyring.alice.address);

      return api.query.balances.freeBalance(keyring.alice.address, (balanceSubscribed: Balance) => {
        expect(balanceSubscribed.isZero()).toBe(false);
        expect(balanceSubscribed.toString()).toEqual(balance.toString());
        done();
      });
    });

    it('queries correct hash', async () => {
      const hash = await api.query.balances.freeBalance.hash(keyring.alice.address);

      expect(hash).toBeDefined();
    });

    it('gets correct key', async () => {
      // assume the account Alice is only used in test(the balance of Alice does not change in this test case)
      const key = api.query.balances.freeBalance.key(keyring.alice.address);
      const balanceData = await api.rpc.state.getStorage(key) as Option<any>;
      const balanceRPC = new Balance(balanceData.unwrapOr(undefined));

      const balance = await api.query.balances.freeBalance(keyring.alice.address);

      expect(balanceRPC.isZero()).toBe(false);
      expect(balanceRPC.toString()).toEqual(balance.toString());
    });

    it('queries multiple results', async () => {
      // assume the account Alice and Bob are only used in test(the balance of them do not change in this test case)
      const balanceAlice = await api.query.balances.freeBalance(keyring.alice.address);
      const balanceBob = await api.query.balances.freeBalance(keyring.bob.address);

      const balances = await api.query.balances.freeBalance.multi([
        keyring.alice.address,
        keyring.bob.address
      ]);

      expect(balances).toHaveLength(2);
      expect((balances as any)[0].toString()).toEqual(balanceAlice.toString());
      expect((balances as any)[1].toString()).toEqual(balanceBob.toString());
    });

    it('subscribes to multiple queries and get correct results', async (done) => {
      // assume the account Alice and Bob are only used in test(the balance of them do not change in this test case)
      const balanceAlice = await api.query.balances.freeBalance(keyring.alice.address);
      const balanceBob = await api.query.balances.freeBalance(keyring.bob.address);

      return api.query.balances.freeBalance.multi([
        keyring.alice.address,
        keyring.bob.address
      ], (balances) => {
        expect(balances).toHaveLength(2);
        expect(balances[0].toString()).toEqual(balanceAlice.toString());
        expect(balances[1].toString()).toEqual(balanceBob.toString());
        done();
      });
    });

    it('queries correct size', async () => {
      const size = await api.query.balances.freeBalance.size(keyring.alice.address);

      expect(size.toNumber()).not.toEqual(0);
    });
  });

  // TODO Update ['any', '0x1234'] to the key of a known event topic and update EXPECTED_VALUE to the expected value
  describe('with double map type', () => {
    const KEY1 = 'any';
    const KEY2 = '0x1234';
    it('queries correct value', async () => {
      const eventTopics = await api.query.system.eventTopics(KEY1, KEY2);

      expect(eventTopics.toJSON()).toEqual([]);
    });

    it('queries correct value at a specified block', async () => {
      const header = await api.rpc.chain.getHeader() as Header;

      // TODO check & fix: this will throw the error: Encoding for input doesn't match output, created 0x00 from 0x
      const eventTopicsAt = await api.query.system.eventTopics.at(header.hash, KEY1, KEY2);
      expect(eventTopicsAt.toJSON()).toEqual([]);

      // const eventTopicsAt = await api.query.system.eventTopics.at(header.hash, KEY1, KEY2);
      // expect(eventTopicsAt.toJSON()).toEqual([]);
    });

    it('subscribes to query and get correct result', async (done) => {
      return api.query.system.eventTopics(KEY1, KEY2, (eventTopicsAt) => {
        expect(eventTopicsAt.toJSON()).toEqual([]);
        done();
      });
    });

    it('queries correct hash', async () => {
      const hash = await api.query.system.eventTopics(KEY1, KEY2);

      expect(hash).toBeDefined();
    });

    it('gets correct key', async () => {
      const key = api.query.system.eventTopics.key(KEY1, KEY2);
      const eventTopicsData = await api.rpc.state.getStorage(key) as Option<any>;

      expect(eventTopicsData.unwrapOr(undefined)).toEqual(undefined);
    });

    it('queries multiple results', async () => {
      const eventTopicsList = await api.query.system.eventTopics.multi([
        [KEY1, KEY2]
      ]);

      expect(eventTopicsList).toHaveLength(1);
      expect((eventTopicsList as any)[0].toJSON()).toEqual([]);
    });

    it('subscribes to multiple queries and get correct results', async (done) => {
      return api.query.system.eventTopics.multi([
        [KEY1, KEY2]
      ], (eventTopicsList) => {
        expect(eventTopicsList).toHaveLength(1);
        expect(eventTopicsList[0].toJSON()).toEqual([]);
        done();
      });
    });

    it('queries correct size', async () => {
      const size = await api.query.system.eventTopics.size(KEY1, KEY2);

      expect(size.toNumber()).toEqual(0);
    });
  });
});
