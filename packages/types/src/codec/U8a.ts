// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { isU8a, u8aToHex, u8aToU8a } from '@polkadot/util';

import { AnyU8a, Codec } from '../types';

// A U8a. A basic wrapper around Uint8Array, with no frills and no fuss. It
// wraps a Uint8Array. It does differ from other implementations wher it will
// consume the full u8a as passed to it in U8a. As such it is meant to be
// subclassed where the wrapper takes care of the actual lengths.
export default class U8a extends Uint8Array implements Codec {
  // FIXME Remove this once we convert all types out of Base
  public raw: Uint8Array;

  constructor (value: AnyU8a) {
    super(
      U8a.decodeU8a(value)
    );

    this.raw = this;
  }

  private static decodeU8a (value: any): Uint8Array {
    if (isU8a(value)) {
      return value;
    } else {
      return u8aToU8a(value);
    }
  }

  get encodedLength (): number {
    return this.length;
  }

  // Create a new subarray from the actual buffer. This is needed
  // for compat reasons since a new Uint8Array gets returned here
  subarray (begin: number, end?: number): Uint8Array {
    return Uint8Array.from(this).subarray(begin, end);
  }

  toHex (): string {
    return u8aToHex(this);
  }

  toJSON (): any {
    return this.toHex();
  }

  toU8a (isBare?: boolean): Uint8Array {
    return Uint8Array.from(this);
  }

  toString (): string {
    return this.toHex();
  }
}
