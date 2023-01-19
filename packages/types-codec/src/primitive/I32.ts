// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Int } from '../base/Int';

/**
 * @name i32
 * @description
 * A 32-bit signed integer
 */
export class i32 extends Int.with(32) {
  // NOTE without this, we cannot properly determine extensions
  readonly __IntType = 'i32';
}
