// Copyright 2017-2018 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import ApiRx from '@polkadot/api/rx';
import { BlockNumber } from '@polkadot/types/index';

describe.skip('derive e2e', () => {
  let api: ApiRx;

  beforeAll(() => {
    jest.setTimeout(30000);
  });

  beforeEach(async (done) => {
    api = await ApiRx.create().toPromise();
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

  afterAll(() => {
    jest.setTimeout(5000);
  });
});
