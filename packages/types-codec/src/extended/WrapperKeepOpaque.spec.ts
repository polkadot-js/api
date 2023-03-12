// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev/node/test/node.d.ts" />

import { TypeRegistry } from '@polkadot/types';
import { Bytes, Raw, u32, WrapperKeepOpaque } from '@polkadot/types-codec';

describe('WrapperKeepOpaque', (): void => {
  const registry = new TypeRegistry();
  const u8au32 = new Uint8Array([4 << 2, 135, 214, 18, 0]);
  const ClazzUSize = WrapperKeepOpaque.with('usize');
  const ClazzU32 = WrapperKeepOpaque.with(u32);

  it('has handles non-decodable values', (): void => {
    const usize = new ClazzUSize(registry, u8au32);

    expect(usize.isDecoded).toEqual(false);
    expect(() => usize.unwrap()).toThrow(/undecodable value/);

    expect(usize.toHex()).toEqual('0x87d61200');
    expect(usize.toHuman()).toEqual('0x87d61200');
    expect(usize.toJSON()).toEqual('0x87d61200');
    expect(usize.toRawType()).toEqual('WrapperKeepOpaque<usize>');
    expect(usize.toString()).toEqual('0x87d61200');
    expect(usize.toU8a()).toEqual(u8au32);
  });

  it('has handles decodable values', (): void => {
    const u32 = new ClazzU32(registry, u8au32);

    expect(u32.isDecoded).toEqual(true);
    expect(u32.unwrap().toNumber()).toEqual(1234567);

    expect(u32.toHex()).toEqual('0x87d61200');
    expect(u32.toHuman()).toEqual('1,234,567');
    expect(u32.toJSON()).toEqual('0x87d61200');
    expect(u32.toRawType()).toEqual('WrapperKeepOpaque<u32>');
    expect(u32.toString()).toEqual('1234567');
    expect(u32.toU8a()).toEqual(u8au32);
  });

  it('handles values from Raw', (): void => {
    const u32 = new ClazzU32(registry, new Raw(registry, u8au32.slice(1)));

    expect(u32.unwrap().toNumber()).toEqual(1234567);
  });

  it('handles values from Bytes', (): void => {
    const u32 = new ClazzU32(registry, new Bytes(registry, u8au32));

    expect(u32.unwrap().toNumber()).toEqual(1234567);
  });

  it('has a sane inspect (non-decodable)', (): void => {
    expect(
      new ClazzUSize(registry, u8au32).inspect()
    ).toEqual({
      outer: [new Uint8Array([4 << 2]), new Uint8Array([0x87, 0xd6, 0x12, 0x00])]
    });
  });

  it('has a sane inspect (decodable)', (): void => {
    expect(
      new ClazzU32(registry, u8au32).inspect()
    ).toEqual({
      inner: [{ outer: [new Uint8Array([0x87, 0xd6, 0x12, 0x00])] }],
      outer: [new Uint8Array([4 << 2])]
    });
  });

  it('has a sane in-wrapper representation', (): void => {
    const set = registry.createType(
      'BTreeSet<OpaquePeerId>',
      // prefix
      '0x' +
      // 4 items, 16 >> 2
      '10' +
      // opaque length
      '9c' +
      // bytes length
      '98' + '0024080112201ce5f00ef6e89374afb625f1ae4c1546d31234e87e3c3f51a62b91dd6bfa57df' +
      // repeat the same for the next 3...
      '9c98002408011220876a7b4984f98006dc8d666e28b60de307309835d775e7755cc770328cdacf2e9c98002408011220c81bc1d7057a1511eb9496f056f6f53cdfe0e14c8bd5ffca47c70a8d76c1326d9c98002408011220dacde7714d8551f674b8bb4b54239383c76a2b286fa436e93b2b7eb226bf4de7'
    );
    const val = [...set.values()];

    expect(val.map((v) => v.toHex())).toEqual([
      '0x980024080112201ce5f00ef6e89374afb625f1ae4c1546d31234e87e3c3f51a62b91dd6bfa57df',
      '0x98002408011220876a7b4984f98006dc8d666e28b60de307309835d775e7755cc770328cdacf2e',
      '0x98002408011220c81bc1d7057a1511eb9496f056f6f53cdfe0e14c8bd5ffca47c70a8d76c1326d',
      '0x98002408011220dacde7714d8551f674b8bb4b54239383c76a2b286fa436e93b2b7eb226bf4de7'
    ]);
    expect(val.map((v) => v.toHuman())).toEqual([
      '0x0024080112201ce5f00ef6e89374afb625f1ae4c1546d31234e87e3c3f51a62b91dd6bfa57df',
      '0x002408011220876a7b4984f98006dc8d666e28b60de307309835d775e7755cc770328cdacf2e',
      '0x002408011220c81bc1d7057a1511eb9496f056f6f53cdfe0e14c8bd5ffca47c70a8d76c1326d',
      '0x002408011220dacde7714d8551f674b8bb4b54239383c76a2b286fa436e93b2b7eb226bf4de7'
    ]);
  });
});
