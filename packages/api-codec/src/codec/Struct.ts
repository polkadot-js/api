// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import u8aConcat from '@polkadot/util/u8a/concat';

import Base from './Base';

// A Struct defines an Object with key/values - where the values are Base<T> values. It removes
// a lot of repetition from the actual coding, define a structure type, pass it the key/Base<T>
// values in the constructor and it manages the decoding. It is important that the constructor
// values matches 100% to the order in th Rust code, i.e. don't go crazy and make it alphabetical,
// it needs to decoded in the specific defined order.
export default class Struct <
  // The actual Class structure, i.e. key -> Class
  S = { [index: string]: { new(value?: any): Base } },
  // internal type, instance of classes mapped by key
  T = { [K in keyof S]: Base },
  // input values, mapped by key can be anything (construction)
  V = { [K in keyof S]: any },
  // type names, mapped by key, name of Class in S
  E = { [K in keyof S]: string }
> extends Base<T> {
  protected _jsonMap: Map<keyof S, string>;
  protected _Types: E;

  constructor (Types: S, value: V = {} as V, jsonMap: Map<keyof S, string> = new Map()) {
    super(
      Object
        .keys(Types)
        .reduce((raw: T, key) => {
          // @ts-ignore FIXME Ok, something weird is going on here or I just don't get it...
          // it works, so ignore the checker, although it drives me batty. (It started when
          // the [key in keyof T] was added, the idea is to provide better checks, which
          // does backfire here, but works externally.)
          raw[key] = new Types[key](value[key]);

          return raw;
        }, {} as T)
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

  static with <
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
