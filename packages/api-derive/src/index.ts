// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterface$Rx } from '@polkadot/api/types';

import { Observable } from 'rxjs';

import * as accounts from './accounts';
import * as balances from './balances';
import * as chain from './chain';
import * as contract from './contract';
import * as democracy from './democracy';
import * as session from './session';
import * as staking from './staking';

export * from './type';

type ReturnTypes<Section> = {
  [Method in keyof Section]: Section[Method] extends (...args: any) => any
  ? ReturnType<Section[Method]> // ReturnType<Section[Method]> will be the inner function, i.e. without (api) arg
  : never;
};

type DeriveSections<AllSections> = {
  [Section in keyof AllSections]: ReturnTypes<AllSections[Section]>
};

export interface DeriveCustom {
  [index: string]: {
    [index: string]: (api: ApiInterface$Rx) => (...args: Array<any>) => Observable<any>
  };
}

/**
 * Returns an object that will inject `api` into all the functions inside
 * `allSections`, and keep the object architecture of `allSections`.
 */
function injectFunctions<AllSections> (api: ApiInterface$Rx, allSections: AllSections) {
  return Object
    .keys(allSections)
    .reduce((deriveAcc, sectionName) => {
      const section = allSections[sectionName as keyof AllSections];

      const a = Object
        .keys(section)
        .reduce((sectionAcc, methodName) => {
          // Not sure what to do here, casting as any. Though the final types are good
          const method = (section[methodName as keyof typeof section] as any)(api);
          // idem
          (sectionAcc as any)[methodName as keyof typeof section] = method;

          return sectionAcc;
        }, {} as ReturnTypes<typeof section>);

      deriveAcc[sectionName as keyof AllSections] = a;

      return deriveAcc;
    }, {} as DeriveSections<AllSections>);
}

export default function decorateDerive (api: ApiInterface$Rx, custom: DeriveCustom) {
  return {
    ...injectFunctions(api, { accounts, balances, chain, contract, democracy, session, staking }),
    ...injectFunctions(api, custom)
  };
}
