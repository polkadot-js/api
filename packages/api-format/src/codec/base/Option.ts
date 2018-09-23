// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Base } from '../types';

import isNull from '@polkadot/util/is/null';

// An Option is an optinal field. Basically the first byte (if zero) indicates that there is no
// value to follow. If the byte is non-zero (actually 1), there is an actual value. So the CodecOption
// implements that - decodes, checks for optionality and wraps the required structure with a vlaue if found.
export default class CodecOption <T> implements Base<Base<T> | null> {
  private Value: { new(value?: any): Base<T> };

  raw: Base<T> | null;

  constructor (Value: { new(value?: any): Base<T> }, value: any = null) {
    this.Value = Value;
    this.raw = isNull(value)
      ? new Value(value)
      : null;
  }

  static with <O> (Type: { new(value?: any): Base<O> }): { new(value?: any): CodecOption<O> } {
    return class extends CodecOption<O> {
      constructor (value?: any) {
        super(Type, value);
      }
    };
  }

  get value (): T | undefined {
    return isNull(this.raw)
      ? undefined
      : this.raw.raw;
  }

  byteLength (): number {
    const childLength = this.raw
      ? this.raw.byteLength()
      : 0;

    return 1 + childLength;
  }

  fromJSON (input: any): CodecOption<T> {
    this.raw = input
      ? new this.Value().fromJSON(input) as Base<any>
      : null;

    return this;
  }

  fromU8a (input: Uint8Array): CodecOption<T> {
    this.raw = input[0] === 1
      ? new this.Value().fromU8a(input.subarray(1)) as Base<any>
      : null;

    return this;
  }

  toJSON (): any {
    return this.raw
      ? this.raw.toJSON()
      : undefined;
  }

  toU8a (): Uint8Array {
    const u8a = new Uint8Array(this.byteLength());

    if (this.raw) {
      u8a.set([1]);
      u8a.set(this.raw.toU8a(), 1);
    }

    return u8a;
  }

  toString (): string {
    return this.raw
      ? this.raw.toString()
      : '';
  }
}
