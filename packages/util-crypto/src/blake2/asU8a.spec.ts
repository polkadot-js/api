// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { hexToU8a } from '@plugnet/util';
import { waitReady } from '@plugnet/wasm-crypto';

import { blake2AsU8a } from '.';

describe('blake2AsU8a', () => {
  beforeEach(async () => {
    await waitReady();
  });

  it('returns a 64-bit value by default', () => {
    expect(
      blake2AsU8a('abc')
    ).toEqual(
      new Uint8Array([189, 221, 129, 60, 99, 66, 57, 114, 49, 113, 239, 63, 238, 152, 87, 155, 148, 150, 78, 59, 177, 203, 62, 66, 114, 98, 200, 192, 104, 213, 35, 25])
    );
  });

  it('returns a 128-bit value (as specified)', () => {
    expect(
      blake2AsU8a('abc', 128)
    ).toEqual(
      new Uint8Array([207, 74, 183, 145, 198, 43, 141, 43, 33, 9, 201, 2, 117, 40, 120, 22])
    );
  });

  it('returns a 256-bit value (as specified)', () => {
    expect(
      blake2AsU8a('abc', 256)
    ).toEqual(
      new Uint8Array([189, 221, 129, 60, 99, 66, 57, 114, 49, 113, 239, 63, 238, 152, 87, 155, 148, 150, 78, 59, 177, 203, 62, 66, 114, 98, 200, 192, 104, 213, 35, 25])
    );
  });

  it('returns a 512-bit value (as specified)', () => {
    expect(
      blake2AsU8a('abc', 512)
    ).toEqual(
      hexToU8a('0xba80a53f981c4d0d6a2797b69f12f6e94c212f14685ac4b74b12bb6fdbffa2d17d87c5392aab792dc252d5de4533cc9518d38aa8dbf1925ab92386edd4009923')
    );
  });
});
