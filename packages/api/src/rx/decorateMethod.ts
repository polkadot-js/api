// Copyright 2017-2023 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DecorateFn, ObsInnerType, PromiseOrObs } from '../types/index.js';

export function toRxMethod <M extends DecorateFn<any>> (method: M): (...args: any[]) => PromiseOrObs<'rxjs', ObsInnerType<ReturnType<M>>> {
  return method;
}
