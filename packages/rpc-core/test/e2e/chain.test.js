// Copyright 2017-2018 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Ws from '@polkadot/rpc-provider/ws';

import Rpc from '../../src';

describe.skip('e2e chain', () => {
  let api;

  beforeEach(() => {
    jest.setTimeout(30000);
    api = new Rpc(new Ws('ws://127.0.0.1:9944'));
  });

  it('subscribes to chain_newHead', (done) => {
    let count = 0;

    // tslint:disable-next-line
    api.chain
      .newHead((error, header) => {
        if (error) {
          return done(error);
        }

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
