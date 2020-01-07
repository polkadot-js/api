// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber, Registry } from '../types';

import Int from '../codec/Int';

/**
 * @name I32
 * @description
 * A 32-bit signed integer
 */
export default class I32 extends Int {
  constructor (registry: Registry, value?: AnyNumber) {
    super(registry, value, 32);
  }
}
