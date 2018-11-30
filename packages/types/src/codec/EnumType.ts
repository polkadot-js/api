// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { isNumber, isObject, isU8a, isUndefined, u8aConcat, u8aToHex } from '@polkadot/util';

import Base from './Base';
import Null from '../Null';
import { Codec, Constructor } from '../types';

type TypesArray = Array<Constructor>;
type TypesDef = {
  [index: number]: Constructor
} | TypesArray;

/**
 * @name EnumType
 * @description
 * This implements an enum, that based on the value wraps a different type. It is effectively
 * an extension to enum where the value type is determined by the actual index.
 */
// TODO:
//   - As per Enum, actually use TS enum
//   - It should rather probably extend Enum instead of copying code
export default class EnumType<T> extends Base<Codec> implements Codec {
  private _Types: TypesArray;
  private _index: number;
  private _indexes: Array<number>;

  constructor (def: TypesDef, value?: any, index?: number | EnumType<T>) {
    const decoded = EnumType.decodeEnumType(def, value, index);

    super(
      decoded.value
    );

    this._Types = Array.isArray(def)
      ? def
      : Object.values(def);
    this._indexes = Object.keys(def).map((index) =>
      parseInt(index, 10)
    );

    this._index = this._indexes.indexOf(decoded.index) || 0;
  }

  static decodeEnumType<T> (def: TypesDef, value?: any, index?: number | EnumType<T>): { index: number, value: any } {
    // If `index` is set, we parse it.
    if (index instanceof EnumType) {
      return { index: index._index, value: new def[index._index](index.raw) };
    } else if (isNumber(index)) {
      return { index, value: new def[index](value) };
    }

    // Or else, we just look at `value`
    if (isU8a(value)) {
      return { index: value[0], value: new def[value[0]](value.subarray(1)) };
    } else if (isNumber(value) && !isUndefined(def[value])) {
      return { index: value, value: new def[value]() };
    } else if (isObject(value)) {
      // JSON comes in the form of { "<type (lowercased)>": "<value for type>" }, here we
      // additionally force to lower to ensure forward compat
      const key = Object.keys(value)[0];
      const lowerKey = key.toLowerCase();
      const index = Object
        .keys(def)
        .find((k) => def[+k].name.toLowerCase() === lowerKey);

      if (isUndefined(index)) {
        const message = 'Unable to reliably map input on JSON';

        console.error(message, value, def);

        throw new Error(message);
      }

      return { index: +index, value: new def[+index](value[key]) };
    }

    // Worst-case scenario, return this
    return { index: 0, value: new (Object.values(def)[0])() };
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  get encodedLength (): number {
    return 1 + this.raw.encodedLength;
  }

  /**
   * @description Checks if the Enum points to a [[Null]] type
   */
  get isNone (): boolean {
    return this.raw instanceof Null;
  }

  /**
   * @description Checks if the Enum points to a [[Null]] type (deprecated, use isNone)
   */
  get isNull (): boolean {
    return this.raw instanceof Null;
  }

  /**
   * @description The name of the type this enum value represents
   */
  get type (): string {
    return this._Types[this._index].name;
  }

  /**
   * @description The value of the enum
   */
  get value (): Codec {
    return this.raw;
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
    return this._index;
  }

  /**
   * @description Returns the string representation of the value
   */
  toString (): string {
    return this.type;
  }

  /**
   * @description Encodes the value as a Uint8Array as per the parity-codec specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  toU8a (isBare?: boolean): Uint8Array {
    const index = this._indexes[this._index];

    return u8aConcat(
      new Uint8Array([index]),
      this.raw.toU8a(isBare)
    );
  }
}
