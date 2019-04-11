// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { u8aToBn } from '.';

describe('u8aToBn', () => {
  it('converts little-endian by default', () => {
    expect(
      u8aToBn(
        new Uint8Array([0x12, 0x34])
      ).toString(16)
    ).toBe('3412');
  });
  it('converts values (big-endian)', () => {
    expect(
      u8aToBn(
        new Uint8Array([0x12, 0x34]),
        { isLe: false }
      ).toString(16)
    ).toBe('1234');
  });

  it('converts values (little-endian)', () => {
    expect(
      u8aToBn(
        new Uint8Array([0x12, 0x34]),
        { isLe: true }
      ).toString(16)
    ).toBe('3412');
  });

  it('converts empty', () => {
    expect(
      u8aToBn(
        new Uint8Array([]),
        { isLe: true }
      ).toString(16)
    ).toBe('0');
  });

  it('handles negative numbers (little-endian)', () => {
    expect(
      u8aToBn(
        new Uint8Array([46, 251]),
        { isLe: true, isNegative: true }
      ).toNumber()
    ).toBe(-1234);
  });

  it('handles negative numbers (big-endian)', () => {
    expect(
      u8aToBn(
        new Uint8Array([251, 46]),
        { isLe: false, isNegative: true }
      ).toNumber()
    ).toBe(-1234);
  });

  it('handles overflows correctly (little-endian)', () => {
    expect(
      u8aToBn(
        new Uint8Array([0, 1, 0, 0, 0, 0, 0, 0]),
        { isLe: true }
      ).toNumber()
    ).toBe(256);
  });

  it('handles backward compatibility)', () => {
    expect(
      u8aToBn(
        new Uint8Array([0, 1, 0, 0, 0, 0, 0, 0]),
        false
      ).eq(
        u8aToBn(
          new Uint8Array([0, 1, 0, 0, 0, 0, 0, 0]),
          { isLe: false }
        )
      )
    ).toBe(true);
    expect(
      u8aToBn(
        new Uint8Array([0, 1, 0, 0, 0, 0, 0, 0]),
        true
      ).eq(
        u8aToBn(
          new Uint8Array([0, 1, 0, 0, 0, 0, 0, 0]),
          { isLe: true }
        )
      )
    ).toBe(true);
  });
});
