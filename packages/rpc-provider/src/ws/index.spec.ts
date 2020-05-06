// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import WsProvider from './';
import { Mock } from './../mock/types';
import { mockWs, TEST_WS_URL } from '../../test/mockWs';

let ws: WsProvider;
let mock: Mock;

function createWs (requests: any[], autoConnect: number | undefined = 1000): WsProvider {
  mock = mockWs(requests);
  ws = new WsProvider(TEST_WS_URL, autoConnect);

  return ws;
}

describe('Ws', (): void => {
  afterEach((): void => {
    if (mock) {
      mock.done();
    }
  });

  it('returns the connected state', (): void => {
    expect(
      createWs([]).isConnected()
    ).toEqual(false);
  });
});

describe('Endpoint Parsing', (): void => {
  it('Succeeds when WsProvider endpoint is a valid string', () => {
    /* eslint-disable no-new */
    new WsProvider(TEST_WS_URL, 0);
  });

  it('Throws when WsProvider endpoint is an invalid string', () => {
    expect(() => {
      /* eslint-disable no-new */
      new WsProvider('http://127.0.0.1:9955', 0);
    }).toThrowError(/^Endpoint should start with /);
  });

  it('Succeeds when WsProvider endpoint is a valid array', () => {
    const endpoints: string[] = ['ws://127.0.0.1:9955', 'wss://testnet.io:9944', 'ws://mychain.com:9933'];

    /* eslint-disable no-new */
    new WsProvider(endpoints, 0);
  });

  it('Throws when WsProvider endpoint is an empty array', () => {
    const endpoints: string[] = [];

    expect(() => {
      /* eslint-disable no-new */
      new WsProvider(endpoints, 0);
    }).toThrowError('WsProvider requires at least one Endpoint');
  });

  it('Throws when WsProvider endpoint is an invalid array', () => {
    const endpoints: string[] = ['ws://127.0.0.1:9955', 'http://bad.co:9944', 'ws://mychain.com:9933'];

    expect(() => {
      /* eslint-disable no-new */
      new WsProvider(endpoints, 0);
    }).toThrowError(/^Endpoint should start with /);
  });
});
