// Copyright 2017-2019 @polkadot/keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import testingPairs from '../testingPairs';

const keyring = testingPairs({ type: 'ed25519' }, false);

describe('pair', () => {
  const SIGNATURE = new Uint8Array([80, 191, 198, 147, 225, 207, 75, 88, 126, 39, 129, 109, 191, 38, 72, 181, 75, 254, 81, 143, 244, 79, 237, 38, 236, 141, 28, 252, 134, 26, 169, 234, 79, 33, 153, 158, 151, 34, 175, 188, 235, 20, 35, 135, 83, 120, 139, 211, 233, 130, 1, 208, 201, 215, 73, 80, 56, 98, 185, 196, 11, 8, 193, 14]);

  it('has a publicKey', () => {
    expect(
      keyring.alice.publicKey()
    ).toEqual(
      new Uint8Array([209, 114, 167, 76, 218, 76, 134, 89, 18, 195, 43, 160, 168, 10, 87, 174, 105, 171, 174, 65, 14, 92, 203, 89, 222, 232, 78, 47, 68, 50, 219, 79])
    );
  });

  it('allows signing', () => {
    expect(
      keyring.alice.sign(
        new Uint8Array([0x61, 0x62, 0x63, 0x64])
      )
    ).toEqual(SIGNATURE);
  });

  it('validates a correctly signed message', () => {
    expect(
      keyring.alice.verify(
        new Uint8Array([0x61, 0x62, 0x63, 0x64]),
        SIGNATURE
      )
    ).toEqual(true);
  });

  it('fails a correctly signed message (message changed)', () => {
    expect(
      keyring.alice.verify(
        new Uint8Array([0x61, 0x62, 0x63, 0x64, 0x65]),
        SIGNATURE
      )
    ).toEqual(false);
  });

  it('allows setting/getting of meta', () => {
    keyring.bob.setMeta({ foo: 'bar', something: 'else' });

    expect(keyring.bob.getMeta()).toMatchObject({ foo: 'bar', something: 'else' });

    keyring.bob.setMeta({ something: 'thing' });

    expect(keyring.bob.getMeta()).toMatchObject({ foo: 'bar', something: 'thing' });
  });
});
