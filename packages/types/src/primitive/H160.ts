// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import U8aFixed from '../codec/U8aFixed';

/**
 * @name H160
 * @description
 * Hash containing 160 bits (20 bytes), typically used in blocks, extrinsics and
 * as a sane default for fixed-length hash representations.
 */
export default class H160 extends U8aFixed.with(160, 'H160') {}
