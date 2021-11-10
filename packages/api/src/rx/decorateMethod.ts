// Copyright 2017-2021 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Codec } from '@polkadot/types/types';
import type { DecorateFn } from '../types';

export function decorateMethodRx <M extends DecorateFn<Codec>> (method: M): M {
  return method;
}
