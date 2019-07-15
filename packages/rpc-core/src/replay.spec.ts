// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable, of } from 'rxjs';
import MockProvider from '@polkadot/rpc-provider/mock';

import Rpc from '.';

describe('replay', (): void => {
  let rpc: Rpc;

  beforeEach((): void => {
    rpc = new Rpc(new MockProvider());
  });

  it('subscribes via the rpc section', (done): void => {
    rpc.chain.getBlockHash = jest.fn((): Observable<number> => of(1));

    rpc.chain.getBlockHash(123, false).subscribe((): void => {
      expect(
        rpc.chain.getBlockHash
      ).toHaveBeenCalledWith(123, false);

      done();
    });
  });

  it('returns the observable value', (done): void => {
    rpc.system.chain().subscribe((value: any): void => {
      if (value) {
        expect(value).toEqual('mockChain'); // Defined in MockProvider
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
    rpc.provider.unsubscribe = jest.fn();

    const subscription = rpc.chain.subscribeNewHead().subscribe((): void => {
      subscription.unsubscribe();

      // There's a promise inside .unsubscribe(), wait a bit
      setTimeout((): void => {
        expect(rpc.provider.unsubscribe).toHaveBeenCalled();
        done();
      }, 200);
    });
  });
});
