// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { bnDecode } from './index';

describe('bnDecode', () => {
  it('converts hex to a BN value', () => {
    expect(
      bnDecode('0x1234').toNumber()
    ).toEqual(0x1234);
  });

  it('converts with the required bitLength', () => {
    expect(
      bnDecode('0x1234', 8).toNumber()
    ).toEqual(0x34);
  });

  it('converts a non-hex/numeric value', () => {
    expect(
      bnDecode(10).toNumber()
    ).toEqual(10);
  });
});
