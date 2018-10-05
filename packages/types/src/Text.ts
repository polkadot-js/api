// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import isFunction from '@polkadot/util/is/function';
import isString from '@polkadot/util/is/string';
import u8aFromUtf8 from '@polkadot/util/u8a/fromUtf8';
import u8aToUtf8 from '@polkadot/util/u8a/toUtf8';
import u8aConcat from '@polkadot/util/u8a/concat';

import { AnyU8a } from '@polkadot/types/types';
import Base from './codec/Base';
import Compact from './codec/Compact';
import U8a from './codec/U8a';

// This is a string wrapper, along with the length. It is used both for strings as well
// as stuff like documentation.
//
// TODO
//   - Strings should probably be trimmed (docs do come through with extra padding)
//   - Potentially we want a "TypeString" extension to this. Basically something that
//     wraps the `Balance`, `T::AccountId`, etc. The reasoning - with a "TypeString"
//     we can nicely strip types down like "T::AcountId" -> "AccountId"
export default class Text extends Base<string> {
  constructor (value: Text | string | AnyU8a = '') {
    super(
      Text.decode(value)
    );
  }

  static decode (input: any): string {
    if (isString(input)) {
      return input;
    } else if (input instanceof Text) {
      return input.raw;
    } else if (input instanceof Uint8Array) {
      const [offset, length] = Compact.decode(input);
      return u8aToUtf8(input.subarray(offset, offset + length.toNumber()));
    } else if (Array.isArray(input)) {
      return Text.decode(Uint8Array.from(input));
    } else if (input instanceof U8a) {
      return Text.decode(input.raw);
    } else if (isFunction(input.toString)) {
      return input.toString();
    } else {
      return `${input}`;
    }
  }

  get length (): number {
    return this.raw.length;
  }

  byteLength (): number {
    return this.length + Compact.encode(this.length).length;
  }

  fromU8a (input: Uint8Array): Text {
    const [offset, length] = Compact.decode(input);

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
        Compact.encode(this.length),
        encoded
      );
  }
}
