// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';
import isHex from '@polkadot/util/is/hex';
import isString from '@polkadot/util/is/string';
import isU8a from '@polkadot/util/is/u8a';
import bnToBn from '@polkadot/util/bn/toBn';
import bnToHex from '@polkadot/util/bn/toHex';
import bnToU8a from '@polkadot/util/bn/toU8a';
import hexToBn from '@polkadot/util/hex/toBn';
import u8aToBn from '@polkadot/util/u8a/toBn';

import { AnyNumber, Codec } from '../types';

type BitLength = 8 | 16 | 32 | 64 | 128 | 256;

// A generic number codec. For Substrate all numbers are LE encoded, this handles the encoding
// and decoding of those numbers. Upon construction the bitLength is provided and any additional
// use keeps the number to this length.
//
// TODO:
//   - Apart from encoding/decoding we don't actuall keep check on the sizes, is this good enough?
export default class UInt extends BN implements Codec<UInt> {
  private _bitLength: BitLength;
  private _isHexJson: boolean;

  constructor (value: AnyNumber = 0, bitLength: BitLength = 64, isHexJson: boolean = true) {
    super(
      UInt.decode(value).toNumber()
    );

    this._bitLength = bitLength;
    this._isHexJson = isHexJson;
  }

  static decode (value: AnyNumber): BN {
    if (value instanceof UInt) {
      return value;
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
    // FIXME this returns a new Object unfortunately, can't "replace" current value
    // Two solutions:
    // - either use static
    // - or completely remove from*, and force constructor
    return new UInt(input);
  }

  fromU8a (input: Uint8Array): UInt {
    // FIXME as above
    return new UInt(u8aToBn(input.subarray(0, this.byteLength()), true));
  }

  toHex (): string {
    return bnToHex(this, this._bitLength);
  }

  toJSON (): any {
    return this._isHexJson
      ? this.toHex()
      : this.toNumber();
  }

  toU8a (isBare?: boolean): Uint8Array {
    return bnToU8a(this, this._bitLength, true);
  }
}
