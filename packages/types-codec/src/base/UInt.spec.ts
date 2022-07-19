// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TypeRegistry } from '@polkadot/types';
import { UInt } from '@polkadot/types-codec';
import { BN, BN_TWO, isBn } from '@polkadot/util';

import { perf } from '../test/performance';

describe('UInt', (): void => {
  const registry = new TypeRegistry();

  it('fails on > MAX_SAFE_INTEGER and float', (): void => {
    // eslint-disable-next-line @typescript-eslint/no-loss-of-precision
    expect(() => new UInt(registry, 9007199254740999)).toThrow(/integer <= Number.MAX_SAFE_INTEGER/);
    // eslint-disable-next-line @typescript-eslint/no-loss-of-precision
    expect(() => new UInt(registry, -9007199254740999)).toThrow(/integer <= Number.MAX_SAFE_INTEGER/);
    expect(() => new UInt(registry, 9.123)).toThrow(/integer <= Number.MAX_SAFE_INTEGER/);
  });

  it('fails on strings with decimal points & scientific notation', (): void => {
    expect(() => new UInt(registry, '123.4')).toThrow(/not contain decimal points/);
    expect(() => new UInt(registry, '9e10')).toThrow(/not contain decimal points/);
  });

  it('decodes an empty Uint8array correctly', (): void => {
    expect(
      new UInt(registry, new Uint8Array()).toNumber()
    ).toEqual(0);
  });

  it('still has the BN interfaces', (): void => {
    expect([
      new UInt(registry, 32).mul(BN_TWO).toNumber(),
      new UInt(registry, 64).divn(2).toNumber()
    ]).toEqual([64, 32]);
  });

  it('is a BN instance', (): void => {
    const test = new UInt(registry, 16);

    expect(isBn(test)).toBe(true);
    expect(BN.isBN(test)).toBe(true);
    expect(test instanceof BN).toBe(true);
  });

  // e.g. headers
  it('decodes hex that are not multiples of 2', (): void => {
    expect(new UInt(registry, '0x123').toNumber()).toEqual(0x123);
    expect(new UInt(registry, '0x0123').toNumber()).toEqual(0x123);
  });

  it('fails on a number that is too large for the bits specified', (): void => {
    expect(
      (): UInt => new UInt(registry, '12345678901234567890123456789012345678901234567890', 32)
    ).toThrow('u32: Input too large. Found input with 164 bits, expected 32');
  });

  it('fails on negative numbers', (): void => {
    expect(
      (): UInt => new UInt(registry, -123, 32)
    ).toThrow('u32: Negative number passed to unsigned type');
  });

  it('allows for construction via BigInt', (): void => {
    expect(
      new UInt(registry, 123456789123456789123456789n, 128).toHuman()
    ).toEqual('123,456,789,123,456,789,123,456,789');
  });

  it('provides a toBigInt interface', (): void => {
    expect(
      new UInt(registry, 9876543210123456789n).toBigInt()
    ).toEqual(9876543210123456789n);
  });

  it('provides a toBn interface', (): void => {
    expect(
      new UInt(registry, 987).toBn().toNumber()
    ).toEqual(987);
  });

  it('provides a toNumber interface', (): void => {
    expect(
      new UInt(registry, 4567).toNumber()
    ).toEqual(4567);
  });

  it('has a working toBigInt', (): void => {
    expect(
      new UInt(registry, 4567).toBigInt() + BigInt(1)
    ).toEqual(BigInt(4568));
  });

  it('converts to Little Endian from the provided value', (): void => {
    expect(
      new UInt(registry, 1234567).toU8a()
    ).toEqual(new Uint8Array([135, 214, 18, 0, 0, 0, 0, 0]));
  });

  it('converts to Little Endian from the provided value (bitLength)', (): void => {
    expect(
      new UInt(registry, 1234567, 32).toU8a()
    ).toEqual(new Uint8Array([135, 214, 18, 0]));
  });

  it('converts to hex/string', (): void => {
    const u = new UInt(registry, '0x12', 16);

    expect(u.toHex()).toEqual('0x0012');
    expect(u.toString()).toEqual('18');
  });

  it('converts to equivalents', (): void => {
    const a = new UInt(registry, '123');

    expect(
      new UInt(registry, a).toNumber()
    ).toEqual(123);
  });

  it('converts to JSON representation based on size', (): void => {
    expect(new UInt(registry, '0x12345678', 32).toJSON()).toEqual(0x12345678);
    expect(new UInt(registry, '0x1234567890', 64).toJSON()).toEqual(78187493520); // '0x0000001234567890');
    expect(new UInt(registry, '0x1234567890abcdef', 64).toJSON()).toEqual('0x1234567890abcdef');
  });

  it('has a sane inspect', (): void => {
    expect(
      new UInt(registry, '0x12', 16).inspect()
    ).toEqual({
      outer: [new Uint8Array([0x12, 0x00])]
    });
  });

  describe('eq', (): void => {
    const test = new UInt(registry, 12345);

    it('compares against other BN values', (): void => {
      expect(test.eq(new BN(12345))).toBe(true);
    });

    it('compares against other number values', (): void => {
      expect(test.eq(12345)).toBe(true);
    });

    it('compares against hex values', (): void => {
      expect(test.eq('0x3039')).toBe(true);
    });
  });

  describe('isMax()', (): void => {
    it('is false where not full', (): void => {
      expect(new UInt(registry, '0x1234', 32).isMax()).toEqual(false);
      expect(new UInt(registry, '0xffffff', 32).isMax()).toEqual(false);
      expect(new UInt(registry, '0x12345678', 32).isMax()).toEqual(false);
      expect(new UInt(registry, '0xfffffff0', 32).isMax()).toEqual(false);
    });

    it('is true when full', (): void => {
      expect(new UInt(registry, '0xffffffff', 32).isMax()).toEqual(true);
    });
  });

  describe('static with', (): void => {
    it('allows default toRawType', (): void => {
      expect(
        new (UInt.with(64))(registry).toRawType()
      ).toEqual('u64');
    });

    it('allows toRawType override', (): void => {
      expect(
        new (UInt.with(64, 'SomethingElse'))(registry).toRawType()
      ).toEqual('SomethingElse');
    });

    it('has proper toHuman() for PerMill/PerBill/Percent/Balance', (): void => {
      expect(registry.createType('Perbill', 12_340_000).toHuman()).toEqual('1.23%');
      expect(registry.createType('Percent', 12).toHuman()).toEqual('12.00%');
      expect(registry.createType('Permill', 16_900).toHuman()).toEqual('1.69%');
      expect(registry.createType('Balance', '123456789012345').toHuman()).toEqual('123.4567 Unit');
    });
  });

  perf('UInt', 75_000, [[new Uint8Array([31, 32, 33, 34])]], (v: Uint8Array) => new UInt(registry, v));
});
