// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import u8aConcat from '@polkadot/util/u8a/concat';
import u8aToHex from '@polkadot/util/u8a/toHex';
import toU8a from '@polkadot/util/u8a/toU8a';

import Base from './Base';
import Length from './LengthCompact';

// A CodecU8a. The significant difference between this and a normal Uint8Array is that
// this version allows for length-encoding. (i.e. it is a variable-item codec, the same
// as what is found in String and Array)
export default class CodecU8a extends Base<Uint8Array> {
  protected _length: Length;

  constructor (value: Uint8Array = new Uint8Array()) {
    super(value);

    this._length = new Length(value.length);
  }

  byteLength (): number {
    return this._length.byteLength() +
      this._length.toNumber();
  }

  fromJSON (input: any): CodecU8a {
    this.raw = toU8a(input);
    this._length.setValue(this.raw.length);

    return this;
  }

  fromU8a (input: Uint8Array): CodecU8a {
    this._length.fromU8a(input);

    const length = this._length.toNumber();
    const offset = this._length.byteLength();

    this.raw = input.subarray(offset, offset + length);

    return this;
  }

  toJSON (): any {
    return this.raw.map((value) =>
      value
    );
  }

  toU8a (): Uint8Array {
    return u8aConcat(
      this._length.toU8a(),
      this.raw
    );
  }

  toString (): string {
    return u8aToHex(this.raw);
  }
}
