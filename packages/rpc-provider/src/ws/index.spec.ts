// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Mock, ProviderInterface } from '@polkadot/rpc-provider/types';

import { mockWs, TEST_WS_URL } from '../../test/mockWs';

import Ws from '@polkadot/rpc-provider/ws';

let ws: ProviderInterface;
let mock: Mock;

function createWs (requests: Array<any>, autoConnect: Boolean) {
  mock = mockWs(requests);
  ws = new Ws(TEST_WS_URL, autoConnect = true);
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
      createWs([],true).isConnected()
    ).toEqual(false);
  });
});
