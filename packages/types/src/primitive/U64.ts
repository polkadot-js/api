// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import UInt from '../codec/UInt';

/**
 * @name U64
 * @description
 * A 64-bit unsigned integer
 */
export default class U64 extends UInt.with(64) {}
