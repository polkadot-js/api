// Copyright 2017-2020 @polkadot/rpc-core authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from '@polkadot/x-rxjs';

import { MockProvider } from '@polkadot/rpc-provider/mock';
import { TypeRegistry } from '@polkadot/types/create';
import { of } from '@polkadot/x-rxjs';

import { RpcCore } from '.';

describe('replay', (): void => {
  const registry = new TypeRegistry();
  let rpc: RpcCore;

  beforeEach((): void => {
    rpc = new RpcCore('653', registry, new MockProvider(registry));
  });

  it('subscribes via the rpc section', (done): void => {
    // we don't honor types or number of params here
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    (rpc.chain as any).getBlockHash = jest.fn((): Observable<number> => of(1));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    (rpc.chain as any).getBlockHash(123, false).subscribe((): void => {
      expect(
        // eslint-disable-next-line @typescript-eslint/unbound-method
        rpc.chain.getBlockHash
      ).toHaveBeenCalledWith(123, false);

      done();
    });
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
