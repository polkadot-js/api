// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import storage from '@polkadot/storage/testing';

import Ws from '../../../api-provider/src/ws';
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
        console.error('subscribe', data);

        if (++count === 4) {
          done();
        }
      });
  });
});
