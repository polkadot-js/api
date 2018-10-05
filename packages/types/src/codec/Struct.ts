// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import u8aConcat from '@polkadot/util/u8a/concat';
import u8aToHex from '@polkadot/util/u8a/toHex';

import { Codec, Constructor } from '../types';
import { l } from './Base';

// A Struct defines an Object with key/values - where the values are Codec<T> values. It removes
// a lot of repetition from the actual coding, define a structure type, pass it the key/Base<T>
// values in the constructor and it manages the decoding. It is important that the constructor
// values matches 100% to the order in th Rust code, i.e. don't go crazy and make it alphabetical,
// it needs to decoded in the specific defined order.
export default class Struct<
  // The actual Class structure, i.e. key -> Class
  S = { [index: string]: Constructor },
  // internal type, instance of classes mapped by key
  T = { [K in keyof S]: Codec<any> },
  // input values, mapped by key can be anything (construction)
  V = { [K in keyof S]: any },
  // type names, mapped by key, name of Class in S
  E = { [K in keyof S]: string }
  > extends Map<keyof S, Codec<any>> implements Codec<Struct<S, T, V, E>> {
  protected _jsonMap: Map<keyof S, string>; // Map between real-case and camelCase, e.g. round_number -> roundNumber
  protected _Types: E;

  constructor (Types: S, value: V | Array<any> = {} as V, jsonMap: Map<keyof S, string> = new Map(), isTuple: boolean = false) {
    const decoded: T = Struct.decode(Types, value, isTuple);
    super(
      // Convert Map to a key/value array, e.g.:
      // { 1: 'one', 2: 'two' } -> [[1, 'one'], [2, 'two']]
      // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Parameters
      Object
        .keys(decoded)
        .reduce((kvArray, key) => {
          // @ts-ignore Same as above, can't do a simple one, I'm missing something simple
          kvArray.push([key, decoded[key]]);
          return kvArray;
        }, [] as any[])

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

  static decode<S, V, T> (Types: S, value: V | Array<any>, isTuple: boolean): T {
    l.debug(() => ['Struct.decode', { Types, value }]);

    return Object
      .keys(Types)
      .reduce((raw, key, index) => {
        // @ts-ignore FIXME Ok, something weird is going on here or I just don't get it...
        // it works, so ignore the checker, although it drives me batty. (It started when
        // the [key in keyof T] was added, the idea is to provide better checks, which
        // does backfire here, but works externally.)
        raw[key] = new Types[key](
          isTuple && Array.isArray(value)
            ? value[index]
            // @ts-ignore as above
            : value[key]
        );

        return raw;
      }, {} as T);
  }

  static with<
    S = { [index: string]: Constructor }
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

  byteLength (): number {
    return [...this.values()].reduce((length, entry) => {
      return length += entry.byteLength();
    }, 0);
  }

  fromJSON (input: any): Struct<S, T, V, E> {
    [...this.keys()].forEach((key) => {
      const jsonKey = this._jsonMap.get(key as any) || key;
      // @ts-ignore `this.get(key)` is possibly undefined, but it's not
      this.get(key).fromJSON(input[jsonKey]);
    });

    return this;
  }

  fromU8a (input: Uint8Array): Struct<S, T, V, E> {
    [...this.values()].reduce((offset, entry) => {
      entry.fromU8a(input.subarray(offset));

      return offset + entry.byteLength();
    }, 0);

    return this;
  }

  toHex (): string {
    return u8aToHex(this.toU8a());
  }

  toJSON (): any {
    return [...this.keys()].reduce((json, key) => {
      const jsonKey = this._jsonMap.get(key as any) || key;

      // @ts-ignore `this.get(key)` is possibly undefined, but it's not
      json[jsonKey] = this.get(key).toJSON();

      return json;
    }, {} as any);
  }

  toU8a (): Uint8Array {
    return u8aConcat(
      ...[...this.values()].map((entry) =>
        entry.toU8a()
      )
    );
  }

  toString (): string {
    const data = [...this.keys()].map((key) =>
      // @ts-ignore as above...
      `${key}: ${this.get(key).toString()}`
    ).join(', ');

    return `{${data}}`;
  }
}
