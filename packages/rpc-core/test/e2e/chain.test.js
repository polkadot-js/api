// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import WsProvider from '@plugnet/rpc-provider/ws';

import Rpc from '../../src';

describe.skip('e2e chain', () => {
  let api;

  beforeEach(() => {
    jest.setTimeout(30000);
    api = new Rpc(new WsProvider('ws://127.0.0.1:9944'));
  });

  it('subscribes via subscribeNewHead', (done) => {
    let count = 0;

    // tslint:disable-next-line
    api.chain
      .subscribeNewHead((header) => {
        expect(header).toBeDefined();

        if (++count === 3) {
          done();
        }
      })
      .then((subscriptionId) => {
        console.log('newHead: subscriptionId =', subscriptionId);
      });
  });

  it('retrieves the runtime version', () => {
    return api.chain
      .getRuntimeVersion()
      .then((version) => {
        console.error('version', version);
      })
      .catch((error) => {
        console.error(error);

        throw error;
      });
  });
});
