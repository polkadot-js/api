// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Int } from '../codec/Int';

/**
 * @name i256
 * @description
 * A 256-bit signed integer
 */
export class i256 extends Int.with(256) {}
