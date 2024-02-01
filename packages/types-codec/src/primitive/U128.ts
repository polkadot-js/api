// Copyright 2017-2024 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { UInt } from '../base/UInt.js';

/**
 * @name u128
 * @description
 * A 128-bit unsigned integer
 */
export class u128 extends UInt.with(128) {
  // NOTE without this, we cannot properly determine extensions
  readonly __UIntType = 'u128';
}
