// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import u8aFromUtf8 from '@polkadot/util/u8a/fromUtf8';
import u8aToUtf8 from '@polkadot/util/u8a/toUtf8';
import u8aConcat from '@polkadot/util/u8a/concat';

import Base from './codec/Base';
import Length from './codec/Length';

// This is a string wrapper, along with the length. It is used both for strings as well
// as stuff like documentation.
//
// TODO
//   - Strings should probably be trimmed (docs do come through with extra padding)
//   - Potentially we want a "TypeString" extension to this. Basically something that
//     wraps the `Balance`, `T::AccountId`, etc. The reasoning - with a "TypeString"
//     we can nicely strip types down like "T::AcountId" -> "AccountId"
export default class Text extends Base<string> {
  protected _length: Length;

  constructor (value: Text | string = '') {
    super(
      value instanceof Text
        ? value.raw
        : value.trim()
    );

    this._length = new Length(value.length);
  }

  get length (): number {
    return this.raw.length;
  }

  byteLength (): number {
    // NOTE String gets trimmed in the fromU8a, so get the original length from the length
    // placeholder and the associtated byteLength from that encoding
    return this._length.toNumber() +
      this._length.byteLength();
  }

  fromJSON (input: any): Text {
    this.raw = `${input}`;

    return this;
  }

  fromU8a (input: Uint8Array): Text {
    this._length.fromU8a(input);

    const length = this._length.toNumber();
    const offset = this._length.byteLength();

    this.raw = u8aToUtf8(input.subarray(offset, offset + length)).trim();

    return this;
  }

  toJSON (): any {
    return this.toString();
  }

  toString (): string {
    return this.raw;
  }

  toU8a (): Uint8Array {
    // NOTE Since we trim in the fromU8a, here we re-calculate the actual length
    const encoded = u8aFromUtf8(this.raw);

    this._length.setValue(encoded.length);

    return u8aConcat(
      this._length.toU8a(),
      encoded
    );
  }
}
