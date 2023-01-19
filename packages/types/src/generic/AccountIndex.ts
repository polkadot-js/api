// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyNumber, Registry } from '@polkadot/types-codec/types';

import { u32 } from '@polkadot/types-codec';
import { BN, bnToBn, isBigInt, isBn, isHex, isNumber, isU8a } from '@polkadot/util';
import { decodeAddress, encodeAddress } from '@polkadot/util-crypto';

const PREFIX_1BYTE = 0xef;
const PREFIX_2BYTE = 0xfc;
const PREFIX_4BYTE = 0xfd;
const PREFIX_8BYTE = 0xfe;
const MAX_1BYTE = new BN(PREFIX_1BYTE);
const MAX_2BYTE = new BN(1).shln(16);
const MAX_4BYTE = new BN(1).shln(32);

/** @internal */
function decodeAccountIndex (value: AnyNumber): BN | bigint | Uint8Array | number | string {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  if (value instanceof GenericAccountIndex) {
    // `value.toBn()` on AccountIndex returns a pure BN (i.e. not an
    // AccountIndex), which has the initial `toString()` implementation.
    return value.toBn();
  } else if (isBn(value) || isNumber(value) || isHex(value) || isU8a(value) || isBigInt(value)) {
    return value;
  }

  return decodeAccountIndex(decodeAddress(value));
}

/**
 * @name GenericAccountIndex
 * @description
 * A wrapper around an AccountIndex, which is a shortened, variable-length encoding
 * for an Account. We extends from [[U32]] to provide the number-like properties.
 */
export class GenericAccountIndex extends u32 {
  constructor (registry: Registry, value: AnyNumber = new BN(0)) {
    super(registry, decodeAccountIndex(value));
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
  public override eq (other?: unknown): boolean {
    // shortcut for BN or Number, don't create an object
    if (isBn(other as string) || isNumber(other)) {
      return super.eq(other);
    }

    // convert and compare
    return super.eq(this.$registry.createTypeUnsafe('AccountIndex', [other]));
  }

  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public override toHuman (): string {
    return this.toJSON();
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public override toJSON (): string {
    return this.toString();
  }

  /**
   * @description Converts the value in a best-fit primitive form
   */
  public override toPrimitive (): string {
    return this.toJSON();
  }

  /**
   * @description Returns the string representation of the value
   */
  public override toString (): string {
    const length = GenericAccountIndex.calcLength(this);

    return encodeAddress(this.toU8a().subarray(0, length), this.$registry.chainSS58);
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public override toRawType (): string {
    return 'AccountIndex';
  }
}
