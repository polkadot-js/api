// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Registry } from '../types';

import PerX, { MAX_BILL } from '../codec/PerX';

/**
 * @name Perbill
 * @description
 * Implements the Perbill type
 */
export default class Perbill extends PerX {
  constructor (registry: Registry, value?: any) {
    super(registry, value, MAX_BILL);
  }
}
