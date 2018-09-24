// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import isUndefined from '@polkadot/util/is/undefined';

import CodecBase from './Base';

// An Option is an optional field. Basically the first byte indicates that there is
// is value to follow. If the byte is `1` there is an actual value. So the CodecOption
// implements that - decodes, checks for optionality and wraps the required structure
// with a value if/as required/found.
export default class CodecOption <T> extends CodecBase<CodecBase<T>> {
  private _hasValue: boolean;

  constructor (Value: { new(value?: any): CodecBase<T> }, value?: any) {
    super(
      new Value(value)
    );

    this._hasValue = !isUndefined(value);
  }

  static with <O> (Type: { new(value?: any): CodecBase<O> }): { new(value?: any): CodecOption<O> } {
    return class extends CodecOption<O> {
      constructor (value?: any) {
        super(Type, value);
      }
    };
  }

  get value (): T | undefined {
    return this._hasValue
      ? this.raw.raw
      : undefined;
  }

  byteLength (): number {
    const childLength = this._hasValue
      ? this.raw.byteLength()
      : 0;

    return 1 + childLength;
  }

  fromJSON (input: any): CodecOption<T> {
    this._hasValue = !isUndefined(input);

    if (this._hasValue) {
      this.raw.fromJSON(input);
    }

    return this;
  }

  fromU8a (input: Uint8Array): CodecOption<T> {
    this._hasValue = input[0] === 1;

    if (this._hasValue) {
      this.raw.fromU8a(input.subarray(1));
    }

    return this;
  }

  toJSON (): any {
    return this._hasValue
      ? this.raw.toJSON()
      : undefined;
  }

  toU8a (): Uint8Array {
    const u8a = new Uint8Array(this.byteLength());

    if (this._hasValue) {
      u8a.set([1]);
      u8a.set(this.raw.toU8a(), 1);
    }

    return u8a;
  }

  toString (): string {
    return this._hasValue
      ? this.raw.toString()
      : '';
  }
}
