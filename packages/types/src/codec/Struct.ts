// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { hexToU8a, isHex, isObject, isU8a, isUndefined, u8aConcat, u8aToHex } from '@polkadot/util';

import { AnyJsonObject, Codec, Constructor, ConstructorDef } from '../types';
import { compareMap, decodeU8a } from './utils';

/**
 * @name Struct
 * @description
 * A Struct defines an Object with key-value pairs - where the values are Codec values. It removes
 * a lot of repetition from the actual coding, define a structure type, pass it the key/Codec
 * values in the constructor and it manages the decoding. It is important that the constructor
 * values matches 100% to the order in th Rust code, i.e. don't go crazy and make it alphabetical,
 * it needs to decoded in the specific defined order.
 * @noInheritDoc
 */
export default class Struct<
  // The actual Class structure, i.e. key -> Class
  S extends ConstructorDef = ConstructorDef,
  // internal type, instance of classes mapped by key
  T extends { [K in keyof S]: Codec } = { [K in keyof S]: Codec },
  // input values, mapped by key can be anything (construction)
  V extends { [K in keyof S]: any } = { [K in keyof S]: any },
  // type names, mapped by key, name of Class in S
  E extends { [K in keyof S]: string } = { [K in keyof S]: string }
  > extends Map<keyof S, Codec> implements Codec {
  protected _jsonMap: Map<keyof S, string>;
  protected _Types: S;

  constructor (Types: S, value: V | Map<any, any> | Array<any> = {} as V, jsonMap: Map<keyof S, string> = new Map()) {
    const decoded = Struct.decodeStruct<S, V, T>(Types, value, jsonMap);

    super(
      Object.entries(decoded)
    );

    this._jsonMap = jsonMap;
    this._Types = Types;
  }

  /**
   * Decode input to pass into constructor.
   *
   * @param Types - Types definition.
   * @param value - Value to decode, one of:
   * - null
   * - undefined
   * - hex
   * - Uint8Array
   * - object with `{ key1: value1, key2: value2 }`, assuming `key1` and `key2`
   * are also keys in `Types`
   * - array with `[value1, value2]` assuming the array has the same length as
   * `Object.keys(Types)`
   * @param jsonMap
   */
  private static decodeStruct<
    S extends ConstructorDef,
    _,
    T extends { [K in keyof S]: Codec }
  > (Types: S, value: any, jsonMap: Map<keyof S, string>): T {
    // l.debug(() => ['Struct.decode', { Types, value }]);

    if (isHex(value)) {
      return Struct.decodeStruct(Types, hexToU8a(value as string), jsonMap);
    } else if (isU8a(value)) {
      const values = decodeU8a(value, Object.values(Types));

      // Transform array of values to {key: value} mapping
      return Object.keys(Types).reduce((raw: T, key: keyof S, index) => {
        // TS2322: Type 'Codec' is not assignable to type 'T[keyof S]'.
        (raw as any)[key] = values[index];

        return raw;
      }, {} as T);
    } else if (!value) {
      return {} as T;
    }

    // We assume from here that value is a JS object (Array, Map, Object)
    return Struct.decodeStructFromObject(Types, value, jsonMap);
  }

  private static decodeStructFromObject<
    S extends ConstructorDef,
    _,
    T extends { [K in keyof S]: Codec }
  > (Types: S, value: any, jsonMap: Map<keyof S, string>): T {
    return Object.keys(Types).reduce((raw: T, key: keyof S, index) => {
      // The key in the JSON can be snake_case (or other cases), but in our
      // Types, result or any other maps, it's camelCase
      const jsonKey = (jsonMap.get(key as any) && !value[key]) ? jsonMap.get(key as any) : key;

      try {
        if (Array.isArray(value)) {
          raw[key] = value[index] instanceof Types[key]
            ? value[index]
            : new Types[key](value[index]);
        } else if (value instanceof Map) {
          const mapped = value.get(jsonKey);

          // TS2322: Type 'Codec' is not assignable to type 'T[keyof S]'.
          (raw as any)[key] = mapped instanceof Types[key]
            ? mapped
            : new Types[key](mapped);
        } else if (isObject(value)) {
          raw[key] = value[jsonKey as string] instanceof Types[key]
            ? value[jsonKey as string]
            : new Types[key](value[jsonKey as string]);
        } else {
          throw new Error(`Struct: cannot decode type ${Types[key].name} with value ${JSON.stringify(value)}`);
        }
      } catch (error) {
        throw new Error(`Struct: failed on '${jsonKey}':: ${error.message}`);
      }

      return raw;
    }, {} as T);
  }

  static with<
    S extends ConstructorDef
  > (Types: S): Constructor<Struct<S>> {
    return class extends Struct<S> {
      constructor (value?: any, jsonMap?: Map<keyof S, string>) {
        super(Types, value, jsonMap);

        (Object.keys(Types) as Array<keyof S>).forEach((key) => {
          // do not clobber existing properties on the object
          if (!isUndefined((this as any)[key])) {
            return;
          }

          Object.defineProperty(this, key, {
            enumerable: true,
            get: () => this.get(key)
          });
        });
      }
    };
  }

  /**
   * @description Checks if the value is an empty value
   */
  get isEmpty (): boolean {
    const items = this.toArray();

    for (let i = 0; i < items.length; i++) {
      if (!items[i].isEmpty) {
        return false;
      }
    }

    return true;
  }

  /**
   * @description Returns the Type description to sthe structure
   */
  get Type (): E {
    return (Object
      .entries(this._Types) as Array<[keyof S, Constructor]>)
      .reduce((result: E, [key, Type]) => {
        (result as any)[key] = Type.name;

        return result;
      }, {} as E);
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  get encodedLength (): number {
    return this.toArray().reduce((length, entry) => {
      return length += entry.encodedLength;
    }, 0);
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  eq (other?: any): boolean {
    return compareMap(this, other);
  }

  /**
   * @description Returns a specific names entry in the structure
   * @param name The name of the entry to retrieve
   */
  get (name: keyof S): Codec | undefined {
    return super.get(name);
  }

  /**
   * @description Returns the values of a member at a specific index (Rather use get(name) for performance)
   */
  getAtIndex (index: number): Codec {
    return this.toArray()[index];
  }

  /**
   * @description Converts the Object to an standard JavaScript Array
   */
  toArray (): Array<Codec> {
    return [...this.values()];
  }

  /**
   * @description Returns a hex string representation of the value
   */
  toHex () {
    return u8aToHex(this.toU8a());
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON (): AnyJsonObject | string {
    // FIXME the return type string is only used by Extrinsic (extends Struct),
    // but its toJSON is the hex value
    return [...this.keys()].reduce((json, key) => {
      const jsonKey = this._jsonMap.get(key) || key;
      const value = this.get(key);

      json[jsonKey] = value && value.toJSON();

      return json;
    }, {} as any);
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType (): string {
    return JSON.stringify(
      Object.entries(this._Types).reduce((result, [key, Type]) => {
        result[key] = new Type().toRawType();

        return result;
      }, {} as { [index: string]: string })
    );
  }

  /**
   * @description Returns the string representation of the value
   */
  toString () {
    return JSON.stringify(this.toJSON());
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  toU8a (isBare?: boolean): Uint8Array {
    return u8aConcat(
      ...this.toArray().map((entry) =>
        entry.toU8a(isBare)
      )
    );
  }
}
