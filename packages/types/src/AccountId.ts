// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AnyU8a } from './types';

import { decodeAddress, encodeAddress } from '@polkadot/keyring';
import { hexToU8a, isHex, isString, isU8a, u8aToU8a } from '@polkadot/util';

import U8aFixed from './codec/U8aFixed';

// A wrapper around an AccountId/PublicKey representation. Since we are dealing with
// underlying PublicKeys (32 bytes in length), we extend from U8aFixed which is
// just a Uint8Array wrapper with a fixed length.
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

  private static decodeAccountId (value: any): Uint8Array {
    if (isU8a(value) || Array.isArray(value)) {
      return u8aToU8a(value);
    } else if (isHex(value)) {
      return hexToU8a(value);
    } else if (isString(value)) {
      return decodeAddress(value);
    }

    return value;
  }

  toJSON (): any {
    return this.toString();
  }

  toString (): string {
    return AccountId.encode(this);
  }
}
