// Copyright 2017-2018 @polkadot/api-provider authors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

const createApi = require('../../api/src');
const createProvider = require('../src/ws');

describe.skip('e2e', () => {
  let api;

  beforeEach(() => {
    jest.setTimeout(30000);
    api = createApi(createProvider('ws://127.0.0.1:9944'));
  });

  it('subscribes to client_newHead', (done) => {
    let count = 0;

    api.chain
      .newHead((error, data) => {
        console.log('newHead: result =', [error, data]);

        expect(data).toBeDefined();

        if (++count === 3) {
          done();
        }
      })
      .then((subscriptionId) => {
        console.log('newHead: subscriptionId =', subscriptionId);
      });
  });
});
