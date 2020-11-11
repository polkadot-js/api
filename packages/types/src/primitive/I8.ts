// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Int } from '../codec/Int';

/**
 * @name i8
 * @description
 * An 8-bit signed integer
 */
export class i8 extends Int.with(8) {}
