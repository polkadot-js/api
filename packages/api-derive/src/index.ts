// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AnyFunction } from '@polkadot/types/types';

import { Observable } from 'rxjs';

import * as accounts from './accounts';
import * as balances from './balances';
import * as chain from './chain';
import * as contracts from './contracts';
import * as council from './council';
import * as democracy from './democracy';
import * as elections from './elections';
import * as imOnline from './imOnline';
import * as session from './session';
import * as staking from './staking';
import * as technicalCommittee from './technicalCommittee';
import * as treasury from './treasury';

export * from './type';

type DeriveSection<Section> = {
  [Method in keyof Section]: Section[Method] extends AnyFunction
    ? ReturnType<Section[Method]> // ReturnType<Section[Method]> will be the inner function, i.e. without (api) argument
    : never;
};
type DeriveAllSections<AllSections> = {
  [Section in keyof AllSections]: DeriveSection<AllSections[Section]>
};

export type DeriveCustom = Record<string, Record<string, (api: ApiInterfaceRx) => (...args: any[]) => Observable<any>>>;

/**
 * Returns an object that will inject `api` into all the functions inside
 * `allSections`, and keep the object architecture of `allSections`.
 */
function injectFunctions<AllSections> (api: ApiInterfaceRx, allSections: AllSections): DeriveAllSections<AllSections> {
  return Object
    .keys(allSections)
    .reduce((deriveAcc, sectionName): DeriveAllSections<AllSections> => {
      const section = allSections[sectionName as keyof AllSections];

      deriveAcc[sectionName as keyof AllSections] = Object
        .keys(section)
        .reduce((sectionAcc, _methodName): DeriveSection<typeof section> => {
          const methodName = _methodName as keyof typeof section;
          // Not sure what to do here, casting as any. Though the final types are good
          const method = (section[methodName] as any)(api);
          // idem
          (sectionAcc as any)[methodName] = method;

          return sectionAcc;
        }, {} as DeriveSection<typeof section>);

      return deriveAcc;
    }, {} as DeriveAllSections<AllSections>);
}

export const derive = { accounts, balances, chain, contracts, council, democracy, elections, imOnline, session, staking, technicalCommittee, treasury };
export type ExactDerive = DeriveAllSections<typeof derive>;

// FIXME The return type of this function should be {...ExactDerive, ...DeriveCustom}
// For now we just drop the custom derive typings
export default function decorateDerive (api: ApiInterfaceRx, custom: DeriveCustom = {}): ExactDerive {
  return {
    ...injectFunctions(api, derive),
    ...injectFunctions(api, custom)
  };
}
