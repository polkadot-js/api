// Copyright 2017-2023 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Float } from '../native/Float.js';

/**
 * @name f32
 * @description
 * A 32-bit float
 */
export class f32 extends Float.with(32) {
  // NOTE without this, we cannot properly determine extensions
  readonly __FloatType = 'f32';
}
