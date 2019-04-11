// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { waitReady } from '@plugnet/wasm-crypto';

import { xxhashAsHex } from '.';

describe('xxhashAsHex', () => {
  beforeEach(async () => {
    await waitReady();
  });

  it('returns a 64-bit value by default', () => {
    expect(
      xxhashAsHex('abc')
    ).toEqual('0x990977adf52cbc44');
  });

  it('returns a 128-bit value (as specified)', () => {
    expect(
      xxhashAsHex('abc', 128)
    ).toEqual('0x990977adf52cbc440889329981caa9be');
  });

  it('returns a 256-bit value (as specified)', () => {
    expect(
      xxhashAsHex('abc', 256)
    ).toEqual('0x990977adf52cbc440889329981caa9bef7da5770b2b8a05303b75d95360dd62b');
  });
});
