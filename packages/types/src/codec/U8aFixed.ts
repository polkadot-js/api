// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isString, isU8a, u8aToU8a } from '@polkadot/util';

import { AnyU8a, Constructor } from '../types';

import U8a from './U8a';

export type BitLength = 8 | 16 | 32 | 64 | 128 | 160 | 256 | 512 | 1024 | 2048;

/**
 * @name U8aFixed
 * @description
 * A U8a that manages a a sequence of bytes up to the specified bitLength. Not meant
 * to be used directly, rather is should be subclassed with the specific lengths.
 */
export default class U8aFixed extends U8a {
  constructor (value: AnyU8a = new Uint8Array(), bitLength: BitLength = 256) {
    super(
      U8aFixed.decodeU8aFixed(value, bitLength)
    );
  }

  private static decodeU8aFixed (value: AnyU8a, bitLength: BitLength = 256): AnyU8a {
    if (isU8a(value)) {
      // ensure that we have an actual u8a with the full length as specified by
      // the bitLength input (padded with zeros as required)
      const byteLength = bitLength / 8;
      const sub = value.subarray(0, byteLength);

      if (sub.length === byteLength) {
        return sub;
      }

      const u8a = new Uint8Array(byteLength);

      u8a.set(sub, 0);

      return u8a;
    } else if (Array.isArray(value) || isString(value)) {
      return U8aFixed.decodeU8aFixed(u8aToU8a(value), bitLength);
    }

    return value;
  }

  static with (bitLength: BitLength): Constructor<U8aFixed> {
    return class extends U8aFixed {
      constructor (value?: any) {
        super(value, bitLength);
      }
    };
  }

  /**
   * @description Returns the number of bits in the value
   */
  bitLength () {
    return this.length * 8;
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType (): string {
    // FIEXME We don't cater for this in createType
    return `[u8;${this.length}]`;
  }
}
