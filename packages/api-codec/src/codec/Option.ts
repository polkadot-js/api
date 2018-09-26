// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import isUndefined from '@polkadot/util/is/undefined';

import Base from './Base';

// An Option is an optional field. Basically the first byte indicates that there is
// is value to follow. If the byte is `1` there is an actual value. So the Option
// implements that - decodes, checks for optionality and wraps the required structure
// with a value if/as required/found.
export default class Option <T> extends Base<Base<T>> {
  private _isEmpty: boolean;

  constructor (Value: { new(value?: any): Base<T> }, value?: any) {
    super(
      new Value(value)
    );

    this._isEmpty = isUndefined(value);
  }

  static with <O> (Type: { new(value?: any): Base<O> }): { new(value?: any): Option<O> } {
    return class extends Option<O> {
      constructor (value?: any) {
        super(Type, value);
      }
    };
  }

  get isEmpty (): boolean {
    return this._isEmpty;
  }

  get value (): T | undefined {
    return this._isEmpty
      ? undefined
      : this.raw.raw;
  }

  byteLength (): number {
    const childLength = this._isEmpty
      ? 0
      : this.raw.byteLength();

    return 1 + childLength;
  }

  fromJSON (input: any): Option<T> {
    this._isEmpty = isUndefined(input);

    if (!this._isEmpty) {
      this.raw.fromJSON(input);
    }

    return this;
  }

  fromU8a (input: Uint8Array): Option<T> {
    this._isEmpty = input[0] === 0;

    if (!this._isEmpty) {
      this.raw.fromU8a(input.subarray(1));
    }

    return this;
  }

  toJSON (): any {
    return this._isEmpty
      ? undefined
      : this.raw.toJSON();
  }

  toU8a (): Uint8Array {
    const u8a = new Uint8Array(this.byteLength());

    if (!this._isEmpty) {
      u8a.set([1]);
      u8a.set(this.raw.toU8a(), 1);
    }

    return u8a;
  }

  toString (): string {
    return this._isEmpty
      ? ''
      : this.raw.toString();
  }
}
