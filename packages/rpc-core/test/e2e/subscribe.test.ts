// Copyright 2017-2018 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Ws from '@polkadot/rpc-provider/ws';
import storage from '@polkadot/storage/static';

import Rpc from '../../src';

describe.skip('e2e subscriptions', () => {
  let api: any;

  beforeEach(() => {
    jest.setTimeout(30000);
    api = new Rpc(new Ws('ws://127.0.0.1:9944'));
  });

  it('retrieves current timestamp', (done) => {
    let count = 0;

    return api.state
      .subscribeStorage([[storage.timestamp.now]], (data: any) => {
        expect(data).toBeDefined();

        if (++count === 3) {
          done();
        }
      })
      .then((subscriptionId: string) => {
        console.log('newHead: subscriptionId =', subscriptionId);
      });
  });
});
