// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import u8aToHex from '@polkadot/util/u8a/toHex';
import toU8a from '@polkadot/util/u8a/toU8a';

import Base from './Base';

type BitLength = 256 | 512;

// A Hash that manages a a sequence of bytes up to the specified bitLength. Not meant
// to be used directly, rather is should be subclassed with the specific lengths.
export default class CodecHash extends Base<Uint8Array> {
  protected _bitLength: number;

  constructor (value: Uint8Array = new Uint8Array(), bitLength: BitLength = 256) {
    super(value);

    this._bitLength = bitLength;
  }

  byteLength (): number {
    return this._bitLength / 8;
  }

  fromJSON (input: any): CodecHash {
    this.raw = toU8a(input);

    return this;
  }

  fromU8a (input: Uint8Array): CodecHash {
    this.raw = input.subarray(0, this.byteLength());

    return this;
  }

  toJSON (): any {
    return this.toString();
  }

  toU8a (): Uint8Array {
    return this.raw;
  }

  toString (): string {
    return u8aToHex(this.raw);
  }
}
