// Copyright 2017-2018 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import ApiRx from '@polkadot/api/rx';
import { BlockNumber } from '@polkadot/types/index';

describe('RxDerive', () => {
  let api: ApiRx;

  beforeAll(async () => {
    api = await ApiRx.create().toPromise();
  });

  it('makes a bestNumber call', (done) => {
    api.derive.chain.bestNumber().subscribe((blockNumber: BlockNumber) => {
      if (blockNumber instanceof BlockNumber) {
        done();
      }
    });
  });
});
