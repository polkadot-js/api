// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyU8a } from '../types';

import U8aFixed from '../codec/U8aFixed';

/**
 * @name ContractStorageKey
 * @description
 * A [u8; 32] representing a storeage key in contracts
 */
export default class ContractStorageKey extends U8aFixed {
  constructor (value?: AnyU8a) {
    super(value, 256);
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType (): string {
    return '[u8; 32]';
  }
}
