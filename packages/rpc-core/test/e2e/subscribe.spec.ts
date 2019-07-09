// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { StorageChangeSet } from '@polkadot/types';
import WsProvider from '@polkadot/rpc-provider/ws';
import storage from '@polkadot/api-metadata/storage/static';

import Rpc from '../../src';

describe.skip('e2e subscriptions', () => {
  let rpc: Rpc;

  beforeEach(() => {
    jest.setTimeout(30000);
    rpc = new Rpc(new WsProvider('ws://127.0.0.1:9944'));
  });

  it('retrieves current timestamp', (done) => {
    let count: number = 0;

    rpc.state
      .subscribeStorage([[storage.timestamp.now]])
      .subscribe((data: StorageChangeSet) => {
        expect(data).toBeDefined();

        if (++count === 3) {
          done();
        }
      });
  });
});
