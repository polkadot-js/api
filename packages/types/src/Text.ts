// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import u8aFromUtf8 from '@polkadot/util/u8a/fromUtf8';
import u8aToUtf8 from '@polkadot/util/u8a/toUtf8';
import u8aConcat from '@polkadot/util/u8a/concat';

import Base from './codec/Base';
import Compact from './codec/Compact';

// This is a string wrapper, along with the length. It is used both for strings as well
// as stuff like documentation.
//
// TODO
//   - Strings should probably be trimmed (docs do come through with extra padding)
//   - Potentially we want a "TypeString" extension to this. Basically something that
//     wraps the `Balance`, `T::AccountId`, etc. The reasoning - with a "TypeString"
//     we can nicely strip types down like "T::AcountId" -> "AccountId"
export default class Text extends Base<string> {
  constructor (value: Text | string = '') {
    super(
      value instanceof Text
        ? value.raw
        : value.trim()
    );
  }

  get length (): number {
    return this.raw.length;
  }

  byteLength (): number {
    return this.length + Compact.encodeU8a(this.length).length;
  }

  fromU8a (input: Uint8Array): Text {
    const [offset, length] = Compact.decodeU8a(input);

    this.raw = u8aToUtf8(input.subarray(offset, offset + length.toNumber()));

    return this;
  }

  fromJSON (input: any): Text {
    this.raw = `${input || ''}`;

    return this;
  }

  toJSON (): any {
    return this.toString();
  }

  toString (): string {
    return this.raw;
  }

  toU8a (isBare?: boolean): Uint8Array {
    const encoded = u8aFromUtf8(this.raw);

    return isBare
      ? encoded
      : u8aConcat(
        Compact.encodeU8a(this.length),
        encoded
      );
  }
}
