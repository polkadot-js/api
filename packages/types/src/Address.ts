// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import decodeAddress from '@polkadot/keyring/address/decode';
import isHex from '@polkadot/util/is/hex';
import isU8a from '@polkadot/util/is/u8a';
import u8aConcat from '@polkadot/util/u8a/concat';
import u8aToHex from '@polkadot/util/u8a/toHex';
import u8aToU8a from '@polkadot/util/u8a/toU8a';

import AccountId from './AccountId';
import AccountIndex from './AccountIndex';
import Base from './codec/Base';

const ACCOUNT_ID_PREFIX = new Uint8Array([0xff]);

// A wrapper around an AccountId and/or AccountIndex that is encoded with a prefix.
// Since we are dealing with underlying publicKeys (or shorter encoded addresses),
// we extend from Base with an AccountId/AccountIndex wrapper. Basically the Address
// is encoded as
//   [ <prefix-byte>, ...publicKey/...bytes ]
export default class Address extends Base<AccountId | AccountIndex> {
  constructor (value: Address | AccountId | AccountIndex | Uint8Array | string = new Uint8Array()) {
    super(
      Address.decodeAddress(value)
    );
  }

  static decodeAddress (value: Address | AccountId | AccountIndex | Uint8Array | string): AccountId | AccountIndex {
    if (value instanceof Address) {
      return value.raw;
    } else if (value instanceof AccountId || value instanceof AccountIndex) {
      return value;
    } else if (Array.isArray(value)) {
      return Address.decodeAddress(u8aToU8a(value));
    } else if (isU8a(value)) {
      if (value[0] === 0xff) {
        return new AccountId(value.subarray(1));
      }
      return value.length === 32
        ? new AccountId(value)
        : new AccountIndex(value);
    } else if (isHex(value)) {
      return value.length === 66
        ? new AccountId(value)
        : new AccountIndex(value);
    }

    const decoded = decodeAddress(value);

    // NOTE For AccountIndex this is really not the most efficient, however in the case
    // of u8a it expects the index to be in frony of the data. So, please it and add it.
    return decoded.length === 32
      ? new AccountId(decoded)
      : new AccountIndex(
        u8aConcat(
          AccountIndex.writeLength(decoded),
          decoded
        )
      );
  }

  byteLength (): number {
    return this.raw.byteLength() + (
      this.raw instanceof AccountIndex
        ? 0
        : 1
    );
  }

  toHex (): string {
    return u8aToHex(this.toU8a());
  }

  toJSON (): any {
    return this.raw.toJSON();
  }

  toString (): string {
    return this.raw.toString();
  }

  toU8a (isBare?: boolean): Uint8Array {
    return isBare || this.raw instanceof AccountIndex
      ? this.raw.toU8a(isBare)
      : u8aConcat(
        ACCOUNT_ID_PREFIX,
        this.raw.toU8a(isBare)
      );
  }
}
