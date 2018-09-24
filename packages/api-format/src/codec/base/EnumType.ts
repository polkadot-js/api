// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import CodecBase from './Base';

// This implements an enum, that based on the value wraps a different type. It is effectively an
// extension to enum where the value type is determined by the actual index.
//
// TODO:
//   - As per Enum, actually use TS enum
//   - It should rather probably extend Enum instead of copying code
//   - There doesn't actually seem to be a way to get to the actual determined/wrapped value
export default class CodecEnumType <T> extends CodecBase<CodecBase<T>> {
  private _Type: Array<{ new(value?: any): CodecBase }>;
  private _index: number;
  private _strings: Array<string>;

  constructor (Type: Array<{ new(value?: any): CodecBase }>, strings: Array<string>, index: number = 0) {
    super(
      new Type[index]()
    );

    this._Type = Type;
    this._index = index;
    this._strings = strings;
  }

  byteLength (): number {
    return 1 + this.raw.byteLength();
  }

  fromJSON (input: any): CodecEnumType<T> {
    throw new Error('CodecEnumType:fromJSON: unimplemented');
  }

  fromU8a (input: Uint8Array): CodecEnumType<T> {
    this._index = input[0];
    this.raw = new this._Type[this._index]().fromU8a(input.subarray(1));

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
