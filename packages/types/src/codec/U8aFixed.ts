// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { isU8a, u8aToHex, u8aToU8a } from '@polkadot/util';

import { AnyU8a } from '../types';

import U8a from './U8a';

type BitLength = 8 | 16 | 32 | 64 | 128 | 256 | 512;

// A U8a that manages a a sequence of bytes up to the specified bitLength. Not meant
// to be used directly, rather is should be subclassed with the specific lengths.
export default class U8aFixed extends U8a {
  constructor (value: AnyU8a = new Uint8Array(), bitLength: BitLength = 256) {
    super(
      U8aFixed.decodeU8aFixed(value, bitLength)
    );
  }

  private static decodeU8aFixed (value: AnyU8a, bitLength: BitLength = 256): AnyU8a {
    if (isU8a(value)) {
      return value.subarray(0, bitLength / 8);
    }

    return value;
  }

  get bitLength () {
    return this.length * 8;
  }
}
