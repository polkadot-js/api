// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyU8a, Constructor, Registry } from '../types';
import type { U8aBitLength } from './types';

import { isString, u8aToU8a } from '@polkadot/util';

import { Raw } from './Raw';

/** @internal */
function decodeU8aFixed (value: AnyU8a, bitLength: U8aBitLength): AnyU8a {
  if (Array.isArray(value) || isString(value)) {
    return decodeU8aFixed(u8aToU8a(value), bitLength);
  }

  // ensure that we have an actual u8a with the full length as specified by
  // the bitLength input (padded with zeros as required)
  const byteLength = bitLength / 8;
  const sub = value.subarray(0, byteLength);

  if (sub.length === byteLength) {
    return sub;
  }

  const u8a = new Uint8Array(byteLength);

  u8a.set(sub, 0);

  return u8a;
}

/**
 * @name U8aFixed
 * @description
 * A U8a that manages a a sequence of bytes up to the specified bitLength. Not meant
 * to be used directly, rather is should be subclassed with the specific lengths.
 */
export class U8aFixed extends Raw {
  constructor (registry: Registry, value: AnyU8a = new Uint8Array(), bitLength: U8aBitLength = 256) {
    super(registry, decodeU8aFixed(value, bitLength));
  }

  public static with (bitLength: U8aBitLength, typeName?: string): Constructor<U8aFixed> {
    return class extends U8aFixed {
      constructor (registry: Registry, value?: AnyU8a) {
        super(registry, value, bitLength);
      }

      public toRawType (): string {
        return typeName || super.toRawType();
      }
    };
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return `[u8;${this.length}]`;
  }
}
