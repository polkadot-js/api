// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { u8aFixLength } from '.';

describe('u8aFixLength', () => {
  it('returns bitLength === -1 as-is', () => {
    expect(
      u8aFixLength(
        new Uint8Array([0x12, 0x34, 0x56, 0x78])
      )
    ).toEqual(new Uint8Array([0x12, 0x34, 0x56, 0x78]));
  });

  it('does not change when bitlength === length', () => {
    expect(
      u8aFixLength(new Uint8Array([0x12, 0x34, 0x56, 0x78]), 32)
    ).toEqual(new Uint8Array([0x12, 0x34, 0x56, 0x78]));
  });

  it('trims values when bitLength > length', () => {
    expect(
      u8aFixLength(new Uint8Array([0x12, 0x34, 0x56, 0x78]), 16)
    ).toEqual(new Uint8Array([0x12, 0x34]));
  });

  it('adds zeros when bitLength < length (withPadded)', () => {
    expect(
      u8aFixLength(new Uint8Array([0x12, 0x34]), 32)
    ).toEqual(new Uint8Array([0, 0, 0x12, 0x34]));
  });
});
