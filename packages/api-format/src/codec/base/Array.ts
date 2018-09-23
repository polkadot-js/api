// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Base } from '../types';

import u8aConcat from '@polkadot/util/u8a/concat';

// NOTE this could be Length or LengthCompact (the latter new and will replace the former)
import Length from './LengthCompact';

// This manages codec arrays. Intrernally it keeps track of the length (as decoded) and allows
// construction with the passed `Type` in the constructor. It aims to be an array-likle structure,
// i.e. while it wraps an array, it provides a `length` property to get the actual length, `at(index)`
// to retrieve a specific item. Additionally the helper functions `map`, `filter`, `forEach` and
// `reduce` is exposed on the interface.
export default class CodecArray <
  T extends Base<any>
> implements Base<Array<T>> {
  private _length: Length;
  private _Type: { new(value?: any): T };

  raw: Array<T>;

  constructor (Type: { new(value?: any): T }, value: Array<any> = [] as Array<any>) {
    this._length = new Length(value.length);
    this._Type = Type;
    this.raw = value.map((entry) =>
      new this._Type(entry)
    );
  }

  static with <O extends Base<any>> (Type: { new(value?: any): O }): { new(value?: any): CodecArray<O> } {
    return class extends CodecArray<O> {
      constructor (value?: Array<any>) {
        super(Type, value);
      }
    };
  }

  byteLength (): number {
    return this.raw.reduce((total, raw) => {
      return total + raw.byteLength();
    }, this._length.byteLength());
  }

  get length (): number {
    return this.raw.length;
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

  fromJSON (input: any): CodecArray<T> {
    this.raw = input.map((input: any) =>
      new this._Type().fromJSON(input)
    );

    return this;
  }

  fromU8a (input: Uint8Array): CodecArray<T> {
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
    ).join(', ');

    return `[${data}]`;
  }
}
