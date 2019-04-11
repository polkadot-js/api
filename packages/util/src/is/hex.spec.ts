// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isHex } from '.';

describe('isHex', () => {
  const test = '1234abcd';

  it('returns true on 0x hex values', () => {
    expect(
      isHex('0x')
    ).toEqual(true);
  });

  it('returns true on hex values', () => {
    expect(
      isHex(`0x${test}`)
    ).toEqual(true);
  });

  it('returns true on hex values with String', () => {
    expect(
      isHex(new String(`0x${test}`))
    ).toEqual(true);
  });

  it('returns false on hex values (non % 2)', () => {
    expect(
      isHex(`0x${test}0`)
    ).toEqual(false);
  });

  it('returns true on uppercase values', () => {
    expect(
      isHex(`0x${test.toUpperCase()}`)
    ).toEqual(true);
  });

  it('return false on hex values unprefixed', () => {
    expect(
      isHex(test)
    ).toEqual(false);
  });

  it('returns false on non-string values', () => {
    expect(
      isHex(false)
    ).toEqual(false);
  });

  it('returns true when valid hex and bitLength matches', () => {
    expect(
      isHex('0x1234', 16)
    ).toEqual(true);
  });

  it('returns true when valid hex and bitLength does not match', () => {
    expect(
      isHex('0x1234', 8)
    ).toEqual(false);
  });
});
