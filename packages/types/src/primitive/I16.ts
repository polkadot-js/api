// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber } from '../types';

import Int from '../codec/Int';

/**
 * @name I16
 * @description
 * A 16-bit signed integer
 */
export default class I16 extends Int {
  public constructor (value?: AnyNumber) {
    super(value, 16);
  }
}
