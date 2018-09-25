// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import CodecU8a from './U8a';

describe('CodecU8a', () => {
  let u8a;

  beforeEach(() => {
    u8a = new CodecU8a([1, 2, 3, 4, 5]);
  });

  it('contains the length of the elements', () => {
    expect(u8a.length).toEqual(5); // eslint-disable-line
  });

  it('allows wrapping of a pre-existing instance', () => {
    expect(
      new CodecU8a(u8a).length
    ).toEqual(5); // eslint-disable-line
  });
});
