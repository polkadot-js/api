// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';

import Moment from '../primitive/Moment';
import U32 from '../primitive/U32';
import Balance from '../type/Balance';
import BlockNumber from '../type/BlockNumber';
import Compact from './Compact';
import UInt from './UInt';

describe('Compact', () => {
  describe('encodeU8a', () => {
    it('encodes short u8', () => {
      expect(
        Compact.encodeU8a(18)
      ).toEqual(
        new Uint8Array([18 << 2])
      );
    });

    it('encodes max u8 values', () => {
      expect(
        Compact.encodeU8a(new UInt(63))
      ).toEqual(
        new Uint8Array([0b11111100])
      );
    });

    it('encodes basic u16 value', () => {
      expect(
        Compact.encodeU8a(511)
      ).toEqual(
        new Uint8Array([0b11111101, 0b00000111])
      );
    });

    it('encodes basic ua6 (not at edge)', () => {
      expect(
        Compact.encodeU8a(111)
      ).toEqual(
        new Uint8Array([0xbd, 0x01])
      );
    });

    it('encodes basic u32 values (short)', () => {
      expect(
        Compact.encodeU8a(0xffff)
      ).toEqual(
        new Uint8Array([254, 255, 3, 0])
      );
    });

    it('encodes basic u32 values (full)', () => {
      expect(
        Compact.encodeU8a(0xfffffff9)
      ).toEqual(
        new Uint8Array([3, 249, 255, 255, 255])
      );
    });

    it('encondes a large balance', () => {
      expect(
        Compact.encodeU8a(new Balance('0x5af3107a4000'))
      ).toEqual(
        new Uint8Array([
          3 + ((6 - 4) << 2),
          0x00, 0x40, 0x7a, 0x10, 0xf3, 0x5a
        ])
      );
    });
  });

  describe('decodeU8a', () => {
    it('decoded u8 value', () => {
      expect(
        Compact.decodeU8a(new Uint8Array([0b11111100]), 32)
      ).toEqual([1, new BN(63)]);
    });

    it('decodes from same u16 encoded value', () => {
      expect(
        Compact.decodeU8a(new Uint8Array([0b11111101, 0b00000111]), 32)
      ).toEqual([2, new BN(511)]);
    });

    it('decodes from same u32 encoded value (short)', () => {
      expect(
        Compact.decodeU8a(new Uint8Array([254, 255, 3, 0]), 32)
      ).toEqual([4, new BN(0xffff)]);
    });

    it('decodes from same u32 encoded value (full)', () => {
      expect(
        Compact.decodeU8a(new Uint8Array([3, 249, 255, 255, 255]), 32)
      ).toEqual([5, new BN(0xfffffff9)]);
    });

    it('decodes from same u32 as u64 encoded value (full, default)', () => {
      expect(
        Compact.decodeU8a(new Uint8Array([3, 249, 255, 255, 255]), 64)
      ).toEqual([5, new BN(0xfffffff9)]);
    });
  });

  describe('constructor', () => {
    it('has the correct bitLength for constructor values (BlockNumber)', () => {
      expect(
        new Compact(BlockNumber, 0xfffffff9).bitLength()
      ).toEqual(64);
    });

    it('has the correct encodedLength for constructor values (BlockNumber)', () => {
      expect(
        new Compact(BlockNumber, 0xfffffff9).encodedLength
      ).toEqual(5);
    });

    it('has the correct encodedLength for constructor values (u32)', () => {
      expect(
        new Compact(U32, 0xffff9).encodedLength
      ).toEqual(4);
    });

    it('constructs properly via U8a as U32', () => {
      expect(
        new Compact(U32, new Uint8Array([254, 255, 3, 0])).toNumber()
      ).toEqual(new BN(0xffff).toNumber());
    });

    it('constructs properly via number as Moment', () => {
      expect(
        new Compact(Moment, 1537968546).toString().startsWith('Wed Sep 26 2018') // The time depends on the timezone this test is run in
      ).toBe(true);
    });
  });

  describe('utils', () => {
    it('compares against another Compact', () => {
      expect(new Compact(U32, 12345).eq(new Compact(U32, 12345))).toBe(true);
    });

    it('compares against a primitive', () => {
      expect(new Compact(U32, 12345).eq(12345)).toBe(true);
    });

    it('unwraps to the wrapped value', () => {
      expect(new Compact(U32, 12345).unwrap() instanceof U32).toBe(true);
    });
  });

  describe('helpers', () => {
    it('correctly adds the length prefix', () => {
      expect(
        Compact.addLengthPrefix(Uint8Array.from([12, 13]))
      ).toEqual(Uint8Array.from([2 << 2, 12, 13]));
    });
  });
});
