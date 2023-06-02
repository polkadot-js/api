// Copyright 2017-2023 @polkadot/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ObsFn, ObsInnerType, PromiseOrObs } from '../types/index.js';

export function toRxMethod <F extends ObsFn> (method: F): (...args: any[]) => PromiseOrObs<'rxjs', ObsInnerType<ReturnType<F>>> {
  return method;
}
