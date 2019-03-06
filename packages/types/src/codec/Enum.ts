// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isString, isU8a, u8aToHex, assert } from '@polkadot/util';

import { Codec } from '../types';
import Base from './Base';

type EnumMap = {
  [index: number]: string
};

type EnumDef = {
  [index: string]: number
} | Array<string>;

/**
 * @name Enum
 * @description
 * A codec wrapper for an enum. Enums are encoded as a single byte, where the byte
 * is a zero-indexed value. This class allows you to retrieve the value either
 * by `toNumber()` exposing the actual raw index, or `toString()` returning a
 * string representation (as provided as part of the constructor)
 */
// TODO:
//   - It would be great if this could actually wrap actual TS enums
export default class Enum extends Base<number> implements Codec {
  private _enum: EnumMap | Array<string>;

  constructor (def: EnumDef, value: Enum | Uint8Array | string | number = 0) {
    const decoded = Enum.decodeEnum(def, value);

    assert(decoded !== -1, `Unable to initialise Enum with value ${value}`);

    super(decoded);

    this._enum = Array.isArray(def)
      ? def
      : Object.keys(def).reduce((result, key) => {
        result[def[key]] = key;

        return result;
      }, {} as EnumMap);
  }

  static decodeEnum (def: EnumDef, value: Enum | Uint8Array | string | number): number | undefined {
    if (value instanceof Enum) {
      return value.raw;
    } else if (isU8a(value)) {
      return value[0];
    } else if (isString(value)) {
      return Array.isArray(def)
        ? def.indexOf(value)
        : def[value] || -1;
    }

    return value;
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  get encodedLength (): number {
    return 1;
  }

  /**
   * @description Returns the index for this value (equivalent to toNumber)
   */
  get index (): number {
    return this.raw;
  }

  /**
   * @description Checks if the value is an empty value (always false)
   */
  get isEmpty (): boolean {
    return false;
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  eq (other?: any): boolean {
    if (other instanceof Enum) {
      return this.raw === other.raw;
    }

    return isString(other)
      ? this.toString() === other
      : this.raw === other;
  }

  /**
   * @description Returns a hex string representation of the value
   */
  toHex (): string {
    return u8aToHex(this.toU8a());
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON (): any {
    return this.raw;
  }

  /**
   * @description Returns the number representation for the value
   */
  toNumber (): number {
    return this.raw;
  }

  /**
   * @description Returns the string representation of the value
   */
  toString (): string {
    return this._enum[this.raw] || `${this.raw}`;
  }

  /**
   * @description Encodes the value as a Uint8Array as per the parity-codec specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  toU8a (isBare?: boolean): Uint8Array {
    return new Uint8Array([this.raw]);
  }
}
