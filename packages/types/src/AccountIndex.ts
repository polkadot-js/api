// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { decodeAddress, encodeAddress } from '@polkadot/keyring';
import { bnToBn, bnToU8a, isBn, isNumber, isU8a, isHex, hexToU8a, u8aToHex } from '@polkadot/util';

import { AnyNumber } from './types';
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

/**
 * @name AccountIndex
 * @description
 * A wrapper around an AccountIndex, which is a shortened, variable-length encoding
 * for an Account. We extends from [[U32]] to provide the number-like properties.
 */
export default class AccountIndex extends U32 {
  constructor (value: AnyNumber = new BN(0)) {
    super(
      AccountIndex.decodeAccountIndex(value)
    );
  }

  static decodeAccountIndex (value: AnyNumber): BN | Uint8Array | number | string {
    if (value instanceof AccountIndex) {
      // `value.toBn()` on AccountIndex returns a pure BN (i.e. not an
      // AccountIndex), which has the initial `toString()` implementation.
      return value.toBn();
    } else if (value instanceof UInt || isBn(value) || isNumber(value) || isU8a(value)) {
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

  /**
   * @description Returns the BN representation of the AccountIndex
   */
  toBn (): BN {
    return new BN(this);
  }

  /**
   * @description Returns a hex string representation of the value
   */
  toHex (): string {
    // Like in our decoding function, we explicitly override this to allow us to output
    // LE-hex encoded numbers (generally UInt in JSON are expected as BE, these LE)
    return u8aToHex(this.toU8a());
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
    const length = AccountIndex.calcLength(this);

    return encodeAddress(this.toU8a().subarray(0, length));
  }

  /**
   * @description Encodes the value as a Uint8Array as per the parity-codec specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   * @param isStorageKey true when encoded as part of a key, taking case of specific logic
   */
  toU8a (isBare?: boolean, isStorageKey?: boolean): Uint8Array {
    // HACK 15 Oct 2018 For isStorageKey assume that we are dealing with an AccountIndex
    // lookup (it is the only place where AccountIndex is used in such a manner to
    // construct a query). This is needed to get enumSet(AccountIndex) queries to
    // work in the way it was intended
    if (isStorageKey) {
      return bnToU8a(this.div(ENUMSET_SIZE), 32, true);
    }

    return super.toU8a(isBare);
  }
}
