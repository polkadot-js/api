// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import ApiRx from '@polkadot/api/rx/Api';
import { ApiInterface$Rx } from '@polkadot/api/types';
import { AccountId, AccountIndex, BlockNumber } from '@polkadot/types';
import { WsProvider } from '@polkadot/rpc-provider';

const WS_LOCAL = 'ws://127.0.0.1:9944/';
// const WS_POC3 = 'wss://poc3-rpc.polkadot.io/';

// Dev account Alice
const ID = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
const IX = 'F7Hs';

describe('derive e2e', () => {
  let api: ApiInterface$Rx;

  beforeAll(() => {
    jest.setTimeout(10000);
  });

  beforeEach(async (done) => {
    api = await ApiRx.create(new WsProvider(WS_LOCAL)).toPromise();
    done();
  });

  // These derive.accounts tests only work on localhost, not the poc-3 URL
  // (and it is assuming it sent at least 1 tx)
  describe('accounts', () => {
    it('looks up AccountId & AccountIndex from AccountId', async (done) => {
      // @ts-ignore silence warning until we have static types here
      api.derive.accounts.idAndIndex(ID).subscribe(([accountId, accountIndex]) => {
        expect(accountId.toString()).toEqual(ID);

        // The first emitted value for ix is undefined when passing the ID
        if (accountIndex) {
          expect(accountIndex.toString()).toEqual(IX);
        } else {
          expect(accountIndex).toEqual(undefined);
        }
        done();
      });
    });

    it('looks up AccountId & AccountIndex from AccountIndex', async (done) => {
      // @ts-ignore silence warning until we have static types here
      api.derive.accounts.idAndIndex(IX).subscribe(([accountId, accountIndex]) => {
        // The first emitted value for id is undefined when passing the IX
        if (accountId) {
          expect(accountId.toString()).toEqual(ID);
        } else {
          expect(accountId).toEqual(undefined);
        }
        expect(accountIndex.toString()).toEqual(IX);
        done();
      });
    });

    it('looks up AccountId from AccountIndex', async (done) => {
      // @ts-ignore silence warning until we have static types here
      api.derive.accounts.indexToId(IX).subscribe((accountId) => {
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

    it('looks up AccountIndex from AccountId', async (done) => {
      // @ts-ignore silence warning until we have static types here
      api.derive.accounts.idToIndex(ID).subscribe((accountIndex) => {
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

    it('looks up all AccountIndexes', async (done) => {
      // @ts-ignore silence warning until we have static types here
      api.derive.accounts.indexes().subscribe((accountIndexes) => {
        // A local dev chain should have the AccountIndex of Alice
        expect(accountIndexes).toHaveProperty(
          ID,
          new AccountIndex(IX)
        );
        done();
      });
    });
  });

    // these only work on localhost, not the poc-3 URL
  // (and it is assuming it sent at least 1 tx)
  describe('balances', () => {
    it('It returns an object with all relevant fees of type BN', async (done) => {
      api.derive.balances.fees().subscribe((fees) => {
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
    
    it('It returns an object with all relevant fees of type BN', async (done) => {
      api.derive.balances.fees().subscribe((fees) => {
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

  it('derive.chain.bestNumber', async (done) => {
    api.derive.chain.bestNumber().subscribe((blockNumber) => {
      expect(blockNumber instanceof BlockNumber).toBe(true);
      expect((blockNumber as BlockNumber).gten(0)).toBe(true);
      done();
    });
  });

  it('derive.session.sessionProgress', async (done) => {
    api.derive.session.sessionProgress().subscribe((progress) => {
      expect(progress instanceof BN).toBe(true);
      done();
    });
  });

  it('returns the intentions with balances', async (done) => {
    api.derive.staking.intentionsBalances().subscribe((balances) => {
      expect(Object.keys(balances as object)).not.toHaveLength(0);
      done();
    });
  });

  afterAll(() => {
    jest.setTimeout(5000);
  });
});
