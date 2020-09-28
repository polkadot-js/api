// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import UInt from '../codec/UInt';

/**
 * @name U256
 * @description
 * A 256-bit unsigned integer
 */
export default class U256 extends UInt.with(256) {}
