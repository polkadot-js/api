// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { naclKeypairFromString } from '..';

describe('naclKeypairFromSeed', () => {
  it('generates a valid publicKey/secretKey pair', () => {
    expect(
      naclKeypairFromString('test')
    ).toEqual({
      publicKey: new Uint8Array([188, 108, 179, 142, 36, 142, 76, 87, 77, 193, 147, 139, 254, 110, 196, 217, 117, 233, 167, 165, 250, 150, 247, 237, 198, 68, 129, 4, 211, 209, 136, 48]),
      secretKey: new Uint8Array([146, 139, 32, 54, 105, 67, 226, 175, 209, 30, 188, 14, 174, 46, 83, 169, 59, 241, 119, 164, 252, 243, 91, 204, 100, 213, 3, 112, 78, 101, 226, 2, 188, 108, 179, 142, 36, 142, 76, 87, 77, 193, 147, 139, 254, 110, 196, 217, 117, 233, 167, 165, 250, 150, 247, 237, 198, 68, 129, 4, 211, 209, 136, 48])
    });
  });
});
