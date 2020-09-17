// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '../../create';

describe('KeyValue', (): void => {
  const registry = new TypeRegistry();

  it('decodes KeyValue from u8a', (): void => {
    expect(
      registry.createType('KeyValue', Uint8Array.from([
        4 << 2,
        0x11, 0x22, 0x33, 0x44,
        9 << 2,
        0x99, 0x88, 0x77, 0x66, 0x55, 0x44, 0x33, 0x22, 0x11
      ])).toJSON()
    ).toEqual(['0x11223344', '0x998877665544332211']);
  });

  it('encodes KeyValue from JSON', (): void => {
    expect(
      registry.createType('KeyValue', ['0x11223344', '0x998877665544332211']).toU8a()
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
    const [key, value] = registry.createType('KeyValue', ['0x11223344', '0x998877665544332211']);

    expect(key.toHex()).toEqual('0x11223344');
    expect(value.toHex()).toEqual('0x998877665544332211');
  });
});
