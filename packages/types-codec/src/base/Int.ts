// Copyright 2017-2021 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyNumber, CodecClass, CodecRegistry, UIntBitLength } from '../types';

import { AbstractInt } from '../abstract/AbstractInt';

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
export class Int extends AbstractInt {
  constructor (registry: CodecRegistry, value: AnyNumber = 0, bitLength?: UIntBitLength) {
    super(registry, value, bitLength, true);
  }

  public static with (bitLength: UIntBitLength, typeName?: string): CodecClass<Int> {
    return class extends Int {
      constructor (registry: CodecRegistry, value?: AnyNumber) {
        super(registry, value, bitLength);
      }

      public override toRawType (): string {
        return typeName || super.toRawType();
      }
    };
  }
}
