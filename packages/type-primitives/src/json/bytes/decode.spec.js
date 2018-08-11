// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { bytesDecode } from './index';

describe('bytesDecode', () => {
  it('creates the correct bytes U8a', () => {
    expect(
      bytesDecode('0x0012345600')
    ).toEqual(new Uint8Array([0x00, 0x12, 0x34, 0x56, 0x00]));
  });

  it('decodes byte array (number', () => {
    expect(
      bytesDecode([0x00, 0x12, 0x34, 0x56, 0x00])
    ).toEqual(new Uint8Array([0x00, 0x12, 0x34, 0x56, 0x00]));
  });
});
