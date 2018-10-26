// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';
import { decodeAddress } from '@polkadot/keyring';
import { hexToU8a, isBn, isHex, isNumber, isU8a, u8aConcat, u8aToHex, u8aToU8a, u8aToBn } from '@polkadot/util';

import AccountId from './AccountId';
import AccountIndex from './AccountIndex';
import Base from './codec/Base';

type AnyAddress = BN | Address | AccountId | AccountIndex | Array<number> | Uint8Array | number | string;

export const ACCOUNT_ID_PREFIX = new Uint8Array([0xff]);

// A wrapper around an AccountId and/or AccountIndex that is encoded with a prefix.
// Since we are dealing with underlying publicKeys (or shorter encoded addresses),
// we extend from Base with an AccountId/AccountIndex wrapper. Basically the Address
// is encoded as
//   [ <prefix-byte>, ...publicKey/...bytes ]
export default class Address extends Base<AccountId | AccountIndex> {
  constructor (value: AnyAddress = new Uint8Array()) {
    super(
      Address.decodeAddress(value)
    );
  }

  static decodeAddress (value: AnyAddress): AccountId | AccountIndex {
    if (isBn(value) || isNumber(value)) {
      return new AccountIndex(value);
    } else if (value instanceof Address) {
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

      return new AccountIndex(u8aToBn(value.subarray(offset, offset + length), true));
    } else if (isHex(value)) {
      return Address.decodeAddress(hexToU8a(value));
    }

    const decoded = decodeAddress(value);

    return decoded.length === 32
      ? new AccountId(decoded)
      : new AccountIndex(u8aToBn(decoded, true));
  }

  get rawLength (): number {
    return this.raw instanceof AccountIndex
      ? AccountIndex.calcLength(this.raw.toBn())
      : this.raw.encodedLength;
  }

  get encodedLength (): number {
    const rawLength = this.rawLength;

    return rawLength + (
      // for 1 byte AccountIndexes, we are not adding a specific prefix
      rawLength > 1
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
    const encoded = this.raw.toU8a().subarray(0, this.rawLength);

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
