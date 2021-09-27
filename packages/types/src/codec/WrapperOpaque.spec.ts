// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '../create';
import { WrapperOpaque } from '.';

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

  it('hex encodes a wrapped u32 correctly', (): void => {
    expect(
      new WrapperOpaque(registry, 'u32', '0x12345678').toHex()
    ).toEqual('0x12345678');
  });

  it('has the correct unwrap', (): void => {
    expect(
      new WrapperOpaque(registry, 'u32', '0x12345678').unwrap().toHex()
    ).toEqual('0x12345678');
  });

  it('has the correct toRawType', (): void => {
    expect(
      new WrapperOpaque(registry, 'u32').toRawType()
    ).toEqual('WrapperOpaque<u32>');
  });
});
