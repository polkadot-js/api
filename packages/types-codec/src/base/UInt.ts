// Copyright 2017-2021 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyNumber, CodecClass, CodecRegistry, UIntBitLength } from '../types';

import { AbstractInt } from '../abstract/AbstractInt';

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
export class UInt extends AbstractInt {
  public static with (bitLength: UIntBitLength, typeName?: string): CodecClass<UInt> {
    return class extends UInt {
      constructor (registry: CodecRegistry, value?: AnyNumber) {
        super(registry, value, bitLength);
      }

      public override toRawType (): string {
        return typeName || super.toRawType();
      }
    };
  }
}
