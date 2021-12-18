// Copyright 2017-2021 @polkadot/rpc-core authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { RpcInterface } from './types';

import { MockProvider } from '@polkadot/rpc-provider/mock';
import { TypeRegistry } from '@polkadot/types/create';

import { RpcCore } from '.';

describe('replay', (): void => {
  const registry = new TypeRegistry();
  let rpc: RpcCore & RpcInterface;
  let provider: MockProvider;

  beforeEach((): void => {
    provider = new MockProvider(registry);
    rpc = new RpcCore('653', registry, provider) as (RpcCore & RpcInterface);
  });

  afterEach(async () => {
    await provider.disconnect();
  });

  it('returns the observable value', (done): void => {
    rpc.system.chain().subscribe((value: any): void => {
      if (value) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
        expect(value.toString()).toEqual('mockChain'); // Defined in MockProvider
        done();
      }
    });
  });

  it('replay(1) works as expected', (done): void => {
    const observable = rpc.system.chain();
    let a: any | undefined;

    observable.subscribe((value?: unknown): void => { a = value; });

    setTimeout((): void => {
      // Subscribe again to the same observable, it should fire value immediately
      observable.subscribe((value: any): void => {
        expect(value).toEqual(a);
        done();
      });
    }, 1000);
  });

  it('unsubscribes as required', (done): void => {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    rpc.provider.unsubscribe = jest.fn();

    const subscription = rpc.chain.subscribeNewHeads().subscribe((): void => {
      subscription.unsubscribe();

      // There's a promise inside .unsubscribe(), wait a bit (> 2s)
      setTimeout((): void => {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        expect(rpc.provider.unsubscribe).toHaveBeenCalled();
        done();
      }, 3500);
    });
  });
});
