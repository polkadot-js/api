// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { mockWs, TEST_WS_URL } from '../../test/mockWs';

import { Mock } from '@polkadot/rpc-provider/mock/types';

import WsProvider from '@polkadot/rpc-provider/ws';

describe('onConnect', () => {
  let mock: Mock;

  beforeEach(() => {
    mock = mockWs([]);
  });

  afterEach(() => {
    if (mock) {
      mock.done();
    }
  });

  it('sets up the on* handlers', () => {
    const ws: Mock = new WsProvider(TEST_WS_URL);

    ws.connect();

    expect(ws!.websocket.onclose[0]).toBeDefined();
    expect(ws.websocket!.onerror[0]).toBeDefined();
    expect(ws.websocket!.onmessage![0]).toBeDefined();
    expect(ws.websocket.onopen[0]).toBeDefined();
  });
});
