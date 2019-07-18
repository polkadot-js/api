// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AnyFunction } from '@polkadot/types/types';

import { Observable } from 'rxjs';

import * as accounts from './accounts';
import * as balances from './balances';
import * as chain from './chain';
import * as contracts from './contracts';
import * as democracy from './democracy';
import * as elections from './elections';
import * as session from './session';
import * as staking from './staking';

export * from './type';

export type ReturnTypes<Section> = {
  [Method in keyof Section]: Section[Method] extends AnyFunction
    ? ReturnType<Section[Method]> // ReturnType<Section[Method]> will be the inner function, i.e. without (api) argument
    : never;
};

export type DeriveSections<AllSections> = {
  [Section in keyof AllSections]: ReturnTypes<AllSections[Section]>
};

export type DeriveCustom = Record<string, Record<string, (api: ApiInterfaceRx) => (...args: any[]) => Observable<any>>>;

/**
 * Returns an object that will inject `api` into all the functions inside
 * `allSections`, and keep the object architecture of `allSections`.
 */
function injectFunctions<AllSections> (api: ApiInterfaceRx, allSections: AllSections): DeriveSections<AllSections> {
  return Object
    .keys(allSections)
    .reduce((deriveAcc, sectionName): DeriveSections<AllSections> => {
      const section = allSections[sectionName as keyof AllSections];

      deriveAcc[sectionName as keyof AllSections] = Object
        .keys(section)
        .reduce((sectionAcc, _methodName): ReturnTypes<typeof section> => {
          const methodName = _methodName as keyof typeof section;
          // Not sure what to do here, casting as any. Though the final types are good
          const method = (section[methodName] as any)(api);
          // idem
          (sectionAcc as any)[methodName] = method;

          return sectionAcc;
        }, {} as unknown as ReturnTypes<typeof section>);

      return deriveAcc;
    }, {} as unknown as DeriveSections<AllSections>);
}

export const derive = { accounts, balances, chain, contracts, democracy, elections, session, staking };
export type Derive = typeof derive;

// FIXME I have no idea how to get this done
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function decorateDerive (api: ApiInterfaceRx, custom: DeriveCustom = {}) {
  return {
    ...injectFunctions(api, derive),
    ...injectFunctions(api, custom)
  };
}
