// Copyright 2017-2026 @polkadot/rpc-core authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import type { ProviderInterface, ProviderInterfaceCallback, ProviderInterfaceEmitted } from '@polkadot/rpc-provider/types';
import type { RpcInterface } from './types/index.js';

import { TypeRegistry } from '@polkadot/types/create';

import { RpcCore } from './index.js';

interface DisconnectError extends Error {
  isNormalClose?: boolean;
}

// A minimal provider that leaves `subscribe` pending and, on `disconnect()`,
// rejects that pending request exactly like a closing WebSocket would. The
// `isNormalClose` flag mirrors what the WsProvider sets for a normal (1000)
// close, see packages/rpc-provider/src/ws/index.ts.
class PendingCloseProvider implements ProviderInterface {
  public isConnected = true;

  public isClonable = false;

  public hasSubscriptions = true;

  #isNormalClose: boolean;

  #rejectors: ((error: Error) => void)[] = [];

  constructor (isNormalClose: boolean) {
    this.#isNormalClose = isNormalClose;
  }

  public clone (): ProviderInterface {
    return this;
  }

  public connect (): Promise<void> {
    return Promise.resolve();
  }

  public disconnect (): Promise<void> {
    const error: DisconnectError = new Error('disconnected from ws://fake: 1000:: Normal Closure');

    // mirror the WsProvider: on a normal (1000) close the teardown of pending
    // requests is expected, not a genuine error
    if (this.#isNormalClose) {
      error.isNormalClose = true;
    }

    this.#rejectors.forEach((reject) => reject(error));

    return Promise.resolve();
  }

  public on (_type: ProviderInterfaceEmitted, _sub: () => void): () => void {
    return () => undefined;
  }

  public send <T = any> (): Promise<T> {
    throw new Error('not used');
  }

  public subscribe (_type: string, _method: string, _params: unknown[], _cb: ProviderInterfaceCallback): Promise<number | string> {
    return new Promise((_resolve, reject): void => {
      this.#rejectors.push(reject);
    });
  }

  public unsubscribe (_type: string, _method: string, _id: number | string): Promise<boolean> {
    return Promise.resolve(true);
  }
}

describe('RpcCore disconnect logging', (): void => {
  const registry = new TypeRegistry();

  function sleep (ms = 50): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('does not error-log a pending subscription torn down by a normal (1000) close', async () => {
    const provider = new PendingCloseProvider(true);
    const rpc = new RpcCore('disconnect-normal', registry, { provider }) as unknown as RpcInterface;
    const errorSpy = jest.spyOn(console, 'error');

    rpc.state.subscribeRuntimeVersion().subscribe({
      error: () => undefined,
      next: () => undefined
    });

    await provider.disconnect();
    await sleep();

    const logged = errorSpy.mock.calls.map((call) => call.arguments.map(String).join(' '));

    expect(logged.some((l) => l.includes('disconnected from') && l.includes('1000'))).toEqual(false);
  });

  it('still error-logs a pending subscription torn down by an abnormal close', async () => {
    const provider = new PendingCloseProvider(false);
    const rpc = new RpcCore('disconnect-abnormal', registry, { provider }) as unknown as RpcInterface;
    const errorSpy = jest.spyOn(console, 'error');

    rpc.state.subscribeRuntimeVersion().subscribe({
      error: () => undefined,
      next: () => undefined
    });

    await provider.disconnect();
    await sleep();

    const logged = errorSpy.mock.calls.map((call) => call.arguments.map(String).join(' '));

    expect(logged.some((l) => l.includes('disconnected from'))).toEqual(true);
  });
});
