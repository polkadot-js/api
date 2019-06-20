// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ChainProperties, PendingExtrinsics } from '@polkadot/types';
import WsProvider from '@polkadot/rpc-provider/ws';

import Rpc from '../../src';

describe.skip('e2e basics', () => {
  let rpc: Rpc;

  beforeEach(() => {
    jest.setTimeout(30000);
    rpc = new Rpc(new WsProvider('ws://127.0.0.1:9944'));
  });

  it('retrieves the pending extrinsics', (done) => {
    rpc.author
      .pendingExtrinsics()
      .subscribe((extrinsics: PendingExtrinsics) => {
        expect(extrinsics).toBeInstanceOf(PendingExtrinsics);
        done();
      });
  });

  it('retrieves the system properties', (done) => {
    rpc.system
      .properties()
      .subscribe((properties: ChainProperties) => {
        expect(properties).toBeInstanceOf(ChainProperties);
        console.log('properties', properties);
        done();
      });
  });
});
