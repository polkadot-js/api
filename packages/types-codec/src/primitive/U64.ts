// Copyright 2017-2025 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { UInt } from '../base/UInt.js';

/**
 * @name u64
 * @description
 * A 64-bit unsigned integer
 */
export class u64 extends UInt.with(64) {
  // NOTE without this, we cannot properly determine extensions
  readonly __UIntType = 'u64';
}
