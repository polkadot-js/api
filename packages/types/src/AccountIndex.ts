// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import isU8a from '@polkadot/util/is/u8a';
import u8aToHex from '@polkadot/util/u8a/toHex';
import u8aToU8a from '@polkadot/util/u8a/toU8a';

import { AnyU8a } from './types';
import U8a from './codec/U8a';

// A wrapper around an AccountIndex, which is a shortened, variable-length encoding
// for an Account. We extends from U8a which is basically
// just a Uint8Array wrapper.
export default class AccountIndex extends U8a {
  constructor (value: AnyU8a = new Uint8Array()) {
    super(
      AccountIndex.decodeAccountIndex(value)
    );
  }

  // FIXME Not 100% sure how to handle the encoding of short addresses. It is (mostly)
  // unused atm, options are to go to hex or to utf8. Here we go the hex route.
  static encode (value: Uint8Array): string {
    return u8aToHex(value);
  }

  static decodeAccountIndex (value: AnyU8a): Uint8Array {
    if (value instanceof U8a) {
      return value.raw;
    } else if (isU8a(value)) {
      return value.subarray(0, AccountIndex.readLength(value));
    }
    return u8aToU8a(value);
  }

  // TODO Double check the +1 with actual e2e data
  static readLength (input: Uint8Array): number {
    const first = input[0];

    if (first <= 0xef) {
      return 1;
    } else if (first === 0xfc) {
      return 2 + 1;
    } else if (first === 0xfd) {
      return 4 + 1;
    } else if (first === 0xfe) {
      return 8 + 1;
    }

    throw new Error(`Invalid account index byte, 0x${first.toString(16)}`);
  }

  fromJSON (input: any): AccountIndex {
    super.fromJSON(AccountIndex.decodeAccountIndex(input));

    return this;
  }

  fromU8a (input: Uint8Array): AccountIndex {
    super.fromU8a(
      input.subarray(0, AccountIndex.readLength(input))
    );

    return this;
  }

  toJSON (): any {
    return this.toString();
  }

  toString (): string {
    return AccountIndex.encode(this.raw);
  }
}
