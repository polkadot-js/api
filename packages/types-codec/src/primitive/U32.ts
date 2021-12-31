// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { UInt } from '../base/UInt';

/**
 * @name u32
 * @description
 * A 32-bit unsigned integer
 */
export class u32 extends UInt.with(32) {
  // NOTE without this, we cannot properly determine extensions
  public readonly __UIntType = 'u32';
}
