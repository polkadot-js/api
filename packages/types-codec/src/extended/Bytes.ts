// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyU8a, Inspect, Registry } from '../types';

import { compactAddLength, compactFromU8aLim, compactToU8a, isString, isU8a, u8aToU8a } from '@polkadot/util';

import { Raw } from '../native/Raw';

// Bytes are used for things like on-chain code, so it has a healthy limit
const MAX_LENGTH = 10 * 1024 * 1024;

/** @internal */
function decodeBytesU8a (value: Uint8Array): [Uint8Array, number] {
  if (!value.length) {
    return [new Uint8Array(), 0];
  }

  // handle all other Uint8Array inputs, these do have a length prefix
  const [offset, length] = compactFromU8aLim(value);
  const total = offset + length;

  if (length > MAX_LENGTH) {
    throw new Error(`Bytes length ${length.toString()} exceeds ${MAX_LENGTH}`);
  } else if (total > value.length) {
    throw new Error(`Bytes: required length less than remainder, expected at least ${total}, found ${value.length}`);
  }

  return [value.subarray(offset, total), total];
}

/**
 * @name Bytes
 * @description
 * A Bytes wrapper for Vec<u8>. The significant difference between this and a normal Uint8Array
 * is that this version allows for length-encoding. (i.e. it is a variable-item codec, the same
 * as what is found in [[Text]] and [[Vec]])
 */
export class Bytes extends Raw {
  constructor (registry: Registry, value?: AnyU8a) {
    const [u8a, decodedLength] = isU8a(value) && !(value instanceof Raw)
      ? decodeBytesU8a(value)
      : Array.isArray(value) || isString(value)
        ? [u8aToU8a(value), 0]
        : [value, 0];

    super(registry, u8a, decodedLength);
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public override get $encodedLength (): number {
    return this.length + compactToU8a(this.length).length;
  }

  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  public override inspectU8a (isBare?: boolean): Inspect {
    const clength = compactToU8a(this.length);

    return {
      outer: isBare
        ? [super.toU8a()]
        : this.length
          ? [clength, super.toU8a()]
          : [clength]
    };
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public override toRawType (): string {
    return 'Bytes';
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  public override toU8a (isBare?: boolean): Uint8Array {
    return isBare
      ? super.toU8a(isBare)
      : compactAddLength(this);
  }
}
