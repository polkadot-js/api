// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';
import { decodeAddress, encodeAddress } from '@polkadot/keyring';
import { bnToBn, bnToU8a, hexToU8a, isBn, isNumber, isU8a, isHex, u8aToBn } from '@polkadot/util';

import { AnyU8a } from './types';
import U8a from './codec/U8a';

export const ENUMSET_SIZE = new BN(64);

const PREFIX_1BYTE = 0xef;
const PREFIX_2BYTE = 0xfc;
const PREFIX_4BYTE = 0xfd;
const PREFIX_8BYTE = 0xfe;
const MAX_1BYTE = new BN(PREFIX_1BYTE);
const MAX_2BYTE = new BN(1).shln(16);
const MAX_4BYTE = new BN(1).shln(32);

// A wrapper around an AccountIndex, which is a shortened, variable-length encoding
// for an Account. We extends from U8a which is basically
// just a Uint8Array wrapper.
export default class AccountIndex extends U8a {
  // The maxLength refers to the maximum input. Effectively when returned as a storage value
  // (see EventRecord) the actual encoded length is 4 bytes. Set that as the default,
  // however pass it through as a computed value from the Address constructors
  constructor (value: BN | number | AnyU8a = new Uint8Array(), maxLength: number = 4) {
    super(
      AccountIndex.decodeAccountIndex(value, maxLength)
    );
  }

  static decodeAccountIndex (value: BN | number | AnyU8a, maxLength: number): Uint8Array {
    if (value instanceof U8a) {
      return value.raw;
    } else if (Array.isArray(value)) {
      return AccountIndex.decodeAccountIndex(Uint8Array.from(value), maxLength);
    } else if (isU8a(value)) {
      if (!value.length) {
        return value;
      }

      return value.subarray(0, Math.min(maxLength, value.length));
    } else if (isNumber(value) || isBn(value)) {
      const bitLength = 8 * AccountIndex.calcLength(value);

      return bnToU8a(value, bitLength, true);
    } else if (isHex(value)) {
      return hexToU8a(value);
    }

    return decodeAddress(value);
  }

  static calcLength (_value: BN | number): number {
    const value = bnToBn(_value);

    if (value.lte(MAX_1BYTE)) {
      return 1;
    } else if (value.lt(MAX_2BYTE)) {
      return 2;
    } else if (value.lt(MAX_4BYTE)) {
      return 4;
    }

    return 8;
  }

  static readLength (input: Uint8Array): [number, number] {
    const first = input[0];

    if (first === PREFIX_2BYTE) {
      return [1, 2];
    } else if (first === PREFIX_4BYTE) {
      return [1, 4];
    } else if (first === PREFIX_8BYTE) {
      return [1, 8];
    }

    return [0, 1];
  }

  static writeLength (input: Uint8Array): Uint8Array {
    switch (input.length) {
      case 2: return new Uint8Array([PREFIX_2BYTE]);
      case 4: return new Uint8Array([PREFIX_4BYTE]);
      case 8: return new Uint8Array([PREFIX_8BYTE]);
      default: return new Uint8Array([]);
    }
  }

  toJSON (): any {
    return this.toString();
  }

  toBn (): BN {
    if (this.raw.length === 1) {
      return new BN(this.raw[0]);
    }

    return u8aToBn(this.raw, true);
  }

  toU8a (isBare?: boolean): Uint8Array {
    // HACK 15 Oct 2018 For isBare assume that we are dealing with an AccountIndex
    // lookup (it is the only place where AccountIndex is used in such a manner to
    // construct a query). This is needed to get enumSet(AccountIndex) queries to
    // work in the way it was intended
    return isBare
      ? bnToU8a(this.toBn().div(ENUMSET_SIZE), 32, true)
      : this.raw;
  }

  toString (): string {
    return encodeAddress(this.raw);
  }
}
