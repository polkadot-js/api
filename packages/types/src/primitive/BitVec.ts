// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { AnyU8a, Registry } from '../types';

import { assert, isString, u8aConcat, u8aToU8a } from '@polkadot/util';

import Compact from '../codec/Compact';
import Raw from '../codec/Raw';

/** @internal */
function decodeBitVecU8a (value?: Uint8Array): Uint8Array {
  if (!value || !value.length) {
    return new Uint8Array();
  }

  // handle all other Uint8Array inputs, these do have a length prefix which is the number of bits encoded
  const [offset, length] = Compact.decodeU8a(value);
  const total = offset + Math.ceil(length.toNumber() / 8);

  assert(total <= value.length, `BitVec: required length less than remainder, expected at least ${total}, found ${value.length}`);

  return value.subarray(offset, total);
}

/** @internal */
function decodeBitVec (value?: AnyU8a): Uint8Array | undefined {
  if (Array.isArray(value) || isString(value)) {
    return u8aToU8a(value);
  }

  return decodeBitVecU8a(value);
}

/**
 * @name BitVec
 * @description
 * A BitVec that represents an array of bits. The bits are however stored encoded. The difference between this
 * and a normal Bytes would be that the length prefix indicates the number of bits encoded, not the bytes
 */
export default class BitVec extends Raw {
  constructor (registry: Registry, value?: AnyU8a) {
    super(registry, decodeBitVec(value));
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public get encodedLength (): number {
    return this.length + Compact.encodeU8a(this.bitLength()).length;
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return 'BitVec';
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  public toU8a (isBare?: boolean): Uint8Array {
    const bitVec = super.toU8a();

    return isBare
      ? bitVec
      : u8aConcat(Compact.encodeU8a(this.bitLength()), bitVec);
  }
}
