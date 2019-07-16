// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';

import { DerivedBalances } from '@polkadot/api-derive/types';
import testingPairs from '@polkadot/keyring/testingPairs';
import WsProvider from '@polkadot/rpc-provider/ws';
import { Balance, Header, Index, Option, U32 } from '@polkadot/types';

import ApiPromise from '../../../src/promise';
import describeE2E from '../../util/describeE2E';

const ZERO = new BN(0);

// The following tests require a development node with the default funded testing accounts
describeE2E({
  except: [
    'remote-polkadot-alexander',
    'remote-substrate-1.0'
  ]
})('Promise e2e development queries', (wsUrl): void => {
  let api: ApiPromise;

  beforeEach(async (done): Promise<void> => {
    api = await ApiPromise.create(new WsProvider(wsUrl));

    done();
  });

  const keyring = testingPairs({ type: 'ed25519' });

  it('allows retrieval of an fallback entry (once-off query)', async (): Promise<void> => {
    const nonce = await api.query.system.accountNonce('5DSo5RVtfrtgHoz2c7jK7Tca7FgJgpCzFnxoRVDeYUQcKPng');

    expect(nonce.toHex()).toEqual('0x0000000000000000');
  });

  it('allows retrieval of fallback when at query is made', async (): Promise<void> => {
    const header = await api.rpc.chain.getHeader() as Header;
    const nonce = await api.query.system.accountNonce.at(header.hash, '5DSo5RVtfrtgHoz2c7jK7Tca7FgJgpCzFnxoRVDeYUQcKPng');

    expect(nonce.toHex()).toEqual('0x0000000000000000');
  });

  it('queries state for a balance', async (): Promise<() => void> => {
    return api.query.balances.freeBalance(keyring.alice_stash.address, (balance: Balance): void => {
      expect(balance).toBeInstanceOf(BN);
      expect(balance.isZero()).toBe(false);
    });
  });

  it('subscribes to queries', (done): Promise<() => void> => {
    return (
      api.query.system.accountNonce(keyring.ferdie.address, (nonce: Index): void => {
        expect(nonce instanceof BN).toBe(true);

        done();
      })
    );
  });

  it('subscribes to queries (default)', (done): Promise<() => void> => {
    return (
      api.query.staking.minimumValidatorCount((defaultCount: U32): void => {
        expect(defaultCount.toNumber()).toBe(1);

        done();
      })
    );
  });

  it('subscribes to multiple results (freeBalance.multi)', (done): Promise<() => void> => {
    return (
      api.query.balances.freeBalance.multi([
        keyring.alice.address,
        keyring.bob.address,
        '5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y',
        keyring.ferdie.address
      ], (balances): void => {
        expect(balances).toHaveLength(4);

        done();
      })
    );
  });

  it('subscribes to multiple results (api.queryMulti)', (done): Promise<() => void> => {
    return api.queryMulti([
      [api.query.balances.freeBalance, keyring.alice.address],
      [api.query.balances.freeBalance, keyring.bob.address],
      [api.query.balances.freeBalance, '5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y'],
      [api.query.balances.freeBalance, keyring.ferdie.address]
    ], (balances: Balance[]): void => {
      expect(balances).toHaveLength(4);

      done();
    });
  });

  it('subscribes to derived balances (balances.all)', (done): Promise<() => void> => {
    return (
      api.derive.balances.all(
        keyring.bob_stash.address,
        (all: DerivedBalances): void => {
          expect(all.accountId.toString()).toEqual(keyring.bob_stash.address);

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

  describe('with map type', (): void => {
    it('queries correct value', async (): Promise<void> => {
      const balance = await api.query.balances.freeBalance(keyring.bob_stash.address) as Balance;

      expect(balance.isZero()).toBe(false);
    });

    it('queries correct value at a specified block', async (): Promise<void> => {
      // assume the account Alice is only used in test(the balance of Alice does not change in this test case)
      const balance = await api.query.balances.freeBalance(keyring.alice_stash.address);
      const header = await api.rpc.chain.getHeader() as Header;
      const balanceAt = await api.query.balances.freeBalance.at(header.hash, keyring.alice_stash.address) as Balance;

      expect(balanceAt.isZero()).toBe(false);
      expect(balanceAt.toString()).toEqual(balance.toString());
    });

    it('subscribes to query and get correct result', async (done): Promise<() => void> => {
      // assume the account Alice is only used in test(the balance of Alice does not change in this test case)
      const balance = await api.query.balances.freeBalance(keyring.alice_stash.address);

      return api.query.balances.freeBalance(keyring.alice_stash.address, (balanceSubscribed: Balance): void => {
        expect(balanceSubscribed.isZero()).toBe(false);
        expect(balanceSubscribed.toString()).toEqual(balance.toString());
        done();
      });
    });

    it('queries correct hash', async (): Promise<void> => {
      const hash = await api.query.balances.freeBalance.hash(keyring.alice.address);

      expect(hash).toBeDefined();
    });

    it('gets correct key', async (): Promise<void> => {
      // assume the account Alice is only used in test(the balance of Alice does not change in this test case)
      const key = api.query.balances.freeBalance.key(keyring.alice_stash.address);
      const balanceData = await api.rpc.state.getStorage(key) as Option<any>;
      const balanceRPC = new Balance(balanceData.unwrapOr(undefined));

      const balance = await api.query.balances.freeBalance(keyring.alice_stash.address);

      expect(balanceRPC.isZero()).toBe(false);
      expect(balanceRPC.toString()).toEqual(balance.toString());
    });

    it('queries multiple results', async (): Promise<void> => {
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

    it('subscribes to multiple queries and get correct results', async (done): Promise<() => void> => {
      // assume the account Alice and Bob are only used in test(the balance of them do not change in this test case)
      const balanceAlice = await api.query.balances.freeBalance(keyring.alice.address);
      const balanceBob = await api.query.balances.freeBalance(keyring.bob.address);

      return api.query.balances.freeBalance.multi([
        keyring.alice.address,
        keyring.bob.address
      ], (balances): void => {
        expect(balances).toHaveLength(2);
        expect(balances[0].toString()).toEqual(balanceAlice.toString());
        expect(balances[1].toString()).toEqual(balanceBob.toString());
        done();
      });
    });

    it('queries correct size', async (): Promise<void> => {
      const size = await api.query.balances.freeBalance.size(keyring.alice_stash.address);

      expect(size.toNumber()).not.toEqual(0);
    });
  });
});
