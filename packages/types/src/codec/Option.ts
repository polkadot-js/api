// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { isNull, isU8a, isUndefined, u8aToHex } from '@polkadot/util';

import Base from './Base';
import { Codec, Constructor } from '../types';
import Null from '../Null';

// An Option is an optional field. Basically the first byte indicates that there is
// is value to follow. If the byte is `1` there is an actual value. So the Option
// implements that - decodes, checks for optionality and wraps the required structure
// with a value if/as required/found.
export default class Option<T extends Codec> extends Base<T> implements Codec {
  constructor (Type: Constructor, value?: any) {
    super(
      Option.decodeOption(Type, value)
    );
  }

  static decodeOption<O> (Type: Constructor, value?: any): Codec {
    if (isU8a(value)) {
      if (value[0] === 0) {
        return new Null();
      }

      return new Type(value.subarray(1));
    }

    return isNull(value) || isUndefined(value) || value instanceof Null
      ? new Null()
      : new Type(value);

  }

  static with<O extends Codec> (Type: Constructor): Constructor<Option<O>> {
    return class extends Option<O> {
      constructor (value?: any) {
        super(Type, value);
      }
    };
  }

  get isNone (): boolean {
    return this.raw instanceof Null;
  }

  get isSome (): boolean {
    return !this.isNone;
  }

  get value (): Codec {
    return this.raw;
  }

  get encodedLength (): number {
    return 1 + this.raw.encodedLength;
  }

  toHex (): string {
    return u8aToHex(this.toU8a());
  }

  toJSON (): any {
    this.raw.toJSON();
  }

  toU8a (isBare?: boolean): Uint8Array {
    if (isBare) {
      return this.raw.toU8a(true);
    }

    const u8a = new Uint8Array(this.encodedLength);

    if (this.isSome) {
      u8a.set([1]);
      u8a.set(this.raw.toU8a(), 1);
    }

    return u8a;
  }

  toString (): string {
    return this.raw.toString();
  }
}
