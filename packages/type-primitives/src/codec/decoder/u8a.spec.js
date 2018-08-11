// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import decodeU8a from './u8a';

describe('decodeU8a', () => {
  it('decodes an input with the length', () => {
    expect(
      decodeU8a(
        new Uint8Array([
          4, 0, 0, 0, // length
          1, 2, 3, 4, // data
          5, 5, 5, 5 // extra
        ])
      )
    ).toEqual(
      new Uint8Array([1, 2, 3, 4])
    );
  });

  it('decodes an subarray', () => {
    expect(
      decodeU8a(
        new Uint8Array([
          0, 0, 0, 0, 0, 0, 0, 0, // padding
          4, 0, 0, 0, // length
          1, 2, 3, 4, // data
          5, 5, 5, 5 // extra
        ]).subarray(8)
      )
    ).toEqual(
      new Uint8Array([1, 2, 3, 4])
    );
  });
});
