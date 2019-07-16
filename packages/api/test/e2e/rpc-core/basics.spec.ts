// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ChainProperties, PendingExtrinsics } from '@polkadot/types';
import WsProvider from '@polkadot/rpc-provider/ws';

import Rpc from '@polkadot/rpc-core';

describe.skip('e2e basics', (): void => {
  let rpc: Rpc;

  beforeEach((): void => {
    jest.setTimeout(30000);
    rpc = new Rpc(new WsProvider('ws://127.0.0.1:9944'));
  });

  it('retrieves the pending extrinsics', (done): void => {
    rpc.author
      .pendingExtrinsics()
      .subscribe((extrinsics: PendingExtrinsics): void => {
        expect(extrinsics).toBeInstanceOf(PendingExtrinsics);
        done();
      });
  });

  it('retrieves the system properties', (done): void => {
    rpc.system
      .properties()
      .subscribe((properties: ChainProperties): void => {
        expect(properties).toBeInstanceOf(ChainProperties);
        console.log('properties', properties);
        done();
      });
  });
});
