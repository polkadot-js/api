// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { bytesEncode } from './index';

describe('bytesEncode', () => {
  it('creates the correct bytes U8a', () => {
    expect(
      bytesEncode(new Uint8Array([0x00, 0x12, 0x34, 0x56, 0x00]))
    ).toEqual('0x0012345600');
  });
});
