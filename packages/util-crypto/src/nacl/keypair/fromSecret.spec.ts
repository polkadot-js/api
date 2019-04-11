// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { naclKeypairFromSecret } from '..';

describe('naclKeypairFromSecret', () => {
  const secretKey = new Uint8Array([
    18, 52, 86, 120, 144, 18, 52, 86,
    120, 144, 18, 52, 86, 120, 144, 18,
    18, 52, 86, 120, 144, 18, 52, 86,
    120, 144, 18, 52, 86, 120, 144, 18,
    180, 114, 93, 155, 165, 255, 217, 82,
    16, 250, 209, 11, 193, 10, 88, 218,
    190, 190, 41, 193, 236, 252, 1, 152,
    216, 214, 0, 41, 45, 138, 13, 53
  ]);

  it('generates a valid publicKey/secretKey pair', () => {
    expect(
      naclKeypairFromSecret(secretKey)
    ).toEqual({
      publicKey: new Uint8Array([
        180, 114, 93, 155, 165, 255, 217, 82,
        16, 250, 209, 11, 193, 10, 88, 218,
        190, 190, 41, 193, 236, 252, 1, 152,
        216, 214, 0, 41, 45, 138, 13, 53
      ]),
      secretKey
    });
  });
});
