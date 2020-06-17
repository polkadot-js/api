// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber, Constructor, Registry } from '../types';

import AbstractInt, { DEFAULT_UINT_BITS, UIntBitLength } from './AbstractInt';

/**
 * @name UInt
 * @description
 * A generic unsigned integer codec. For Substrate all numbers are Little Endian encoded,
 * this handles the encoding and decoding of those numbers. Upon construction
 * the bitLength is provided and any additional use keeps the number to this
 * length. This extends `BN`, so all methods available on a normal `BN` object
 * is available here.
 * @noInheritDoc
 */
export default class UInt extends AbstractInt {
  constructor (registry: Registry, value: AnyNumber = 0, bitLength: UIntBitLength = DEFAULT_UINT_BITS, isHexJson = false) {
    super(registry, false, value, bitLength, isHexJson);
  }

  public static with (bitLength: UIntBitLength, typeName?: string): Constructor<UInt> {
    return class extends UInt {
      constructor (registry: Registry, value?: AnyNumber) {
        super(registry, value, bitLength);
      }

      public toRawType (): string {
        return typeName || super.toRawType();
      }
    };
  }
}
