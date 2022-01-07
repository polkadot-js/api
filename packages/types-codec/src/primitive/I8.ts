// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Int } from '../base/Int';

/**
 * @name i8
 * @description
 * An 8-bit signed integer
 */
export class i8 extends Int.with(8) {
  // NOTE without this, we cannot properly determine extensions
  public readonly __IntType = 'i8';
}
