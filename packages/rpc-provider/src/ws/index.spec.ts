// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ProviderInterface } from '@polkadot/rpc-provider/types';

import { mockWs, TEST_WS_URL } from '../../test/mockWs';

import Ws from '.';

let ws: ProviderInterface;
let mock;

function createWs (requests, autoConnect) {
  mock = mockWs(requests);
  ws = new Ws(TEST_WS_URL, autoConnect);

  return ws;
}

describe('Ws', () => {
  afterEach(() => {
    if (mock) {
      mock.done();
      mock = null;
    }
  });

  it('returns the connected state', () => {
    expect(
      createWs([]).isConnected()
    ).toEqual(false);
  });
});
