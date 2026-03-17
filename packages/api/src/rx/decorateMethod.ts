// Copyright 2017-2026 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec } from '@polkadot/types/types';
import type { DecorateFn } from '../types/index.js';

export function toRxMethod <M extends DecorateFn<Codec>> (method: M): M {
  return method;
}
