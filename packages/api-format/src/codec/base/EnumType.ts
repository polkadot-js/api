// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Base } from '../types';

export default class CodecEnumType <T> implements Base<Base<T>> {
  private Type: Array<{ new(value?: any): Base<T> }>;
  private index: number;
  private strings: Array<string>;

  protected _raw: Base<T>;

  constructor (Type: Array<{ new(value?: any): Base<T> }>, strings: Array<string>, index: number = 0) {
    this.Type = Type;
    this.index = index;
    this.strings = strings;
    this._raw = new Type[index]();
  }

  byteLength (): number {
    return 1 + this._raw.byteLength();
  }

  fromJSON (input: any): CodecEnumType<T> {
    throw new Error('CodecEnumType:fromJSON: unimplemented');
  }

  fromU8a (input: Uint8Array): CodecEnumType<T> {
    this.index = input[0];
    this._raw = new this.Type[this.index]().fromU8a(input.subarray(1)) as Base<any>;

    return this;
  }

  toJSON (): any {
    return this._raw;
  }

  toU8a (): Uint8Array {
    throw new Error('CodecEnumType:toU8a: unimplemented');
  }

  toString (): string {
    return this.strings[this.index];
  }
}
