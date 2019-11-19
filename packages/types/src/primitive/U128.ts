// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber, Registry } from '../types';

import UInt from '../codec/UInt';

/**
 * @name U128
 * @description
 * A 128-bit unsigned integer
 */
export default class U128 extends UInt {
  constructor (registry: Registry, value?: AnyNumber) {
    super(registry, value, 128);
  }
}
