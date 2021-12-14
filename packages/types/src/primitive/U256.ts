// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { UInt } from '../codec';

/**
 * @name u256
 * @description
 * A 256-bit unsigned integer
 */
export class u256 extends UInt.with(256) {
  // NOTE without this, we cannot properly determine extensions
  public readonly __UIntType = 'u256';
}
