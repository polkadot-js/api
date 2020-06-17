// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Registry } from '../types';

import BN from 'bn.js';
import { isBn, isHex, isNumber, isU8a, u8aConcat, u8aToHex, u8aToU8a, u8aToBn } from '@polkadot/util';
import { decodeAddress } from '@polkadot/util-crypto';

import Base from '../codec/Base';
import AccountId from './AccountId';
import AccountIndex from './AccountIndex';

type AnyAddress = BN | Address | AccountId | AccountIndex | number[] | Uint8Array | number | string;

export const ACCOUNT_ID_PREFIX = new Uint8Array([0xff]);

/** @internal */
function decodeString (registry: Registry, value: string): AccountId | AccountIndex {
  const decoded = decodeAddress(value);

  return decoded.length === 32
    ? registry.createType('AccountId', decoded)
    : registry.createType('AccountIndex', u8aToBn(decoded, true));
}

/** @internal */
function decodeU8a (registry: Registry, value: Uint8Array): AccountId | AccountIndex {
  // This allows us to instantiate an address with a raw publicKey. Do this first before
  // we checking the first byte, otherwise we may split an already-existent valid address
  if (value.length === 32) {
    return registry.createType('AccountId', value);
  } else if (value[0] === 0xff) {
    return registry.createType('AccountId', value.subarray(1));
  }

  const [offset, length] = AccountIndex.readLength(value);

  return registry.createType('AccountIndex', u8aToBn(value.subarray(offset, offset + length), true));
}

/**
 * @name Address
 * @description
 * A wrapper around an AccountId and/or AccountIndex that is encoded with a prefix.
 * Since we are dealing with underlying publicKeys (or shorter encoded addresses),
 * we extend from Base with an AccountId/AccountIndex wrapper. Basically the Address
 * is encoded as `[ <prefix-byte>, ...publicKey/...bytes ]` as per spec
 */
export default class Address extends Base<AccountId | AccountIndex> {
  constructor (registry: Registry, value: AnyAddress = new Uint8Array()) {
    super(registry, Address._decodeAddress(registry, value));
  }

  /** @internal */
  private static _decodeAddress (registry: Registry, value: AnyAddress): AccountId | AccountIndex {
    if (value instanceof AccountId || value instanceof AccountIndex) {
      return value;
    } else if (value instanceof Address) {
      return value._raw;
    } else if (isBn(value) || isNumber(value)) {
      return registry.createType('AccountIndex', value);
    } else if (Array.isArray(value) || isHex(value) || isU8a(value)) {
      return decodeU8a(registry, u8aToU8a(value));
    }

    return decodeString(registry, value);
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public get encodedLength (): number {
    const rawLength = this._rawLength;

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
  protected get _rawLength (): number {
    return this._raw instanceof AccountIndex
      ? AccountIndex.calcLength(this._raw)
      : this._raw.encodedLength;
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
    const encoded = this._raw.toU8a().subarray(0, this._rawLength);

    return isBare
      ? encoded
      : u8aConcat(
        this._raw instanceof AccountIndex
          ? AccountIndex.writeLength(encoded)
          : ACCOUNT_ID_PREFIX,
        encoded
      );
  }
}
