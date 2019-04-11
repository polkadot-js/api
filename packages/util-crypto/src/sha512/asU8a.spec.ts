// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { waitReady } from '@plugnet/wasm-crypto';

import { sha512AsU8a } from '.';

describe('sha512AsU8a', () => {
  beforeEach(async () => {
    await waitReady();
  });

  it('creates a sha-512 hash', () => {
    expect(
      sha512AsU8a(
        Uint8Array.from([0x61, 0x62, 0x63, 0x64])
      )
    ).toEqual(
      Uint8Array.from([
        216, 2, 47, 32, 96, 173, 110, 253, 41, 122, 183, 61, 204, 83, 85, 201, 178, 20, 5, 75, 13, 23, 118, 161, 54, 166, 105, 210, 106, 125, 59, 20, 247, 58, 160, 208, 235, 255, 25, 238, 51, 51, 104, 240, 22, 75, 100, 25, 169, 109, 164, 158, 62, 72, 23, 83, 231, 233, 107, 113, 107, 220, 203, 111
      ])
    );
  });
});
