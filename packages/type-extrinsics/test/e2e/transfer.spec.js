// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Api from '@polkadot/api';
import testingPairs from '@polkadot/util-keyring/testingPairs';
import Ws from '@polkadot/api-provider/ws';

import extrinsics from '../../src/testing';

const keyring = testingPairs();

describe.skip('e2e transfer', () => {
  let api;

  beforeAll(() => {
    // check other e2e tests here...
    api = new Api(new Ws('ws://127.0.0.1:9944'));
  });

  // Error: [1002]: Inherent transactions cannot be queued.
  it.skip('inherent test', () => {
    const inherent = extrinsics.timestamp.set(Math.round(Date.now() / 1000));

    return api.author.submitExtrinsic(inherent.toU8a()).then(console.log);
  });

  it('makes a transfer for a transaction', () => {
    return api.chain
      .getBlockHash(0)
      .then((genesisHash) => {
        const extrinsic = extrinsics.balances.transfer(keyring.bob.publicKey(), 69);

        extrinsic.sign(keyring.alice, 0, genesisHash);

        return api.author.submitExtrinsic(extrinsic.toU8a());
      })
      .then(console.log);
  });
});
