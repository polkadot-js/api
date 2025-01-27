// Copyright 2017-2025 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import type * as Sc from '@substrate/connect';
import type { HealthChecker, SmoldotHealth } from './types.js';

import { noop, stringify } from '@polkadot/util';

import { ScProvider } from './index.js';

// Well known chain constants
const mockWellKnownChain = {
  polkadot: 'polkadot',
  ksmcc3: 'ksmcc3',
  rococo_v2_2: 'rococo_v2_2',
  westend2: 'westend2',
  paseo: 'paseo'
} as const;

interface MockChain {
  sendJsonRpc: (rpc: string) => void;
  remove: () => void;
  nextJsonRpcResponse: () => Promise<string>;
  jsonRpcResponses: AsyncIterableIterator<string>;
  addChain: Sc.AddChain;
  _requests: string[];
  _terminated: boolean;
  _callback: (response: string) => void;
  _interceptor: ((rpc: string) => void) | null;
  _setInterceptor: (fn: ((rpc: string) => void) | null) => void;
  _getLatestRequest: () => string | undefined;
  _triggerCallback: (response: unknown) => void;
  _isTerminated: () => boolean;
  _setSendJsonRpcInterceptor: (fn: ((rpc: string) => void) | null) => void;
  _recevedRequests: () => string[];
}

// Helper function to wait for a specified number of milliseconds
const wait = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

function createMockChain (callback: (response: string) => void): MockChain {
  const requests: string[] = [];
  let terminated = false;
  let interceptor: ((rpc: string) => void) | null = null;
  let responseQueue: string[] = [];

  const nextJsonRpcResponse: MockChain['nextJsonRpcResponse'] = async () => {
    if (responseQueue.length === 0) {
      return new Promise<string>((resolve) => {
        const checkQueue = () => {
          if (responseQueue.length > 0) {
            resolve(responseQueue.shift()!);
          } else {
            setTimeout(checkQueue, 10);
          }
        };
        checkQueue();
      });
    }
    return responseQueue.shift()!;
  }

  const jsonRpcResponses: MockChain['jsonRpcResponses'] = {
    async next() {
      const value = await nextJsonRpcResponse();
      return { done: false, value };
    },
    [Symbol.asyncIterator]() {
      return this;
    },
    return: () => Promise.resolve({ done: true, value: undefined }),
    throw: () => Promise.resolve({ done: true, value: undefined })
  }

  const chain: MockChain = {
    _requests: requests,
    _terminated: terminated,
    _callback: (response: string) => {
      responseQueue.push(response);
      callback(response);
    },
    _interceptor: null,
    _setInterceptor: (fn: ((rpc: string) => void) | null) => {
      interceptor = fn;
    },
    _getLatestRequest: () => requests[requests.length - 1],
    sendJsonRpc: (rpc: string) => {
      if (terminated) {
        throw new Error('Chain terminated');
      }

      if (interceptor) {
        interceptor(rpc);
      }

      requests.push(rpc);
    },
    remove: () => {
      terminated = true;
    },
    nextJsonRpcResponse,
    jsonRpcResponses,
    addChain: async () => createMockChain(noop),
    _triggerCallback: (response: unknown) => {
      callback(stringify(response));
    },
    _isTerminated: () => terminated,
    _setSendJsonRpcInterceptor: (fn: ((rpc: string) => void) | null) => {
      interceptor = fn;
    },
    _recevedRequests: () => requests
  };

  return chain;
}

function createMockClient () {
  const chains: MockChain[] = [];
  let interceptor: Promise<void> = Promise.resolve();

  return {
    addChain: async (spec: string) => {
      await interceptor;
      const chain = createMockChain(noop);

      chains.push(chain);

      return chain;
    },
    addWellKnownChain: async (chain: string) => {
      await interceptor;
      const mockChain = createMockChain(noop);

      chains.push(mockChain);

      return mockChain;
    },
    _chains: chains,
    _setInterceptor: (p: Promise<void>) => {
      interceptor = p;
    },
    latestChain: () => chains[chains.length - 1]
  };
}

// Mock client instance that will be shared
let mockClient = createMockClient();

// Mock Sc client with mockClient instance
const mockSc = {
  createScClient: () => {
    mockClient = createMockClient();
    return mockClient;
  },
  WellKnownChain: mockWellKnownChain,
  latestChain: () => mockClient.latestChain()
};

// Mock health checker factory
const mockedHealthChecker = {
  healthChecker: () => createMockHealthChecker()
};

// Helper function to set chain syncing status
function setChainSyncyingStatus(isSyncing: boolean) {
  const health: SmoldotHealth = {
    isSyncing,
    peers: 1,
    shouldHavePeers: true
  };
  mockedHealthChecker.healthChecker()._update(health);
}

function createMockHealthChecker (): HealthChecker & { _update: (health: SmoldotHealth) => void } {
  let sendRpc: ((req: string) => void) | null = null;
  let healthCb: ((health: SmoldotHealth) => void) | null = null;

  return {
    setSendJsonRpc: (cb) => {
      sendRpc = cb;
    },
    sendJsonRpc: (req) => sendRpc?.(req),
    responsePassThrough: (res) => res,
    start: (cb) => {
      healthCb = cb;
    },
    stop: () => {
      healthCb = null;
    },
    _update: (health) => healthCb?.(health)
  };
}

describe('ScProvider', () => {
  let provider: ScProvider;
  let mockClient: ReturnType<typeof createMockClient>;
  let mockHealthChecker: ReturnType<typeof createMockHealthChecker>;

  beforeEach(async () => {
    mockClient = createMockClient();
    mockHealthChecker = createMockHealthChecker();
    provider = new ScProvider({ createScClient: () => mockClient, WellKnownChain: mockWellKnownChain }, '');
    await provider.connect(undefined, () => mockHealthChecker);
  });

  afterEach(async () => {
    await provider.disconnect();
  });

  describe('on', () => {
    it('emits `connected` as soon as the chain is not syncing', async () => {
      const provider = new ScProvider(mockSc, '');

      await provider.connect(undefined, mockedHealthChecker.healthChecker);

      const onConnected = jest.fn();

      provider.on('connected', onConnected);

      expect(onConnected).not.toHaveBeenCalled();
      setChainSyncyingStatus(false);
      expect(onConnected).toHaveBeenCalled();
    });

    it('stops receiving notifications after unsubscribing', async () => {
      const provider = new ScProvider(mockSc, '');

      await provider.connect(undefined, mockedHealthChecker.healthChecker);

      const onConnected = jest.fn();

      provider.on('connected', onConnected)();
      expect(onConnected).not.toHaveBeenCalled();

      setChainSyncyingStatus(false);
      expect(onConnected).not.toHaveBeenCalled();
    });

    it('synchronously emits connected if the Provider is already `connected`', async () => {
      const provider = new ScProvider(mockSc, '');

      await provider.connect(undefined, mockedHealthChecker.healthChecker);

      setChainSyncyingStatus(false);

      const onConnected = jest.fn();

      provider.on('connected', onConnected);
      expect(onConnected).toHaveBeenCalled();
    });

    it('emits `disconnected` once the chain goes back to syncing', async () => {
      const provider = new ScProvider(mockSc, '');

      await provider.connect(undefined, mockedHealthChecker.healthChecker);

      setChainSyncyingStatus(false);

      const onConnected = jest.fn();
      const onDisconnected = jest.fn();

      provider.on('connected', onConnected);
      provider.on('disconnected', onDisconnected);

      expect(onConnected).toHaveBeenCalled();
      expect(onDisconnected).not.toHaveBeenCalled();

      onConnected.mockReset();
      setChainSyncyingStatus(true);

      expect(onConnected).not.toHaveBeenCalled();
      expect(onDisconnected).toHaveBeenCalled();
    });
  });

  describe('hasSubscriptions', () => {
    it('supports subscriptions', async () => {
      const provider = new ScProvider(mockSc, '');

      await provider.connect(undefined, mockedHealthChecker.healthChecker);

      expect(provider.hasSubscriptions).toBe(true);
    });
  });

  describe('clone', () => {
    it('can not be clonned', async () => {
      const provider = new ScProvider(mockSc, '');

      await provider.connect(undefined, mockedHealthChecker.healthChecker);

      expect(() => provider.clone()).toThrow();
    });
  });

  describe('connect', () => {
    it('does not create a new chain when trying to re-connect while the current chain is syncing', async () => {
      const provider = new ScProvider(mockSc, '');

      await provider.connect(undefined, mockedHealthChecker.healthChecker);
      const chain = mockSc.latestChain();

      await provider.connect(undefined, mockedHealthChecker.healthChecker);
      expect(chain).toBe(mockSc.latestChain());
    });

    it('throws when trying to connect on an already connected Provider', async () => {
      const provider = new ScProvider(mockSc, '');

      await provider.connect(undefined, mockedHealthChecker.healthChecker);

      setChainSyncyingStatus(false);

      await expect(
        provider.connect(undefined, mockedHealthChecker.healthChecker)
      ).rejects.toThrow(/Already connected/);
    });
  });

  describe('disconnect', () => {
    it('removes the chain and cleans up', async () => {
      const provider = new ScProvider(mockSc, '');

      await provider.connect(undefined, mockedHealthChecker.healthChecker);
      const chain = mockSc.latestChain();

      await provider.disconnect();

      expect(chain._isTerminated()).toBe(true);
    });

    // eslint-disable-next-line jest/expect-expect
    it('does not throw when disconnecting on an already disconnected Provider', async () => {
      const provider = new ScProvider(mockSc, '');

      await provider.connect(undefined, mockedHealthChecker.healthChecker);
      await provider.disconnect();
      await provider.disconnect();
    });
  });

  describe('send', () => {
    it('throws when trying to send a request while the Provider is not connected', async () => {
      const provider = new ScProvider(mockSc, '');

      await provider.connect(undefined, mockedHealthChecker.healthChecker);

      await expect(provider.send('', [])).rejects.toThrow();
    });

    it('receives responses to its requests', async () => {
      const provider = new ScProvider(mockSc, '');

      await provider.connect(undefined, mockedHealthChecker.healthChecker);
      const chain = mockSc.latestChain();

      setChainSyncyingStatus(false);

      const responsePromise = provider.send<unknown>('getData', ['foo']);

      await wait(0);
      expect(chain._getLatestRequest()).toEqual(
        '{"id":1,"jsonrpc":"2.0","method":"getData","params":["foo"]}'
      );

      const result = { foo: 'foo' };

      chain._triggerCallback({
        id: 1,
        jsonrpc: '2.0',
        result
      });

      const response = await responsePromise;

      expect(response).toEqual(result);
    });

    it("rejects when the response can't be deserialized", async () => {
      const provider = new ScProvider(mockSc, '');

      await provider.connect(undefined, mockedHealthChecker.healthChecker);
      const chain = mockSc.latestChain();

      setChainSyncyingStatus(false);

      setTimeout(() => {
        chain._triggerCallback({
        id: 1,
          jsonrpc: '2.0'
        });
      }, 0);

      await expect(provider.send('getData', ['foo'])).rejects.toThrow();
    });

    it('rejects when the smoldot chain has crashed', async () => {
      const provider = new ScProvider(mockSc, '');

      await provider.connect(undefined, mockedHealthChecker.healthChecker);
      const chain = mockSc.latestChain();

      setChainSyncyingStatus(false);
      await wait(0);

      chain._setSendJsonRpcInterceptor(() => {
        throw new Error('boom!');
      });

      await expect(
        provider.send('getData', ['foo'])
      ).rejects.toThrow(/Disconnected/);
      expect(provider.isConnected).toBe(false);
    });
  });

  describe('subscribe', () => {
    it('subscribes and recives messages until it unsubscribes', async () => {
      const provider = new ScProvider(mockSc, '');

      await provider.connect(undefined, mockedHealthChecker.healthChecker);
      const chain = mockSc.latestChain();

      setChainSyncyingStatus(false);

      const unsubscribeToken = 'unsubscribeToken';

      setTimeout(() => {
        chain._triggerCallback({
          id: 1,
          jsonrpc: '2.0',
          result: unsubscribeToken
        });
      }, 0);

      const cb = jest.fn();
      const token = await provider.subscribe(
        'foo',
        'chain_subscribeNewHeads',
        ['baz'],
        cb
      );

      expect(token).toBe(unsubscribeToken);
      expect(cb).not.toHaveBeenCalled();

      chain._triggerCallback({
        jsonrpc: '2.0',
        method: 'foo',
        params: {
          result: 1,
          subscription: token
        }
      });
      expect(cb).toHaveBeenCalledTimes(1);
      expect(cb).toHaveBeenLastCalledWith(null, 1);

      chain._triggerCallback({
        jsonrpc: '2.0',
        method: 'foo',
        params: {
          result: 2,
          subscription: token
        }
      });
      expect(cb).toHaveBeenCalledTimes(2);
      expect(cb).toHaveBeenLastCalledWith(null, 2);

      provider
        .unsubscribe('foo', 'chain_unsubscribeNewHeads', unsubscribeToken)
        .catch(console.error);

      chain._triggerCallback({
        jsonrpc: '2.0',
        method: 'foo',
        params: {
          result: 3,
          subscription: token
        }
      });
      expect(cb).toHaveBeenCalledTimes(2);
      expect(cb).toHaveBeenLastCalledWith(null, 2);
    });

    it('ignores subscription messages that were received before the subscription token', async () => {
      const provider = new ScProvider(mockSc, '');

      await provider.connect(undefined, mockedHealthChecker.healthChecker);
      const chain = mockSc.latestChain();

      setChainSyncyingStatus(false);

      const unsubscribeToken = 'unsubscribeToken';

      chain._triggerCallback({
        jsonrpc: '2.0',
        method: 'foo',
        params: {
          result: 1,
          subscription: unsubscribeToken
        }
      });
      setTimeout(() => {
        chain._triggerCallback({
        id: 1,
        jsonrpc: '2.0',
          result: unsubscribeToken
        });
      }, 0);

      const cb = jest.fn();
      const token = await provider.subscribe(
        'foo',
        'chain_subscribeNewHeads',
        ['baz'],
        cb
      );

      expect(token).toBe(unsubscribeToken);
      expect(cb).not.toHaveBeenCalled();
    });

    it('emits the error when the message has an error', async () => {
      const provider = new ScProvider(mockSc, '');

      await provider.connect(undefined, mockedHealthChecker.healthChecker);
      const chain = mockSc.latestChain();

      setChainSyncyingStatus(false);
      await wait(0);

      const unsubscribeToken = 'unsubscribeToken';

      setTimeout(() => {
        chain._triggerCallback({
        id: 1,
        jsonrpc: '2.0',
          result: unsubscribeToken
        });
      }, 0);

      const cb = jest.fn();
      const token = await provider.subscribe(
        'foo',
        'chain_subscribeNewHeads',
        ['baz'],
        cb
      );

      chain._triggerCallback({
        jsonrpc: '2.0',
        method: 'foo',
        params: {
          error: 'boom',
          subscription: unsubscribeToken
        }
      });

      expect(token).toBe(unsubscribeToken);
      expect(cb).toHaveBeenCalledTimes(1);
      expect(cb).toHaveBeenLastCalledWith(expect.any(Error), undefined);
    });

    it('errors when subscribing to an unsupported method', async () => {
      const provider = new ScProvider(mockSc, '');

      await provider.connect(undefined, mockedHealthChecker.healthChecker);

      setChainSyncyingStatus(false);

      await wait(0);
      await expect(
        provider.subscribe('foo', 'bar', ['baz'], () => undefined)
      ).rejects.toThrow(/Unsupported subscribe method: bar/);
    });
  });

  describe('unsubscribe', () => {
    it('rejects when trying to unsubscribe from un unexisting subscription', async () => {
      const provider = new ScProvider(mockSc, '');

      await provider.connect(undefined, mockedHealthChecker.healthChecker);

      setChainSyncyingStatus(false);

      await expect(
        provider.unsubscribe('', '', '')
      ).rejects.toThrow(/Unable to find active subscription/);
    });
  });

  it('cleans up the stale subscriptions once it reconnects', async () => {
    const provider = new ScProvider(mockSc, '');

    await provider.connect(undefined, mockedHealthChecker.healthChecker);
    const chain = mockSc.latestChain();

    // setting the syncing status of the chain to fals so that the Provider
    // gets `connected`
    setChainSyncyingStatus(false);

    // while connected we create a subscription
    const unsubscribeToken = 'unsubscribeToken';

    setTimeout(() => {
      chain._triggerCallback({
        id: 1,
        jsonrpc: '2.0',
        result: unsubscribeToken
      });
    }, 0);

    const cb = jest.fn();
    const token = await provider.subscribe(
      'foo',
      'chain_subscribeNewHeads',
      ['baz'],
      cb
    );

    // setting the syncing status of the chain to fals so that the Provider
    // gets `disconnected`
    setChainSyncyingStatus(true);

    // let's wait some time in order to ensure that the stale unsubscription
    // messages are not sent until the chain syncing status changes back to false
    await wait(200);

    // before we let the healthChecker know that the chain is no longer syncing,
    // let's make sure that the chain has received the correct request, and
    // most importantly that it has not received a request for unsubscribing
    // from the stale subscription, since that request should happen once the
    // chain is no longer syncing
    expect(chain._recevedRequests()).toEqual([
      '{"id":1,"jsonrpc":"2.0","method":"chain_subscribeNewHeads","params":["baz"]}'
    ]);

    // lets change the sync status back to false
    setChainSyncyingStatus(false);

    // let's wait one tick to ensure that the microtasks got processed
    await wait(0);

    // let's make sure that we have now sent the request for killing the
    // stale subscription
    expect(chain._recevedRequests()).toEqual([
      '{"id":1,"jsonrpc":"2.0","method":"chain_subscribeNewHeads","params":["baz"]}',
      `{"id":2,"jsonrpc":"2.0","method":"chain_unsubscribeNewHeads","params":["${token}"]}`,
      '{"id":3,"jsonrpc":"2.0","method":"chain_subscribeNewHeads","params":["baz"]}'
    ]);
  });
});
