// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { AnyU8a, Constructor, Registry } from '../types';

import { isString, u8aToU8a } from '@polkadot/util';

import Raw from './Raw';

// The 520 here is a weird one - it is explicitly for a [u8; 65] as found as a EcdsaSignature,
// and 264 here is explicity for a [u8; 33] as found as EcdsaPublic key.
// Likewise 160 is for [u8; 20], which is also a H160, i.e. an Ethereum address. Both these are
// as a result of the Polkadot claims module. (Technically we don't need the 520 in here)
export type BitLength = 8 | 16 | 32 | 64 | 128 | 160 | 256 | 264 | 512 | 520 | 1024 | 2048;

/** @internal */
function decodeU8aFixed (value: AnyU8a, bitLength: BitLength): AnyU8a {
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
export default class U8aFixed extends Raw {
  constructor (registry: Registry, value: AnyU8a = new Uint8Array(), bitLength: BitLength = 256) {
    super(registry, decodeU8aFixed(value, bitLength));
  }

  public static with (bitLength: BitLength, typeName?: string): Constructor<U8aFixed> {
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
