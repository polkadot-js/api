// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import UInt from '../codec/UInt';

/**
 * @name U32
 * @description
 * A 32-bit unsigned integer
 */
export default class U32 extends UInt.with(32) {}
