// Copyright 2017-2018 @polkadot/api-provider authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import storage from '@polkadot/storage';

import createApi from '../../api/src';
import Ws from '../src/ws';

describe.skip('e2e', () => {
  let api;

  beforeEach(() => {
    jest.setTimeout(30000);
    api = createApi(new Ws('ws://127.0.0.1:9944'));
  });

  it('subscribes to chain_subscribeNewHead', (done) => {
    let count = 0;

    // tslint:disable-next-line
    api.chain
      .subscribeNewHead((error, data) => {
        if (error) {
          return done(error);
        }

        expect(data).toBeDefined();

        if (++count === 3) {
          done();
        }
      })
      .then((subscriptionId) => {
        console.log('newHead: subscriptionId =', subscriptionId);
      });
  });

  it('subscribes to storage', (done) => {
    api.state
      .subscribeStorage([
        [storage.staking.public.freeBalanceOf, '5Ejbye9R8ygByQPrDSasaUid1munedPZUmg4f118HGmtodGp'],
        [storage.staking.public.freeBalanceOf, '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFacT7']
      ], (error, data) => {
        if (error) {
          return done(error);
        }

        expect(data).toHaveLength(2);
        expect(data[0].toNumber()).toEqual(0);
        expect(data[1].toNumber()).not.toEqual(0);

        done();
      })
      .then((subscriptionId) => {
        console.log('newHead: subscriptionId =', subscriptionId);
      });
  });
});
