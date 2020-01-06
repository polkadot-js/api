// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isString, u8aToU8a } from '@polkadot/util';

import { AnyU8a, Constructor, Registry } from '../types';

import Raw from './Raw';

// The 520 here is a weird one - it is explicitly for a [u8; 65] as found as a EcdsaSignature
// Likewise 160 is for [u8; 20], which is also a H160, i.e. an Ethereum address. Both these are
// as a result of the Polkadot claims module. (Technically we don't need the 520 in here)
export type BitLength = 8 | 16 | 32 | 64 | 128 | 160 | 256 | 512 | 520 | 1024 | 2048;

/**
 * @name U8aFixed
 * @description
 * A U8a that manages a a sequence of bytes up to the specified bitLength. Not meant
 * to be used directly, rather is should be subclassed with the specific lengths.
 */
export default class U8aFixed extends Raw {
  constructor (registry: Registry, value: AnyU8a = new Uint8Array(), bitLength: BitLength = 256) {
    super(registry, U8aFixed.decodeU8aFixed(value, bitLength));
  }

  private static decodeU8aFixed (value: AnyU8a, bitLength: BitLength): AnyU8a {
    if (Array.isArray(value) || isString(value)) {
      return U8aFixed.decodeU8aFixed(u8aToU8a(value), bitLength);
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

  public static with (bitLength: BitLength): Constructor<U8aFixed> {
    return class extends U8aFixed {
      constructor (registry: Registry, value?: any) {
        super(registry, value, bitLength);
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
