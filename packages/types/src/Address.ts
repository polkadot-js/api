// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { decodeAddress } from '@polkadot/keyring';
import { hexToU8a, isHex, isU8a, u8aConcat, u8aToHex, u8aToU8a } from '@polkadot/util';

import AccountId from './AccountId';
import AccountIndex from './AccountIndex';
import Base from './codec/Base';

export const ACCOUNT_ID_PREFIX = new Uint8Array([0xff]);

// A wrapper around an AccountId and/or AccountIndex that is encoded with a prefix.
// Since we are dealing with underlying publicKeys (or shorter encoded addresses),
// we extend from Base with an AccountId/AccountIndex wrapper. Basically the Address
// is encoded as
//   [ <prefix-byte>, ...publicKey/...bytes ]
export default class Address extends Base<AccountId | AccountIndex> {
  constructor (value: Address | AccountId | AccountIndex | Array<number> | Uint8Array | string = new Uint8Array()) {
    super(
      Address.decodeAddress(value)
    );
  }

  static decodeAddress (value: Address | AccountId | AccountIndex | Array<number> | Uint8Array | string): AccountId | AccountIndex {
    if (value instanceof Address) {
      return value.raw;
    } else if (value instanceof AccountId || value instanceof AccountIndex) {
      return value;
    } else if (Array.isArray(value)) {
      return Address.decodeAddress(u8aToU8a(value));
    } else if (isU8a(value)) {
      // This allows us to instantiate an address with a raw publicKey. Do this first before
      // we checking the first byte, otherwise we may split an already-existent valid address
      if (value.length === 32) {
        return new AccountId(value);
      } else if (value[0] === 0xff) {
        return new AccountId(value.subarray(1));
      }

      const [offset, length] = AccountIndex.readLength(value);

      return new AccountIndex(value.subarray(offset, offset + length), length);
    } else if (isHex(value)) {
      return Address.decodeAddress(hexToU8a(value));
    }

    const decoded = decodeAddress(value);

    return decoded.length === 32
      ? new AccountId(decoded)
      : new AccountIndex(decoded, decoded.length);
  }

  get encodedLength (): number {
    const dataLength = this.raw.encodedLength;

    return dataLength + (
      // for 1 byte AccountIndexes, we are not adding a specific prefix
      dataLength > 1
        ? 1
        : 0
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
    const encoded = this.raw.toU8a(isBare);

    return isBare
      ? encoded
      : u8aConcat(
        this.raw instanceof AccountIndex
          ? AccountIndex.writeLength(encoded)
          : ACCOUNT_ID_PREFIX,
        encoded
      );
  }
}
