// Copyright 2017-2019 @polkadot/ui-react-rx authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import ApiRx from '@polkadot/api/rx';

import { cache } from './cache';
import * as chain from './chain';

/**
 * T represents the section here (chain, balances...), and P rerpresents
 * the function name (bestNumber...).
 */
type ReturnTypes<T extends Record<keyof T, (...args: any[]) => any>> = {
  [P in keyof T]: ReturnType<T[P]>
};

export interface Derive {
  chain: ReturnTypes<typeof chain>;
}

export default function decorateDerive (api: ApiRx): Derive {
  const derive: Partial<Derive> = {};
  derive.chain = Object.keys(chain).reduce((result, key) => {
    // Create cache for the section_method function
    const cached = cache(chain[key as keyof typeof chain]);
    // Add this cached function into the result
    result[key as keyof typeof chain] = cached(api);
    return result;
  }, {} as ReturnTypes<typeof chain>);

  return derive as Derive;
}
