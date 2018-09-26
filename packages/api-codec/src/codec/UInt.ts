// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AnyNumber } from '../types';

import BN from 'bn.js';
import isHex from '@polkadot/util/is/hex';
import isString from '@polkadot/util/is/string';
import bnToBn from '@polkadot/util/bn/toBn';
import bnToHex from '@polkadot/util/bn/toHex';
import bnToU8a from '@polkadot/util/bn/toU8a';
import hexToBn from '@polkadot/util/hex/toBn';
import u8aToBn from '@polkadot/util/u8a/toBn';

import Base from './Base';

type BitLength = 8 | 16 | 32 | 64 | 128 | 256;

// A generic number codec. For Substrate all numbers are LE encoded, this handles the encoding
// and decoding of those numbers. Upon construction the bitLength is provided and any additional
// use keeps the number to this length.
//
// TODO:
//   - Apart from encoding/decoding we don't actuall keep check on the sizes, is this good enough?
export default class UInt extends Base<BN> {
  private _bitLength: BitLength;

  constructor (value: AnyNumber = 0, bitLength: BitLength = 64) {
    super(
      UInt.decode(value)
    );

    this._bitLength = bitLength;
  }

  static decode (value: AnyNumber): BN {
    if (value instanceof UInt) {
      return value.raw;
    } else if (isHex(value)) {
      return hexToBn(value as string);
    } else if (isString(value)) {
      return new BN(value, 10);
    }

    return bnToBn(value);
  }

  byteLength (): number {
    return this._bitLength / 8;
  }

  fromJSON (input: any): UInt {
    this.raw = UInt.decode(input);

    return this;
  }

  fromU8a (input: Uint8Array): UInt {
    this.raw = u8aToBn(input.subarray(0, this.byteLength()), true);

    return this;
  }

  toHex (): string {
    return bnToHex(this.raw, this._bitLength);
  }

  toJSON (): any {
    return this.toString();
  }

  toU8a (): Uint8Array {
    return bnToU8a(this.raw, this._bitLength, true);
  }

  toString (): string {
    return this.toHex();
  }

  toBn (): BN {
    return this.raw;
  }

  toNumber (): number {
    return this.raw.toNumber();
  }
}
