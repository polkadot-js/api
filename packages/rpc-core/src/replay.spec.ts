// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { of } from 'rxjs';
import MockProvider from '@polkadot/rpc-provider/mock';

import Rpc from '.';

describe('replay', () => {
  let rpc: Rpc;

  beforeEach(() => {
    rpc = new Rpc(new MockProvider());
  });

  it('subscribes via the rpc section', (done) => {
    rpc.chain.getBlockHash = jest.fn(() => of(1));

    rpc.chain.getBlockHash(123, false).subscribe(() => {
      expect(
        rpc.chain.getBlockHash
      ).toHaveBeenCalledWith(123, false);

      done();
    });
  });

  it('returns the observable value', (done) => {
    rpc.system.chain().subscribe((value) => {
      if (value) {
        expect(value).toEqual('mockChain'); // Defined in MockProvider
        done();
      }
    });
  });

  it('replay(1) works as expected', (done) => {
    const observable = rpc.system.chain();
    let a: string | undefined;
    observable.subscribe((value) => { a = value; });

    setTimeout(() => {
      // Subscribe again to the same observable, it should fire value immediately
      observable.subscribe((value) => {
        expect(value).toEqual(a);
        done();
      });
    }, 1000);
  });

  it('unsubscribes as required', (done) => {
    rpc.provider.unsubscribe = jest.fn();

    const subscription = rpc.chain.subscribeNewHead().subscribe(() => {
      subscription.unsubscribe();
      // There's a promise inside .unsubscribe(), wait a bit
      setTimeout(() => {
        expect(rpc.provider.unsubscribe).toHaveBeenCalled();
        done();
      }, 200);
    });
  });
});
