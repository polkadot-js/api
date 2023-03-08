// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyU8a, CodecClass, Registry, U8aBitLength } from '../types/index.js';

import { isU8a, u8aToU8a } from '@polkadot/util';

import { Raw } from '../native/Raw.js';

/** @internal */
function decodeU8aFixed (value: AnyU8a, bitLength: U8aBitLength): [AnyU8a, number] {
  const u8a = u8aToU8a(value);
  const byteLength = bitLength / 8;

  if (!u8a.length) {
    return [new Uint8Array(byteLength), 0];
  }

  if (isU8a(value) ? u8a.length < byteLength : u8a.length !== byteLength) {
    throw new Error(`Expected input with ${byteLength} bytes (${bitLength} bits), found ${u8a.length} bytes`);
  }

  return [u8a.subarray(0, byteLength), byteLength];
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

  public static with (bitLength: U8aBitLength, typeName?: string): CodecClass<U8aFixed> {
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
