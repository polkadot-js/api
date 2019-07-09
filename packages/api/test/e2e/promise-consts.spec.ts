// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import WsProvider from '@polkadot/rpc-provider/ws';
import { ApiPromise } from '@polkadot/api';
import { BlockNumber } from '@polkadot/types';

describe.skip('e2e consts', () => {
  let api: ApiPromise;

  beforeAll(() => {
    api = new ApiPromise(new WsProvider('ws://127.0.0.1:9944'));
    return api.isReady;
  });

  beforeEach(() => {
    jest.setTimeout(30000);
  });

  it('democracy.cooloffPeriod parameter type', () => {
    expect(api.consts.democracy.cooloffPeriod).toBeInstanceOf(BlockNumber);
    expect(api.consts.democracy.cooloffPeriod.eq(432000)).toBeTruthy();
  });
});
