// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { numberToHex } from '.';

describe('numberToHex', () => {
  it('converts undefined to 0x', () => {
    expect(
      numberToHex()
    ).toEqual('0x');
  });

  it('converts null to 0x', () => {
    expect(
      numberToHex(null)
    ).toEqual('0x');
  });

  it('converts Nan to 0x', () => {
    expect(
      numberToHex(NaN)
    ).toEqual('0x');
  });

  it('converts 0 to 0x00', () => {
    expect(
      numberToHex(0)
    ).toEqual('0x00');
  });

  it('converts number to hex', () => {
    expect(
      numberToHex(0x1245)
    ).toEqual('0x1245');
  });

  it('converts number to hex (specfified bitLength)', () => {
    expect(
      numberToHex(0x1245, 32)
    ).toEqual('0x00001245');
  });
});
