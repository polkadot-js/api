// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import isNull from '@polkadot/util/is/null';

import CodecBase from './Base';

// An Option is an optional field. Basically the first byte (if zero) indicates that there is
// is value to follow. If the byte is non-zero, there is an actual value. So the CodecOption
// implements that - decodes, checks for optionality and wraps the required structure with a
// value if/as required/found.
export default class CodecOption <T> extends CodecBase<CodecBase<T> | null> {
  private Value: { new(value?: any): CodecBase<T> };

  constructor (Value: { new(value?: any): CodecBase<T> }, value: any = null) {
    super(
      isNull(value)
      ? new Value(value)
      : null
    );

    this.Value = Value;
  }

  static with <O> (Type: { new(value?: any): CodecBase<O> }): { new(value?: any): CodecOption<O> } {
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
      ? new this.Value().fromJSON(input) as CodecBase
      : null;

    return this;
  }

  fromU8a (input: Uint8Array): CodecOption<T> {
    this.raw = input[0] === 1
      ? new this.Value().fromU8a(input.subarray(1)) as CodecBase
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
