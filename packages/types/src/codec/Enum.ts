// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyJson, Codec, Constructor, InterfaceTypes, Registry } from '../types';

import { assert, hexToU8a, isHex, isNumber, isObject, isString, isU8a, isUndefined, stringCamelCase, stringUpperFirst, u8aConcat, u8aToHex } from '@polkadot/util';

import Null from '../primitive/Null';
import { mapToTypeMap } from './utils';
import Base from './Base';
import Struct from './Struct';

// export interface, this is used in Enum.with, so required as public by TS
export interface EnumConstructor<T = Codec> {
  new(registry: Registry, value?: any, index?: number): T;
}

type TypesDef = Record<string, Constructor>;

interface Decoded {
  index: number;
  value: Codec;
}

function extractDef (registry: Registry, _def: Record<string, keyof InterfaceTypes | Constructor> | string[]): { def: TypesDef; isBasic: boolean } {
  if (!Array.isArray(_def)) {
    const def = mapToTypeMap(registry, _def);
    const isBasic = !Object.values(def).some((type): boolean => type !== Null);

    return {
      def,
      isBasic
    };
  }

  return {
    def: _def.reduce((def, key): TypesDef => {
      def[key] = Null;

      return def;
    }, {} as TypesDef),
    isBasic: true
  };
}

function createFromValue (registry: Registry, def: TypesDef, index = 0, value?: any): Decoded {
  const Clazz = Object.values(def)[index];

  assert(!isUndefined(Clazz), `Unable to create Enum via index ${index}, in ${Object.keys(def).join(', ')}`);

  return {
    index,
    value: value instanceof Clazz ? value : new Clazz(registry, value)
  };
}

function decodeFromJSON (registry: Registry, def: TypesDef, key: string, value?: any): Decoded {
  // JSON comes in the form of { "<type (lowercased)>": "<value for type>" }, here we
  // additionally force to lower to ensure forward compat
  const keys = Object.keys(def).map((k): string => k.toLowerCase());
  const keyLower = key.toLowerCase();
  const index = keys.indexOf(keyLower);

  assert(index !== -1, `Cannot map Enum JSON, unable to find '${key}' in ${keys.join(', ')}`);

  return createFromValue(registry, def, index, value);
}

function decodeFromString (registry: Registry, def: TypesDef, value: string): Decoded {
  return isHex(value)
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    ? decodeFromValue(registry, def, hexToU8a(value))
    : decodeFromJSON(registry, def, value);
}

function decodeFromValue (registry: Registry, def: TypesDef, value?: any): Decoded {
  if (isU8a(value)) {
    return createFromValue(registry, def, value[0], value.subarray(1));
  } else if (isNumber(value)) {
    return createFromValue(registry, def, value);
  } else if (isString(value)) {
    return decodeFromString(registry, def, value.toString());
  } else if (isObject(value)) {
    const key = Object.keys(value)[0];

    return decodeFromJSON(registry, def, key, value[key]);
  }

  // Worst-case scenario, return the first with default
  return createFromValue(registry, def, 0);
}

function decodeEnum (registry: Registry, def: TypesDef, value?: any, index?: number): Decoded {
  // NOTE We check the index path first, before looking at values - this allows treating
  // the optional indexes before anything else, more-specific > less-specific
  if (isNumber(index)) {
    return createFromValue(registry, def, index, value);
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  } else if (value instanceof Enum) {
    return createFromValue(registry, def, value.index, value.value);
  }

  // Or else, we just look at `value`
  return decodeFromValue(registry, def, value);
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

  constructor (registry: Registry, def: Record<string, keyof InterfaceTypes | Constructor> | string[], value?: any, index?: number) {
    const defInfo = extractDef(registry, def);
    const decoded = decodeEnum(registry, defInfo.def, value, index);

    super(registry, decoded.value);

    this._def = defInfo.def;
    this._isBasic = defInfo.isBasic;
    this._indexes = Object.keys(defInfo.def).map((_, index): number => index);
    this._index = this._indexes.indexOf(decoded.index) || 0;
  }

  public static with (Types: Record<string, keyof InterfaceTypes | Constructor> | string[]): EnumConstructor<Enum> {
    return class extends Enum {
      constructor (registry: Registry, value?: any, index?: number) {
        super(registry, Types, value, index);

        Object.keys(this._def).forEach((_key): void => {
          const name = stringUpperFirst(stringCamelCase(_key.replace(' ', '_')));
          const askey = `as${name}`;
          const iskey = `is${name}`;

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
                assert((this as any)[iskey], `Cannot convert '${this.type}' via ${askey}`);

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
    return 1 + this._raw.encodedLength;
  }

  /**
   * @description The index of the metadata value
   */
  public get index (): number {
    return this._index;
  }

  /**
   * @description true if this is a basic enum (no values)
   */
  public get isBasic (): boolean {
    return this._isBasic;
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
    return this._raw instanceof Null;
  }

  /**
   * @description The available keys for this enum
   */
  public get defEntries (): string[] {
    return Object.keys(this._def);
  }

  /**
   * @description The available keys for this enum
   */
  public get defKeys (): string[] {
    return Object.keys(this._def);
  }

  /**
   * @description The name of the type this enum value represents
   */
  public get type (): string {
    return this.defKeys[this._index];
  }

  /**
   * @description The value of the enum
   */
  public get value (): Codec {
    return this._raw;
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
    } else if (isU8a(other)) {
      return !this.toU8a().some((entry, index): boolean => entry !== other[index]);
    } else if (isHex(other)) {
      return this.toHex() === other;
    } else if (other instanceof Enum) {
      return this.index === other.index && this.value.eq(other.value);
    } else if (isObject(other)) {
      return this.value.eq(other[this.type]);
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
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public toHuman (isExtended?: boolean): AnyJson {
    return this._isBasic
      ? this.type
      : { [this.type]: this._raw.toHuman(isExtended) };
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public toJSON (): AnyJson {
    return this._isBasic
      ? this.type
      : { [this.type]: this._raw.toJSON() };
  }

  /**
   * @description Returns the number representation for the value
   */
  public toNumber (): number {
    return this._index;
  }

  /**
   * @description Returns a raw struct representation of the enum types
   */
  protected _toRawStruct (): string[] | Record<string, string> {
    return this._isBasic
      ? this.defKeys
      : Struct.typesToMap(this.registry, this._def);
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return JSON.stringify({ _enum: this._toRawStruct() });
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
      this._raw.toU8a(isBare)
    );
  }
}
