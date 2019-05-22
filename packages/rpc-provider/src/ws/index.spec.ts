// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { mockWs, TEST_WS_URL } from '../../test/mockWs';

import { ProviderInterface } from '@polkadot/rpc-provider/types';
import { Mock } from '@polkadot/rpc-provider/mock/types';

import WsProvider from '@polkadot/rpc-provider/ws';

let ws: ProviderInterface;
let mock: Mock;

function createWs (requests: Array<any>, autoConnect: Boolean) {
  mock = mockWs(requests);
  ws = new WsProvider(TEST_WS_URL, autoConnect = true);
  return ws;
}

describe('Ws', () => {
  afterEach(() => {
    if (mock) {
      mock.done();
    }
  });

  it('returns the connected state', () => {
    expect(
      createWs([],true).isConnected()
    ).toEqual(false);
  });
});
