// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AnyNumber, Codec } from '../types';

import BN from 'bn.js';
import { bnToBn, bnToHex, bnToU8a, hexToBn, isHex, isString, isU8a, u8aToBn } from '@polkadot/util';

export type UIntBitLength = 8 | 16 | 32 | 64 | 128 | 256;

export const DEFAULT_UINT_BITS = 64;

// A generic number codec. For Substrate all numbers are LE encoded, this handles the encoding
// and decoding of those numbers. Upon construction the bitLength is provided and any additional
// use keeps the number to this length.
//
// TODO:
//   - Apart from encoding/decoding we don't actuall keep check on the sizes, is this good enough?
export default class UInt extends BN implements Codec {
  protected _bitLength: UIntBitLength;
  private _isHexJson: boolean;
  public _raw: BN; // FIXME Remove this once we convert all types out of Base

  constructor (value: AnyNumber = 0, bitLength: UIntBitLength = DEFAULT_UINT_BITS, isHexJson: boolean = true) {
    super(
      UInt.decodeUInt(value, bitLength)
    );

    this._bitLength = bitLength;
    this._isHexJson = isHexJson;
    this._raw = this;
  }

  static decodeUInt (value: AnyNumber, bitLength: UIntBitLength): string {
    // This function returns a string, which will be passed in the BN
    // constructor. It would be ideal to actually return a BN, but there's a
    // bug: https://github.com/indutny/bn.js/issues/206.
    if (isHex(value)) {
      return hexToBn(value).toString();
    } else if (isU8a(value)) {
      // NOTE When passing u8a in (typically from decoded data), it is always LE
      return u8aToBn(value.subarray(0, bitLength / 8), true).toString();
    } else if (isString(value)) {
      return new BN(value, 10).toString();
    }

    return bnToBn(value).toString();
  }

  bitLength (): UIntBitLength {
    return this._bitLength;
  }

  get encodedLength (): number {
    return this._bitLength / 8;
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

  toBn (): BN {
    return this;
  }
}
