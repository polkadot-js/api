// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber, Registry } from '../types';

import UInt from '../codec/UInt';

/**
 * @name U32
 * @description
 * A 32-bit unsigned integer
 */
export default class U32 extends UInt {
  constructor (registry: Registry, value?: AnyNumber) {
    super(registry, value, 32);
  }
}
