// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import memoizee from 'memoizee';
import { ApiInterface$Decorated } from '@polkadot/api/types';
import { Codec } from '@polkadot/types/types';
import { Observable } from 'rxjs';
/**
 * Create memoization for a 2-currified function.
 *
 * @param fn - The function to memoize.
 * @param map - The Map used to cache function returns.
 * @example
 * ```javascript
 * const f = (api: ApiInterface$Rx) => (b: number) => a * b;
 * const cached = cache(f);
 * f(api)(1, 2);
 * f(api)(1); // Cache not hit
 * f({})(1, 2); // Cache not hit
 * f(api)(1, 2); // Cache hit
 * ```
 */
export const cache = (fn: Function, map = new WeakMap()) => (api: ApiInterface$Decorated<Observable<Codec>, Observable<Codec>>) => {
  if (!map.has(api)) {
    const innerFn = fn(api);
    map.set(api, memoizee(innerFn));
  }

  return map.get(api);
};
