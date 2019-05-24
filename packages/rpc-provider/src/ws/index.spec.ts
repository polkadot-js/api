// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import WsProvider from './';
import { Mock } from './../mock/types';
import { mockWs, TEST_WS_URL } from '../../test/mockWs';

let ws: WsProvider;
let mock: Mock;

function createWs (requests: Array<any>, autoConnect: boolean | undefined) {
  mock = mockWs(requests);
  ws = new WsProvider(TEST_WS_URL, autoConnect);
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
