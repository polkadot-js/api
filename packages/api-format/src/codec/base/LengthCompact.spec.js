// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import LengthCompact from './BaseLengthCompact';

describe('Compact', () => {
  let compact;

  beforeEach(() => {

  });

  it('encodes shot u8', () => {
    compact = new LengthCompact(78);

    expect(
      compact.toU8a()
    ).toEqual(
      new Uint8Array([78 << 2])
    );
  });
});
