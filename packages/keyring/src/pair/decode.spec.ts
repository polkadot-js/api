// Copyright 2017-2019 @polkadot/keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import testingPairs from '../testingPairs';

const keyring = testingPairs({ type: 'ed25519' }, false);

describe('decode', () => {
  it('fails when no data provided', () => {
    expect(
      () => keyring.alice.decodePkcs8()
    ).toThrow(/No encrypted data available/);
  });

  it('returns correct publicKey from encoded', () => {
    const PASS = 'testing';

    expect(
      () => keyring.alice.decodePkcs8(
        PASS, keyring.alice.encodePkcs8(PASS)
      )
    ).not.toThrow();
  });
});
