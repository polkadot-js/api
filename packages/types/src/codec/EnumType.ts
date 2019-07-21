// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyJson, Codec, Constructor } from '../types';

import { assert, hexToU8a, isHex, isNumber, isObject, isString, isU8a, isUndefined, u8aConcat, u8aToHex } from '@polkadot/util';

import Null from '../primitive/Null';
import Base from './Base';

interface EnumConstructor<T = Codec> {
  new(value?: any, index?: number): T;
}

type TypesDef = Record<string, Constructor>;

interface Decoded {
  index: number;
  value: Codec;
}

/**
 * @name Enum
 * @description
 * This implements an enum, that based on the value wraps a different type. It is effectively
 * an extension to enum where the value type is determined by the actual index.
 */
// TODO:
//   - As per Enum, actually use TS enum
//   - It should rather probably extend Enum instead of copying code
export default class Enum extends Base<Codec> {
  private _def: TypesDef;

  private _index: number;

  private _indexes: number[];

  private _isBasic: boolean;

  public constructor (def: TypesDef | string[], value?: any, index?: number | Enum) {
    const defInfo = Enum.extractDef(def);
    const decoded = Enum.decodeEnum(defInfo.def, value, index);

    super(decoded.value);

    this._def = defInfo.def;
    this._isBasic = defInfo.isBasic;
    this._indexes = Object.keys(defInfo.def).map((_, index): number => index);
    this._index = this._indexes.indexOf(decoded.index) || 0;
  }

  private static extractDef (def: TypesDef | string[]): { def: TypesDef; isBasic: boolean } {
    if (!Array.isArray(def)) {
      return {
        def,
        isBasic: false
      };
    }

    return {
      def: def.reduce((def, key): TypesDef => {
        def[key] = Null;

        return def;
      }, {} as unknown as TypesDef),
      isBasic: true
    };
  }

  private static decodeEnum (def: TypesDef, value?: any, index?: number | Enum): Decoded {
    // If `index` is set, we parse it.
    if (index instanceof Enum) {
      return Enum.createValue(def, index._index, index.raw);
    } else if (isNumber(index)) {
      return Enum.createValue(def, index, value);
    }

    // Or else, we just look at `value`
    return Enum.decodeViaValue(def, value);
  }

  private static decodeViaValue (def: TypesDef, value?: any): Decoded {
    if (value instanceof Enum) {
      return Enum.createValue(def, value._index, value.raw);
    } else if (isU8a(value)) {
      return Enum.createValue(def, value[0], value.subarray(1));
    } else if (isNumber(value)) {
      return Enum.createValue(def, value);
    } else if (isString(value)) {
      const _str = value.toString();

      return isHex(_str)
        ? Enum.decodeViaValue(def, hexToU8a(_str))
        : Enum.createViaJSON(def, _str);
    } else if (isObject(value)) {
      const key = Object.keys(value)[0];

      return Enum.createViaJSON(def, key, value[key]);
    }

    // Worst-case scenario, return the first with default
    return Enum.createValue(def, 0);
  }

  private static createViaJSON (def: TypesDef, key: string, value?: any): Decoded {
    // JSON comes in the form of { "<type (lowercased)>": "<value for type>" }, here we
    // additionally force to lower to ensure forward compat
    const keys = Object.keys(def).map((k): string => k.toLowerCase());
    const keyLower = key.toLowerCase();
    const index = keys.indexOf(keyLower);

    assert(index !== -1, `Cannot map Enum JSON, unable to find '${key}' in ${keys.join(', ')}`);

    return Enum.createValue(def, index, value);
  }

  private static createValue (def: TypesDef, index: number = 0, value?: any): Decoded {
    const Clazz = Object.values(def)[index];

    assert(!isUndefined(Clazz), `Unable to create Enum via index ${index}, in ${Object.keys(def).join(', ')}`);

    return {
      index,
      value: new Clazz(value)
    };
  }

  public static with (Types: TypesDef | string[]): EnumConstructor<Enum> {
    return class extends Enum {
      public constructor (value?: any, index?: number) {
        super(Types, value, index);

        Object.keys(this._def).forEach((_key): void => {
          const askey = `as${_key}`;
          const iskey = `is${_key}`;

          // do not clobber existing properties on the object
          if (isUndefined((this as any)[iskey])) {
            Object.defineProperty(this, iskey, {
              enumerable: true,
              get: (): boolean => this.type === _key
            });
          }

          if (isUndefined((this as any)[askey])) {
            Object.defineProperty(this, askey, {
              enumerable: true,
              get: (): Codec => {
                assert((this as any)[iskey], `Cannot convert ${this.type} via ${askey}`);

                return this.value;
              }
            });
          }
        });
      }
    };
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public get encodedLength (): number {
    return 1 + this.raw.encodedLength;
  }

  /**
   * @description The index of the metadata value
   */
  public get index (): number {
    return this._index;
  }

  /**
   * @description Checks if the Enum points to a [[Null]] type
   */
  public get isNone (): boolean {
    return this.isNull;
  }

  /**
   * @description Checks if the Enum points to a [[Null]] type (deprecated, use isNone)
   */
  public get isNull (): boolean {
    return this.raw instanceof Null;
  }

  /**
   * @description The name of the type this enum value represents
   */
  public get type (): string {
    return Object.keys(this._def)[this._index];
  }

  /**
   * @description The value of the enum
   */
  public get value (): Codec {
    return this.raw;
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  public eq (other?: any): boolean {
    // cater for the case where we only pass the enum index
    if (isNumber(other)) {
      return this.toNumber() === other;
    } else if (this._isBasic && isString(other)) {
      return this.type === other;
    }

    // compare the actual wrapper value
    return this.value.eq(other);
  }

  /**
   * @description Returns a hex string representation of the value
   */
  public toHex (): string {
    return u8aToHex(this.toU8a());
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public toJSON (): AnyJson {
    return this._isBasic
      ? this._index
      : { [this.type]: this.raw.toJSON() };
  }

  /**
   * @description Returns the number representation for the value
   */
  public toNumber (): number {
    return this._index;
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    const _enum = this._isBasic
      ? Object.keys(this._def)
      : Object.entries(this._def).reduce((result, [key, Type]): Record<string, string> => {
        result[key] = new Type().toRawType();

        return result;
      }, {} as unknown as Record<string, string>);

    return JSON.stringify({ _enum });
  }

  /**
   * @description Returns the string representation of the value
   */
  public toString (): string {
    return this.isNull
      ? this.type
      : JSON.stringify(this.toJSON());
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  public toU8a (isBare?: boolean): Uint8Array {
    const index = this._indexes[this._index];

    return u8aConcat(
      new Uint8Array([index]),
      this.raw.toU8a(isBare)
    );
  }
}
