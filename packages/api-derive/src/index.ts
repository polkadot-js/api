// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable } from 'rxjs';
import { ApiInterface$Rx } from '@plugnet/api/types';

import * as accounts from './accounts';
import * as balances from './balances';
import * as chain from './chain';
import * as contract from './contract';
import * as democracy from './democracy';
import * as session from './session';
import * as staking from './staking';

export * from './type';

// Put all derived functions in an object, for easier Object.keys()-ing.
const functions = { accounts, balances, chain, democracy, session, staking };

/**
 * T represents the section here (chain, balances...), and P represents
 * the function name (bestNumber, sessionProgress...).
 */
type ReturnTypes<T extends Record<keyof T, (...args: any[]) => any>> = {
  [P in keyof T]: ReturnType<T[P]>
};

export interface DeriveCustomMethod {
  (api: ApiInterface$Rx): (...args: Array<any>) => Observable<any>;
}

export interface DeriveCustom {
  [index: string]: {
    [index: string]: DeriveCustomMethod
  };
}

export interface Derive {
  accounts: ReturnTypes<typeof accounts>;
  balances: ReturnTypes<typeof balances>;
  chain: ReturnTypes<typeof chain>;
  contract: ReturnTypes<typeof contract>;
  democracy: ReturnTypes<typeof democracy>;
  session: ReturnTypes<typeof session>;
  staking: ReturnTypes<typeof staking>;
}

function injectFunctions (api: ApiInterface$Rx, derive: Derive, functions: DeriveCustom): Derive {
  Object.keys(functions).forEach((sectionName: string) => {
    const section = functions[sectionName as keyof Derive];
    const result = derive[sectionName as keyof Derive] = derive[sectionName as keyof Derive] || {};

    Object.keys(section).forEach((methodName) => {
      // @ts-ignore No idea how to make this work...
      result[methodName as keyof section] = section[methodName as keyof section](api);
    });
  });

  return derive;
}

export default function decorateDerive (api: ApiInterface$Rx, custom: DeriveCustom = {}): Derive {
  const derive = {} as Derive;

  injectFunctions(api, derive, functions);
  injectFunctions(api, derive, custom);

  return derive;
}
