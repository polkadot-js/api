// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import UInt from './UInt';

describe('UInt', () => {
  it('provides a toBn interface', () => {
    expect(
      new UInt(987).toBn().toNumber()
    ).toEqual(987);
  });

  it('provides a toNumber interface', () => {
    expect(
      new UInt(4567).toNumber()
    ).toEqual(4567);
  });

  it('converts to LE from the provided value', () => {
    expect(
      new UInt(1234567).toU8a()
    ).toEqual(new Uint8Array([135, 214, 18, 0, 0, 0, 0, 0]));
  });

  it('converts to LE from the provided value (bitLength)', () => {
    expect(
      new UInt(1234567, 32).toU8a()
    ).toEqual(new Uint8Array([135, 214, 18, 0]));
  });

  it('converts to hex/string', () => {
    const u = new UInt('0x12', 16);

    expect(u.toHex()).toEqual('0x0012');
    expect(u.toString()).toEqual('0x0012');
  });

  it('converts to equivalents', () => {
    const a = new UInt('123');

    expect(
      new UInt(a).toNumber()
    ).toEqual(123);
  });
});
