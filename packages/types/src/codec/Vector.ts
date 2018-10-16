// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import u8aConcat from '@polkadot/util/u8a/concat';
import toU8a from '@polkadot/util/u8a/toU8a';

import Base from './Base';
import Compact, { DEFAULT_LENGTH_BITS } from './Compact';
import { Constructor } from '../types';

// This manages codec arrays. Internally it keeps track of the length (as decoded) and allows
// construction with the passed `Type` in the constructor. It aims to be an array-like structure,
// i.e. while it wraps an array, it provides a `length` property to get the actual length, `at(index)`
// to retrieve a specific item. Additionally the helper functions `map`, `filter`, `forEach` and
// `reduce` is exposed on the interface.
export default class Vector<
  T extends Base
  > extends Base<Array<T>> {
  private _Type: Constructor<T>;

  constructor (Type: Constructor<T>, value: Uint8Array | string | Array<any> = [] as Array<any>) {
    super(
      Vector.decode(Type, value)
    );

    this._Type = Type;
  }

  static decode<T extends Base> (Type: Constructor<T>, value: Uint8Array | string | Array<any>): Array<T> {
    if (Array.isArray(value)) {
      return value.map((entry) =>
        entry instanceof Type
          ? entry
          : new Type(entry)
      );
    }

    const u8a = toU8a(value);

    let [offset, _length] = Compact.decodeU8a(value, DEFAULT_LENGTH_BITS);
    const length = _length.toNumber();

    const result = [];

    for (let index = 0; index < length; index++) {
      const decoded = new Type(u8a.subarray(offset));

      result.push(decoded);
      offset += decoded.byteLength();
    }

    return result;
  }

  static with<O extends Base> (Type: Constructor<O>): Constructor<Vector<O>> {
    return class extends Vector<O> {
      constructor (value?: Array<any>) {
        super(Type, value);
      }
    };
  }

  get Type (): string {
    return this._Type.name;
  }

  get length (): number {
    return this.raw.length;
  }

  byteLength (): number {
    return this.raw.reduce((total, raw) => {
      return total + raw.byteLength();
    }, Compact.encodeU8a(this.length, DEFAULT_LENGTH_BITS).length);
  }

  filter (fn: (item: T, index: number) => any): Array<T> {
    return this.raw.filter(fn);
  }

  find (fn: (item: T, index: number) => any): T | undefined {
    return this.raw.find(fn);
  }

  forEach (fn: (item: T, index: number) => any): any {
    return this.raw.forEach(fn);
  }

  fromJSON (input: any): Vector<T> {
    // input could be null/undefined to indicate empty
    this.raw = (input || []).map((input: any) =>
      new this._Type().fromJSON(input)
    );

    return this;
  }

  fromU8a (input: Uint8Array): Vector<T> {
    this.raw = Vector.decode(this._Type, input);

    return this;
  }

  get (index: number): T {
    return this.raw[index];
  }

  map<O> (fn: (item: T, index: number) => O): Array<O> {
    return this.raw.map(fn);
  }

  push (item: T): void {
    this.raw.push(item);
  }

  reduce<O> (fn: (result: O, item: T, index: number) => O, initial: O): O {
    return this.raw.reduce(fn, initial);
  }

  toJSON (): any {
    return this.raw.map((entry) =>
      entry.toJSON()
    );
  }

  toU8a (isBare?: boolean): Uint8Array {
    const encoded = this.raw.map((entry) =>
      entry.toU8a(isBare)
    );

    return isBare
      ? u8aConcat(...encoded)
      : u8aConcat(
        Compact.encodeU8a(this.length, DEFAULT_LENGTH_BITS),
        ...encoded
      );
  }

  toString (): string {
    const data = this.raw.map((entry) =>
      entry.toString()
    );

    return `[${data.join(', ')}]`;
  }
}
