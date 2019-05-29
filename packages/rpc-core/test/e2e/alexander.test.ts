// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BlockNumber, Index, SignedBlock, StorageChangeSet } from '@plugnet/types';
import storage from '@plugnet/storage/static';
import WsProvider from '@plugnet/rpc-provider/ws';

import Rpc from '../../src';

const randomAccount = '5HTqyWJHAVUieZnpb1V8gK4T1E4mnhkrUVSSzWBQd6kYgsVJ';

describe.skip('e2e Alexander - Polkadot', () => {
  let api: Rpc;

  beforeEach(() => {
    jest.setTimeout(30000);
    api = new Rpc(new WsProvider('wss://poc3-rpc.polkadot.io/'));
  });

  it('subscribes to storage', (done) => {
    return (
      api.state
      .subscribeStorage(
        [
          [storage.system.accountNonce, randomAccount],
          [storage.session.currentIndex]
        ],
        (data: StorageChangeSet) => {
          expect(data).toHaveLength(2);
          expect(data).toEqual(
            expect.arrayContaining([
              expect.any(BlockNumber),
              expect.any(Index)
            ])
          );

          done();
        }).then((subscriptionId: number) => {
          console.log('stoarge subscriptionId =', subscriptionId);
        })
    );
  });

  it('retrieves a block by hash (krumme lanke #1)', () => {
    return api.chain
      .getBlock('0x627847bffdf5f3e01ac440d057dec6a37a12a6f329db7ef8367665574b76b5df')
      .then((block: SignedBlock) => {
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
      .then((block: SignedBlock) => {
        expect(block).toBeDefined();
      })
      .catch((error) => {
        console.error(error);

        throw error;
      });
  });
});
