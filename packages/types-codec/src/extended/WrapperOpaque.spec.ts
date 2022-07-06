// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '@polkadot/types';
import { WrapperOpaque } from '@polkadot/types-codec';
import { u8aConcat } from '@polkadot/util';

describe('WrapperOpaque', (): void => {
  const registry = new TypeRegistry();
  const u8au32 = new Uint8Array([4 << 2, 135, 214, 18, 0]);

  it('u8a encodes a wrapped u32 correctly', (): void => {
    expect(
      new WrapperOpaque(registry, 'u32', 1234567).toU8a()
    ).toEqual(u8au32);
  });

  it('u8a decodes a wrapped u32 correctly', (): void => {
    expect(
      new WrapperOpaque(registry, 'u32', u8au32).toU8a()
    ).toEqual(u8au32);
  });

  it('u8a encodes a wrapped option correctly', (): void => {
    expect(
      new WrapperOpaque(registry, 'Option<u32>', 1234567).toU8a()
    ).toEqual(u8aConcat([5 << 2, 1], u8au32.slice(1)));
  });

  it('hex encodes a wrapped u32 correctly', (): void => {
    expect(
      new WrapperOpaque(registry, 'u32', '0x12345678').toHex()
    ).toEqual('0x78563412');
  });

  it('has the correct unwrap', (): void => {
    expect(
      new WrapperOpaque(registry, 'u32', '0x12345678').unwrap().toHex()
    ).toEqual('0x78563412');
  });

  it('has the correct toRawType', (): void => {
    expect(
      new WrapperOpaque(registry, 'u32').toRawType()
    ).toEqual('WrapperOpaque<u32>');
  });

  it('has a sane inspect', (): void => {
    expect(
      new WrapperOpaque(registry, 'u32', '0x78563412').inspect()
    ).toEqual({
      inner: [{ outer: [new Uint8Array([0x78, 0x56, 0x34, 0x12])] }],
      outer: [new Uint8Array([4 << 2])]
    });
  });
});
