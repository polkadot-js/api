// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import KeyValue from './KeyValue';

describe('KeyValue', () => {
  it('decodes KeyValue from u8a', () => {
    expect(
      new KeyValue().fromU8a(
        new Uint8Array([
          4 << 2,
          0x11, 0x22, 0x33, 0x44,
          9 << 2,
          0x99, 0x88, 0x77, 0x66, 0x55, 0x44, 0x33, 0x22, 0x11
        ])
      ).toJSON()
    ).toEqual({
      key: '0x11223344',
      value: '0x998877665544332211'
    });
  });

  it('encodes KeyValue from JSON', () => {
    expect(
      new KeyValue().fromJSON({
        key: '0x11223344',
        value: '0x998877665544332211'
      }).toU8a()
    ).toEqual(
      new Uint8Array([
        4 << 2,
        0x11, 0x22, 0x33, 0x44,
        9 << 2,
        0x99, 0x88, 0x77, 0x66, 0x55, 0x44, 0x33, 0x22, 0x11
      ])
    );
  });

  it('exposes the properties for key/value', () => {
    const kv = new KeyValue({
      key: '0x11223344',
      value: '0x998877665544332211'
    });

    expect(kv.key.toHex()).toEqual('0x11223344');
    expect(kv.value.toHex()).toEqual('0x998877665544332211');
  });
});
