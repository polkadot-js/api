// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { hexToU8a, isBuffer, isHex, isString, isU8a, u8aConcat, u8aToU8a } from '@polkadot/util';

import { AnyU8a } from './types';
import Compact, { DEFAULT_LENGTH_BITS } from './codec/Compact';
import U8a from './codec/U8a';

// A Bytes wrapper for Vec<u8>. The significant difference between this and a normal Uint8Array
// is that this version allows for length-encoding. (i.e. it is a variable-item codec, the same
// as what is found in Text and Vector)
export default class Bytes extends U8a {
  constructor (value: AnyU8a) {
    super(Bytes.decodeBytes(value));
  }

  private static decodeBytes (value: AnyU8a): Uint8Array {
    if (isHex(value)) {
      // FIXME We manually add the length prefix for hex for now
      // https://github.com/paritytech/substrate/issues/889
      const u8a = hexToU8a(value);

      return Bytes.decodeBytes(
        Compact.addLengthPrefix(u8a)
      );
    } else if (isU8a(value)) {
      const [offset, length] = Compact.decodeU8a(value, DEFAULT_LENGTH_BITS);

      return value.subarray(offset, offset + length.toNumber());
    } else if (Array.isArray(value) || isBuffer(value) || isString(value)) {
      return Bytes.decodeBytes(u8aToU8a(value));
    }

    return value;
  }

  get encodedLength (): number {
    return this.length + Compact.encodeU8a(this.length, DEFAULT_LENGTH_BITS).length;
  }

  toU8a (isBare?: boolean): Uint8Array {
    return isBare
      ? super.toU8a(isBare)
      : u8aConcat(
        Compact.encodeU8a(this.length, DEFAULT_LENGTH_BITS),
        this
      );
  }
}
