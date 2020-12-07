// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import BN from 'bn.js';

import { TypeRegistry } from '../create';
import { U32 } from '../primitive';
import { CodecDate } from './Date';
import { Compact } from '.';

describe('Compact', (): void => {
  const registry = new TypeRegistry();

  describe('constructor', (): void => {
    it('has support for BigInt', (): void => {
      expect(
        new Compact(registry, 'u128', 123456789000123456789n).toHuman()
      ).toEqual('123,456,789,000,123,456,789');
    });

    it('has the correct bitLength for constructor values (BlockNumber)', (): void => {
      expect(
        new (Compact.with(registry.createClass('BlockNumber')))(registry, 0xfffffff9).bitLength()
      ).toEqual(32);
    });

    it('has the correct encodedLength for constructor values (string BlockNumber)', (): void => {
      expect(
        new (Compact.with('BlockNumber'))(registry, 0xfffffff9).encodedLength
      ).toEqual(5);
    });

    it('has the correct encodedLength for constructor values (class BlockNumber)', (): void => {
      expect(
        new (Compact.with(registry.createClass('BlockNumber')))(registry, 0xfffffff9).encodedLength
      ).toEqual(5);
    });

    it('has the correct encodedLength for constructor values (u32)', (): void => {
      expect(
        new (Compact.with(U32))(registry, 0xffff9).encodedLength
      ).toEqual(4);
    });

    it('constructs properly via Uint8Array as U32', (): void => {
      expect(
        new (Compact.with(U32))(registry, new Uint8Array([254, 255, 3, 0])).toNumber()
      ).toEqual(new BN(0xffff).toNumber());
    });

    it('constructs properly via number as Moment', (): void => {
      expect(
        new (Compact.with(CodecDate))(registry, 1537968546).toString().startsWith('Wed Sep 26 2018') // The time depends on the timezone this test is run in
      ).toBe(true);
    });
  });

  describe('utils', (): void => {
    it('compares against another Compact', (): void => {
      expect(new (Compact.with(U32))(registry, 12345).eq(new (Compact.with(U32))(registry, 12345))).toBe(true);
    });

    it('compares against a primitive', (): void => {
      expect(new (Compact.with(U32))(registry, 12345).eq(12345)).toBe(true);
    });

    it('unwraps to the wrapped value', (): void => {
      expect(new (Compact.with(U32))(registry, 12345).unwrap() instanceof U32).toBe(true);
    });

    it('has a valid toBn interface', (): void => {
      expect(new (Compact.with('u128'))(registry, '12345678987654321').toBn().eq(new BN('12345678987654321'))).toBe(true);
    });

    it('has a valid toBigInt interface', (): void => {
      expect(new (Compact.with('u128'))(registry, 12345678987654321n).toBigInt() === 12345678987654321n).toBe(true);
    });
  });
});
