// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';
import { decodeAddress, encodeAddress } from '@polkadot/keyring';
import { bnToBn, bnToU8a, isBn, isNumber, isU8a, isHex, hexToU8a, u8aToHex } from '@polkadot/util';

import { AnyNumber } from './types';
import U8a from './codec/U8a';
import UInt from './codec/UInt';
import U32 from './U32';

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
export default class AccountIndex extends U32 {
  constructor (value: AnyNumber = new BN(0)) {
    super(
      AccountIndex.decodeAccountIndex(value)
    );
  }

  static decodeAccountIndex (value: AnyNumber): BN | Uint8Array | number | string {
    if (value instanceof UInt) {
      return value.raw;
    } else if (value instanceof U8a) {
      return AccountIndex.decodeAccountIndex(value.raw);
    } else if (isBn(value) || isNumber(value) || isU8a(value)) {
      return value;
    } else if (isHex(value)) {
      // Here we convert via hexToU8a since we expect the LE encoded value representation. This
      // is different than UInt where we expect a BE (human-readable representation)
      return hexToU8a(value);
    }

    return AccountIndex.decodeAccountIndex(decodeAddress(value));
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

  // Like in our decoding function, we explicitly override this to allow us to output
  // LE-hex encoded numbers (generally UInt in JSON are expected as BE, these LE)
  toHex (): string {
    return u8aToHex(this.toU8a());
  }

  toJSON (): any {
    return this.toString();
  }

  toString (): string {
    const length = AccountIndex.calcLength(this.raw);

    return encodeAddress(this.toU8a().subarray(0, length));
  }

  toU8a (isBare?: boolean): Uint8Array {
    // HACK 15 Oct 2018 For isBare assume that we are dealing with an AccountIndex
    // lookup (it is the only place where AccountIndex is used in such a manner to
    // construct a query). This is needed to get enumSet(AccountIndex) queries to
    // work in the way it was intended
    return isBare
      ? bnToU8a(this.toBn().div(ENUMSET_SIZE), 32, true)
      : super.toU8a();
  }
}
