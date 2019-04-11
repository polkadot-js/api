// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { hexFixLength } from '.';

describe('hexFixLength', () => {
  it('returns bitLength === -1 as-is', () => {
    expect(
      hexFixLength('0x12345678')
    ).toEqual('0x12345678');
  });

  it('returns bitLength === -1 as-is (adding missing 0)', () => {
    expect(
      hexFixLength('0x1234567')
    ).toEqual('0x01234567');
  });

  it('does not change when bitlength === length', () => {
    expect(
      hexFixLength('0x12345678', 32)
    ).toEqual('0x12345678');
  });

  it('trims values when bitLength > length', () => {
    expect(
      hexFixLength('0x12345678', 16)
    ).toEqual('0x5678');
  });

  it('returns as-is when bitLength < length', () => {
    expect(
      hexFixLength('0x1234', 32)
    ).toEqual('0x1234');
  });

  it('adds zeros when bitLength < length (withPadded)', () => {
    expect(
      hexFixLength('0x1234', 32, true)
    ).toEqual('0x00001234');
  });
});
