// Copyright 2017-2020 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Header } from '@polkadot/types/interfaces';

import { ClassOf, TypeRegistry } from '@polkadot/types';
import WsProvider from '@polkadot/rpc-provider/ws';
import Rpc from '@polkadot/rpc-core';

import { describeE2E } from '../../util';

describeE2E({
  except: [
    'remote-polkadot-alexander',
    'remote-substrate-1.0'
  ]
})('RPC-core e2e chain', (wsUrl: string): void => {
  const registry = new TypeRegistry();
  let rpc: Rpc;

  beforeEach((): void => {
    jest.setTimeout(30000);
    rpc = new Rpc(registry, new WsProvider(wsUrl));
  });

  it('subscribes via subscribeNewHeads', (done): void => {
    let count = 0;

    rpc.chain
      .subscribeNewHeads()
      .subscribe((header: Header): void => {
        expect(header).toBeInstanceOf(ClassOf(registry, 'Header'));

        if (++count === 3) {
          done();
        }
      });
  });
});
