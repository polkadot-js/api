// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyU8a, Constructor, Registry } from '../types';
import type { U8aBitLength } from './types';

import { assert, isU8a, u8aToU8a } from '@polkadot/util';

import { Raw } from './Raw';

/** @internal */
function decodeU8aFixed (value: AnyU8a, bitLength: U8aBitLength): [AnyU8a, number] {
  if (isU8a(value)) {
    const byteLength = bitLength / 8;

    if (!value || !value.length) {
      return [new Uint8Array(byteLength), 0];
    }

    assert(value.length >= byteLength, () => `Expected at least ${byteLength} bytes (${bitLength} bits), found ${value.length} bytes`);

    return [value.subarray(0, byteLength), byteLength];
  }

  return decodeU8aFixed(u8aToU8a(value), bitLength);
}

/**
 * @name U8aFixed
 * @description
 * A U8a that manages a a sequence of bytes up to the specified bitLength. Not meant
 * to be used directly, rather is should be subclassed with the specific lengths.
 */
export class U8aFixed extends Raw {
  constructor (registry: Registry, value: AnyU8a = new Uint8Array(), bitLength: U8aBitLength = 256) {
    const [u8a, decodedLength] = decodeU8aFixed(value, bitLength);

    super(registry, u8a, decodedLength);
  }

  public static with (bitLength: U8aBitLength, typeName?: string): Constructor<U8aFixed> {
    return class extends U8aFixed {
      constructor (registry: Registry, value?: AnyU8a) {
        super(registry, value, bitLength);
      }

      public override toRawType (): string {
        return typeName || super.toRawType();
      }
    };
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public override toRawType (): string {
    return `[u8;${this.length}]`;
  }
}
