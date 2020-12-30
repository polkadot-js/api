// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { UInt } from '../codec/UInt';

/**
 * @name u64
 * @description
 * A 64-bit unsigned integer
 */
export class u64 extends UInt.with(64) {}
