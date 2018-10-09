// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import isU8a from '@polkadot/util/is/u8a';
import u8aConcat from '@polkadot/util/u8a/concat';

import Base from './Base';
import Compact, { DEFAULT_LENGTH_BITS } from './Compact';

// This manages codec arrays. Intrernally it keeps track of the length (as decoded) and allows
// construction with the passed `Type` in the constructor. It aims to be an array-like structure,
// i.e. while it wraps an array, it provides a `length` property to get the actual length, `at(index)`
// to retrieve a specific item. Additionally the helper functions `map`, `filter`, `forEach` and
// `reduce` is exposed on the interface.
export default class Vector<
  T extends Base
  > extends Base<Array<T>> {
  private _Type: { new(value?: any): T };

  constructor (Type: { new(value?: any): T }, value: Array<any> = [] as Array<any>) {
    super(
      Vector.decode(Type, value)
    );

    this._Type = Type;
  }

  static decode<O extends Base> (Type: { new(value?: any): O }, value: any) {
    if (Array.isArray(value)) {
      return value.map((entry) =>
        entry instanceof Type
          ? entry
          : new Type(entry));
    } else if (isU8a(value)) {
      const [offset, _length] = Compact.decodeU8a(value, DEFAULT_LENGTH_BITS);
      const length = _length.toNumber();

      // `currentOffset` is the current index we're at while parsing the bytes
      // array.
      let currentOffset = offset;
      let result = [];
      for (let index = 0; index < length; index++) {
        const raw = new Type(value.subarray(currentOffset));

        result.push(raw);
        currentOffset += raw.byteLength();
      }
      return result;
    }
  }

  static with<O extends Base> (Type: { new(value?: any): O }): { new(value?: any): Vector<O> } {
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

  filter (fn: (item: T, index?: number) => any): Array<T> {
    return this.raw.filter(fn);
  }

  find (fn: (item: T, index?: number) => any): T | undefined {
    return this.raw.find(fn);
  }

  forEach (fn: (item: T, index?: number) => any): any {
    return this.raw.forEach(fn);
  }

  fromJSON (input: any): Vector<T> {
    this.raw = input.map((input: any) =>
      new this._Type().fromJSON(input)
    );

    return this;
  }

  fromU8a (input: Uint8Array): Vector<T> {
    let [offset, _length] = Compact.decodeU8a(input, DEFAULT_LENGTH_BITS);
    const length = _length.toNumber();

    this.raw = [];

    for (let index = 0; index < length; index++) {
      const raw = new this._Type().fromU8a(input.subarray(offset));

      this.raw.push(raw as T);
      offset += raw.byteLength();
    }

    return this;
  }

  get (index: number): T {
    return this.raw[index];
  }

  map<O> (fn: (item: T, index?: number) => O): Array<O> {
    return this.raw.map(fn);
  }

  push (item: T): void {
    this.raw.push(item);
  }

  reduce<O> (fn: (result: O, item: T, index?: number) => O, initial: O): O {
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
