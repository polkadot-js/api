// Copyright 2017-2018 @polkadot/api-format authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import u8aFromUtf8 from '@polkadot/util/u8a/fromUtf8';
import u8aToUtf8 from '@polkadot/util/u8a/toUtf8';
import u8aConcat from '@polkadot/util/u8a/concat';

import CodecBase from './base/Base';
import Length from './base/LengthCompact';

// This is a string wrapper, along with the length. It is used both for strings as well
// as stuff like documentation.
//
// TODO
//   - Strings should probably be trimmed (docs do come through with extra padding)
//   - Potentially we want a "TypeString" extension to this. Basically something that
//     wraps the `Balance`, `T::AccountId`, etc. The reasoning - with a "TypeString"
//     we can nicely strip types down like "T::AcountId" -> "AccountId"
export default class String extends CodecBase<string> {
  private _length: Length;

  constructor (value: string = '') {
    super(value);

    this._length = new Length(value.length);
  }

  get length (): number {
    return this._length.toNumber();
  }

  byteLength (): number {
    return this.raw.length +
      this._length.byteLength();
  }

  fromJSON (input: any): String {
    throw new Error('String::fromJSON: unimplemented');
  }

  fromU8a (input: Uint8Array): String {
    this._length.fromU8a(input);

    const length = this._length.toNumber();
    const offset = this._length.byteLength();

    this.raw = u8aToUtf8(input.subarray(offset, offset + length));

    return this;
  }

  toJSON (): any {
    return this.toString();
  }

  toString (): string {
    return this.raw;
  }

  toU8a (): Uint8Array {
    return u8aConcat(
      this._length.toU8a(),
      u8aFromUtf8(this.raw)
    );
  }
}
