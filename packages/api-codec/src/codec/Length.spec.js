// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Length from './Length';
import UInt from './UInt';

describe('Length', () => {
  it('encodes short u8', () => {
    expect(
      new Length(18).toU8a()
    ).toEqual(
      new Uint8Array([18 << 2])
    );
  });

  it('encodes max u8 values', () => {
    expect(
      new Length(new UInt(63)).toU8a()
    ).toEqual(
      new Uint8Array([0b11111100])
    );
  });

  it('encodes basic u16 value', () => {
    expect(
      new Length(511).toU8a()
    ).toEqual(
      new Uint8Array([0b11111101, 0b00000111])
    );
  });

  it('encodes basic ua6 (not at edge)', () => {
    expect(
      new Length(111).toHex()
    ).toEqual('0xbd01');
  });

  it('decodes from same u16 encoded value', () => {
    expect(
      new Length()
        .fromU8a(new Uint8Array([0b11111101, 0b00000111]))
        .toNumber()
    ).toEqual(511);
  });

  it('encodes basic u32 values (short)', () => {
    expect(
      new Length(0xffff).toU8a()
    ).toEqual(
      new Uint8Array([254, 255, 3, 0])
    );
  });

  it('decodes from same u32 encoded value (short)', () => {
    expect(
      new Length()
        .fromU8a(new Uint8Array([254, 255, 3, 0]))
        .toNumber()
    ).toEqual(0xffff);
  });

  it('encodes basic u32 values (full)', () => {
    expect(
      new Length(0xfffffff9).toU8a()
    ).toEqual(
      new Uint8Array([3, 249, 255, 255, 255])
    );
  });

  it('decodes from same u32 encoded value (full)', () => {
    expect(
      new Length()
        .fromU8a(new Uint8Array([3, 249, 255, 255, 255]))
        .toNumber()
    ).toEqual(0xfffffff9);
  });
});
