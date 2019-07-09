// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import ApiPromise from '@polkadot/api/promise/Api';
import testKeyring from '@polkadot/keyring/testing';
import { WsProvider } from '@polkadot/rpc-provider';

import { HeaderExtended } from '../../src/type';
import { DerivedBalances, DerivedContractFees, DerivedFees, DerivedSessionInfo, DerivedStaking } from '../../src/types';
import { SubmittableResult } from '../../../api/src';

const WS = 'ws://127.0.0.1:9944';
// const WS = 'wss://poc3-rpc.polkadot.io/';
// const WS = 'wss://substrate-rpc.parity.io/';

describe.skip('Api-Promise derive e2e', () => {
  let api: ApiPromise;

  beforeAll(() => {
    jest.setTimeout(30000);
  });

  beforeEach(async (done) => {
    api = await ApiPromise.create(new WsProvider(WS));
    done();
  });

  describe('Tests for accounts derive methods', () => {
    // @TODO Write tests
  });

  describe('Tests for balances derive methods', () => {
    it('retrieves the fees (api.queryMulti)', (done) => {
      return api.derive.balances.fees((fees: DerivedFees) => {
        console.error('fees', JSON.stringify(fees));

        done();
      });
    });

    it('retrieves the balances', (done) => {
      return api.derive.balances.all('5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y', (balance: DerivedBalances) => {
        console.error(JSON.stringify(balance));

        if (balance.freeBalance.gtn(1)) {
          done();
        }
      });
    });

    it('retrieves balances for a problematic account', (done) => {
      return api.derive.balances.all('5F7BJL6Z4m8RLtK7nXEqqpEqhBbd535Z3CZeYF6ccvaQAY6N', (balance: DerivedBalances) => {
        console.error(JSON.stringify(balance));

        if (balance.availableBalance.eqn(0)) {
          done();
        }
      });
    });
  });

  describe('Tests for chain derive methods', () => {
    it('returns correct results', async () => {
      // https://github.com/polkadot-js/api/issues/777
      const block1 = await api.derive.chain.bestNumber();
      await new Promise((resolve) => setTimeout(resolve, 15000));
      const block2 = await api.derive.chain.bestNumber();

      expect(block1.eq(block2)).toBe(false);
    });

    it('subscribes to newHead, retrieving the actual validator', (done) => {
      return api.derive.chain.subscribeNewHead(({ author }: HeaderExtended) => {
        console.log('author', author && author.toString());

        if (author) {
          done();
        }
      });
    });
  });

  describe('Tests for contracts derive methods', () => {
    it('retrieves the contract fees', (done) => {
      return api.derive.contracts.fees((fees: DerivedContractFees) => {
        console.log('fees contracts', JSON.stringify(fees));

        done();
      });
    });
  });

  describe('Tests for democracy derive methods', () => {
    // @TODO Write tests
  });

  describe('Tests for session derive methods', () => {
    it('retrieves all session info', (done) => {
      return api.derive.session.info((info: DerivedSessionInfo) => {
        expect(info).toEqual(expect.objectContaining({
          currentEra: expect.anything(),
          currentIndex: expect.anything(),
          eraLength: expect.anything(),
          eraProgress: expect.anything(),
          lastEraLengthChange: expect.anything(),
          lastLengthChange: expect.anything(),
          sessionLength: expect.anything(),
          sessionsPerEra: expect.anything(),
          sessionProgress: expect.anything()
        }));
        done();
      });
    });
  });

  describe('Tests for staking derive methods', () => {
    it('stking.info - retrieves all staking info (for controller)', (done) => {
      const accountId = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';

      return api.derive.staking.info(accountId, (info: DerivedStaking) => {
        console.error(JSON.stringify(info));

        expect(info.accountId.eq(accountId)).toBe(true);
        expect(info.controllerId!.eq(accountId)).toBe(true);
        expect(info.stashId!.eq('5GNJqTPyNqANBkUVMN1LPPrxXnFouWXoe2wNSmmEoLctxiZY')).toBe(true);
        expect(info.stashId!.eq(info.stakingLedger!.stash)).toBe(true);

        done();
      });
    });

    it('retrieves all staking info (for stash)', (done) => {
      const accountId = '5GNJqTPyNqANBkUVMN1LPPrxXnFouWXoe2wNSmmEoLctxiZY';

      return api.derive.staking.info(accountId, (info: DerivedStaking) => {
        console.error(JSON.stringify(info));

        if (!info.stashId || !info.controllerId || !info.stakingLedger) {
          return done.fail(new Error('At leat one of info.stashId, info.controllerId or info.stakingLedger is undefined.'));
        }

        expect(info.accountId.eq(accountId)).toBe(true);
        expect(info.controllerId.eq('5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY')).toBe(true);
        expect(info.stashId.eq(accountId)).toBe(true);
        expect(info.stashId.eq(info.stakingLedger.stash)).toBe(true);

        done();
      });
    });

    describe('verifies derive.staking unlocking', () => {
      const UNBOND_VALUE = 1;
      const ALICE_STASH = '5GNJqTPyNqANBkUVMN1LPPrxXnFouWXoe2wNSmmEoLctxiZY';
      const ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
      const keyring = testKeyring();
      const alicePair = keyring.getPair(ALICE);

      it('unbonds dots for Alice (from Alice Stash)', (done) => {
        return api.tx.staking.unbond(UNBOND_VALUE)
          .signAndSend(alicePair, (result: SubmittableResult) => {
            if (result.status.isFinalized) {

              done();
            }
          });
      });

      it('verifies that derive.staking unlocking isn\'t empty/undefined', () => {
        return api.derive.staking.info(ALICE_STASH, (info: DerivedStaking) => {
          expect(info.unlocking).toBeDefined();
        });
      });
    });

    describe('verifies derive.staking rewardDestination', () => {
      const PAYEE = 2;
      const ALICE_STASH = '5GNJqTPyNqANBkUVMN1LPPrxXnFouWXoe2wNSmmEoLctxiZY';
      const ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
      const keyring = testKeyring();
      const alicePair = keyring.getPair(ALICE);

      beforeAll(async (done) => {
        return api.tx.staking.setPayee(PAYEE)
          .signAndSend(alicePair, (result: SubmittableResult) => {
            if (result.status.isFinalized) {
              done();
            }
          });
      });

      // TODO think about beter test setup, the test fails when the suite is run
      // for the first time on a new node, but it succeeds after that.
      it('verifies payee for ALICE_STASH', (done) => {
        return api.derive.staking.info(ALICE_STASH, (info: DerivedStaking) => {
          if (!info.rewardDestination) {
            return done.fail(new Error('rewardDestination is undefined.'));
          } else {
            expect(info.rewardDestination.toString()).toBe('Controller');
          }

          done();
        });
      });
    });
  });
});
