// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Base } from '../types';

import u8aConcat from '@polkadot/util/u8a/concat';

export default class CodecStruct <T = { [index: string]: Base<any> }, K = keyof T, V = { [key in keyof T]: any }> implements Base<T> {
  protected _raw: T;

  constructor (Struct: { [key in keyof T]: { new(value?: any): Base<any> } }, value: V = {} as V) {
    this._raw = Object.keys(Struct).reduce((raw: T, key) => {
      // @ts-ignore Ok, something weid is going on here or I just don't get it... it works,
      // so ignore the checker, although it drives me batty. (It started when the [key in keyof T]
      // was added, the idea is to provide better checks, which does backfire here, but works
      // externally.)
      raw[key] = new Struct[key as K](value[key]);

      return raw;
    }, {} as T);
  }

  static with <O = { [index: string]: Base<any> }> (Struct: { [key in keyof O]: { new(value?: any): Base<any> } }): { new(value?: any): CodecStruct<O> } {
    return class extends CodecStruct<O> {
      constructor (value?: any) {
        super(Struct, value);
      }
    };
  }

  byteLength (): number {
    return Object.values(this._raw).reduce((length, entry) => {
      return length += entry.byteLength();
    }, 0);
  }

  fromJSON (input: any): CodecStruct<T> {
    Object.keys(this._raw).forEach((key) => {
      // @ts-ignore as above...
      this._raw[key].fromJSON(input[key]);
    });

    return this;
  }

  fromU8a (input: Uint8Array): CodecStruct<T> {
    Object.keys(this._raw).reduce((offset, key) => {
      // @ts-ignore as above...
      this._raw[key].fromU8a(input.subarray(offset));

      // @ts-ignore as above...
      return offset + this._raw[key].byteLength();
    }, 0);

    return this;
  }

  toJSON (): any {
    return Object.keys(this._raw).reduce((json, key) => {
      // @ts-ignore as above...
      json[key] = this._raw[key].toJSON();

      return json;
    }, {} as any);
  }

  toU8a (): Uint8Array {
    return u8aConcat(
      ...Object.keys(this._raw).map((key) =>
        // @ts-ignore as above...
        this._raw[key].toU8a()
      )
    );
  }

  toString (): string {
    const data = Object.keys(this._raw).map((key) =>
      // @ts-ignore as above...
      `${key}: ${this._raw[key].toString()}`
    ).join(', ');

    return `{${data}}`;
  }
}
