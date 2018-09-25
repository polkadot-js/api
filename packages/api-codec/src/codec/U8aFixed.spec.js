// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import U8aFixed from './U8aFixed';

describe('U8aFixed', () => {
  let u8a;

  beforeEach(() => {
    u8a = new U8aFixed([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 32);
  });

  it('limits the length', () => {
    expect(u8a.length).toEqual(4); // eslint-disable-line
  });

  it('allows wrapping of a pre-existing instance', () => {
    expect(
      u8a.toU8a()
    ).toEqual(new Uint8Array([1, 2, 3, 4]));
  });

  it('allows empty values', () => {
    expect(
      new U8aFixed().toHex()
    ).toEqual('0x');
  });
});
