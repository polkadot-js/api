// Copyright 2017-2018 @polkadot/primitives authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import decodeArray from './array';

describe('decodeArray', () => {
  it('decodes an array with the length', () => {
    expect(
      decodeArray(
        new Uint8Array([
          2, 0, 0, 0, // length
          1, 2, // first
          3, 4 // second
        ])
      )
    ).toEqual({
      length: 2,
      data: new Uint8Array([1, 2, 3, 4])
    });
  });

  it('decodes where array is an subarray', () => {
    expect(
      decodeArray(
        new Uint8Array([
          0, 0, 0, 0, 0, 0, 0, 0, // padding
          1, 0, 0, 0, // length
          1, 2, 3, 4 // entry
        ]).subarray(8)
      )
    ).toEqual({
      length: 1,
      data: new Uint8Array([1, 2, 3, 4])
    });
  });
});
