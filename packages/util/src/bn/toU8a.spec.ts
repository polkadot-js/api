// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';

import { bnToU8a } from '.';

describe('bnToU8a', () => {
  it('converts null values to 0x00', () => {
    expect(
      bnToU8a(null, -1, false)
    ).toEqual(new Uint8Array([]));
  });

  it('converts null values to 0x00000000 (bitLength)', () => {
    expect(
      bnToU8a(null, 32, false)
    ).toEqual(new Uint8Array([0, 0, 0, 0]));
  });

  it('converts BN values to a prefixed hex representation', () => {
    expect(
      bnToU8a(new BN(0x123456), -1, false)
    ).toEqual(new Uint8Array([0x12, 0x34, 0x56]));
  });

  it('converts BN values to a prefixed hex representation (bitLength)', () => {
    expect(
      bnToU8a(new BN(0x123456), 32, false)
    ).toEqual(new Uint8Array([0x00, 0x12, 0x34, 0x56]));
  });

  it('converts using little endian (as set)', () => {
    expect(
      bnToU8a(new BN(0x123456), 32, true)
    ).toEqual(new Uint8Array([0x56, 0x34, 0x12, 0x00]));
  });

  it('converts negative numbers', () => {
    expect(
      bnToU8a(new BN(-1234), { isNegative: true })
    ).toEqual(new Uint8Array([46, 251]));
  });

  it('converts negative numbers (BE)', () => {
    expect(
      bnToU8a(new BN(-1234), { isNegative: true, isLe: false })
    ).toEqual(new Uint8Array([251, 46]));
  });

  it('converts negative numbers (bitLength)', () => {
    expect(
      bnToU8a(new BN(-1234), { isNegative: true, bitLength: 32 })
    ).toEqual(new Uint8Array([46, 251, 255, 255]));
  });

  it('handles backwards compatibility', () => {
    expect(
      bnToU8a(new BN(1234), 32, false)
    ).toEqual(
      bnToU8a(new BN(1234), { bitLength: 32, isLe: false })
    );
  });
});
