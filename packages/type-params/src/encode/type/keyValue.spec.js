// Copyright 2017-2018 @polkadot/params authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import toU8a from '@polkadot/util/u8a/toU8a';

import encode from './index';

describe('keyValue', () => {
  it('encodes KeyValueStorage -> Uint8Array properly', () => {
    expect(
      encode('KeyValueStorage', {
        key: toU8a('0x11223344'),
        value: toU8a('0x998877665544332211')
      })
    ).toEqual(
      new Uint8Array([
        4, 0, 0, 0,
        0x11, 0x22, 0x33, 0x44,
        9, 0, 0, 0,
        0x99, 0x88, 0x77, 0x66, 0x55, 0x44, 0x33, 0x22, 0x11
      ])
    )
  });

  it('encodes KeyValue -> Uint8Array properly', () => {
    expect(
      encode('KeyValue', {
        key: toU8a('0x11'),
        value: toU8a('0x9988')
      })
    ).toEqual(
      new Uint8Array([
        1, 0, 0, 0,
        0x11,
        2, 0, 0, 0,
        0x99, 0x88
      ])
    )
  });
});
