// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';

import { createType, ClassOf, TypeRegistry } from './create';
import Moment from './Date';
import U32 from '../primitive/U32';
import Compact from './Compact';
import UInt from './UInt';

describe('Compact', (): void => {
  const registry = new TypeRegistry();

  describe('encodeU8a', (): void => {
    it('encodes short u8', (): void => {
      expect(
        Compact.encodeU8a(18)
      ).toEqual(
        new Uint8Array([18 << 2])
      );
    });

    it('encodes max u8 values', (): void => {
      expect(
        Compact.encodeU8a(new (UInt.with())(registry, 63))
      ).toEqual(
        new Uint8Array([0b11111100])
      );
    });

    it('encodes basic u16 value', (): void => {
      expect(
        Compact.encodeU8a(511)
      ).toEqual(
        new Uint8Array([0b11111101, 0b00000111])
      );
    });

    it('encodes basic ua6 (not at edge)', (): void => {
      expect(
        Compact.encodeU8a(111)
      ).toEqual(
        new Uint8Array([0xbd, 0x01])
      );
    });

    it('encodes basic u32 values (short)', (): void => {
      expect(
        Compact.encodeU8a(0xffff)
      ).toEqual(
        new Uint8Array([254, 255, 3, 0])
      );
    });

    it('encodes basic u32 values (full)', (): void => {
      expect(
        Compact.encodeU8a(0xfffffff9)
      ).toEqual(
        new Uint8Array([3, 249, 255, 255, 255])
      );
    });

    it('encondes a large balance', (): void => {
      expect(
        Compact.encodeU8a(createType(registry, 'Balance', '0x5af3107a4000'))
      ).toEqual(
        new Uint8Array([
          3 + ((6 - 4) << 2),
          0x00, 0x40, 0x7a, 0x10, 0xf3, 0x5a
        ])
      );
    });
  });

  describe('decodeU8a', (): void => {
    it('decoded u8 value', (): void => {
      expect(
        Compact.decodeU8a(new Uint8Array([0b11111100]), 32)
      ).toEqual([1, new BN(63)]);
    });

    it('decodes from same u16 encoded value', (): void => {
      expect(
        Compact.decodeU8a(new Uint8Array([0b11111101, 0b00000111]), 32)
      ).toEqual([2, new BN(511)]);
    });

    it('decodes from same u32 encoded value (short)', (): void => {
      expect(
        Compact.decodeU8a(new Uint8Array([254, 255, 3, 0]), 32)
      ).toEqual([4, new BN(0xffff)]);
    });

    it('decodes from same u32 encoded value (full)', (): void => {
      expect(
        Compact.decodeU8a(new Uint8Array([3, 249, 255, 255, 255]), 32)
      ).toEqual([5, new BN(0xfffffff9)]);
    });

    it('decodes from same u32 as u64 encoded value (full, default)', (): void => {
      expect(
        Compact.decodeU8a(new Uint8Array([3, 249, 255, 255, 255]), 64)
      ).toEqual([5, new BN(0xfffffff9)]);
    });
  });

  describe('constructor', (): void => {
    it('has the correct bitLength for constructor values (BlockNumber)', (): void => {
      expect(
        new (Compact.with(ClassOf(registry, 'BlockNumber')))(registry, 0xfffffff9).bitLength()
      ).toEqual(32);
    });

    it('has the correct encodedLength for constructor values (string BlockNumber)', (): void => {
      expect(
        new (Compact.with('BlockNumber'))(registry, 0xfffffff9).encodedLength
      ).toEqual(5);
    });

    it('has the correct encodedLength for constructor values (class BlockNumber)', (): void => {
      expect(
        new (Compact.with(ClassOf(registry, 'BlockNumber')))(registry, 0xfffffff9).encodedLength
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
        new (Compact.with(Moment))(registry, 1537968546).toString().startsWith('Wed Sep 26 2018') // The time depends on the timezone this test is run in
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
  });

  describe('helpers', (): void => {
    it('correctly adds the length prefix', (): void => {
      expect(
        Compact.addLengthPrefix(Uint8Array.from([12, 13]))
      ).toEqual(Uint8Array.from([2 << 2, 12, 13]));
    });
  });
});
