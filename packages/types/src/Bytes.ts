// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import u8aConcat from '@polkadot/util/u8a/concat';

import Compact, { DEFAULT_LENGTH_BITS } from './codec/Compact';
import U8a from './codec/U8a';

// A Bytes. The significant difference between this and a normal Uint8Array is that
// this version allows for length-encoding. (i.e. it is a variable-item codec, the same
// as what is found in Text and Vector)
export default class Bytes extends U8a {
  get length (): number {
    return this.raw.length;
  }

  byteLength (): number {
    return this.length + Compact.encodeU8a(this.length, DEFAULT_LENGTH_BITS).length;
  }

  fromU8a (input: Uint8Array): Bytes {
    const [offset, length] = Compact.decodeU8a(input, DEFAULT_LENGTH_BITS);

    super.fromU8a(input.subarray(offset, offset + length.toNumber()));

    return this;
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
