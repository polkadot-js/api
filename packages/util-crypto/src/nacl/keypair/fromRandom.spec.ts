// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Keypair } from '../../types';

import { naclKeypairFromRandom } from '..';

describe('naclKeypairFromRandom', () => {
  let keypair: Keypair;

  beforeEach(() => {
    keypair = naclKeypairFromRandom();
  });

  it('generates a valid publicKey', () => {
    expect(
      keypair.publicKey
    ).toHaveLength(32);
  });

  it('generates a valid secretKey', () => {
    expect(
      keypair.secretKey
    ).toHaveLength(64);
  });
});
