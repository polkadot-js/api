// Copyright 2017-2018 @polkadot/api-codec authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import isHex from '@polkadot/util/is/hex';
import isU8a from '@polkadot/util/is/u8a';
import u8aConcat from '@polkadot/util/u8a/concat';
import u8aToU8a from '@polkadot/util/u8a/toU8a';

import Base from './codec/Base';
import AccountId from './AccountId';
import AccountIndex from './AccountIndex';

// A wrapper around an AccountId and/or AccountIndex that is encoded with a prefix.
// Since we are dealing with underlying publicKeys (or shorter encoded addresses),
// we extend from Base with an AccountId/AccountIndex wrapper. Basically the Address
// is encoded as
//   [ <prefix-byte>, ...publicKey/...bytes ]
export default class Address extends Base<AccountId | AccountIndex> {
  constructor (value: Address | AccountId | AccountIndex | string | Uint8Array = new Uint8Array()) {
    super(
      value instanceof Address
        ? value.raw
        : Address.decode(value)
    );
  }

  static decode (value: AccountId | AccountIndex | string | Uint8Array | Array<number>): AccountId | AccountIndex {
    if (value instanceof AccountId || value instanceof AccountIndex) {
      return value;
    } else if (isU8a(value) || Array.isArray(value)) {
      return value.length === 32
        ? new AccountId(u8aToU8a(value))
        : new AccountIndex(u8aToU8a(value));
    } else if (isHex(value)) {
      return value.length === 66
        ? new AccountId(value)
        : new AccountIndex(value);
    }

    // FIXME This _may_ be an issue. Depending on how the actual AccountIndex is
    // actually encoded as a string. Here we just assume that it is an ss-58 value
    // and use the stock-stand AccountId as PublicKey
    return new AccountId(value);
  }

  // TODO
  //   - Double-check this logic again - if really <= 0xef, the throw
  //     is unneeded since all cases are catered for here
  //   - We probably want to clean the read/write up with enums if it
  //     is an exact check and not a <= check (first item)
  static readLength (input: Uint8Array): number {
    const first = input[0];

    if (first <= 0xef) {
      return 1;
    } else if (first === 0xfc) {
      return 2;
    } else if (first === 0xfd) {
      return 4;
    } else if (first === 0xfe) {
      return 8;
    } else if (first === 0xff) {
      return 32;
    }

    throw new Error(`Invalid account index byte, 0x${first.toString(16)}`);
  }

  static writeLength (length: number): Uint8Array {
    if (length === 1) {
      return new Uint8Array([0xef]);
    } else if (length === 2) {
      return new Uint8Array([0xfc]);
    } else if (length === 4) {
      return new Uint8Array([0xfd]);
    } else if (length === 8) {
      return new Uint8Array([0xfe]);
    } else if (length === 32) {
      return new Uint8Array([0xff]);
    }

    throw new Error(`Invalid bitLength, ${length * 8}`);
  }

  byteLength (): number {
    return 1 + super.byteLength();
  }

  fromJSON (input: any): Address {
    this.raw = Address.decode(input);

    return this;
  }

  // FIXME I actually believe this is wrong, it needs to be checked. Here 1-byte
  // addresses are actually 2 bytes, 2-byte is 3-bytes, etc. I believe the actual
  // short-encoding should be left completely inside AccountId (For now, leaving
  // as-is until we can actually pull storage data and check - and/or read the
  // actual code again to check the implementation)
  fromU8a (input: Uint8Array): Address {
    this.raw = Address.readLength(input) === 32
      ? new AccountId().fromU8a(input.subarray(1))
      : new AccountIndex().fromU8a(input.subarray(1));

    return this;
  }

  toJSON (): any {
    return this.raw.toJSON();
  }

  toString (): string {
    return this.raw.toString();
  }

  toU8a (): Uint8Array {
    return u8aConcat(
      Address.writeLength(this.raw.byteLength()),
      this.raw.toU8a()
    );
  }
}
