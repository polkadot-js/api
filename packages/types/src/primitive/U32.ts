// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { UInt } from '../codec/UInt';

/**
 * @name u32
 * @description
 * A 32-bit unsigned integer
 */
export class u32 extends UInt.with(32) {}
