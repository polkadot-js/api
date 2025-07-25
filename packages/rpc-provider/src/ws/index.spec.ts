// Copyright 2017-2025 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import type { Request } from '../mock/mockWs.js';
import type { Mock } from '../mock/types.js';

import { mockWs } from '../mock/mockWs.js';
import { WsProvider } from './index.js';

const TEST_WS_URL = 'ws://localhost-index.spec.ts:9977';

let provider: WsProvider | null;
let mock: Mock;

function createWs (requests: Request[], autoConnect = 1000, headers?: Record<string, string>, timeout?: number): WsProvider {
  mock = mockWs(requests, TEST_WS_URL);
  provider = new WsProvider(TEST_WS_URL, autoConnect, headers, timeout);

  return provider;
}

describe('Ws', (): void => {
  afterEach(async () => {
    if (mock) {
      await mock.done();
    }

    if (provider) {
      await provider.disconnect();
      provider = null;
    }
  });

  it('returns the connected state', (): void => {
    expect(
      createWs([]).isConnected
    ).toEqual(false);
  });

  // eslint-disable-next-line jest/expect-expect
  it('allows you to initialize the provider with custom headers', () => {
    createWs([], 100, { foo: 'bar' });
  });

  // eslint-disable-next-line jest/expect-expect
  it('allows you to set custom timeout value for handlers', () => {
    const CUSTOM_TIMEOUT_S = 90;
    const CUSTOM_TIMEOUT_MS = CUSTOM_TIMEOUT_S * 1000;

    createWs([], 100, { foo: 'bar' }, CUSTOM_TIMEOUT_MS);
  });
});

describe('Endpoint Parsing', (): void => {
  // eslint-disable-next-line jest/expect-expect
  it('Succeeds when WsProvider endpoint is a valid string', () => {
    /* eslint-disable no-new */
    new WsProvider(TEST_WS_URL, 0);
  });

  it('should throw error on negative cache capacity or TTL', () => {
    expect(() => new WsProvider(TEST_WS_URL, false, {}, undefined, -5, 30000)).toThrow(/'capacity' must be a non-negative integer/);
    expect(() => new WsProvider(TEST_WS_URL, false, {}, undefined, 1024, -1000)).toThrow(/'ttl' must be between 0 and 1800000 ms or null to disable/);
  });

  it('Throws when WsProvider endpoint is an invalid string', () => {
    expect(
      () => new WsProvider('http://127.0.0.1:9955', 0)
    ).toThrow(/^Endpoint should start with /);
  });

  // eslint-disable-next-line jest/expect-expect
  it('Succeeds when WsProvider endpoint is a valid array', () => {
    const endpoints: string[] = ['ws://127.0.0.1:9955', 'wss://testnet.io:9944', 'ws://mychain.com:9933'];

    /* eslint-disable no-new */
    new WsProvider(endpoints, 0);
  });

  it('Throws when WsProvider endpoint is an empty array', () => {
    const endpoints: string[] = [];

    expect(
      () => new WsProvider(endpoints, 0)
    ).toThrow('WsProvider requires at least one Endpoint');
  });

  it('Throws when WsProvider endpoint is an invalid array', () => {
    const endpoints: string[] = ['ws://127.0.0.1:9955', 'http://bad.co:9944', 'ws://mychain.com:9933'];

    expect(
      () => new WsProvider(endpoints, 0)
    ).toThrow(/^Endpoint should start with /);
  });
});
