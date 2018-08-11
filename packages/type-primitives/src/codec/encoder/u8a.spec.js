// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import encodeU8a from './u8a';

describe('encodeU8a', () => {
  it('encodes an input with the length', () => {
    expect(
      encodeU8a(
        new Uint8Array([1, 2, 3, 4])
      )
    ).toEqual(
      new Uint8Array([
        4, 0, 0, 0, // length
        1, 2, 3, 4 // data
      ])
    );
  });
});
