// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import type { UIntBitLength } from '../types/index.js';

import { TypeRegistry } from '@polkadot/types';
import { Int } from '@polkadot/types-codec';
import { BN } from '@polkadot/util';

const TESTS: [bitLength: UIntBitLength, value: number | string][] = [
  [8, 0],
  [8, 127],
  [8, -128],
  [32, 0],
  [32, 2147483647],
  [32, -2147483648]
];

describe('Int', (): void => {
  const registry = new TypeRegistry();

  it('can construct via a single-entry struct', (): void => {
    expect(
      // @ts-expect-error We could receive these via JSON
      new Int(registry, { ref_time: 1234 }).toNumber()
    ).toEqual(1234);
    expect(
      // @ts-expect-error We could receive these via JSON
      () => new Int(registry, { ref_time: 1234, zoo: 4567 }).toNumber()
    ).toThrow(/Unable to construct number from/);
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

  it('converts to equivalents', (): void => {
    const a = new Int(registry, '-123');

    expect(
      new Int(registry, a).toNumber()
    ).toEqual(-123);
  });

  it('allows null/undefined', (): void => {
    expect(
      new Int(registry).toNumber()
    ).toEqual(0);
    expect(
      new Int(registry, null).toNumber()
    ).toEqual(0);
  });

  describe('utilities', (): void => {
    it('provides a toBigInt interface', (): void => {
      expect(
        new Int(registry, -1234).toBigInt()
      ).toEqual(-1234n);
    });

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

    it('has a sane inspect', (): void => {
      expect(
        new Int(registry, '0x12', 16).inspect()
      ).toEqual({
        outer: [new Uint8Array([0x12, 0x00])]
      });
    });

    it('converts to hex/string', (): void => {
      const i = new Int(registry, '0x12', 16);

      expect(i.toHex()).toEqual('0x0012');
      expect(i.toString()).toEqual('18');
    });
  });

  describe('static with', (): void => {
    it('allows default toRawType', (): void => {
      expect(
        new (Int.with(64))(registry).toRawType()
      ).toEqual('i64');
    });

    it('allows toRawType override', (): void => {
      expect(
        new (Int.with(64, 'SomethingElse'))(registry).toRawType()
      ).toEqual('SomethingElse');
    });
  });

  describe('conversion tests', (): void => {
    TESTS.forEach(([bitLength, input], i): void => {
      it(`#${i}: converts ${input}`, (): void => {
        expect(
          new Int(registry, input, bitLength).toString()
        ).toEqual(new BN(input).toString());
      });
    });
  });
});
