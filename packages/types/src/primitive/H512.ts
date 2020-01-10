// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyU8a, Registry } from '../types';

import U8aFixed from '../codec/U8aFixed';

/**
 * @name H512
 * @description
 * Hash containing 512 bits (64 bytes), typically used for signatures
 */
export default class H512 extends U8aFixed {
  constructor (registry: Registry, value?: AnyU8a) {
    super(registry, value, 512);
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return 'H512';
  }
}
