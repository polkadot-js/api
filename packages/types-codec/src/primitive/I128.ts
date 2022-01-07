// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Int } from '../base/Int';

/**
 * @name i128
 * @description
 * A 128-bit signed integer
 */
export class i128 extends Int.with(128) {
  // NOTE without this, we cannot properly determine extensions
  public readonly __IntType = 'i128';
}
