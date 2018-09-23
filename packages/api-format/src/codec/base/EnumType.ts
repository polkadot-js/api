// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Base } from '../types';

export default class CodecEnumType <T> implements Base<Base<T>> {
  private Type: Array<{ new(value?: any): Base<any> }>;
  private index: number;
  private strings: Array<string>;

  raw: Base<T>;

  constructor (Type: Array<{ new(value?: any): Base<any> }>, strings: Array<string>, index: number = 0) {
    this.Type = Type;
    this.index = index;
    this.strings = strings;
    this.raw = new Type[index]();
  }

  byteLength (): number {
    return 1 + this.raw.byteLength();
  }

  fromJSON (input: any): CodecEnumType<T> {
    throw new Error('CodecEnumType:fromJSON: unimplemented');
  }

  fromU8a (input: Uint8Array): CodecEnumType<T> {
    this.index = input[0];
    this.raw = new this.Type[this.index]().fromU8a(input.subarray(1)) as Base<any>;

    return this;
  }

  toJSON (): any {
    return this.raw;
  }

  toU8a (): Uint8Array {
    throw new Error('CodecEnumType:toU8a: unimplemented');
  }

  toString (): string {
    return this.strings[this.index];
  }
}
