// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { UInt } from '../codec/UInt';

/**
 * @name u8
 * @description
 * An 8-bit unsigned integer
 */
export class u8 extends UInt.with(8) {}
