// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import hexToU8a from '@polkadot/util/hex/toU8a';
import isHex from '@polkadot/util/is/hex';
import isU8a from '@polkadot/util/is/u8a';
import toU8a from '@polkadot/util/u8a/toU8a';
import u8aConcat from '@polkadot/util/u8a/concat';

import { AnyU8a } from './types';
import Compact, { DEFAULT_LENGTH_BITS } from './codec/Compact';
import U8a from './codec/U8a';

// A Bytes. The significant difference between this and a normal Uint8Array is that
// this version allows for length-encoding. (i.e. it is a variable-item codec, the same
// as what is found in Text and Vector)
export default class Bytes extends U8a {
  constructor (value: AnyU8a) {
    super(Bytes.decodeBytes(value));
  }

  static decodeBytes (value: AnyU8a): Uint8Array {
    if (value instanceof U8a) {
      return value.raw;
    } else if (isHex(value)) {
      // FIXME We manually add the length prefix for hex for now
      // https://github.com/paritytech/substrate/issues/889
      // Instead of the block below, it should simply be:
      // return Bytes.decodeBytes(hexToU8a(value as string));
      const u8a = hexToU8a(value as string);
      return Bytes.decodeBytes(
        u8aConcat(
          Compact.encodeU8a(u8a.length, DEFAULT_LENGTH_BITS),
          u8a
        )
      );
    } else if (isU8a(value)) {
      const [offset, length] = Compact.decodeU8a(value, DEFAULT_LENGTH_BITS);
      return value.subarray(offset, offset + length.toNumber());
    }
    return Bytes.decodeBytes(toU8a(value));
  }

  get length (): number {
    return this.raw.length;
  }

  get encodedLength (): number {
    return this.length + Compact.encodeU8a(this.length, DEFAULT_LENGTH_BITS).length;
  }

  toU8a (isBare?: boolean): Uint8Array {
    return isBare
      ? this.raw
      : u8aConcat(
        Compact.encodeU8a(this.length, DEFAULT_LENGTH_BITS),
        this.raw
      );
  }
}
