// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { hashDecode } from './index';

describe('hashDecode', () => {
  it('returns the hash when no length specified', () => {
    expect(
      hashDecode('0x123456787890abcdef')
    ).toEqual(new Uint8Array([0x12, 0x34, 0x56, 0x78, 0x78, 0x90, 0xab, 0xcd, 0xef]));
  });

  it('converts to the required length as specified', () => {
    expect(
      hashDecode('0x123456787890abcdef', 32)
    ).toEqual(new Uint8Array([0x12, 0x34, 0x56, 0x78]));
  });
});
