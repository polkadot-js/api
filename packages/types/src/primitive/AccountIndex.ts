// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber } from '../types';

import BN from 'bn.js';
import { bnToBn, isBn, isNumber, isU8a, isHex } from '@polkadot/util';
import { decodeAddress, encodeAddress } from '@polkadot/util-crypto';

import U32 from './U32';

export const ENUMSET_SIZE = new BN(64);

const PREFIX_1BYTE = 0xef;
const PREFIX_2BYTE = 0xfc;
const PREFIX_4BYTE = 0xfd;
const PREFIX_8BYTE = 0xfe;
const MAX_1BYTE = new BN(PREFIX_1BYTE);
const MAX_2BYTE = new BN(1).shln(16);
const MAX_4BYTE = new BN(1).shln(32);

/**
 * @name AccountIndex
 * @description
 * A wrapper around an AccountIndex, which is a shortened, variable-length encoding
 * for an Account. We extends from [[U32]] to provide the number-like properties.
 */
export default class AccountIndex extends U32 {
  public constructor (value: AnyNumber = new BN(0)) {
    super(
      AccountIndex.decodeAccountIndex(value)
    );
  }

  public static decodeAccountIndex (value: AnyNumber): BN | Uint8Array | number | string {
    if (value instanceof AccountIndex) {
      // `value.toBn()` on AccountIndex returns a pure BN (i.e. not an
      // AccountIndex), which has the initial `toString()` implementation.
      return value.toBn();
    } else if (isBn(value) || isNumber(value) || isHex(value) || isU8a(value)) {
      return value;
    }

    return AccountIndex.decodeAccountIndex(decodeAddress(value));
  }

  public static calcLength (_value: BN | number): number {
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

  public static readLength (input: Uint8Array): [number, number] {
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

  public static writeLength (input: Uint8Array): Uint8Array {
    switch (input.length) {
      case 2: return new Uint8Array([PREFIX_2BYTE]);
      case 4: return new Uint8Array([PREFIX_4BYTE]);
      case 8: return new Uint8Array([PREFIX_8BYTE]);
      default: return new Uint8Array([]);
    }
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  public eq (other?: any): boolean {
    // shortcut for BN or Number, don't create an object
    if (isBn(other) || isNumber(other)) {
      return super.eq(other);
    }

    // convert and compare
    return super.eq(new AccountIndex(other));
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public toJSON (): string {
    return this.toString();
  }

  /**
   * @description Returns the string representation of the value
   */
  public toString (): string {
    const length = AccountIndex.calcLength(this);

    return encodeAddress(this.toU8a().subarray(0, length));
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return 'AccountIndex';
  }
}
