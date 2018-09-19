// Copyright 2017-2018 @polkadot/codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { HashBitLength, Base } from '../types';

import u8aToHex from '@polkadot/util/u8a/toHex';
import toU8a from '@polkadot/util/u8a/toU8a';

const DEFAULT_VALUE = new Uint8Array([]);
const DEFAULT_BITLENGTH = 256;

export default class BaseHash implements Base<Uint8Array> {
  private bitLength: number;
  value: Uint8Array;

  constructor (value: Uint8Array = DEFAULT_VALUE, bitLength: HashBitLength = DEFAULT_BITLENGTH) {
    this.bitLength = bitLength;
    this.value = value;
  }

  byteLength (): number {
    return this.bitLength / 8;
  }

  fromJSON (input: any): BaseHash {
    this.value = toU8a(input);

    return this;
  }

  fromU8a (input: Uint8Array): BaseHash {
    this.value = input.subarray(0, this.byteLength());

    return this;
  }

  toJSON (): any {
    return this.toString();
  }

  toU8a (): Uint8Array {
    return this.value;
  }

  toString (): string {
    return u8aToHex(this.value);
  }
}
