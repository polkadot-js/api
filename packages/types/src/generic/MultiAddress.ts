// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Registry } from '../types';

import { isString, u8aConcat } from '@polkadot/util';
import { decodeAddress } from '@polkadot/util-crypto';

import Enum from '../codec/Enum';

export default class MultiAddress extends Enum {
  constructor (registry: Registry, value?: unknown) {
    super(registry, {
      Id: 'AccountId',
      Index: 'Compact<AccountIndex>',
      Raw: 'Bytes',
      // eslint-disable-next-line sort-keys
      Address32: 'H256',
      // eslint-disable-next-line sort-keys
      Address20: 'H160'
    }, MultiAddress._decodeMultiAddress(value as string));
  }

  private static _decodeMultiAddress (value?: unknown): unknown {
    if (isString(value)) {
      try {
        const u8a = decodeAddress(value.toString());

        return u8aConcat(new Uint8Array(u8a.length <= 8 ? 1 : 0), u8a);
      } catch (error) {
        // ignore, not a valid ss58 address
      }
    }

    return value;
  }

  /**
   * @description Returns the string representation of the value
   */
  public toString (): string {
    return this.value.toString();
  }
}
