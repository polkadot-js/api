// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';

import ApiRx from '@polkadot/api/rx/Api';
import { HeaderExtended } from '@polkadot/api-derive';
import { DerivedBalances, DerivedContractFees, DerivedElectionsInfo, DerivedFees, DerivedSessionInfo } from '@polkadot/api-derive/types';
import { AccountId, AccountIndex, BlockNumber, Index } from '@polkadot/types';
import { WsProvider } from '@polkadot/rpc-provider';

const WS = 'ws://127.0.0.1:9944/';

// Dev account Alice
const ID = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
const IX = 'F7Hs';

describe.skip('Api-RX derive e2e', (): void => {
  let api: ApiRx;

  beforeAll((): void => {
    jest.setTimeout(10000);
  });

  beforeEach(async (done): Promise<void> => {
    api = await ApiRx.create(new WsProvider(WS)).toPromise();

    done();
  });

  afterAll((): void => {
    jest.setTimeout(10000);
  });

  // These derive.accounts tests only work on localhost, not the poc-3 URL
  // (and it is assuming it sent at least 1 tx)
  describe('derive.accounts', (): void => {
    describe('idAndIndex', (): void => {
      it('looks up AccountId & AccountIndex from AccountId', async (done): Promise<void> => {
        // @ts-ignore silence warning until we have static types here
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

      it('looks up AccountId & AccountIndex from AccountIndex', async (done): Promise<void> => {
        // @ts-ignore silence warning until we have static types here
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
      it('looks up AccountId from AccountIndex', async (done): Promise<void> => {
        // @ts-ignore silence warning until we have static types here
        api.derive.accounts.indexToId(IX).subscribe((accountId): void => {
          // The first emitted value for accountId is undefined when passing the IX
          if (accountId) {
            expect(accountId instanceof AccountId).toBe(true);
            expect(accountId.toString()).toEqual(ID);
          } else {
            expect(accountId).toEqual(undefined);
          }
          done();
        });
      });
    });

    describe('idToIndex', (): void => {
      it('looks up AccountIndex from AccountId', async (done): Promise<void> => {
        // @ts-ignore silence warning until we have static types here
        api.derive.accounts.idToIndex(ID).subscribe((accountIndex): void => {
          // The first emitted value for AccountIndex is undefined when passing the ID
          if (accountIndex) {
            expect(accountIndex instanceof AccountIndex).toBe(true);
            expect(accountIndex.toString()).toEqual(IX);
          } else {
            expect(accountIndex).toEqual(undefined);
          }
          done();
        });
      });
    });

    describe('indexes', (): void => {
      it('looks up all AccountIndexes', async (done): Promise<void> => {
        // @ts-ignore silence warning until we have static types here
        api.derive.accounts.indexes().subscribe((accountIndexes): void => {
          // A local dev chain should have the AccountIndex of Alice
          expect(accountIndexes).toHaveProperty(
            ID,
            new AccountIndex(IX)
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
      it('It returns an object with all relevant balance information of an account', async (done): Promise<void> => {
        api.derive.balances.all(ID).subscribe((balances: DerivedBalances): void => {
          expect(balances).toEqual(expect.objectContaining({
            accountId: expect.any(AccountId),
            accountNonce: expect.any(Index),
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
      it('fees: It returns an object with all relevant fees of type BN', async (done): Promise<void> => {
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
      it('Get the latest block number', async (done): Promise<void> => {
        api.derive.chain.bestNumber().subscribe((blockNumber: BlockNumber): void => {
          expect(blockNumber instanceof BlockNumber).toBe(true);
          expect(blockNumber.gten(0)).toBe(true);
          done();
        });
      });
    });

    describe('bestNumberFinalized', (): void => {
      it('Get the latest finalised block number', async (done): Promise<void> => {
        api.derive.chain.bestNumberFinalized().subscribe((blockNumber: BlockNumber): void => {
          expect(blockNumber instanceof BlockNumber).toBe(true);
          expect(blockNumber.gten(0)).toBe(true);
          done();
        });
      });
    });

    describe('bestNumberLag', (): void => {
      it('lag between finalised head and best head', async (done): Promise<void> => {
        api.derive.chain.bestNumberLag().subscribe((numberLag: BlockNumber): void => {
          expect(numberLag instanceof BlockNumber).toBe(true);
          expect(numberLag.gten(0)).toBe(true);
          done();
        });
      });
    });

    // FIXME https://github.com/polkadot-js/api/issues/868
    describe.skip('getHeader', (): void => {
      it('gets a specific block header and extended with it`s author', async (done): Promise<void> => {
        api.derive.chain.getHeader('TODO').subscribe((headerExtended: HeaderExtended | undefined): void => {
          // WIP
          expect(headerExtended).toEqual(expect.arrayContaining([]));
          done();
        });
      });
    });

    describe('subscribeNewHead', (): void => {
      it('gets an observable of the current block header and it\'s author', async (done): Promise<void> => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        api.derive.chain.subscribeNewHead().subscribe((headerExtended: HeaderExtended): void => {
          // WIP https://github.com/polkadot-js/api/issues/868
          done();
        });
      });
    });
  });

  describe('derive.contracts', (): void => {
    describe('fees', (): void => {
      it('fees: It returns an object with all relevant constract fees of type Balance', async (done): Promise<void> => {
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
      it('It returns an object with all relevant elections properties', async (done): Promise<void> => {
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
      it('derive.session.sessionProgress', async (done): Promise<void> => {
        api.derive.session.sessionProgress().subscribe((progress: BN): void => {
          expect(progress instanceof BN).toBe(true);
          done();
        });
      });
    });

    describe('session.info', (): void => {
      it('retrieves all session info', async (done): Promise<void> => {
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
      it('derive.session.eraLength', async (done): Promise<void> => {
        api.derive.session.eraLength().subscribe((length: BN): void => {
          expect(length instanceof BN).toBe(true);
          done();
        });
      });
    });

    describe('session.eraProgress', (): void => {
      it('derive.session.eraProgress', async (done): Promise<void> => {
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
