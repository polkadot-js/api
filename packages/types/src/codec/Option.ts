// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import isNull from '@polkadot/util/is/null';
import isU8a from '@polkadot/util/is/u8a';
import isUndefined from '@polkadot/util/is/undefined';

import Base from './Base';
import { Constructor } from '../types';
import Null from '../Null';

// An Option is an optional field. Basically the first byte indicates that there is
// is value to follow. If the byte is `1` there is an actual value. So the Option
// implements that - decodes, checks for optionality and wraps the required structure
// with a value if/as required/found.
export default class Option<T> extends Base<Base<T>> {
  private _isEmpty: boolean;

  constructor (Type: Constructor<Base<T>>, value?: any) {
    super(
      Option.decodeOption(Type, value)
    );

    this._isEmpty = isNull(value) || isUndefined(value);
  }

  static decodeOption<O> (Type: Constructor<Base<O>>, value?: any): Base {
    if (isU8a(value)) {
      if (value[0] === 0) {
        return new Null();
      }

      return new Type(value.subarray(1));
    }

    return new Type(
      isNull(value) || isUndefined(value)
        ? undefined
        : value
    );
  }

  static with<O> (Type: Constructor<Base<O>>): Constructor<Option<O>> {
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
      : this.raw.encodedLength;

    return 1 + childLength;
  }

  toJSON (): any {
    return this._isEmpty
      ? undefined
      : this.raw.toJSON();
  }

  toU8a (isBare?: boolean): Uint8Array {
    if (isBare) {
      return this.raw.toU8a(true);
    }

    const u8a = new Uint8Array(this.encodedLength);

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
