// Copyright 2017-2020 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable, of } from 'rxjs';
import MockProvider from '@polkadot/rpc-provider/mock';
import { TypeRegistry } from '@polkadot/types';

import Rpc from '.';

describe('replay', (): void => {
  const registry = new TypeRegistry();
  let rpc: Rpc;

  beforeEach((): void => {
    rpc = new Rpc(registry, new MockProvider(registry));
  });

  it('subscribes via the rpc section', (done): void => {
    // we don't honor types or number of params here
    (rpc.chain as any).getBlockHash = jest.fn((): Observable<number> => of(1));
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
        expect(value.toString()).toEqual('mockChain'); // Defined in MockProvider
        done();
      }
    });
  });

  it('replay(1) works as expected', (done): void => {
    const observable = rpc.system.chain();
    let a: string | undefined;

    observable.subscribe((value: any): void => { a = value; });

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
