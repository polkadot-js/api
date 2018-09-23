// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Base } from '../types';

import u8aConcat from '@polkadot/util/u8a/concat';

// NOTE or LengthCompact
import Length from './Length';

export default class CodecArray <T extends Base<any>> implements Base<Array<T>> {
  private _length: Length;
  private _Type: { new(value?: any): T };

  protected _raw: Array<T>;

  constructor (Type: { new(value?: any): T }, value: Array<any> = [] as Array<any>) {
    this._length = new Length(value.length);
    this._Type = Type;
    this._raw = value.map((entry) =>
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

  at (index: number): T {
    return this._raw[index];
  }

  byteLength (): number {
    return this._raw.reduce((total, raw) => {
      return total + raw.byteLength();
    }, this._length.byteLength());
  }

  filter (fn: (entry: T, index?: number) => any): Array<T> {
    return this._raw.filter(fn);
  }

  forEach (fn: (entry: T, index?: number) => any): any {
    return this._raw.forEach(fn);
  }

  fromJSON (input: any): CodecArray<T> {
    this._raw = input.map((input: any) =>
      new this._Type().fromJSON(input)
    );

    return this;
  }

  fromU8a (input: Uint8Array): CodecArray<T> {
    this._length.fromU8a(input);

    const length = this._length.toNumber();
    let offset = this._length.byteLength();
    this._raw = [];

    for (let index = 0; index < length; index++) {
      const raw = new this._Type().fromU8a(input.subarray(offset));

      this._raw.push(raw as T);
      offset += raw.byteLength();
    }

    return this;
  }

  map <O> (fn: (entry: T, index?: number) => O): Array<O> {
    return this._raw.map(fn);
  }

  reduce <O> (fn: (result: O, entry: T, index?: number) => O, initial: O): O {
    return this._raw.reduce(fn, initial);
  }

  toJSON (): any {
    return this._raw.map((entry) =>
      entry.toJSON()
    );
  }

  toU8a (): Uint8Array {
    return u8aConcat(
      this._length.toU8a(),
      ...this._raw.map((entry) =>
        entry.toU8a()
      )
    );
  }

  toString (): string {
    const data = this._raw.map((entry) =>
      entry.toString()
    ).join(', ');

    return `[${data}]`;
  }

  get length (): number {
    return this._raw.length;
  }
}
