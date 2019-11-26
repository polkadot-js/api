// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BlockNumber } from '@polkadot/types/interfaces';

import BN from 'bn.js';

import ApiRx from '@polkadot/api/rx/Api';
import { HeaderExtended } from '@polkadot/api-derive';
import { DerivedBalances, DerivedContractFees, DerivedElectionsInfo, DerivedFees, DerivedSessionInfo } from '@polkadot/api-derive/types';
import { createType, ClassOf, TypeRegistry } from '@polkadot/types';
import { WsProvider } from '@polkadot/rpc-provider';

import { describeE2E } from '../../util';

// Dev account Alice
const ID = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
const IX = 'F7Hs';

describeE2E({
  except: [
    'remote-polkadot-alexander',
    'remote-substrate-1.0'
  ]
})('Api-RX derive e2e', (wsUrl: string): void => {
  const registry = new TypeRegistry();
  let api: ApiRx;

  beforeAll((): void => {
    jest.setTimeout(10000);
  });

  beforeEach(async (done): Promise<void> => {
    api = await ApiRx.create({ provider: new WsProvider(wsUrl) }).toPromise();

    done();
  });

  afterAll((): void => {
    jest.setTimeout(10000);
  });

  // These derive.accounts tests only work on localhost, not the poc-3 URL
  // (and it is assuming it sent at least 1 tx)
  describe('derive.accounts', (): void => {
    describe('idAndIndex', (): void => {
      it('looks up AccountId & AccountIndex from AccountId', (done): void => {
        api.derive.accounts.idAndIndex(ID).subscribe(([accountId, accountIndex]): void => {
          expect(accountId!.toString()).toEqual(ID);
          // The first emitted value for ix is undefined when passing the ID
          if (accountIndex) {
            expect(accountIndex.toString()).toEqual(IX);
          } else {
            expect(accountIndex).toEqual(undefined);
          }
          done();
        });
      });

      it('looks up AccountId & AccountIndex from AccountIndex', (done): void => {
        api.derive.accounts.idAndIndex(IX).subscribe(([accountId, accountIndex]): void => {
          // The first emitted value for id is undefined when passing the IX
          if (accountId) {
            expect(accountId.toString()).toEqual(ID);
          } else {
            expect(accountId).toEqual(undefined);
          }
          expect(accountIndex!.toString()).toEqual(IX);
          done();
        });
      });
    });

    describe('indexToId', (): void => {
      it('looks up AccountId from AccountIndex', (done): void => {
        api.derive.accounts.indexToId(IX).subscribe((accountId): void => {
          // The first emitted value for accountId is undefined when passing the IX
          if (accountId) {
            expect(accountId instanceof ClassOf(registry, 'AccountId')).toBe(true);
            expect(accountId.toString()).toEqual(ID);
          } else {
            expect(accountId).toEqual(undefined);
          }
          done();
        });
      });
    });

    describe('idToIndex', (): void => {
      it('looks up AccountIndex from AccountId', (done): void => {
        api.derive.accounts.idToIndex(ID).subscribe((accountIndex): void => {
          // The first emitted value for AccountIndex is undefined when passing the ID
          if (accountIndex) {
            expect(accountIndex instanceof ClassOf(registry, 'AccountIndex')).toBe(true);
            expect(accountIndex.toString()).toEqual(IX);
          } else {
            expect(accountIndex).toEqual(undefined);
          }
          done();
        });
      });
    });

    describe('indexes', (): void => {
      it('looks up all AccountIndexes', (done): void => {
        api.derive.accounts.indexes().subscribe((accountIndexes): void => {
          // A local dev chain should have the AccountIndex of Alice
          expect(accountIndexes).toHaveProperty(
            ID,
            createType(registry, 'AccountIndex', IX)
          );
          done();
        });
      });
    });
  });

  // these only work on localhost, not the poc-3 URL
  // (and it is assuming it sent at least 1 tx)
  describe('derive.balances', (): void => {
    describe('all', (): void => {
      it('It returns an object with all relevant balance information of an account', (done): void => {
        api.derive.balances.all(ID).subscribe((balances: DerivedBalances): void => {
          expect(balances).toEqual(expect.objectContaining({
            accountId: expect.any(ClassOf(registry, 'AccountId')),
            accountNonce: expect.any(ClassOf(registry, 'Index')),
            availableBalance: expect.any(BN),
            freeBalance: expect.any(BN),
            lockedBalance: expect.any(BN),
            reservedBalance: expect.any(BN),
            vestedBalance: expect.any(BN),
            votingBalance: expect.any(BN)
          }));
          done();
        });
      });
    });

    describe('fees', (): void => {
      it('fees: It returns an object with all relevant fees of type BN', (done): void => {
        api.derive.balances.fees().subscribe((fees: DerivedFees): void => {
          expect(fees).toEqual(expect.objectContaining({
            creationFee: expect.any(BN),
            existentialDeposit: expect.any(BN),
            transactionBaseFee: expect.any(BN),
            transactionByteFee: expect.any(BN),
            transferFee: expect.any(BN)
          }));
          done();
        });
      });
    });
  });

  describe('derive.chain', (): void => {
    describe('bestNumber', (): void => {
      it('Get the latest block number', (done): void => {
        api.derive.chain.bestNumber().subscribe((blockNumber: BlockNumber): void => {
          expect(blockNumber instanceof ClassOf(registry, 'BlockNumber')).toBe(true);
          expect(blockNumber.gten(0)).toBe(true);
          done();
        });
      });
    });

    describe('bestNumberFinalized', (): void => {
      it('Get the latest finalised block number', (done): void => {
        api.derive.chain.bestNumberFinalized().subscribe((blockNumber: BlockNumber): void => {
          expect(blockNumber instanceof ClassOf(registry, 'BlockNumber')).toBe(true);
          expect(blockNumber.gten(0)).toBe(true);
          done();
        });
      });
    });

    describe('bestNumberLag', (): void => {
      it('lag between finalised head and best head', (done): void => {
        api.derive.chain.bestNumberLag().subscribe((numberLag: BlockNumber): void => {
          expect(numberLag instanceof ClassOf(registry, 'BlockNumber')).toBe(true);
          expect(numberLag.gten(0)).toBe(true);
          done();
        });
      });
    });

    // FIXME https://github.com/polkadot-js/api/issues/868
    describe('getHeader', (): void => {
      it('gets a specific block header and extended with it`s author', (done): void => {
        api.derive.chain.getHeader('TODO').subscribe((headerExtended: HeaderExtended | undefined): void => {
          // WIP
          expect(headerExtended).toEqual(expect.arrayContaining([]));
          done();
        });
      });
    });

    describe('subscribeNewHeads', (): void => {
      it('gets an observable of the current block header and it\'s author', (done): void => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        api.derive.chain.subscribeNewHeads().subscribe((headerExtended: HeaderExtended): void => {
          // WIP https://github.com/polkadot-js/api/issues/868
          done();
        });
      });
    });
  });

  describe('derive.contracts', (): void => {
    describe('fees', (): void => {
      it('fees: It returns an object with all relevant constract fees of type Balance', (done): void => {
        api.derive.contracts.fees().subscribe((fees: DerivedContractFees): void => {
          expect(fees).toEqual(expect.objectContaining({
            callBaseFee: expect.any(BN),
            contractFee: expect.any(BN),
            createBaseFee: expect.any(BN),
            creationFee: expect.any(BN),
            rentByteFee: expect.any(BN),
            rentDepositOffset: expect.any(BN),
            tombstoneDeposit: expect.any(BN),
            transactionBaseFee: expect.any(BN),
            transactionByteFee: expect.any(BN),
            transferFee: expect.any(BN)
          }));
          done();
        });
      });
    });
  });

  describe('derive.elections', (): void => {
    describe('info', (): void => {
      it('It returns an object with all relevant elections properties', (done): void => {
        api.derive.elections.info().subscribe((info: DerivedElectionsInfo): void => {
          expect(info).toEqual(expect.objectContaining({
            members: expect.anything(),
            candidates: expect.anything(),
            candidateCount: expect.any(BN),
            desiredSeats: expect.any(BN),
            termDuration: expect.any(BN),
            voteCount: expect.any(BN)
          }));
          done();
        });
      });
    });
  });

  describe('derive.session', (): void => {
    describe('sessionProgress', (): void => {
      it('derive.session.sessionProgress', (done): void => {
        api.derive.session.sessionProgress().subscribe((progress: BN): void => {
          expect(progress instanceof BN).toBe(true);
          done();
        });
      });
    });

    describe('session.info', (): void => {
      it('retrieves all session info', (done): void => {
        api.derive.session.info().subscribe((info: DerivedSessionInfo): void => {
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

    describe('session.eraLength', (): void => {
      it('derive.session.eraLength', (done): void => {
        api.derive.session.eraLength().subscribe((length: BN): void => {
          expect(length instanceof BN).toBe(true);
          done();
        });
      });
    });

    describe('session.eraProgress', (): void => {
      it('derive.session.eraProgress', (done): void => {
        api.derive.session.eraProgress().subscribe((progress: BN): void => {
          expect(progress instanceof BN).toBe(true);
          done();
        });
      });
    });
  });

  describe('derive.staking', (): void => {
    describe('controllers', (): void => {
      // @TODO https://github.com/polkadot-js/api/issues/868
    });
  });
});
