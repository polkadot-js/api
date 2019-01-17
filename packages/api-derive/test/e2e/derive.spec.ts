// Copyright 2017-2018 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import ApiRx from '@polkadot/api/rx';
import { ApiInterface$Rx } from '@polkadot/api/types';
import { BlockNumber } from '@polkadot/types/index';
import { WsProvider } from '@polkadot/rpc-provider/index';

const WS_LOCAL = 'ws://127.0.0.1:9944/';
// const WS_POC3 = 'wss://poc3-rpc.polkadot.io/';

describe.skip('derive e2e', () => {
  let api: ApiInterface$Rx;

  beforeAll(() => {
    jest.setTimeout(10000);
  });

  beforeEach(async (done) => {
    api = await ApiRx.create(new WsProvider(WS_LOCAL)).toPromise();
    done();
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

  // these only work on localhost, not the poc-3 URL
  // (and it is assuming it sent at least 1 tx)
  describe('accounts', () => {
    const ID = '5GoKvZWG5ZPYL1WUovuHW3zJBWBP5eT8CbqjdRY4Q6iMaDtZ';
    const IX = 'F7Gh';

    it('looks up id & index from id', async (done) => {
      api.derive.accounts.idAndIndex(ID).subscribe(([id, ix]) => {
        expect(id.toString()).toEqual(ID);
        expect(ix.toString()).toEqual(IX);
        done();
      });
    });

    it('looks up id & index from index', async (done) => {
      api.derive.accounts.idAndIndex(IX).subscribe(([id, ix]) => {
        expect(id.toString()).toEqual(ID);
        expect(ix.toString()).toEqual(IX);
        done();
      });
    });
  });

  afterAll(() => {
    jest.setTimeout(5000);
  });
});
