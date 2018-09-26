// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import u8aConcat from '@polkadot/util/u8a/concat';

import Base from './Base';
import Length from './Length';

// This manages codec arrays. Intrernally it keeps track of the length (as decoded) and allows
// construction with the passed `Type` in the constructor. It aims to be an array-like structure,
// i.e. while it wraps an array, it provides a `length` property to get the actual length, `at(index)`
// to retrieve a specific item. Additionally the helper functions `map`, `filter`, `forEach` and
// `reduce` is exposed on the interface.
export default class Vector <
  T extends Base
> extends Base<Array<T>> {
  private _length: Length;
  private _Type: { new(value?: any): T };

  constructor (Type: { new(value?: any): T }, value: Array<any> = [] as Array<any>) {
    super(
      value.map((entry) =>
        entry instanceof Type
          ? entry
          : new Type(entry)
      )
    );

    this._length = new Length(value.length);
    this._Type = Type;
  }

  static with <O extends Base> (Type: { new(value?: any): O }): { new(value?: any): Vector<O> } {
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
    }, this._length.byteLength());
  }

  at (index: number): T {
    return this.raw[index];
  }

  filter (fn: (entry: T, index?: number) => any): Array<T> {
    return this.raw.filter(fn);
  }

  forEach (fn: (entry: T, index?: number) => any): any {
    return this.raw.forEach(fn);
  }

  fromJSON (input: any): Vector<T> {
    this.raw = input.map((input: any) =>
      new this._Type().fromJSON(input)
    );

    return this;
  }

  fromU8a (input: Uint8Array): Vector<T> {
    this._length.fromU8a(input);

    const length = this._length.toNumber();
    let offset = this._length.byteLength();
    this.raw = [];

    for (let index = 0; index < length; index++) {
      const raw = new this._Type().fromU8a(input.subarray(offset));

      this.raw.push(raw as T);
      offset += raw.byteLength();
    }

    return this;
  }

  map <O> (fn: (entry: T, index?: number) => O): Array<O> {
    return this.raw.map(fn);
  }

  reduce <O> (fn: (result: O, entry: T, index?: number) => O, initial: O): O {
    return this.raw.reduce(fn, initial);
  }

  toJSON (): any {
    return this.raw.map((entry) =>
      entry.toJSON()
    );
  }

  toU8a (): Uint8Array {
    return u8aConcat(
      this._length.toU8a(),
      ...this.raw.map((entry) =>
        entry.toU8a()
      )
    );
  }

  toString (): string {
    const data = this.raw.map((entry) =>
      entry.toString()
    );

    return `[${data.join(', ')}]`;
  }
}
