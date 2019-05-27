// Copyright 2017-2019 @polkadot/rpc-rx authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import WsProvider from '@plugnet/rpc-provider/ws';
import storage from '@plugnet/storage/static';

import RpcRx from '../../src';

describe.skip('e2e subscriptions', () => {
  let api;

  beforeEach(() => {
    jest.setTimeout(30000);

    api = new RpcRx(new WsProvider('ws://127.0.0.1:9944'));
  });

  it('retrieves current timestamp', (done) => {
    let count = 0;

    api.state
      .subscribeStorage([[storage.timestamp.now]])
      .subscribe((data) => {
        console.error('timestamp.now', data);

        if (++count === 4) {
          done();
        }
      });
  });

  it('retrieves multiple values', (done) => {
    api.state
      .subscribeStorage([
        [storage.timestamp.now],
        [storage.session.sessionLength],
        [storage.staking.sessionsPerEra]
      ])
      .subscribe((data) => {
        console.error('multiples', data);

        if (data !== undefined && data.filter((item) => item).length === 3) {
          done();
        }
      });
  });
});
