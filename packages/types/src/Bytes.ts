// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { hexToU8a, isHex, isString, isU8a, u8aToU8a } from '@polkadot/util';

import { AnyU8a } from './types';
import Compact from './codec/Compact';
import U8a from './codec/U8a';

/**
 * @name Bytes
 * @description
 * A Bytes wrapper for Vec<u8>. The significant difference between this and a normal Uint8Array
 * is that this version allows for length-encoding. (i.e. it is a variable-item codec, the same
 * as what is found in [[Text]] and [[Vector]])
 */
export default class Bytes extends U8a {
  constructor (value: AnyU8a) {
    super(Bytes.decodeBytes(value));
  }

  private static decodeBytes (value: AnyU8a): Uint8Array {
    // FIXME Cyclic dependency, however needed for the StoreageData check below. In a perfect
    // world, we should probably be checking Bytes - however as a first step, check against
    // StorageData to cater for the _specific_ problematic case
    const StorageData = require('./StorageData').default;

    if (isHex(value)) {
      // FIXME We manually add the length prefix for hex for now
      // https://github.com/paritytech/substrate/issues/889
      const u8a = hexToU8a(value);

      return Bytes.decodeBytes(
        Compact.addLengthPrefix(u8a)
      );
    } else if (value instanceof StorageData) {
      // Here we cater for the actual StorageData that _could_ have a length prefix. In the
      // case of `:code` it is not added, for others it is
      const u8a = value as Uint8Array;
      const [offset, length] = Compact.decodeU8a(u8a);

      return u8a.length === length.addn(offset).toNumber()
        ? u8a.subarray(offset)
        : u8a;
    } else if (value instanceof U8a) {
      // This is required. In the case of a U8a we already have gotten rid of the length,
      // i.e. new Bytes(new Bytes(...)) will work as expected
      return value;
    } else if (isU8a(value)) {
      const [offset, length] = Compact.decodeU8a(value);

      return value.subarray(offset, offset + length.toNumber());
    } else if (Array.isArray(value) || isString(value)) {
      return Bytes.decodeBytes(u8aToU8a(value));
    }

    return value;
  }

  get encodedLength (): number {
    return this.length + Compact.encodeU8a(this.length).length;
  }

  toU8a (isBare?: boolean): Uint8Array {
    return isBare
      ? super.toU8a(isBare)
      : Compact.addLengthPrefix(this);
  }
}
