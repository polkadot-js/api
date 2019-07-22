// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { hexToU8a, isBn, isHex, isNumber, isU8a, u8aConcat, u8aToHex, u8aToU8a, u8aToBn } from '@polkadot/util';
import { decodeAddress } from '@polkadot/util-crypto';

import Base from '../codec/Base';
import AccountId from './AccountId';
import AccountIndex from './AccountIndex';

type AnyAddress = BN | Address | AccountId | AccountIndex | number[] | Uint8Array | number | string;

export const ACCOUNT_ID_PREFIX = new Uint8Array([0xff]);

/**
 * @name Address
 * @description
 * A wrapper around an AccountId and/or AccountIndex that is encoded with a prefix.
 * Since we are dealing with underlying publicKeys (or shorter encoded addresses),
 * we extend from Base with an AccountId/AccountIndex wrapper. Basically the Address
 * is encoded as `[ <prefix-byte>, ...publicKey/...bytes ]` as per spec
 */
export default class Address extends Base<AccountId | AccountIndex> {
  public constructor (value: AnyAddress = new Uint8Array()) {
    super(
      Address.decodeAddress(value)
    );
  }

  public static decodeAddress (value: AnyAddress): AccountId | AccountIndex {
    if (value instanceof AccountId || value instanceof AccountIndex) {
      return value;
    } else if (isBn(value) || isNumber(value)) {
      return new AccountIndex(value);
    } else if (value instanceof Address) {
      return value.raw;
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

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public get encodedLength (): number {
    const rawLength = this.rawLength;

    return rawLength + (
      // for 1 byte AccountIndexes, we are not adding a specific prefix
      rawLength > 1
        ? 1
        : 0
    );
  }

  /**
   * @description The length of the raw value, either AccountIndex or AccountId
   */
  public get rawLength (): number {
    return this.raw instanceof AccountIndex
      ? AccountIndex.calcLength(this.raw)
      : this.raw.encodedLength;
  }

  /**
   * @description Returns a hex string representation of the value
   */
  public toHex (): string {
    return u8aToHex(this.toU8a());
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return 'Address';
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  public toU8a (isBare?: boolean): Uint8Array {
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
