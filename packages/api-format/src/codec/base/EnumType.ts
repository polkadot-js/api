// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Base } from '../types';

// This implements an enum, that based on the value wraps a different type. It is effectively an
// extension to enum.
//
// TODO:
//   - As per Enum, actually use TS enum
//   - It should rather probably extend Enum instead of copying code
//   - There doesn't actually seem to be a way to get to the actual determined/wrapped value
export default class CodecEnumType <T> implements Base<Base<T>> {
  private _Type: Array<{ new(value?: any): Base<any> }>;
  private _index: number;
  private _strings: Array<string>;

  raw: Base<T>;

  constructor (Type: Array<{ new(value?: any): Base<any> }>, strings: Array<string>, index: number = 0) {
    this._Type = Type;
    this._index = index;
    this._strings = strings;
    this.raw = new Type[index]();
  }

  byteLength (): number {
    return 1 + this.raw.byteLength();
  }

  fromJSON (input: any): CodecEnumType<T> {
    throw new Error('CodecEnumType:fromJSON: unimplemented');
  }

  fromU8a (input: Uint8Array): CodecEnumType<T> {
    this._index = input[0];
    this.raw = new this._Type[this._index]().fromU8a(input.subarray(1)) as Base<any>;

    return this;
  }

  toJSON (): any {
    return this.raw;
  }

  toU8a (): Uint8Array {
    throw new Error('CodecEnumType:toU8a: unimplemented');
  }

  toNumber (): number {
    return this._index;
  }

  toString (): string {
    return this._strings[this._index];
  }
}
