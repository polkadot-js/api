// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber, Codec } from '../types';

import BN from 'bn.js';
import { bnToBn, bnToHex, bnToU8a, hexToBn, isHex, isString, isU8a, u8aToBn } from '@polkadot/util';

export type UIntBitLength = 8 | 16 | 32 | 64 | 128 | 256;

export const DEFAULT_UINT_BITS = 64;

/**
 * @name UInt
 * @description
 * A generic number codec. For Substrate all numbers are LE encoded, this handles the encoding
 * and decoding of those numbers. Upon construction the bitLength is provided and any additional
 * use keeps the number to this length.
 */
// TODO:
//   - Apart from encoding/decoding we don't actually keep check on the sizes, is this good enough?
export default class UInt extends BN implements Codec {
  protected _bitLength: UIntBitLength;
  private _isHexJson: boolean;

  constructor (value: AnyNumber = 0, bitLength: UIntBitLength = DEFAULT_UINT_BITS, isHexJson: boolean = true) {
    super(
      UInt.decodeUInt(value, bitLength)
    );

    this._bitLength = bitLength;
    this._isHexJson = isHexJson;
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

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  get encodedLength (): number {
    return this._bitLength / 8;
  }

  /**
   * @description Returns the number of bits in the value
   */
  bitLength (): UIntBitLength {
    return this._bitLength;
  }

  /**
   * @description Returns the BN representation of the number. (Compatibility)
   */
  toBn (): BN {
    return this;
  }

  /**
   * @description Returns a hex string representation of the value
   */
  toHex (): string {
    return bnToHex(this, this._bitLength);
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON (): any {
    return this._isHexJson
      ? this.toHex()
      : this.toNumber();
  }

  /**
   * @description Encodes the value as a Uint8Array as per the parity-codec specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  toU8a (isBare?: boolean): Uint8Array {
    return bnToU8a(this, this._bitLength, true);
  }
}
