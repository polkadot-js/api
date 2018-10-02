// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Address from './Address';

describe('Address', () => {
  it('decodes with a prefix (255)', () => {
    expect(
      new Address()
        .fromU8a(
          new Uint8Array([
            255,
            1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8,
            1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8
          ])
        )
        .toString()
    ).toEqual('5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCt72s');
  });

  it('encodes with a prefix', () => {
    expect(
      new Address()
        .fromJSON('5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCt72s')
        .toU8a()
    ).toEqual(
      new Uint8Array([
        255,
        1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8,
        1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8
      ])
    );
  });

  it('encodes address to ss-58 format', () => {
    expect(
      new Address()
        .fromU8a(
          new Uint8Array([
            255,
            1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8,
            1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8
          ])
        )
        .toString()
    ).toEqual('5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCt72s');
  });

  it('decodes with a prefix (1-byte)', () => {
    expect(
      new Address()
        .fromU8a(
          new Uint8Array([
            17
          ])
        )
        .toString()
    ).toEqual('0x11');
  });

  it('decodes with a prefix (2-bytes)', () => {
    expect(
      new Address()
        .fromU8a(
          new Uint8Array([
            0xfc, 17, 18
          ])
        )
        .toString()
    ).toEqual('0xfc1112');
  });

  it('decodes with a prefix (4-bytes)', () => {
    expect(
      new Address()
        .fromU8a(
          new Uint8Array([
            0xfd, 17, 18, 19, 20
          ])
        )
        .toString()
    ).toEqual('0xfd11121314');
  });

  it('decodes with a prefix (8-bytes)', () => {
    expect(
      new Address()
        .fromU8a(
          new Uint8Array([
            0xfe, 17, 18, 19, 20, 21, 22, 23, 24
          ])
        )
        .toString()
    ).toEqual('0xfe1112131415161718');
  });
});
