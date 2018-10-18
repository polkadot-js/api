// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { isFunction, isString, stringToU8a, u8aToString, u8aConcat } from '@polkadot/util';

import { AnyU8a } from '@polkadot/types/types';
import Base from './codec/Base';
import Compact, { DEFAULT_LENGTH_BITS } from './codec/Compact';
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
      Text.decodeText(value)
    );
  }

  static decodeText (input: any): string {
    if (isString(input)) {
      return input;
    } else if (input instanceof Text) {
      return input.raw;
    } else if (input instanceof Uint8Array) {
      const [offset, length] = Compact.decodeU8a(input, DEFAULT_LENGTH_BITS);
      return u8aToString(input.subarray(offset, offset + length.toNumber()));
    } else if (input instanceof U8a) {
      return Text.decodeText(input.raw);
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
    return this.length + Compact.encodeU8a(this.length, DEFAULT_LENGTH_BITS).length;
  }

  toJSON (): any {
    return this.toString();
  }

  toString (): string {
    return this.raw;
  }

  toU8a (isBare?: boolean): Uint8Array {
    const encoded = stringToU8a(this.raw);

    return isBare
      ? encoded
      : u8aConcat(
        Compact.encodeU8a(this.length, DEFAULT_LENGTH_BITS),
        encoded
      );
  }
}
