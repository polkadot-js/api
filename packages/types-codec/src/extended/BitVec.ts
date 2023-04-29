// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyU8a, Inspect, Registry } from '../types/index.js';

import { compactFromU8aLim, compactToU8a, isString, u8aConcatStrict, u8aToU8a } from '@polkadot/util';

import { Raw } from '../native/Raw.js';

/** @internal */
function decodeBitVecU8a (value?: Uint8Array): [number, Uint8Array] {
  if (!value || !value.length) {
    return [0, new Uint8Array()];
  }

  // handle all other Uint8Array inputs, these do have a length prefix which is the number of bits encoded
  const [offset, length] = compactFromU8aLim(value);
  const total = offset + Math.ceil(length / 8);

  if (total > value.length) {
    throw new Error(`BitVec: required length less than remainder, expected at least ${total}, found ${value.length}`);
  }

  return [length, value.subarray(offset, total)];
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
  readonly #isMsb?: boolean;

  // In lieu of having the Msb/Lsb identifiers passed through, we default to assuming
  // we are dealing with Lsb, which is the default (as of writing) BitVec format used
  // in the Polkadot code (this only affects the toHuman displays)
  constructor (registry: Registry, value?: AnyU8a, isMsb = false) {
    const [decodedLength, u8a] = decodeBitVec(value);

    super(registry, u8a);

    this.#decodedLength = decodedLength;
    this.#isMsb = isMsb;
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public override get encodedLength (): number {
    return this.length + compactToU8a(this.#decodedLength).length;
  }

  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  public override inspect (): Inspect {
    return {
      outer: [compactToU8a(this.#decodedLength), super.toU8a()]
    };
  }

  /**
   * @description Creates a boolean array of the bit values
   */
  public toBoolArray (): boolean[] {
    const map = [...this.toU8a(true)].map((v) => [
      !!(v & 0b1000_0000),
      !!(v & 0b0100_0000),
      !!(v & 0b0010_0000),
      !!(v & 0b0001_0000),
      !!(v & 0b0000_1000),
      !!(v & 0b0000_0100),
      !!(v & 0b0000_0010),
      !!(v & 0b0000_0001)
    ]);
    const count = map.length;
    const result = new Array<boolean>(8 * count);

    for (let i = 0; i < count; i++) {
      const off = i * 8;
      const v = map[i];

      for (let j = 0; j < 8; j++) {
        result[off + j] = this.#isMsb
          ? v[j]
          : v[7 - j];
      }
    }

    return result;
  }

  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public override toHuman (): string {
    return `0b${
      [...this.toU8a(true)]
        .map((d) => `00000000${d.toString(2)}`.slice(-8))
        .map((s) => this.#isMsb ? s : s.split('').reverse().join(''))
        .join('_')
    }`;
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
    const bitVec = super.toU8a(isBare);

    return isBare
      ? bitVec
      : u8aConcatStrict([compactToU8a(this.#decodedLength), bitVec]);
  }
}
