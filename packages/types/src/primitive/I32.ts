// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import Int from '../codec/Int';

/**
 * @name I32
 * @description
 * A 32-bit signed integer
 */
export default class I32 extends Int.with(32) {}
