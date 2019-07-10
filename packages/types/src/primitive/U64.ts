// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber } from '../types';

import UInt from '../codec/UInt';

/**
 * @name U64
 * @description
 * A 64-bit unsigned integer
 */
export default class U64 extends UInt {
  public constructor (value?: AnyNumber) {
    super(value, 64);
  }
}
