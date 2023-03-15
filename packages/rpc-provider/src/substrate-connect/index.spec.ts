// Copyright 2017-2023 @polkadot/rpc-provider authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/node.d.ts" />

/* eslint-disable sort-keys */
/* eslint-disable promise/param-names */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/ban-types */

// FIXME A number of tests here, that were passing, is not skipped since
// Jest has "some" issues with `await import` - we don't transform these

import type * as Sc from '@substrate/connect';
import type { HealthChecker, SmoldotHealth } from './types.js';

import { ScProvider } from './index.js';

type MockChain = Sc.Chain & {
  _spec: () => string
  _recevedRequests: () => string[]
  _isTerminated: () => boolean
  _triggerCallback: (response: string | {}) => void
  _setTerminateInterceptor: (fn: () => void) => void
  _setSendJsonRpcInterceptor: (fn: (rpc: string) => void) => void
  _getLatestRequest: () => string
}

type MockedHealthChecker = HealthChecker & {
  _isActive: () => boolean
  _triggerHealthUpdate: (update: SmoldotHealth) => void
}

enum WellKnownChain {
  polkadot = 'polkadot',
  ksmcc3 = 'ksmcc3',
  rococo_v2_2 = 'rococo_v2_2',
  westend2 = 'westend2'
}

const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

function healthCheckerMock (): MockedHealthChecker {
  let cb: (health: SmoldotHealth) => void = () => {};

  let sendJsonRpc: (request: string) => void = () => {};

  let isActive = false;

  return {
    setSendJsonRpc: (cb) => {
      sendJsonRpc = cb;
    },
    start: (x) => {
      isActive = true;
      cb = x;
    },
    stop: () => {
      isActive = false;
    },
    sendJsonRpc: (...args) => sendJsonRpc(...args),
    responsePassThrough: (response) => response,
    _isActive: () => isActive,
    _triggerHealthUpdate: (update: SmoldotHealth) => {
      cb(update);
    }
  };
}

function healthCheckerFactory () {
  const _healthCheckers: MockedHealthChecker[] = [];

  return {
    healthChecker: () => {
      const result = healthCheckerMock();

      _healthCheckers.push(result);

      return result;
    },
    _healthCheckers,
    _latestHealthChecker: () => _healthCheckers.slice(-1)[0]
  };
}

function getFakeChain (spec: string, callback: Sc.JsonRpcCallback): MockChain {
  const _receivedRequests: string[] = [];
  let _isTerminated = false;

  let terminateInterceptor: Function = Function.prototype;
  let sendJsonRpcInterceptor: Function = Function.prototype;

  return {
    _spec: () => spec,
    _recevedRequests: () => _receivedRequests,
    _isTerminated: () => _isTerminated,
    _triggerCallback: (response) => {
      callback(
        typeof response === 'string' ? response : JSON.stringify(response)
      );
    },
    _setSendJsonRpcInterceptor: (fn) => {
      sendJsonRpcInterceptor = fn;
    },
    _setTerminateInterceptor: (fn) => {
      terminateInterceptor = fn;
    },
    sendJsonRpc: (rpc) => {
      sendJsonRpcInterceptor(rpc);
      _receivedRequests.push(rpc);
    },
    remove: () => {
      terminateInterceptor();
      _isTerminated = true;
    },
    _getLatestRequest: () => _receivedRequests[_receivedRequests.length - 1]
  };
}

function getFakeClient () {
  const chains: MockChain[] = [];
  let addChainInterceptor: Promise<void> = Promise.resolve();
  let addWellKnownChainInterceptor: Promise<void> = Promise.resolve();

  return {
    _chains: () => chains,
    _setAddChainInterceptor: (interceptor: Promise<void>) => {
      addChainInterceptor = interceptor;
    },
    _setAddWellKnownChainInterceptor: (interceptor: Promise<void>) => {
      addWellKnownChainInterceptor = interceptor;
    },
    addChain: (chainSpec: string, cb: Sc.JsonRpcCallback): Promise<MockChain> =>
      addChainInterceptor.then(() => {
        const result = getFakeChain(chainSpec, cb);

        chains.push(result);

        return result;
      }),
    addWellKnownChain: (
      wellKnownChain: string,
      cb: Sc.JsonRpcCallback
    ): Promise<MockChain> =>
      addWellKnownChainInterceptor.then(() => {
        const result = getFakeChain(wellKnownChain, cb);

        chains.push(result);

        return result;
      })
  };
}

function connectorFactory () {
  const clients: ReturnType<typeof getFakeClient>[] = [];
  const latestClient = () => clients[clients.length - 1];

  return {
    WellKnownChain,
    createScClient: () => {
      const result = getFakeClient();

      clients.push(result);

      return result;
    },
    _clients: () => clients,
    latestClient,
    latestChain: () =>
      latestClient()._chains()[latestClient()._chains().length - 1]
  };
}

function setChainSyncyingStatus (isSyncing: boolean) {
  getCurrentHealthChecker()._triggerHealthUpdate({
    isSyncing,
    peers: 1,
    shouldHavePeers: true
  });
}

let mockSc: typeof Sc & { latestChain: () => MockChain };
let mockedHealthChecker: ReturnType<typeof healthCheckerFactory>;
const getCurrentHealthChecker = () => mockedHealthChecker._latestHealthChecker();

describe('ScProvider', () => {
  beforeAll(() => {
    mockSc = connectorFactory() as unknown as typeof Sc & { latestChain: () => MockChain };
    mockedHealthChecker = healthCheckerFactory();
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

      const responsePromise = provider.send('getData', ['foo']);

      await wait(0);
      expect(chain._getLatestRequest()).toEqual(
        '{"id":1,"jsonrpc":"2.0","method":"getData","params":["foo"]}'
      );

      const result = { foo: 'foo' };

      chain._triggerCallback({
        jsonrpc: '2.0',
        id: 1,
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
          jsonrpc: '2.0',
          id: 1
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
          jsonrpc: '2.0',
          id: 1,
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

      provider.unsubscribe('foo', 'chain_unsubscribeNewHeads', unsubscribeToken);

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
          jsonrpc: '2.0',
          id: 1,
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
          jsonrpc: '2.0',
          id: 1,
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
        provider.subscribe('foo', 'bar', ['baz'], () => {})
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
        jsonrpc: '2.0',
        id: 1,
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
