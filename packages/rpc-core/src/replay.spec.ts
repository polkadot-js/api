// Copyright 2017-2024 @polkadot/rpc-core authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import type { RpcInterface } from './types/index.js';

import { MockProvider } from '@polkadot/rpc-provider/mock';
import { TypeRegistry } from '@polkadot/types/create';

import { RpcCore } from './index.js';

describe('replay', (): void => {
  const registry = new TypeRegistry();
  let rpc: RpcCore & RpcInterface;
  let provider: MockProvider;

  beforeEach((): void => {
    provider = new MockProvider(registry);
    rpc = new RpcCore('653', registry, { provider }) as (RpcCore & RpcInterface);
  });

  afterEach(async () => {
    await provider.disconnect();
  });

  it('returns the observable value', async (): Promise<void> => {
    await new Promise<boolean>((resolve) => {
      rpc.system.chain().subscribe((value?: { toString: () => string }): void => {
        if (value) {
          // eslint-disable-next-line jest/no-conditional-expect
          expect(value.toString()).toEqual('mockChain'); // Defined in MockProvider
          resolve(true);
        }
      });
    });
  });

  it('replay(1) works as expected', async (): Promise<void> => {
    const observable = rpc.system.chain();
    let a: any;

    observable.subscribe((value?: unknown): void => {
      a = value;
    });

    await new Promise<boolean>((resolve) => {
      setTimeout((): void => {
        // Subscribe again to the same observable, it should fire value immediately
        observable.subscribe((value: any): void => {
          expect(value).toEqual(a);
          resolve(true);
        });
      }, 1000);
    });
  });

  it('unsubscribes as required', async (): Promise<void> => {
    rpc.provider.unsubscribe = jest.fn();

    await new Promise<boolean>((resolve) => {
      const subscription = rpc.chain.subscribeNewHeads().subscribe((): void => {
        subscription.unsubscribe();

        // There's a promise inside .unsubscribe(), wait a bit (> 2s)
        setTimeout((): void => {
          expect(rpc.provider.unsubscribe).toHaveBeenCalled();
          resolve(true);
        }, 3500);
      });
    });
  });
});
