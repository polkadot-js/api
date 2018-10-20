// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Rpc from '@polkadot/rpc-core';
import Ws from '@polkadot/rpc-provider/ws';
import testingPairs from '@polkadot/keyring/testingPairs';

import extrinsics from '../../src/static';

const keyring = testingPairs();

describe.skip('e2e transfer', () => {
  let api: any;

  beforeAll(() => {
    api = new Rpc(new Ws('ws://127.0.0.1:9944'));
  });

  // Error: [1002]: Inherent transactions cannot be queued.
  it.skip('inherent test', () => {
    const inherent = extrinsics.timestamp.set(Math.round(Date.now() / 1000));

    return api.author.submitExtrinsic(inherent.toU8a()).then(console.log);
  });

  it.skip('makes a transfer for a transaction', () => {
    return api.chain
      .getBlockHash(0)
      .then((genesisHash: string) => {
        const extrinsic = extrinsics.balances.transfer(keyring.bob.publicKey(), 6969);

        extrinsic.sign(keyring.alice, 0, genesisHash);

        return api.author.submitExtrinsic(extrinsic.toU8a());
      })
      .then(console.log);
  });

  it('makes a transfer via watch', (done) => {
    return api.chain
      .getBlockHash(0)
      .then((genesisHash: string) => {
        const extrinsic = extrinsics.balances.transfer(keyring.bob.publicKey(), 6969);

        extrinsic.sign(keyring.alice, 0, genesisHash);

        return api.author.submitAndWatchExtrinsic(extrinsic, (status: any) => {
          console.log(status);

          if (status.type === 'Finalised') {
            done();
          }
        });
      })
      .then(console.log);
  });
});
