// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import Int from '../codec/Int';

/**
 * @name I256
 * @description
 * A 256-bit signed integer
 */
export default class I256 extends Int.with(256) {}
