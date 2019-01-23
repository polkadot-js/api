// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isU8a, isNumber, isUndefined, u8aToHex } from '@polkadot/util';

import Base from './Base';
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
export default class Set extends Base<Array<string>> implements Codec {
  private _setValues: SetValues;

  constructor (setValues: SetValues, value?: Array<string> | Uint8Array | number) {
    super(
      Set.decodeSet(setValues, value)
    );

    this._setValues = setValues;
  }

  static decodeSet (setValues: SetValues, value: Array<string> | Uint8Array | number = 0): Array<string> {
    if (isU8a(value)) {
      return Set.decodeSet(setValues, value[0]);
    } else if (Array.isArray(value)) {
      return value.reduce((result, value) => {
        if (isUndefined(setValues[value])) {
          console.error(`Ignoring invalid '${value}' passed to Set`);
        } else {
          result.push(value);
        }

        return result;
      }, [] as Array<string>);
    }

    const result = Object.keys(setValues).reduce((result, key) => {
      if ((value & setValues[key]) === setValues[key]) {
        result.push(key);
      }

      return result;
    }, [] as Array<string>);
    const computed = Set.encodeSet(setValues, result);

    if (value !== computed) {
      console.error(`Mismatch decoding '${value}', computed as '${computed}' with ${result}`);
    }

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
    return this.values.length === 0;
  }

  /**
   * @description The actual set values as a Array<string>
   */
  get values (): Array<string> {
    return this.raw;
  }

  /**
   * @description The encoded value for the set members
   */
  get valueEncoded (): number {
    return Set.encodeSet(this._setValues, this.raw);
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  eq (other?: any): boolean {
    if (Array.isArray(other)) {
      // we don't actually care about the order, sort the values
      return compareArray(this.values.sort(), other.sort());
    } else if (other instanceof Set) {
      return this.eq(other.values);
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
  toJSON (): any {
    return this.values;
  }

  /**
   * @description Returns the string representation of the value
   */
  toString (): string {
    return `[${this.values.join(', ')}]`;
  }

  /**
   * @description Encodes the value as a Uint8Array as per the parity-codec specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  toU8a (isBare?: boolean): Uint8Array {
    return new Uint8Array([this.valueEncoded]);
  }
}
