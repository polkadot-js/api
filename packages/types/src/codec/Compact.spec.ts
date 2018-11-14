// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';

import BlockNumber from '../BlockNumber';
import Moment from '../Moment';
import U32 from '../U32';
import Compact from './Compact';
import UInt from './UInt';

describe('Compact', () => {
  describe('encodeU8a', () => {
    it('encodes short u8', () => {
      expect(
        Compact.encodeU8a(18, 8)
      ).toEqual(
        new Uint8Array([18 << 2])
      );
    });

    it('encodes max u8 values', () => {
      expect(
        Compact.encodeU8a(new UInt(63), 16)
      ).toEqual(
        new Uint8Array([0b11111100])
      );
    });

    it('encodes basic u16 value', () => {
      expect(
        Compact.encodeU8a(511, 32)
      ).toEqual(
        new Uint8Array([0b11111101, 0b00000111])
      );
    });

    it('encodes basic ua6 (not at edge)', () => {
      expect(
        Compact.encodeU8a(111, 32)
      ).toEqual(
        new Uint8Array([0xbd, 0x01])
      );
    });

    it('encodes basic u32 values (short)', () => {
      expect(
        Compact.encodeU8a(0xffff, 32)
      ).toEqual(
        new Uint8Array([254, 255, 3, 0])
      );
    });

    it('encodes basic u32 values (full)', () => {
      expect(
        Compact.encodeU8a(0xfffffff9, 32)
      ).toEqual(
        new Uint8Array([3, 249, 255, 255, 255])
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
      ).toEqual([9, new BN(0xfffffff9)]);
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
      ).toEqual(9);
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
        new Compact(Moment, 1537968546).toString().startsWith('Wed Sep 26 2018')
      ).toBe(true);
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
