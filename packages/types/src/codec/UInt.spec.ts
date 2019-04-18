// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';

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

  it('converts to Little Endian from the provided value', () => {
    expect(
      new UInt(1234567).toU8a()
    ).toEqual(new Uint8Array([135, 214, 18, 0, 0, 0, 0, 0]));
  });

  it('converts to Little Endian from the provided value (bitLength)', () => {
    expect(
      new UInt(1234567, 32).toU8a()
    ).toEqual(new Uint8Array([135, 214, 18, 0]));
  });

  it('converts to hex/string', () => {
    const u = new UInt('0x12', 16);

    expect(u.toHex()).toEqual('0x0012');
    expect(u.toString()).toEqual('18');
  });

  it('converts to equivalents', () => {
    const a = new UInt('123');

    expect(
      new UInt(a).toNumber()
    ).toEqual(123);
  });

  it('converts to JSON representation based on flags/size', () => {
    expect(new UInt('0x12345678', 64, true).toJSON()).toEqual('0x0000000012345678');
    expect(new UInt('0x1234567890', 64, false).toJSON()).toEqual(0x1234567890);
    expect(new UInt('0x1234567890abcdef', 64, false).toJSON()).toEqual('0x1234567890abcdef');
  });

  describe('eq', () => {
    const test = new UInt(12345);

    it('compares against other BN values', () => {
      expect(test.eq(new BN(12345))).toBe(true);
    });

    it('compares against other number values', () => {
      expect(test.eq(12345)).toBe(true);
    });

    it('compares against hex values', () => {
      expect(test.eq('0x3039')).toBe(true);
    });
  });
});
