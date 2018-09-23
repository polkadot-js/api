// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Base } from '../types';

import isNull from '@polkadot/util/is/null';

export default class CodecOption <T> implements Base<Base<T> | null> {
  private Value: { new(value?: any): Base<T> };

  protected _raw: Base<T> | null;

  constructor (Value: { new(value?: any): Base<T> }, value: any = null) {
    this.Value = Value;
    this._raw = isNull(value)
      ? new Value(value)
      : null;
  }

  static with <O extends Base<any>> (Type: { new(value?: any): O }): { new(value?: any): Base<O> } {
    return class extends CodecOption<O> {
      constructor (value?: any) {
        super(Type, value);
      }
    };
  }

  byteLength (): number {
    const childLength = this._raw
      ? this._raw.byteLength()
      : 0;

    return 1 + childLength;
  }

  fromJSON (input: any): CodecOption<T> {
    this._raw = input
      ? new this.Value().fromJSON(input) as Base<any>
      : null;

    return this;
  }

  fromU8a (input: Uint8Array): CodecOption<T> {
    this._raw = input[0] === 1
      ? new this.Value().fromU8a(input.subarray(1)) as Base<any>
      : null;

    return this;
  }

  toJSON (): any {
    return this._raw
      ? this._raw.toJSON()
      : undefined;
  }

  toU8a (): Uint8Array {
    const u8a = new Uint8Array(this.byteLength());

    if (this._raw) {
      u8a.set([1]);
      u8a.set(this._raw.toU8a(), 1);
    }

    return u8a;
  }

  toString (): string {
    return this._raw
      ? this._raw.toString()
      : '';
  }
}
