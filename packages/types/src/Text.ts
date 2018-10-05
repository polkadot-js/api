// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import u8aConcat from '@polkadot/util/u8a/concat';
import u8aFromUtf8 from '@polkadot/util/u8a/fromUtf8';
import u8aToHex from '@polkadot/util/u8a/toHex';
import u8aToUtf8 from '@polkadot/util/u8a/toUtf8';

import Compact from './codec/Compact';
import { Codec } from './types';

// This is a string wrapper, along with the length. It is used both for strings as well
// as stuff like documentation.
//
// TODO
//   - Potentially we want a "TypeString" extension to this. Basically something that
//     wraps the `Balance`, `T::AccountId`, etc. The reasoning - with a "TypeString"
//     we can nicely strip types down like "T::AcountId" -> "AccountId"
export default class Text extends String implements Codec<Text> {
  constructor (value: Text | string = '') {
    super(
      value.trim()
    );
  }

  byteLength (): number {
    return this.length + Compact.encode(this.length).length;
  }

  fromJSON (input: any): Text {
    // FIXME Same as below
    return new Text(`${input || ''}`);
  }

  fromU8a (input: Uint8Array): Text {
    const [offset, length] = Compact.decode(input);
    // FIXME this returns a new Object unfortunately, can't "replace" current value
    // Two solutions:
    // - either use static
    // - or completely remove from*, and force to use constructor
    return new Text(u8aToUtf8(input.subarray(offset, offset + length.toNumber())));
  }

  toHex () {
    return u8aToHex(this.toU8a());
  }

  toJSON (): any {
    return this.toString();
  }

  toU8a (isBare?: boolean): Uint8Array {
    const encoded = u8aFromUtf8(this.toString());

    return isBare
      ? encoded
      : u8aConcat(
        Compact.encode(this.length),
        encoded
      );
  }
}
