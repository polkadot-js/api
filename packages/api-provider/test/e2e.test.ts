// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { ApiInterface } from '../../api/src/types';

import createApi from '../../api/src';
import Ws from '../src/ws';

describe.skip('e2e', () => {
  let api: ApiInterface;

  beforeEach(() => {
    jest.setTimeout(30000);
    api = createApi(new Ws('ws://127.0.0.1:9944'));
  });

  it('subscribes to client_newHead', (done) => {
    let count = 0;

    // tslint:disable-next-line
    api.chain
      .newHead((error: Error | null, data: any) => {
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
