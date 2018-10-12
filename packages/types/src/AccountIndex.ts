// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import decodeAddress from '@polkadot/keyring/address/decode';
import encodeAddress from '@polkadot/keyring/address/encode';
import isU8a from '@polkadot/util/is/u8a';
import u8aConcat from '@polkadot/util/u8a/concat';

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

  static decodeAccountIndex (value: AnyU8a): Uint8Array {
    if (value instanceof U8a) {
      return value.raw;
    } else if (Array.isArray(value)) {
      return AccountIndex.decodeAccountIndex(Uint8Array.from(value));
    } else if (isU8a(value)) {
      if (!value.length) {
        return value;
      }

      const [offset, length] = AccountIndex.readLength(value);

      return value.subarray(offset, offset + length);
    }

    return decodeAddress(value);
  }

  static readLength (input: Uint8Array): [number, number] {
    const first = input[0];

    if (first <= 0xef) {
      return [0, 1];
    } else if (first === 0xfc) {
      return [1, 2];
    } else if (first === 0xfd) {
      return [1, 4];
    } else if (first === 0xfe) {
      return [1, 8];
    }

    throw new Error(`Invalid account index byte, 0x${first.toString(16)}`);
  }

  static writeLength (input: Uint8Array): Uint8Array {
    switch (input.length) {
      case 1: return new Uint8Array([]);
      case 2: return new Uint8Array([0xfc]);
      case 4: return new Uint8Array([0xfd]);
      case 8: return new Uint8Array([0xfe]);
    }

    throw new Error(`Invalid account index length, ${input.length}`);
  }

  fromJSON (input: any): AccountIndex {
    super.fromJSON(AccountIndex.decodeAccountIndex(input));

    return this;
  }

  fromU8a (input: Uint8Array): AccountIndex {
    const [offset, length] = AccountIndex.readLength(input);

    super.fromU8a(input.subarray(offset, offset + length));

    return this;
  }

  toJSON (): any {
    return this.toString();
  }

  toU8a (isBare?: boolean): Uint8Array {
    return isBare
      ? this.raw
      : u8aConcat(
        AccountIndex.writeLength(this.raw),
        this.raw
      );
  }

  toString (): string {
    return encodeAddress(this.raw);
  }
}
