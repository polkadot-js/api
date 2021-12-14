// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Int } from '@polkadot/types-codec';

/**
 * @name i64
 * @description
 * A 64-bit signed integer
 */
export class i64 extends Int.with(64) {
  // NOTE without this, we cannot properly determine extensions
  public readonly __IntType = 'i64';
}
