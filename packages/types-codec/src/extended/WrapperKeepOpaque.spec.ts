// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

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
      inner: [{ inner: [], value: new Uint8Array([0x87, 0xd6, 0x12, 0x00]) }],
      value: new Uint8Array([4 << 2])
    });
  });

  it('has a sane inspect (decodable)', (): void => {
    expect(
      new ClazzU32(registry, u8au32).inspect()
    ).toEqual({
      inner: [{ inner: [], value: new Uint8Array([0x87, 0xd6, 0x12, 0x00]) }],
      value: new Uint8Array([4 << 2])
    });
  });
});
