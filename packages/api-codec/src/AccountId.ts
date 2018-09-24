// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import encodeAddress from '@polkadot/util-keyring/address/encode';
import decodeAddress from '@polkadot/util-keyring/address/decode';
import hexToU8a from '@polkadot/util/hex/toU8a';
import isHex from '@polkadot/util/is/hex';
import isU8a from '@polkadot/util/is/u8a';
import u8aToHex from '@polkadot/util/u8a/toHex';
import u8aToU8a from '@polkadot/util/u8a/toU8a';

import CodecHash from './base/Hash';
import u8aConcat from '@polkadot/util/u8a/concat';

// A wrapper around an AccountId. Since we are dealing with underlying publicKeys
// (or shorter encoded addresses), we extends from CodecHash which is basically
// just a Uint8Array wrapper. Basically the AccountId is encoded as
// [ <prefix-byte>, ...publicKey/...bytes ]
export default class AccountId extends CodecHash {
  constructor (value: string | Uint8Array = new Uint8Array()) {
    super(
      AccountId.decode(value)
    );
  }

  // FIXME Not 100% sure how to handle the encoding of short addresses. It is (mostly)
  // unused atm, options are to go to hex or to utf8. Here we go the hex route.
  static encode (value: Uint8Array): string {
    return value.length === 32
      ? encodeAddress(value)
      : u8aToHex(value);
  }

  static decode (value: string | Uint8Array | Array<number>): Uint8Array {
    if (isU8a(value) || Array.isArray(value)) {
      return u8aToU8a(value);
    } else if (isHex(value)) {
      return hexToU8a(value);
    }

    return decodeAddress(value);
  }

  byteLength (): number {
    return 1 + super.byteLength();
  }

  fromJSON (input: any): AccountId {
    this.raw = AccountId.decode(input);

    return this;
  }

  fromU8a (input: Uint8Array): AccountId {
    this._bitLength = this.readBitLength(input);

    super.fromU8a(input.subarray(1));

    return this;
  }

  toJSON (): any {
    return this.toString();
  }

  toString (): string {
    return AccountId.encode(this.raw);
  }

  toU8a (): Uint8Array {
    return u8aConcat(
      this.writeBitLength(this._bitLength),
      super.toU8a()
    );
  }

  // TODO
  //   - Double-check this logic again - if really <= 0xef, the throw
  //     is unneeded since all cases are catered for here
  //   - We probably want to clean the read/write up with enums if it
  //     is an exact check and not a <= check (first item)
  private readBitLength (input: Uint8Array): number {
    const first = input[0];

    // TODO
    if (first <= 0xef) {
      return 8;
    } else if (first === 0xfc) {
      return 16;
    } else if (first === 0xfd) {
      return 32;
    } else if (first === 0xfe) {
      return 64;
    } else if (first === 0xff) {
      return 256;
    }

    throw new Error(`Invalid account index byte, 0x${first.toString(16)}`);
  }

  private writeBitLength (length: number): Uint8Array {
    if (length === 8) {
      return new Uint8Array([0xef]);
    } else if (length === 16) {
      return new Uint8Array([0xfc]);
    } else if (length === 32) {
      return new Uint8Array([0xfd]);
    } else if (length === 64) {
      return new Uint8Array([0xfe]);
    } else if (length === 256) {
      return new Uint8Array([0xff]);
    }

    throw new Error(`Invalid bitLength, ${length}`);
  }
}
