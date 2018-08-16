// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import decode from './accountId';

describe('AccountId', () => {
  it('decodes null as null', () => {
    expect(
      decode(null)
    ).toEqual({
      length: 0,
      value: null
    });
  });

  it('encodes without a prefix (storage)', () => {
    expect(
      decode(
        new Uint8Array([
          1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8,
          1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8
        ]),
        'latest', true
      )
    ).toEqual({
      length: 32,
      value: '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCt72s'
    });
  });

  it('encodes without a prefix (poc-1)', () => {
    expect(
      decode(
        new Uint8Array([
          1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8,
          1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8
        ]),
        'poc-1', false
      )
    ).toEqual({
      length: 32,
      value: '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCt72s'
    });
  });

  it('decodes with a prefix (255)', () => {
    expect(
      decode(
        new Uint8Array([
          255,
          1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8,
          1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8
        ]),
        'latest', false
      )
    ).toEqual({
      length: 33,
      value: '5C62W7ELLAAfix9LYrcx5smtcffbhvThkM5x7xfMeYXCt72s'
    });
  });

  it('codes with a prefix (1-byte)', () => {
    expect(
      decode(
        new Uint8Array([
          1, 17
        ])
      )
    ).toEqual({
      length: 2,
      value: '0x11'
    });
  });
});
