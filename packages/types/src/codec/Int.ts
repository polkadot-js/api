// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber } from '../types';

import { bnToHex, bnToU8a } from '@polkadot/util';

import AbstractInt, { DEFAULT_UINT_BITS, UIntBitLength } from './AbstractInt';

/**
 * @name Int
 * @description
 * A generic signed integer codec. For Substrate all numbers are Little Endian encoded,
 * this handles the encoding and decoding of those numbers. Upon construction
 * the bitLength is provided and any additional use keeps the number to this
 * length. This extends `BN`, so all methods available on a normal `BN` object
 * is available here.
 * @noInheritDoc
 */
export default class Int extends AbstractInt {
  constructor (
    value: AnyNumber = 0,
    bitLength: UIntBitLength = DEFAULT_UINT_BITS, isHexJson: boolean = true) {
    super(
      true,
      value,
      bitLength,
      isHexJson
    );
  }

  /**
   * @description Returns a hex string representation of the value
   */
  toHex (isLe: boolean = false): string {
    return bnToHex(this, {
      bitLength: this._bitLength,
      isLe,
      isNegative: true
    });
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType (): string {
    return `i${this._bitLength}`;
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  toU8a (isBare?: boolean): Uint8Array {
    return bnToU8a(this, {
      bitLength: this._bitLength,
      isLe: true,
      isNegative: true
    });
  }
}
