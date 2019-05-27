// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import storage from '@plugnet/storage';
import WsProvider from '@plugnet/rpc-provider/ws';

import Rpc from '../../src';

describe.skip('e2e krumme lanke', () => {
  let api;

  beforeEach(() => {
    jest.setTimeout(30000);
    api = new Rpc(new WsProvider('ws://127.0.0.1:9944'));
  });

  it('subscribes to storage', (done) => {
    api.state
      .subscribeStorage(
        [
          [storage.system.accountNonce, '5Ejbye9R8ygByQPrDSasaUid1munedPZUmg4f118HGmtodGp'],
          [storage.balances.freeBalance, '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFacT7']
        ],
        (data) => {
          expect(data).toHaveLength(2);
          expect(data[0].toNumber()).toEqual(0);
          expect(data[1].toNumber()).not.toEqual(0);

          done();
        }
      )
      .then((subscriptionId) => {
        console.log('stoarge subscriptionId =', subscriptionId);
      });
  });

  it('retrieves a block by hash (krumme lanke #1)', () => {
    return api.chain
      .getBlock('0x627847bffdf5f3e01ac440d057dec6a37a12a6f329db7ef8367665574b76b5df')
      .then((block) => {
        expect(block).toBeDefined();
      })
      .catch((error) => {
        console.error(error);

        throw error;
      });
  });

  it('retrieves a block by hash (krumme lanke #2)', () => {
    return api.chain
      .getBlock('0x53416d53a4b1dfcae9165a89d193608e4aa770414f02267f5b2c4015a2e66091')
      .then((block) => {
        expect(block).toBeDefined();
      })
      .catch((error) => {
        console.error(error);

        throw error;
      });
  });
});
