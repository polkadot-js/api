// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import hexToU8a from '@polkadot/util/hex/toU8a';
import isHex from '@polkadot/util/is/hex';
import isObject from '@polkadot/util/is/object';
import isU8a from '@polkadot/util/is/u8a';
import u8aConcat from '@polkadot/util/u8a/concat';

import Base from './Base';
import { Constructor } from '../types';

// A Struct defines an Object with key/values - where the values are Base<T> values. It removes
// a lot of repetition from the actual coding, define a structure type, pass it the key/Base<T>
// values in the constructor and it manages the decoding. It is important that the constructor
// values matches 100% to the order in th Rust code, i.e. don't go crazy and make it alphabetical,
// it needs to decoded in the specific defined order.
export default class Struct<
  // The actual Class structure, i.e. key -> Class
  S = { [index: string]: Constructor<Base> },
  // internal type, instance of classes mapped by key
  T = { [K in keyof S]: Base },
  // input values, mapped by key can be anything (construction)
  V = { [K in keyof S]: any },
  // type names, mapped by key, name of Class in S
  E = { [K in keyof S]: string }
  > extends Base<T> {
  protected _jsonMap: Map<keyof S, string>;
  protected _Types: E;

  constructor (Types: S, value: V | Array<any> = {} as V, jsonMap: Map<keyof S, string> = new Map()) {
    super(
      Struct.decodeStruct(Types, value, jsonMap)
    );

    this._jsonMap = jsonMap;
    this._Types = Object
      .keys(Types)
      .reduce((result: E, key) => {
        // @ts-ignore Same as above, can't do a simple one, I'm missing something simple
        result[key] = Types[key].name;

        return result;
      }, {} as E);
  }

  static decodeStruct<S, V, T> (Types: S, value: any, jsonMap: Map<keyof S, string>): T {
    // l.debug(() => ['Struct.decode', { Types, value }]);

    if (isHex(value)) {
      return Struct.decodeStruct(Types, hexToU8a(value as string), jsonMap);
    } else if (!value) {
      return {} as T;
    }

    // `currentIndex` is only used when we have a UintArray/U8a as value. It's
    // used to track at which index we are currently parsing in that array.
    let currentIndex = 0;

    return Object
      .keys(Types)
      .reduce((raw: T, key, index) => {
        // The key in the JSON can be snake_case (or other cases), but in our
        // Types, result or any other maps, it's camelCase
        const jsonKey = (jsonMap.get(key as any) && !value[key]) ? jsonMap.get(key as any) : key;

        if (isU8a(value)) {
          // @ts-ignore FIXME See below
          raw[key] = new Types[key](
            value.subarray(
              currentIndex
            )
          );

          // Move the currentIndex forward
          // @ts-ignore FIXME See below
          currentIndex += raw[key].encodedLength;
          // @ts-ignore FIXME See below
        } else if (value[jsonKey] instanceof Types[key]) {
          // @ts-ignore FIXME See below
          raw[key] = value[jsonKey];
        } else if (Array.isArray(value) && value.length === Object.keys(Types).length) {
          // @ts-ignore FIXME See below
          raw[key] = new Types[key](
            // @ts-ignore FIXME
            value[index]
          );
        } else if (isObject(value)) {
          // @ts-ignore FIXME Ok, something weird is going on here or I just don't get it...
          // it works, so ignore the checker, although it drives me batty. (It started when
          // the [key in keyof T] was added, the idea is to provide better checks, which
          // does backfire here, but works externally.)
          raw[key] = new Types[key](
            // @ts-ignore FIXME
            value[jsonKey]
          );
        } else {
          // @ts-ignore FIXME
          throw new Error(`Struct: cannot decode type "${Types[key].name}" with value "${value}".`);
        }

        return raw;
      }, {} as T);
  }

  static with<
    S = { [index: string]: Constructor<Base> }
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
    return Object.values(this.raw).reduce((length, entry) => {
      return length += entry.encodedLength;
    }, 0);
  }

  getAtIndex (index: number): Base {
    return this.values()[index];
  }

  toJSON (): any {
    return Object.keys(this.raw).reduce((json, key) => {
      const jsonKey = this._jsonMap.get(key as any) || key;

      // @ts-ignore as above...
      json[jsonKey] = this.raw[key].toJSON();

      return json;
    }, {} as any);
  }

  keys (): Array<string> {
    return Object.keys(this.raw);
  }

  toU8a (isBare?: boolean): Uint8Array {
    return u8aConcat(
      ...Object.values(this.raw).map((entry) =>
        entry.toU8a(isBare)
      )
    );
  }

  toString (): string {
    const data = Object.keys(this.raw).map((key) =>
      // @ts-ignore as above...
      `${key}: ${this.raw[key].toString()}`
    ).join(', ');

    return `{${data}}`;
  }

  values (): Array<Base> {
    return Object.values(this.raw);
  }
}
