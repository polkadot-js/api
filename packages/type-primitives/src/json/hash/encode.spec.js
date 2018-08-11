// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { hashEncode } from './index';

describe('hashEncode', () => {
  it('returns the hash when no length specified', () => {
    expect(
      hashEncode(
        new Uint8Array([0x12, 0x34, 0x56, 0x78, 0x78, 0x90, 0xab, 0xcd, 0xef])
      )
    ).toEqual('0x123456787890abcdef');
  });

  it('converts to the required length as specified', () => {
    expect(
      hashEncode(new Uint8Array([0x34, 0x56, 0x78, 0x78, 0x90, 0xab, 0xcd, 0xef]), 64)
    ).toEqual('0x3456787890abcdef');
  });
});
