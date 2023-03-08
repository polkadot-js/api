// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { UInt } from '../base/UInt.js';

/**
 * @name u16
 * @description
 * A 16-bit unsigned integer
 */
export class u16 extends UInt.with(16) {
  // NOTE without this, we cannot properly determine extensions
  readonly __UIntType = 'u16';
}
