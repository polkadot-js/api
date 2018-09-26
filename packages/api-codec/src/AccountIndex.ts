// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AnyU8a } from './types';

import u8aToHex from '@polkadot/util/u8a/toHex';
import u8aToU8a from '@polkadot/util/u8a/toU8a';

import U8a from './codec/U8a';

// A wrapper around an AccountIndex, which is a shortened, variable-length encoding
// for an Account. We extends from U8a which is basically
// just a Uint8Array wrapper.
export default class AccountIndex extends U8a {
  constructor (value: AnyU8a = new Uint8Array()) {
    super(
      value instanceof U8a
        ? value.raw
        : AccountIndex.decode(value)
    );
  }

  // FIXME Not 100% sure how to handle the encoding of short addresses. It is (mostly)
  // unused atm, options are to go to hex or to utf8. Here we go the hex route.
  static encode (value: Uint8Array): string {
    return u8aToHex(value);
  }

  static decode (value: string | Uint8Array | Array<number>): Uint8Array {
    return u8aToU8a(value);
  }

  fromJSON (input: any): AccountIndex {
    super.fromJSON(AccountIndex.decode(input));

    return this;
  }

  // TODO Without specific data and actual real-world tests, unsure about how the
  // actual encoding here fits together. It is quite possibly prefix-encoded, so
  // prefixes may have to be stripped.
  fromU8a (input: Uint8Array): AccountIndex {
    super.fromU8a(input);

    return this;
  }

  toJSON (): any {
    return this.toString();
  }

  toString (): string {
    return AccountIndex.encode(this.raw);
  }
}
