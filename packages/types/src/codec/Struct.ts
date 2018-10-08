// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import isHex from '@polkadot/util/is/hex';
import isObject from '@polkadot/util/is/object';
import isU8a from '@polkadot/util/is/u8a';
import u8aConcat from '@polkadot/util/u8a/concat';
import u8aToU8a from '@polkadot/util/u8a/toU8a';

import { AnyU8a } from '../types';
import Base from './Base';
import Compact from './Compact';

// A Struct defines an Object with key/values - where the values are Base<T> values. It removes
// a lot of repetition from the actual coding, define a structure type, pass it the key/Base<T>
// values in the constructor and it manages the decoding. It is important that the constructor
// values matches 100% to the order in th Rust code, i.e. don't go crazy and make it alphabetical,
// it needs to decoded in the specific defined order.
export default class Struct<
  // The actual Class structure, i.e. key -> Class
  S = { [index: string]: { new(...value: Array<any>): Base } },
  // internal type, instance of classes mapped by key
  T = { [K in keyof S]: Base },
  // input values, mapped by key can be anything (construction)
  V = { [K in keyof S]: any },
  // type names, mapped by key, name of Class in S
  E = { [K in keyof S]: string }
  > extends Base<T> {
  protected _jsonMap: Map<keyof S, string>;
  protected _Types: E;

  constructor (Types: S, value: V | Array<any> | AnyU8a = {} as V, jsonMap: Map<keyof S, string> = new Map()) {
    super(
      Struct.decode(Types, value)
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

  static decode<S, V, T> (Types: S, value: V | Array<any> | AnyU8a): T {
    // l.debug(() => ['Struct.decode', { Types, value }]);

    // `currentIndex` is only used when we have a UintArray/U8a as value. It's
    // used to track at which index we are currently parsing in that array.
    let currentIndex = 0;

    return Object
      .keys(Types)
      .reduce((raw: T, key, index) => {
        if (value instanceof Uint8Array) {
          const [offset, typeLength] = Compact.decode(value.subarray(currentIndex));

          // @ts-ignore FIXME See below
          raw[key] = new Types[key](
            value.subarray(
              currentIndex,
              currentIndex + offset + typeLength.toNumber()
            )
          );

          // Move the currentIndex forward
          currentIndex += offset + typeLength.toNumber();
        } else if (isObject(value)) {
          // @ts-ignore FIXME Ok, something weird is going on here or I just don't get it...
          // it works, so ignore the checker, although it drives me batty. (It started when
          // the [key in keyof T] was added, the idea is to provide better checks, which
          // does backfire here, but works externally.)
          raw[key] = new Types[key](
            // @ts-ignore FIXME
            value[key]
          );
        } else {
          throw new Error(`Struct: cannot decode "${value}".`);
        }

        return raw;
      }, {} as T);
  }

  static with<
    S = { [index: string]: { new(value?: any): Base } }
    > (Types: S): { new(value?: any): Struct<S> } {
    return class extends Struct<S> {
      constructor (value?: any, jsonMap?: Map<keyof S, string>) {
        super(Types, value, jsonMap);
      }
    };
  }

  get Type (): E {
    return this._Types;
  }

  byteLength (): number {
    return Object.values(this.raw).reduce((length, entry) => {
      return length += entry.byteLength();
    }, 0);
  }

  fromJSON (input: any): Struct<S, T, V, E> {
    if (isHex(input) || isU8a(input)) {
      return this.fromU8a(u8aToU8a(input));
    }

    Object.keys(this.raw).forEach((key) => {
      const jsonKey = this._jsonMap.get(key as any) || key;

      // @ts-ignore as above...
      this.raw[key].fromJSON(input[jsonKey]);
    });

    return this;
  }

  fromU8a (input: Uint8Array): Struct<S, T, V, E> {
    Object.values(this.raw).reduce((offset, entry) => {
      entry.fromU8a(input.subarray(offset));

      return offset + entry.byteLength();
    }, 0);

    return this;
  }

  get (index: number): Base {
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
