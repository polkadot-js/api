// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber, Constructor, Registry } from '../types';

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
  constructor (registry: Registry, value: AnyNumber = 0, bitLength: UIntBitLength = DEFAULT_UINT_BITS, isHexJson = true) {
    super(registry, true, value, bitLength, isHexJson);
  }

  public static with (bitLength: UIntBitLength, typeName?: string): Constructor<Int> {
    return class extends Int {
      constructor (registry: Registry, value?: any) {
        super(registry, value, bitLength);
      }

      public toRawType (): string {
        return typeName || super.toRawType();
      }
    };
  }

  /**
   * @description Returns a hex string representation of the value
   */
  public toHex (isLe = false): string {
    return bnToHex(this, {
      bitLength: this._bitLength,
      isLe,
      isNegative: true
    });
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return `i${this._bitLength}`;
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public toU8a (isBare?: boolean): Uint8Array {
    return bnToU8a(this, {
      bitLength: this._bitLength,
      isLe: true,
      isNegative: true
    });
  }
}
