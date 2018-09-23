// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';
import isHex from '@polkadot/util/is/hex';
import bnToBn from '@polkadot/util/bn/toBn';
import bnToHex from '@polkadot/util/bn/toHex';
import bnToU8a from '@polkadot/util/bn/toU8a';
import hexToBn from '@polkadot/util/hex/toBn';
import u8aToBn from '@polkadot/util/u8a/toBn';

import CodecBase from './Base';

type BitLength = 8 | 16 | 32 | 64 | 128;

const DEFAULT_VALUE = new BN(0);

// A generic number codec. For Substrate all numbers are LE encoded, this handles the encoding
// and decoding of those numbers. Upon construction the bitLength is provided and any additional
// use keeps the number to this length.
//
// TODO:
//   - Apart from encoding/decoding we don't actuall keep check on the sizes, is this good enough?
export default class CodecNumber extends CodecBase<BN> {
  private _bitLength: BitLength;

  constructor (value: BN | number = DEFAULT_VALUE, bitLength: BitLength = 64) {
    super(
      bnToBn(value)
    );

    this._bitLength = bitLength;
  }

  byteLength (): number {
    return this._bitLength / 8;
  }

  fromJSON (input: any): CodecNumber {
    this.raw = isHex(input)
      ? hexToBn(input)
      : new BN(input);

    return this;
  }

  fromU8a (input: Uint8Array): CodecNumber {
    this.raw = u8aToBn(input.subarray(0, this.byteLength()), true);

    return this;
  }

  toJSON (): any {
    return this.toString();
  }

  toU8a (): Uint8Array {
    return bnToU8a(this.raw, this._bitLength, true);
  }

  toString (): string {
    return bnToHex(this.raw, this._bitLength);
  }

  toBn (): BN {
    return this.raw;
  }

  toNumber (): number {
    return this.raw.toNumber();
  }
}
