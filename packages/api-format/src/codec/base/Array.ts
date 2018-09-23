// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Base } from '../types';

import u8aConcat from '@polkadot/util/u8a/concat';

import Length from './Length';

export default class CodecArray <T extends Base<any>> implements Base<Array<T>> {
  private _length: Length;
  private _Type: { new(): T };

  raw: Array<T>;

  constructor (Type: { new(): T }, value: Array<T> = [] as Array<T>, _Length: typeof Length = Length) {
    this._length = new _Length(value.length);
    this._Type = Type;
    this.raw = value;
  }

  at (index: number): T {
    return this.raw[index];
  }

  byteLength (): number {
    return this.raw.reduce((total, raw) => {
      return total + raw.byteLength();
    }, this._length.byteLength());
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

    const length = this._length.raw.toNumber();
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

  get length (): number {
    return this.raw.length;
  }
}
