// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { AnyString, AnyU8a, Registry } from '../types';

import { hexToU8a, isHex, isString, isU8a, u8aToU8a } from '@polkadot/util';
import { ethereumEncode, isEthereumAddress } from '@polkadot/util-crypto';

import U8aFixed from '../codec/U8aFixed';

/** @internal */
function decodeAccountId (value: AnyU8a | AnyString): AnyU8a {
  if (isU8a(value) || Array.isArray(value)) {
    return u8aToU8a(value);
  } else if (isHex(value) || isEthereumAddress(value)) {
    return hexToU8a(value.toString());
  } else if (isString(value)) {
    return u8aToU8a((value as string).toString());
  }

  return value;
}

/**
 * @name EthereumAccountId
 * @description
 * A wrapper around an Ethereum-compatible AccountId. Since we are dealing with
 * underlying addresses (20 bytes in length), we extend from U8aFixed which is
 * just a Uint8Array wrapper with a fixed length.
 */
export default class AccountId extends U8aFixed {
  constructor (registry: Registry, value: AnyU8a = new Uint8Array()) {
    super(registry, decodeAccountId(value), 160);
  }

  public static encode (value: Uint8Array): string {
    return ethereumEncode(value);
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  public eq (other?: unknown): boolean {
    return super.eq(decodeAccountId(other as AnyU8a));
  }

  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public toHuman (): string {
    return this.toJSON();
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
    return AccountId.encode(this);
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return 'AccountId';
  }
}
