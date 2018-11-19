// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { isFunction, isString, stringToU8a, u8aToString, u8aConcat, u8aToHex } from '@polkadot/util';

import { AnyU8a, Codec } from './types';
import Compact, { DEFAULT_LENGTH_BITS } from './codec/Compact';

// This is a string wrapper, along with the length. It is used both for strings as well
// as stuff like documentation.
//
// TODO
//   - Strings should probably be trimmed (docs do come through with extra padding)
//   - Potentially we want a "TypeString" extension to this. Basically something that
//     wraps the `Balance`, `T::AccountId`, etc. The reasoning - with a "TypeString"
//     we can nicely strip types down like "T::AcountId" -> "AccountId"
export default class Text extends String implements Codec {
  constructor (value: Text | string | AnyU8a | { toString: () => string } = '') {
    super(
      Text.decodeText(value)
    );
  }

  private static decodeText (value: Text | string | AnyU8a | { toString: () => string }): string {
    if (isString(value)) {
      return value.toString();
    } else if (value instanceof Uint8Array) {
      const [offset, length] = Compact.decodeU8a(value, DEFAULT_LENGTH_BITS);

      return u8aToString(value.subarray(offset, offset + length.toNumber()));
    } else if (isFunction(value.toString)) {
      return value.toString();
    }

    return `${value}`;
  }

  get encodedLength (): number {
    return this.length + Compact.encodeU8a(this.length, DEFAULT_LENGTH_BITS).length;
  }

  toHex (): string {
    return u8aToHex(this.toU8a());
  }

  toJSON (): any {
    return this.toString();
  }

  toU8a (isBare?: boolean): Uint8Array {
    const encoded = stringToU8a(this.toString());

    return isBare
      ? encoded
      : u8aConcat(
        Compact.encodeU8a(this.length, DEFAULT_LENGTH_BITS),
        encoded
      );
  }
}
