// Copyright 2017-2022 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { UInt } from '../base/UInt';

/**
 * @name u256
 * @description
 * A 256-bit unsigned integer
 */
export class u256 extends UInt.with(256) {
  // NOTE without this, we cannot properly determine extensions
  public readonly __UIntType = 'u256';
}
