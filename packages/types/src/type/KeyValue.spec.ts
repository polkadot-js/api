// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import KeyValue, { KeyValueOption } from './KeyValue';

describe('KeyValue', (): void => {
  it('decodes KeyValue from u8a', (): void => {
    expect(
      new KeyValue(
        Uint8Array.from([
          4 << 2,
          0x11, 0x22, 0x33, 0x44,
          9 << 2,
          0x99, 0x88, 0x77, 0x66, 0x55, 0x44, 0x33, 0x22, 0x11
        ])
      ).toJSON()
    ).toEqual(['0x11223344', '0x998877665544332211']);
  });

  it('encodes KeyValue from JSON', (): void => {
    expect(
      new KeyValue(['0x11223344', '0x998877665544332211']).toU8a()
    ).toEqual(
      new Uint8Array([
        4 << 2,
        0x11, 0x22, 0x33, 0x44,
        9 << 2,
        0x99, 0x88, 0x77, 0x66, 0x55, 0x44, 0x33, 0x22, 0x11
      ])
    );
  });

  it('exposes the properties for key/value', (): void => {
    const kv = new KeyValue(['0x11223344', '0x998877665544332211']);

    expect(kv.key.toHex()).toEqual('0x11223344');
    expect(kv.value.toHex()).toEqual('0x998877665544332211');
  });
});

describe('KeyValueOption', (): void => {
  it('exposes the properties for key/value', (): void => {
    const kv = new KeyValueOption([
      '0x11223344'
    ]);

    expect(kv.key.toHex()).toEqual('0x11223344');
    expect(kv.value.isNone).toEqual(true);
  });
});
