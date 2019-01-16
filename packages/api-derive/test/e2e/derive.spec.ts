// Copyright 2017-2018 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import ApiRx from '@polkadot/api/rx';
import { ApiInterface$Rx } from '@polkadot/api/types';
import { BlockNumber } from '@polkadot/types/index';
import { WsProvider } from '@polkadot/rpc-provider/index';

const WS = 'wss://poc3-rpc.polkadot.io/';

describe.skip('derive e2e', () => {
  let api: ApiInterface$Rx;

  beforeAll(() => {
    jest.setTimeout(10000);
  });

  beforeEach(async (done) => {
    api = await ApiRx.create(new WsProvider(WS)).toPromise();
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

  afterAll(() => {
    jest.setTimeout(5000);
  });
});
