// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { assert, isU8a, isNumber, isUndefined, u8aToHex } from '@polkadot/util';

import { Codec } from '../types';
import { compareArray } from './utils';

type SetValues = {
  [index: string]: number
};

/**
 * @name Set
 * @description
 * An Set is an array of string values, represented an an encoded type by
 * a bitwise representation of the values.
 */
// FIXME This is a prime candidate to extend the JavaScript built-in Set
export default class CodecSet extends Set<string> implements Codec {
  private _setValues: SetValues;

  constructor (setValues: SetValues, value?: Array<string> | Set<string> | Uint8Array | number) {
    super(
      CodecSet.decodeSet(setValues, value)
    );

    this._setValues = setValues;
  }

  static decodeSet (setValues: SetValues, value: Array<string> | Set<string> | Uint8Array | number = 0): Array<string> {
    if (isU8a(value)) {
      return value.length === 0
        ? []
        : CodecSet.decodeSet(setValues, value[0]);
    } else if (value instanceof Set) {
      return CodecSet.decodeSet(setValues, [...value.values()]);
    } else if (Array.isArray(value)) {
      return value.reduce((result, key) => {
        assert(!isUndefined(setValues[key]), `Set: Invalid key '${key}' passed to Set, allowed ${Object.keys(setValues).join(', ')}`);

        result.push(key);

        return result;
      }, [] as Array<string>);
    }

    const result = Object.keys(setValues).reduce((result, key) => {
      if ((value & setValues[key]) === setValues[key]) {
        result.push(key);
      }

      return result;
    }, [] as Array<string>);

    const computed = CodecSet.encodeSet(setValues, result);

    assert(value === computed, `Set: Mismatch decoding '${value}', computed as '${computed}' with ${result}`);

    return result;
  }

  static encodeSet (setValues: SetValues, value: Array<string>): number {
    return value.reduce((result, value) => {
      return result | (setValues[value] || 0);
    }, 0);
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  get encodedLength (): number {
    return 1;
  }

  /**
   * @description true is the Set contains no values
   */
  get isEmpty (): boolean {
    return this.size === 0;
  }

  /**
   * @description The actual set values as a Array<string>
   */
  get strings (): Array<string> {
    return [...super.values()];
  }

  /**
   * @description The encoded value for the set members
   */
  get valueEncoded (): number {
    return CodecSet.encodeSet(this._setValues, this.strings);
  }

  /**
   * @description adds a value to the Set (extended to allow for validity checking)
   */
  add (key: string): this {
    // we have the isUndefined(this._setValues) in here as well, add is used internally
    // in the Set constructor (so it is undefined at this point, and should allow)
    assert(isUndefined(this._setValues) || !isUndefined(this._setValues[key]), `Set: Invalid key '${key}' on add`);

    super.add(key);

    return this;
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  eq (other?: any): boolean {
    if (Array.isArray(other)) {
      // we don't actually care about the order, sort the values
      return compareArray(this.strings.sort(), other.sort());
    } else if (other instanceof Set) {
      return this.eq([...other.values()]);
    } else if (isNumber(other)) {
      return this.valueEncoded === other;
    }

    return false;
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
  toJSON (): string[] {
    return this.strings;
  }

  /**
   * @description The encoded value for the set members
   */
  toNumber (): number {
    return this.valueEncoded;
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType (): string {
    // FIXME We don't cater for this in createType as of yet
    return JSON.stringify({ _set: this._setValues });
  }

  /**
   * @description Returns the string representation of the value
   */
  toString (): string {
    return `[${this.strings.join(', ')}]`;
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  toU8a (isBare?: boolean): Uint8Array {
    return new Uint8Array([this.valueEncoded]);
  }
}
