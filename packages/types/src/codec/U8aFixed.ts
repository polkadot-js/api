// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import toU8a from '@polkadot/util/u8a/toU8a';

import { AnyU8a } from '../types';
import U8a from './U8a';

type BitLength = 8 | 16 | 32 | 64 | 128 | 256 | 512;

// A U8a that manages a a sequence of bytes up to the specified bitLength. Not meant
// to be used directly, rather is should be subclassed with the specific lengths.
export default class U8aFixed extends U8a {
  protected _bitLength: BitLength;

  constructor (value: AnyU8a = new Uint8Array(), bitLength: BitLength = 256) {
    super(
      value instanceof U8aFixed
        ? value
        : U8aFixed.trimLength(toU8a(value), bitLength / 8)
    );

    this._bitLength = bitLength;
  }

  static trimLength (raw: Uint8Array, byteLength: number): Uint8Array {
    return raw.subarray(0, byteLength);
  }

  // @ts-ignore See method on parent class
  get byteLength (): number {
    return this._bitLength / 8;
  }

  fromJSON (input: any): U8aFixed {
    // FIXME See parent method
    return new U8aFixed(input, this._bitLength);
  }

  fromU8a (input: Uint8Array): U8aFixed {
    super.fromU8a(input.subarray(0, this.byteLength));

    return this;
  }
}
