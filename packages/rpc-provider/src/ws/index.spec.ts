// Copyright 2017-2020 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { mockWs, TEST_WS_URL } from '../../test/mockWs';
import { Mock } from './../mock/types';
import { WsProvider } from './';

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
      createWs([]).isConnected
    ).toEqual(false);
  });

  it('allows you to initialize the provider with custom headers', (): void => {
    expect(
      (): WsProvider => new WsProvider(TEST_WS_URL, 1000, { foo: 'bar' })
    ).not.toThrow();
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
