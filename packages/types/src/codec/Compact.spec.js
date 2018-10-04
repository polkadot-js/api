// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';

import Compact from './Compact';
import UInt from './UInt';

describe('Compact', () => {
  describe('encode', () => {
    it('encodes short u8', () => {
      expect(
        Compact.encode(18)
      ).toEqual(
        new Uint8Array([18 << 2])
      );
    });

    it('encodes max u8 values', () => {
      expect(
        Compact.encode(new UInt(63))
      ).toEqual(
        new Uint8Array([0b11111100])
      );
    });

    it('encodes basic u16 value', () => {
      expect(
        Compact.encode(511)
      ).toEqual(
        new Uint8Array([0b11111101, 0b00000111])
      );
    });

    it('encodes basic ua6 (not at edge)', () => {
      expect(
        Compact.encode(111)
      ).toEqual(
        new Uint8Array([0xbd, 0x01])
      );
    });

    it('encodes basic u32 values (short)', () => {
      expect(
        Compact.encode(0xffff)
      ).toEqual(
        new Uint8Array([254, 255, 3, 0])
      );
    });

    it('encodes basic u32 values (full)', () => {
      expect(
        Compact.encode(0xfffffff9)
      ).toEqual(
        new Uint8Array([3, 249, 255, 255, 255])
      );
    });
  });

  describe('decode', () => {
    it('decoded u8 value', () => {
      expect(
        Compact.decode(new Uint8Array([0b11111100]))
      ).toEqual([1, new BN(63)]);
    });

    it('decodes from same u16 encoded value', () => {
      expect(
        Compact.decode(new Uint8Array([0b11111101, 0b00000111]))
      ).toEqual([2, new BN(511)]);
    });

    it('decodes from same u32 encoded value (short)', () => {
      expect(
        Compact.decode(new Uint8Array([254, 255, 3, 0]))
      ).toEqual([4, new BN(0xffff)]);
    });

    it('decodes from same u32 encoded value (full)', () => {
      expect(
        Compact.decode(new Uint8Array([3, 249, 255, 255, 255]))
      ).toEqual([5, new BN(0xfffffff9)]);
    });
  });
});
