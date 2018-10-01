// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AnyNumber } from '../types';

import BN from 'bn.js';
import isHex from '@polkadot/util/is/hex';
import isString from '@polkadot/util/is/string';
import isU8a from '@polkadot/util/is/u8a';
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
    } else if (isU8a(value)) {
      // NOTE When passing u8a in (typically from decoded data), it is always u8a
      return u8aToBn(value, true);
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

  toU8a (isBare?: boolean): Uint8Array {
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

  // helpers from BN, this would be great as a "don't do this", i.e. extending properly
  // from BN. Underlying these will always return BN (unless it is compare checks)
  add (other: UInt | BN | number): BN {
    return other instanceof UInt
      ? this.raw.add(other.raw)
      : this.raw.add(bnToBn(other));
  }

  div (other: UInt | BN | number): BN {
    return other instanceof UInt
      ? this.raw.div(other.raw)
      : this.raw.div(bnToBn(other));
  }

  lt (test: UInt | BN | number): boolean {
    return test instanceof UInt
      ? this.raw.lt(test.raw)
      : this.raw.lt(bnToBn(test));
  }

  lte (test: UInt | BN | number): boolean {
    return test instanceof UInt
      ? this.raw.lte(test.raw)
      : this.raw.lte(bnToBn(test));
  }

  gt (test: UInt | BN | number): boolean {
    return test instanceof UInt
      ? this.raw.gt(test.raw)
      : this.raw.gt(bnToBn(test));
  }

  gte (test: UInt | BN | number): boolean {
    return test instanceof UInt
      ? this.raw.gte(test.raw)
      : this.raw.gte(bnToBn(test));
  }

  mul (other: UInt | BN | number): BN {
    return other instanceof UInt
      ? this.raw.mul(other.raw)
      : this.raw.mul(bnToBn(other));
  }

  sub (other: UInt | BN | number): BN {
    return other instanceof UInt
      ? this.raw.sub(other.raw)
      : this.raw.sub(bnToBn(other));
  }
}
