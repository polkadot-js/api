// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { IHash } from '../types';

import U8aFixed from '../codec/U8aFixed';

/**
 * @name H256
 * @description
 * Hash containing 256 bits (32 bytes), typically used in blocks, extrinsics and
 * as a sane default for fixed-length hash representations.
 */
export default class H256 extends U8aFixed.with(256, 'H256') implements IHash {}
