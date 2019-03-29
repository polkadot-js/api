// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Codec, Constructor, ConstructorDef } from '../types';

import { assert, hexToU8a, isHex, isNumber, isObject, isString, isU8a, u8aConcat, u8aToHex } from '@polkadot/util';

import Null from '../primitive/Null';
import Base from './Base';

type EnumConstructor<T = Codec> = { new(value?: any, index?: number): T };

type TypesDef = {
  [name: string]: Constructor
};

type Decoded = {
  index: number,
  value: Codec
};

type Aliasses = {
  [index: string]: string
};

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
  private _def: TypesDef;
  private _index: number;
  private _indexes: Array<number>;

  constructor (def: TypesDef, value?: any, index?: number | EnumType<T>, aliasses?: Aliasses) {
    const decoded = EnumType.decodeEnumType(def, aliasses || {}, value, index);

    super(decoded.value);

    this._def = def;
    this._indexes = Object.keys(def).map((_, index) => index);
    this._index = this._indexes.indexOf(decoded.index) || 0;
  }

  private static decodeEnumType<T> (def: TypesDef, aliasses: Aliasses, value?: any, index?: number | EnumType<T>): Decoded {
    // If `index` is set, we parse it.
    if (index instanceof EnumType) {
      return EnumType.createValue(def, index._index, index.raw);
    } else if (isNumber(index)) {
      return EnumType.createValue(def, index, value);
    }

    // Or else, we just look at `value`
    return EnumType.decodeViaValue(def, aliasses, value);
  }

  private static decodeViaValue (def: TypesDef, aliasses: Aliasses, value?: any): Decoded {
    if (value instanceof EnumType) {
      return EnumType.createValue(def, value._index, value.raw);
    } else if (isU8a(value)) {
      return EnumType.createValue(def, value[0], value.subarray(1));
    } else if (isNumber(value)) {
      return EnumType.createValue(def, value);
    } else if (isString(value)) {
      const _str = value.toString();

      return isHex(_str)
        ? EnumType.decodeViaValue(def, aliasses, hexToU8a(_str))
        : EnumType.createViaJSON(def, aliasses, _str);
    } else if (isObject(value)) {
      const key = Object.keys(value)[0];

      return EnumType.createViaJSON(def, aliasses, key, value[key]);
    }

    // Worst-case scenario, return the first with default
    return EnumType.createValue(def, 0);
  }

  private static createViaJSON (def: TypesDef, aliasses: Aliasses, key: string, value?: any) {
    // JSON comes in the form of { "<type (lowercased)>": "<value for type>" }, here we
    // additionally force to lower to ensure forward compat
    const keys = Object.keys(def).map((u) => u.toLowerCase());
    const index = keys
      .map((k) => {
        const a = Object
          .keys(aliasses)
          .find((a) => aliasses[a].toLowerCase() === k);

        return a
          ? a.toLowerCase()
          : k;
      })
      .indexOf(key.toLowerCase());

    assert(index !== -1, `Unable to reliably map input on JSON, cannot find '${key}' in ${keys.join(', ')}`);

    return EnumType.createValue(def, index, value);
  }

  private static createValue (def: TypesDef, index: number = 0, value?: any): Decoded {
    return {
      index,
      value: new (Object.values(def)[index])(value)
    };
  }

  static with<
    S extends ConstructorDef
  > (Types: S): EnumConstructor<EnumType<S>> {
    return class extends EnumType<S> {
      constructor (value?: any, index?: number) {
        super(Types, value, index);
      }
    };
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  get encodedLength (): number {
    return 1 + this.raw.encodedLength;
  }

  /**
   * @description The index of the metadata value
   */
  get index (): number {
    return this._index;
  }

  /**
   * @description Checks if the value is an empty value
   */
  get isEmpty (): boolean {
    return this.isEmpty;
  }

  /**
   * @description Checks if the Enum points to a [[Null]] type
   */
  get isNone (): boolean {
    return this.isNull;
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
    return Object.keys(this._def)[this._index];
  }

  /**
   * @description The value of the enum
   */
  get value (): Codec {
    return this.raw;
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  eq (other?: any): boolean {
    // cater for the case where we only pass the enum index
    if (isNumber(other)) {
      return this.toNumber() === other;
    }

    // compare the actual wrapper value
    return this.value.eq(other);
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
    return {
      [this.type]: this.raw.toJSON()
    };
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
    return this.isNull
      ? this.type
      : JSON.stringify(this.toJSON());
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
