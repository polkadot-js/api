// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyNumber, Constructor, Registry } from '../types';
import type { UIntBitLength } from './types';

import { AbstractInt } from './AbstractInt';

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
