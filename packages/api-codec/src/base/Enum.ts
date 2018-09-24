// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import CodecBase from './Base';

// A codec wrapper for an enum. Enums are encoded as a single byte, where the byte
// is a zero-indexed value. This class allows you to retrieve the value either
// by `toNumber()` exposing the actual raw index, or `toString()` returning a
// string representation (as provided as part of the constructor)
//
// TODO:
//   - It would be great if this could actually wrap actual TS enums
export default class CodecEnum extends CodecBase<number> {
  private _strings: Array<string>;

  constructor (strings: Array<string>, value: number = 0) {
    super(value);

    this._strings = strings;
  }

  byteLength (): number {
    return 1;
  }

  fromJSON (input: any): CodecEnum {
    this.raw = input;

    return this;
  }

  fromU8a (input: Uint8Array): CodecEnum {
    this.raw = input[0];

    return this;
  }

  toJSON (): any {
    return this.raw;
  }

  toU8a (): Uint8Array {
    return new Uint8Array([this.raw]);
  }

  toNumber (): number {
    return this.raw;
  }

  toString (): string {
    return this._strings[this.raw];
  }
}
