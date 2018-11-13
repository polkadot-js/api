// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { hexToU8a, isHex, isObject, isU8a, u8aConcat, u8aToHex } from '@polkadot/util';

import Base from './Base';
import { Codec, Constructor, ConstructorDef } from '../types';

// A Struct defines an Object with key/values - where the values are Base<T> values. It removes
// a lot of repetition from the actual coding, define a structure type, pass it the key/Base<T>
// values in the constructor and it manages the decoding. It is important that the constructor
// values matches 100% to the order in th Rust code, i.e. don't go crazy and make it alphabetical,
// it needs to decoded in the specific defined order.
export default class Struct<
  // The actual Class structure, i.e. key -> Class
  S extends ConstructorDef = ConstructorDef,
  // internal type, instance of classes mapped by key
  T extends { [K in keyof S]: Base } = { [K in keyof S]: Base },
  // input values, mapped by key can be anything (construction)
  V extends { [K in keyof S]: any } = { [K in keyof S]: any },
  // type names, mapped by key, name of Class in S
  E extends { [K in keyof S]: string } = { [K in keyof S]: string }
  > extends Map<keyof S, Base> implements Codec {
  public raw: Map<keyof S, Base>; // FIXME Remove this once we convert all types out of Base
  protected _jsonMap: Map<keyof S, string>;
  protected _Types: E;

  constructor (Types: S, value: V | Array<any> = {} as V, jsonMap: Map<keyof S, string> = new Map()) {
    const decoded = Struct.decodeStruct<S, V, T>(Types, value, jsonMap);

    super(
      Object.entries(decoded)
    );

    this._jsonMap = jsonMap;
    this._Types = (Object
      .keys(Types) as Array<keyof S>)
      .reduce((result: E, key) => {
        result[key] = Types[key].name;

        return result;
      }, {} as E);

    // FIXME Remove this once we convert all types out of Base
    this.raw = this;
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
    T extends { [K in keyof S]: Base }
    > (Types: S, value: any, jsonMap: Map<keyof S, string>): T {
    // l.debug(() => ['Struct.decode', { Types, value }]);

    if (isHex(value)) {
      return Struct.decodeStruct(Types, hexToU8a(value as string), jsonMap);
    } else if (!value) {
      return {} as T;
    }

    // `currentIndex` is only used when we have a UintArray/U8a as value. It's
    // used to track at which index we are currently parsing in that array.
    let currentIndex = 0;

    return (Object
      .keys(Types) as Array<keyof S>)
      .reduce((raw: T, key, index) => {
        // The key in the JSON can be snake_case (or other cases), but in our
        // Types, result or any other maps, it's camelCase
        const jsonKey = (jsonMap.get(key as any) && !value[key]) ? jsonMap.get(key as any) : key;

        if (isU8a(value)) {
          raw[key] = new Types[key](
            value.subarray(
              currentIndex
            )
          );

          // Move the currentIndex forward
          currentIndex += raw[key].encodedLength;
        } else if (Array.isArray(value)) {
          raw[key] = value[index] instanceof Types[key]
            ? value[index]
            : new Types[key](value[index]);
        } else if (isObject(value)) {
          raw[key] = value[jsonKey as string] instanceof Types[key]
            ? value[jsonKey as string]
            : new Types[key](value[jsonKey as string]);
        } else {
          throw new Error(`Struct: cannot decode type "${Types[key].name}" with value "${JSON.stringify(value)}".`);
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
      }
    };
  }

  get Type (): E {
    return this._Types;
  }

  get encodedLength (): number {
    return this.toArray().reduce((length, entry) => {
      return length += entry.encodedLength;
    }, 0);
  }

  getAtIndex (index: number): Base {
    return this.toArray()[index];
  }

  toArray (): Array<Base> {
    return [...this.values()];
  }

  toHex () {
    return u8aToHex(this.toU8a());
  }

  toJSON (): any {
    return [...this.keys()].reduce((json, key) => {
      const jsonKey = this._jsonMap.get(key) || key;

      const value = this.get(key);
      json[jsonKey] = value && value.toJSON();

      return json;
    }, {} as any);
  }

  toString () {
    return JSON.stringify(this.toJSON());
  }

  toU8a (isBare?: boolean): Uint8Array {
    return u8aConcat(
      ...this.toArray().map((entry) =>
        entry.toU8a(isBare)
      )
    );
  }
}
