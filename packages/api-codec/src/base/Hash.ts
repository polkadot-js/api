// Copyright 2017-2018 @polkadot/codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import u8aToHex from '@polkadot/util/u8a/toHex';
import toU8a from '@polkadot/util/u8a/toU8a';

import Base from './Base';

type BitLength = 256 | 512;

const DEFAULT_VALUE = new Uint8Array([]);
const DEFAULT_BITLENGTH = 256;

export default class BaseHash extends Base<Uint8Array> {
  private _bitLength: number;

  constructor (value: Uint8Array = DEFAULT_VALUE, bitLength: BitLength = DEFAULT_BITLENGTH) {
    super(value);

    this._bitLength = bitLength;
  }

  byteLength (): number {
    return this._bitLength / 8;
  }

  fromJSON (input: any): BaseHash {
    this.raw = toU8a(input);

    return this;
  }

  fromU8a (input: Uint8Array): BaseHash {
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
