// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import Int from '../codec/Int';

/**
 * @name I128
 * @description
 * A 128-bit signed integer
 */
export default class I128 extends Int.with(128) {}
