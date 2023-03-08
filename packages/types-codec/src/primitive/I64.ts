// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Int } from '../base/Int.js';

/**
 * @name i64
 * @description
 * A 64-bit signed integer
 */
export class i64 extends Int.with(64) {
  // NOTE without this, we cannot properly determine extensions
  readonly __IntType = 'i64';
}
