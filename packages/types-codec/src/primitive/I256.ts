// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Int } from '../base/Int';

/**
 * @name i256
 * @description
 * A 256-bit signed integer
 */
export class i256 extends Int.with(256) {
  // NOTE without this, we cannot properly determine extensions
  public readonly __IntType = 'i256';
}
