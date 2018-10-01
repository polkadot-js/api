// Copyright 2017-2018 @polkadot/api-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import storage from '@polkadot/storage/testing';
import Ws from '@polkadot/api-provider/ws';

import RxApi from '../../src';

describe.skip('e2e subscriptions', () => {
  let api;

  beforeEach(() => {
    jest.setTimeout(30000);

    api = new RxApi(new Ws('ws://127.0.0.1:9944'));
  });

  it('retrieves current timestamp', (done) => {
    let count = 0;

    api.state
      .storage([[storage.timestamp.now]])
      .subscribe((data) => {
        console.error('timestamp.now', data);

        if (++count === 4) {
          done();
        }
      });
  });

  it('retrieves multiple values', (done) => {
    api.state
      .storage([
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
