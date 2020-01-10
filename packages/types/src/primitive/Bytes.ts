// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyU8a, Registry } from '../types';

import { assert, isString, isU8a, u8aToU8a } from '@polkadot/util';

import Compact from '../codec/Compact';
import Raw from '../codec/Raw';

/**
 * @name Bytes
 * @description
 * A Bytes wrapper for Vec<u8>. The significant difference between this and a normal Uint8Array
 * is that this version allows for length-encoding. (i.e. it is a variable-item codec, the same
 * as what is found in [[Text]] and [[Vec]])
 */
export default class Bytes extends Raw {
  constructor (registry: Registry, value?: AnyU8a) {
    super(registry, Bytes.decodeBytes(value));
  }

  private static decodeBytes (value?: AnyU8a): Uint8Array | undefined {
    if (Array.isArray(value) || isString(value)) {
      return u8aToU8a(value);
    } else if (!(value instanceof Raw) && isU8a(value)) {
      // We are ensuring we are not a Rawv instance. In the case of a Raw we already have gotten
      // rid of the length, i.e. new Bytes(new Bytes(...)) will work as expected
      return Bytes.decodeBytesU8a(value);
    }

    return value;
  }

  private static decodeBytesU8a (value: Uint8Array): Uint8Array {
    if (!value.length) {
      return new Uint8Array();
    }

    // handle all other Uint8Array inputs, these do have a length prefix
    const [offset, length] = Compact.decodeU8a(value);
    const total = offset + length.toNumber();

    assert(total <= value.length, `Bytes: required length less than remainder, expected at least ${total}, found ${value.length}`);

    return value.subarray(offset, total);
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public get encodedLength (): number {
    return this.length + Compact.encodeU8a(this.length).length;
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return 'Bytes';
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  public toU8a (isBare?: boolean): Uint8Array {
    return isBare
      ? super.toU8a(isBare)
      : Compact.addLengthPrefix(this);
  }
}
