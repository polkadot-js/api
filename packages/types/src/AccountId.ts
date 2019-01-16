// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyString, AnyU8a } from './types';

import { decodeAddress, encodeAddress } from '@polkadot/keyring';
import { hexToU8a, isHex, isString, isU8a, u8aToU8a } from '@polkadot/util';

import U8aFixed from './codec/U8aFixed';

/**
 * @name AccountId
 * @description
 * A wrapper around an AccountId/PublicKey representation. Since we are dealing with
 * underlying PublicKeys (32 bytes in length), we extend from U8aFixed which is
 * just a Uint8Array wrapper with a fixed length.
 */
export default class AccountId extends U8aFixed {
  constructor (value: AnyU8a = new Uint8Array()) {
    super(
      AccountId.decodeAccountId(value),
      256
    );
  }

  static encode (value: Uint8Array): string {
    return encodeAddress(value);
  }

  private static decodeAccountId (value: AnyU8a | AnyString): Uint8Array {
    if (isU8a(value) || Array.isArray(value)) {
      return u8aToU8a(value);
    } else if (isHex(value)) {
      return hexToU8a(value.toString());
    } else if (isString(value)) {
      return decodeAddress((value as AnyString).toString());
    }

    return value;
  }

  /**
   * @description Returns true if the type wraps a non-encodable value
   */
  get isEmpty (): boolean {
    return this.length !== 32;
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON (): any {
    return this.toString();
  }

  /**
   * @description Returns the string representation of the value
   */
  toString (): string {
    return this.isEmpty
      ? '-'
      : AccountId.encode(this);
  }
}
