// Copyright 2017-2019 @polkadot/api-metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { RpcInterface } from '@polkadot/rpc-core/types';
import { SubmittableResult } from '@polkadot/api/SubmittableExtrinsic';
import Rpc from '@polkadot/rpc-core';
import WsProvider from '@polkadot/rpc-provider/ws';
import testingPairs from '@polkadot/keyring/testingPairs';

import extrinsics from '@polkadot/api-metadata/extrinsics/static';

const keyring = testingPairs({ type: 'ed25519' });

// @TODO 1: All three tests below are broken, fix or find better way to test transfers.
// @TODO 2: Move tests out of ./type-metadata to ./api folder
describe.skip('e2e transfer', (): void => {
  let api: RpcInterface;

  beforeAll((): void => {
    api = new Rpc(new WsProvider('ws://127.0.0.1:9944'));
  });

  beforeEach((): void => {
    jest.setTimeout(30000);
  });

  // Error: [1002]: Inherent transactions cannot be queued.
  it('inherent test', (done): void => {
    const inherent = extrinsics.timestamp.set(Math.round(Date.now() / 1000));

    api.author.submitExtrinsic(inherent.toU8a()).subscribe(done);
  });

  it('makes a transfer for a transaction', (done): void => {
    api.chain
      .getBlockHash(0)
      .subscribe((genesisHash): void => {
        const extrinsic = extrinsics.balances.transfer(keyring.bob.publicKey, 6969) as any;
        extrinsic.sign(keyring.alice, { blockHash: genesisHash, nonce: 0 });

        api.author.submitExtrinsic(extrinsic.toU8a()).subscribe(done);
      });
  });

  it('makes a transfer via watch', (done): void => {
    api.chain
      .getBlockHash(0)
      .subscribe((genesisHash): void => {
        const extrinsic = extrinsics.balances.transfer(keyring.bob.publicKey, 6969) as any;
        extrinsic.sign(keyring.alice, { blockHash: genesisHash, nonce: 0 });

        api.author.submitAndWatchExtrinsic(extrinsic).subscribe((result: SubmittableResult): void => {
          if (result.status.isFinalized) {
            done();
          }
        });
      });
  });
});
