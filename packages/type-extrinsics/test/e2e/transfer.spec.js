// Copyright 2017-2018 @polkadot/extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Api from '@polkadot/api'
import testingPairs from '@polkadot/util-keyring/testingPairs';
import Ws from '@polkadot/api-provider/ws';

import u8aConcat from '@polkadot/util/u8a/concat';

import extrinsics from '../../src/testing'

const keyring = testingPairs()

describe.skip('e2e transfer', () => {
  let api;

  beforeAll(() => {
    // check other e2e tests here...
    api = new Api(new Ws('ws://127.0.0.1:9944'));
  });

  it('makes a transfer for an inherent', () => {
    const inherent = extrinsics.balances.transfer(keyring.bob.publicKey(), 12345);

    return api.author.submitExtrinsic(inherent.toU8a()).then(console.log);
  });

  it.skip('makes a transfer for a transaction', () => {
    const extrinsic = extrinsics.balances.transfer(keyring.bob.publicKey(), 12345);
    const signed = extrinsic.sign(keyring.alice, 1);

    return api.author.submitExtrinsic(signed.toU8a()).then(console.log);
  });

});
