// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import toU8a from '@polkadot/util/u8a/toU8a';

import decode from './index';

describe('keyValue', () => {
  const nullDecoder = () => {};

  it('encodes StorageKeyValue -> Uint8Array properly', () => {
    expect(
      decode(
        nullDecoder,
        'KeyValue',
        new Uint8Array([
          4, 0, 0, 0,
          0x11, 0x22, 0x33, 0x44,
          9, 0, 0, 0,
          0x99, 0x88, 0x77, 0x66, 0x55, 0x44, 0x33, 0x22, 0x11
        ]),
        'poc-1'
      )
    ).toEqual({
      length: (4 + 4 + 4 + 9),
      value: {
        key: toU8a('0x11223344'),
        value: toU8a('0x998877665544332211')
      }
    });
  });

  it('encodes KeyValue -> Uint8Array properly', () => {
    expect(
      decode(
        nullDecoder,
        'KeyValue',
        new Uint8Array([
          1, 0, 0, 0,
          0x11,
          2, 0, 0, 0,
          0x99, 0x88
        ]),
        'poc-1'
      )
    ).toEqual({
      length: (4 + 1 + 4 + 2),
      value: {
        key: toU8a('0x11'),
        value: toU8a('0x9988')
      }
    });
  });
});
