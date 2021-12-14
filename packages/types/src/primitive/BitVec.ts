// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { CodecRegistry } from '@polkadot/types-codec/types';
import type { AnyU8a } from '../types';

import { assert, compactFromU8a, compactToU8a, isString, u8aConcat, u8aToU8a } from '@polkadot/util';

import { Raw } from '../codec';

/** @internal */
function decodeBitVecU8a (value?: Uint8Array): [number, Uint8Array] {
  if (!value || !value.length) {
    return [0, new Uint8Array()];
  }

  // handle all other Uint8Array inputs, these do have a length prefix which is the number of bits encoded
  const [offset, length] = compactFromU8a(value);
  const total = offset + Math.ceil(length.toNumber() / 8);

  assert(total <= value.length, () => `BitVec: required length less than remainder, expected at least ${total}, found ${value.length}`);

  return [length.toNumber(), value.subarray(offset, total)];
}

/** @internal */
function decodeBitVec (value?: AnyU8a): [number, Uint8Array] {
  if (Array.isArray(value) || isString(value)) {
    const u8a = u8aToU8a(value);

    return [u8a.length / 8, u8a];
  }

  return decodeBitVecU8a(value);
}

/**
 * @name BitVec
 * @description
 * A BitVec that represents an array of bits. The bits are however stored encoded. The difference between this
 * and a normal Bytes would be that the length prefix indicates the number of bits encoded, not the bytes
 */
export class BitVec extends Raw {
  readonly #decodedLength: number;

  constructor (registry: CodecRegistry, value?: AnyU8a) {
    const [decodedLength, u8a] = decodeBitVec(value);

    super(registry, u8a);

    this.#decodedLength = decodedLength;
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public override get encodedLength (): number {
    return this.length + compactToU8a(this.#decodedLength).length;
  }

  public override toHuman (): string {
    return `0b${[...this.toU8a(true)].map((d) => `00000000${d.toString(2)}`.slice(-8)).join('_')}`;
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public override toRawType (): string {
    return 'BitVec';
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  public override toU8a (isBare?: boolean): Uint8Array {
    const bitVec = super.toU8a();

    return isBare
      ? bitVec
      : u8aConcat(compactToU8a(this.#decodedLength), bitVec);
  }
}
