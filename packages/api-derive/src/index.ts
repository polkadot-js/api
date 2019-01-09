// Copyright 2017-2019 @polkadot/ui-react-rx authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import ApiRx from '@polkadot/api/rx';

import * as chain from './chain';
import * as session from './session';
import { cache } from './util/cache';

// Put all derived functions in an object, for easier Object.keys()-ing.
const functions = { chain, session };

/**
 * T represents the section here (chain, balances...), and P represents
 * the function name (bestNumber, sessionProgress...).
 */
type ReturnTypes<T extends Record<keyof T, (...args: any[]) => any>> = {
  [P in keyof T]: ReturnType<T[P]>
};

export interface Derive {
  chain: ReturnTypes<typeof chain>;
  session: ReturnTypes<typeof session>;
}

export default function decorateDerive (api: ApiRx): Derive {
  const derive = {} as Derive;

  Object.keys(functions).forEach((sectionName: string) => {
    const section = functions[sectionName as keyof Derive];
    derive[sectionName as keyof Derive] = Object.keys(section).reduce((result, methodName) => {
      // Create cache for the section_method function
      // @ts-ignore No idea how to make this work...
      const cached = cache(section[methodName as keyof section]);
      // Add this cached function into the result
      // @ts-ignore No idea how to make this work...
      result[methodName as keyof section] = cached(api);

      return result;
    }, {} as ReturnTypes<typeof section>);
  });

  return derive;
}
