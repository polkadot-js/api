// Copyright 2017-2019 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { RpcInterface } from '@plugnet/rpc-core/types';
import { SubmittableResult } from '@plugnet/api/SubmittableExtrinsic';
import Rpc from '@plugnet/rpc-core';
import WsProvider from '@plugnet/rpc-provider/ws';
import testingPairs from '@plugnet/keyring/testingPairs';

import extrinsics from './../../src/static';

const keyring = testingPairs({ type: 'ed25519' });

// @TODO 1: All three tests below are broken, fix or find better way to test transfers.
// @TODO 2: Move tests out of ./type-extrinsics to ./api folder
describe.skip('e2e transfer', () => {
  let api: RpcInterface;

  beforeAll(() => {
    api = new Rpc(new WsProvider('ws://127.0.0.1:9944'));
  });

  beforeEach(() => {
    jest.setTimeout(30000);
  });

  // Error: [1002]: Inherent transactions cannot be queued.
  it('inherent test', () => {
    const inherent = extrinsics.timestamp.set(Math.round(Date.now() / 1000));

    return api.author.submitExtrinsic(inherent.toU8a()).then(console.log);
  });

  it('makes a transfer for a transaction', () => {
    return api.chain
      .getBlockHash(0)
      .then((genesisHash) => {
        const extrinsic = extrinsics.balances.transfer(keyring.bob.publicKey(), 6969) as any;
        extrinsic.sign(keyring.alice, { blockHash: genesisHash, nonce: 0 });

        return api.author.submitExtrinsic(extrinsic.toU8a());
      });
  });

  it('makes a transfer via watch', (done) => {
    return api.chain
      .getBlockHash(0)
      .then((genesisHash) => {
        const extrinsic = extrinsics.balances.transfer(keyring.bob.publicKey(), 6969) as any;
        extrinsic.sign(keyring.alice, { blockHash: genesisHash, nonce: 0 });

        return api.author.submitAndWatchExtrinsic(extrinsic, (result: SubmittableResult) => {
          if (result.status.isFinalized) {
            done();
          }
        });
      });
  });
});
