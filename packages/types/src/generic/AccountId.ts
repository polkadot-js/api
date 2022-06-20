// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyString, AnyU8a, Registry } from '@polkadot/types-codec/types';

import { U8aFixed } from '@polkadot/types-codec';
import { hexToU8a, isHex, isString, isU8a, u8aToU8a } from '@polkadot/util';
import { decodeAddress, encodeAddress } from '@polkadot/util-crypto';

/** @internal */
function decodeAccountId (value?: AnyU8a | AnyString): Uint8Array {
  if (isU8a(value) || Array.isArray(value)) {
    return u8aToU8a(value);
  } else if (!value) {
    return new Uint8Array();
  } else if (isHex(value)) {
    return hexToU8a(value);
  } else if (isString(value)) {
    return decodeAddress(value.toString());
  }

  throw new Error(`Unknown type passed to AccountId constructor, found typeof ${typeof value}`);
}

/**
 * @name GenericAccountId
 * @description
 * A wrapper around an AccountId/PublicKey representation. Since we are dealing with
 * underlying PublicKeys (32 bytes in length), we extend from U8aFixed which is
 * just a Uint8Array wrapper with a fixed length.
 */
export class GenericAccountId extends U8aFixed {
  constructor (registry: Registry, value?: AnyU8a) {
    const decoded = decodeAccountId(value);

    // Part of stream containing >= 32 bytes or a all empty (defaults)
    if (decoded.length < 32 && decoded.some((b) => b)) {
      throw new Error(`Invalid AccountId provided, expected 32 bytes, found ${decoded.length}`);
    }

    super(registry, decoded, 256);
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  public override eq (other?: unknown): boolean {
    return super.eq(decodeAccountId(other as AnyU8a));
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
   * @description Returns the string representation of the value
   */
  public override toString (): string {
    return encodeAddress(this, this.registry.chainSS58);
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public override toRawType (): string {
    return 'AccountId';
  }
}
