// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import WsProvider from './';
import { Mock } from './../mock/types';
import { mockWs, TEST_WS_URL } from '../../test/mockWs';

function sleepMs(ms: number = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

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

  it('Does connect when autoConnect is true', async () => {
    const provider: WsProvider = new WsProvider(TEST_WS_URL, 1000);

    try {
      await provider.connect();
      await sleepMs(10); // Hack to give the provider time to connect
    }
    finally {
      expect(provider.isConnected()).toBe(true);
    }
  });

  it('Creates a new WebSocket instance by calling the connect() method', async () => {
    const provider: WsProvider = new WsProvider(TEST_WS_URL, 0);

    expect(provider.isConnected()).toBe(false);
    expect(mock.server.clients().length).toBe(0);

    try {
      await provider.connect();
      await sleepMs(10); // Hack to give the provider time to connect
    }
    finally {
      expect(provider.isConnected()).toBe(true);
      expect(mock.server.clients().length).toBe(1);
    }
  });

  it('Connects to first url when an array is given', async () => {
    const provider: WsProvider = new WsProvider([TEST_WS_URL], 1000);

    try {
      await provider.connect();
      await sleepMs(10); // Hack to give the provider time to connect
    }
    finally {
      expect(provider.isConnected()).toBe(true);
    }
  });
});
