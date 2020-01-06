// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { TypeRegistry } from './create';
import Int from './Int';

describe('Int', (): void => {
  const registry = new TypeRegistry();

  it('provides a toBn interface', (): void => {
    expect(
      new Int(registry, -1234).toBn().toNumber()
    ).toEqual(-1234);
  });

  it('provides a toNumber interface', (): void => {
    expect(
      new Int(registry, -1234).toNumber()
    ).toEqual(-1234);
  });

  it('converts to Little Endian from the provided value', (): void => {
    expect(
      new Int(registry, -1234).toU8a()
    ).toEqual(new Uint8Array([46, 251, 255, 255, 255, 255, 255, 255]));
  });

  it('converts to Little Endian from the provided value (bitLength)', (): void => {
    expect(
      new Int(registry, -1234, 32).toU8a()
    ).toEqual(new Uint8Array([46, 251, 255, 255]));
  });

  it('converts to hex/string', (): void => {
    const i = new Int(registry, '0x12', 16);

    expect(i.toHex()).toEqual('0x0012');
    expect(i.toString()).toEqual('18');
  });

  it('converts to equivalents', (): void => {
    const a = new Int(registry, '-123');

    expect(
      new Int(registry, a).toNumber()
    ).toEqual(-123);
  });

  it('converts to JSON depending on flags', (): void => {
    expect(new Int(registry, 0x12, 16).toJSON()).toEqual('0x0012');
    expect(new Int(registry, 0x12, 16, false).toJSON()).toEqual(0x12);
  });
});
