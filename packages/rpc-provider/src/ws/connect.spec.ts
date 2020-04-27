// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import WsProvider from './';
import { Mock } from './../mock/types';
import { mockWs, TEST_WS_URL } from '../../test/mockWs';

describe('onConnect', (): void => {
  let mock: Mock;

  beforeEach((): void => {
    mock = mockWs([]);
  });

  afterEach((): void => {
    if (mock) {
      mock.done();
    }
  });

  it('Does not connect when autoConnect is false', (): void => {
    const provider: WsProvider = new WsProvider(TEST_WS_URL, 0);

    expect(provider.isConnected()).toBe(false);
  });

  it('Does connect when autoConnect is true', (): void => {
    const provider: WsProvider = new WsProvider(TEST_WS_URL, 1000);

    expect(provider.isConnected()).not.toBe(true);
  });

  it('Creates a new WebSocket instance by calling the connect() method', (): void => {
    const provider: WsProvider = new WsProvider(TEST_WS_URL, 0);

    expect(provider.isConnected()).toBe(false);

    provider.connect();

    expect(provider.isConnected()).not.toBe(true);
  });
});
