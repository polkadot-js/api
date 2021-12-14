// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { UInt } from '@polkadot/types-codec';

/**
 * @name u16
 * @description
 * A 16-bit unsigned integer
 */
export class u16 extends UInt.with(16) {
  // NOTE without this, we cannot properly determine extensions
  public readonly __UIntType = 'u16';
}
