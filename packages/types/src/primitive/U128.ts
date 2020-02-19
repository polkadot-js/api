// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import UInt from '../codec/UInt';

/**
 * @name U128
 * @description
 * A 128-bit unsigned integer
 */
export default class U128 extends UInt.with(128) {}
