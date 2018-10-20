// Copyright 2017-2018 @polkadot/rpc-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Ws from '@polkadot/rpc-provider/ws';
import storage from '@polkadot/storage/static';

import RpcRx from '../../src';

describe.skip('e2e subscriptions', () => {
  let api: any;

  beforeEach(() => {
    jest.setTimeout(30000);

    api = new RpcRx(new Ws('ws://127.0.0.1:9944'));
  });

  it('retrieves current timestamp', (done) => {
    let count = 0;

    api.state
      .subscribeStorage([[storage.timestamp.now]])
      .subscribe((data: any) => {
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
      .subscribe((data: any) => {
        console.error('multiples', data);

        if (data !== undefined && data.filter((item: Array<any>) => item).length === 3) {
          done();
        }
      });
  });
});
