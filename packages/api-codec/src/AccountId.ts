// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { AnyU8a } from './types';

import encodeAddress from '@polkadot/util-keyring/address/encode';
import decodeAddress from '@polkadot/util-keyring/address/decode';
import hexToU8a from '@polkadot/util/hex/toU8a';
import isHex from '@polkadot/util/is/hex';
import isU8a from '@polkadot/util/is/u8a';
import u8aToU8a from '@polkadot/util/u8a/toU8a';

import U8a from './codec/U8a';
import U8aFixed from './codec/U8aFixed';

// A wrapper around an AccountId/PublicKey representation. Since we are dealing with
// underlying PublicKeys (32 bytes in length), we extend from U8aFixed which is
// just a Uint8Array wrapper with a fixed length.
export default class AccountId extends U8aFixed {
  constructor (value: AnyU8a = new Uint8Array()) {
    super(
      value instanceof U8a
        ? value.raw
        : AccountId.decode(value),
      256
    );
  }

  static encode (value: Uint8Array): string {
    return encodeAddress(value);
  }

  static decode (value: string | Uint8Array | Array<number>): Uint8Array {
    if (isU8a(value) || Array.isArray(value)) {
      return u8aToU8a(value);
    } else if (isHex(value)) {
      return hexToU8a(value);
    }

    return decodeAddress(value);
  }

  fromJSON (input: any): AccountId {
    super.fromJSON(AccountId.decode(input));

    return this;
  }

  fromU8a (input: Uint8Array): AccountId {
    super.fromU8a(input);

    return this;
  }

  toJSON (): any {
    return this.toString();
  }

  toString (): string {
    return AccountId.encode(this.raw);
  }
}
