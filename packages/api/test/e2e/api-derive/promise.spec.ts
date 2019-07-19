// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import ApiPromise from '@polkadot/api/promise/Api';
import testingPairs from '@polkadot/keyring/testingPairs';
import { WsProvider } from '@polkadot/rpc-provider';
import { RewardDestination } from '@polkadot/types';

import { SubmittableResult } from '@polkadot/api';
import { HeaderExtended } from '@polkadot/api-derive/type';
import { DerivedBalances, DerivedElectionsInfo, DerivedFees, DerivedSessionInfo, DerivedStaking } from '@polkadot/api-derive/types';

const ALICE_STASH = testingPairs().alice_stash.address;
const WS = 'ws://127.0.0.1:9944/';

describe.skip('derive e2e', (): void => {
  let api: ApiPromise;

  beforeAll((): void => {
    jest.setTimeout(30000);
  });

  beforeEach(async (done): Promise<void> => {
    api = await ApiPromise.create(new WsProvider(WS));
    done();
  });

  it('returns correct results', async (): Promise<void> => {
    // https://github.com/polkadot-js/api/issues/777
    const block1 = await api.derive.chain.bestNumber();

    await new Promise((resolve): void => {
      setTimeout(resolve, 15000);
    });

    const block2 = await api.derive.chain.bestNumber();

    expect(block1.eq(block2)).toBe(false);
  });

  it('subscribes to newHead, retrieving the actual validator', (done): Promise<() => void> => {
    return api.derive.chain.subscribeNewHead(({ author }: HeaderExtended): void => {
      console.log('author', author && author.toString());

      if (author) {
        done();
      }
    });
  });

  it('retrieves the fees (api.queryMulti)', (done): Promise<() => void> => {
    return api.derive.balances.fees((fees: DerivedFees): void => {
      console.error('fees', JSON.stringify(fees));

      done();
    });
  });

  it('retrieves elections info', (done): Promise<() => void> => {
    return api.derive.elections.info((info: DerivedElectionsInfo): void => {
      console.error('fees', JSON.stringify(info));

      done();
    });
  });

  it('retrieves the balances', (done): Promise<() => void> => {
    return api.derive.balances.all('5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y', (balance: DerivedBalances): void => {
      console.error(JSON.stringify(balance));

      if (balance.freeBalance.gtn(1)) {
        done();
      }
    });
  });

  it('retrieves balances for a problematic account', (done): Promise<() => void> => {
    return api.derive.balances.all('5F7BJL6Z4m8RLtK7nXEqqpEqhBbd535Z3CZeYF6ccvaQAY6N', (balance: DerivedBalances): void => {
      console.error(JSON.stringify(balance));

      if (balance.availableBalance.eqn(0)) {
        done();
      }
    });
  });

  it('retrieves all session info', (done): Promise<() => void> => {
    let count = 0;

    return api.derive.session.info((info: DerivedSessionInfo): void => {
      console.error(JSON.stringify(info));

      // 5 blocks only, then go our merry way
      if (++count === 5) {
        done();
      }
    });
  });

  describe('staking', (): void => {
    it('retrieves all staking info (for controller)', (done): Promise<() => void> => {
      const accountId = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';

      return api.derive.staking.info(accountId, (info: DerivedStaking): void => {
        console.error(JSON.stringify(info));

        expect(info.accountId.eq(accountId)).toBe(true);
        expect(info.controllerId!.eq(accountId)).toBe(true);
        expect(info.stashId!.eq('5GNJqTPyNqANBkUVMN1LPPrxXnFouWXoe2wNSmmEoLctxiZY')).toBe(true);
        expect(info.stashId!.eq(info.stakingLedger!.stash)).toBe(true);

        done();
      });
    });

    it('retrieves all staking info (for stash)', (done): Promise<() => void> => {
      const accountId = '5GNJqTPyNqANBkUVMN1LPPrxXnFouWXoe2wNSmmEoLctxiZY';

      return api.derive.staking.info(accountId, (info: DerivedStaking): void => {
        console.error(JSON.stringify(info));

        if (!info.stashId || !info.controllerId || !info.stakingLedger) {
          done.fail(new Error('At least one of info.stashId, info.controllerId or info.stakingLedger is undefined.'));
          return;
        }

        expect(info.accountId.eq(accountId)).toBe(true);
        expect(info.controllerId.eq('5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY')).toBe(true);
        expect(info.stashId.eq(accountId)).toBe(true);
        expect(info.stashId.eq(info.stakingLedger.stash)).toBe(true);

        done();
      });
    });

    describe('verifies derive.staking.unlocking', (): void => {
      const UNBOND_VALUE = 1;
      const alicePair = testingPairs().alice;

      it('unbonds dots for Alice (from Alice Stash)', (done): Promise<() => void> => {
        return api.tx.staking.unbond(UNBOND_VALUE)
          .signAndSend(alicePair, (result: SubmittableResult): void => {
            if (result.status.isFinalized) {
              done();
            }
          });
      });

      it('verifies that derive.staking.unlocking isn\'t empty/undefined', (): Promise<() => void> => {
        return api.derive.staking.info(ALICE_STASH, (info: DerivedStaking): void => {
          expect(info.unlocking).toBeDefined();
        });
      });
    });

    describe('verifies derive.staking.rewardDestination', (): void => {
      const PAYEE = 2;
      const alicePair = testingPairs().alice;

      it('Set payee for ALICE to 2', (done): Promise<() => void> => {
        return api.tx.staking
          .setPayee(PAYEE)
          .signAndSend(alicePair, (result: SubmittableResult): void => {
            if (result.status.isFinalized) {
              done();
            }
          });
      });

      it('verifies payee for ALICE_STASH', (done): Promise<() => void> => {
        return api.derive.staking.info(ALICE_STASH, (info: DerivedStaking): void => {
          if (!info.rewardDestination) {
            return done.fail(new Error('rewardDestination is undefined.'));
          } else {
            expect(info.rewardDestination.toString()).toBe('Controller');
          }

          done();
        });
      });

      it('staking.info updates itself after changing reward destination', async (done): Promise<void> => {
        const stashId = testingPairs().alice_stash.address;

        // start by setting the reqred to Staked, so we have a common starting point
        await api.tx.staking
          .setPayee(new RewardDestination('Staked'))
          .signAndSend(testingPairs().alice, ({ status }): void => {
            if (status.isFinalized) {
              console.error('setPayee(Staked) isFinalized');
            }
          });

        let count = 0; // The # of times we got a callback response from api.derive.staking.info

        // Subscribe to staking.info
        api.derive.staking.info(stashId, (result): void => {
          ++count;

          console.error('***', count, JSON.stringify(result));

          if (count >= 2 && result.rewardDestination!.toString() === 'Stash') {
            done();
          }
        }).catch(console.error);

        // Wait a bit, and change reward destination
        setTimeout(async (): Promise<void> => {
          await api.tx.staking
            .setPayee(new RewardDestination('Stash'))
            .signAndSend(testingPairs().alice, ({ status }): void => {
              if (status.isFinalized) {
                console.error('setPayee(Stash) isFinalized');
              }
            });
        }, 5000);
      });
    });
  });
});
