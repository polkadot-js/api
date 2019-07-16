// Copyright 2017-2019 @polkadot/rpc-core authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import storage from '@polkadot/api-metadata/storage/static';
import WsProvider from '@polkadot/rpc-provider/ws';
import { BlockNumber, Index, SignedBlock, StorageChangeSet } from '@polkadot/types';

import Rpc from '@polkadot/rpc-core';

const randomAccount = '5HTqyWJHAVUieZnpb1V8gK4T1E4mnhkrUVSSzWBQd6kYgsVJ';

describe.skip('e2e Alexander - Polkadot', (): void => {
  let rpc: Rpc;

  beforeEach((): void => {
    jest.setTimeout(30000);
    rpc = new Rpc(new WsProvider('wss://poc3-rpc.polkadot.io/'));
  });

  it('subscribes to storage', (done): void => {
    rpc.state
      .subscribeStorage([
        [storage.system.accountNonce, randomAccount],
        [storage.session.currentIndex]
      ])
      .subscribe((data: StorageChangeSet): void => {
        expect(data).toHaveLength(2);
        expect(data).toEqual(
          expect.arrayContaining([
            expect.any(BlockNumber),
            expect.any(Index)
          ])
        );

        done();
      });
  });

  it('retrieves a block by hash (krumme lanke #1)', (done): void => {
    rpc.chain
      .getBlock('0x627847bffdf5f3e01ac440d057dec6a37a12a6f329db7ef8367665574b76b5df')
      .subscribe((block: SignedBlock): void => {
        expect(block).toBeDefined();
        expect(block).toBeInstanceOf(SignedBlock);
        done();
      });
  });

  it('retrieves a block by hash (krumme lanke #2)', (done): void => {
    rpc.chain
      .getBlock('0x53416d53a4b1dfcae9165a89d193608e4aa770414f02267f5b2c4015a2e66091')
      .subscribe((block: SignedBlock): void => {
        expect(block).toBeDefined();
        expect(block).toBeInstanceOf(SignedBlock);
        done();
      });
  });
});
