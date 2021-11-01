// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { AnyFunction } from '@polkadot/types/types';

import * as accounts from './accounts';
import * as balances from './balances';
import * as bounties from './bounties';
import * as chain from './chain';
import * as contracts from './contracts';
import * as council from './council';
import * as crowdloan from './crowdloan';
import * as democracy from './democracy';
import * as elections from './elections';
import * as imOnline from './imOnline';
import * as membership from './membership';
import * as parachains from './parachains';
import * as session from './session';
import * as society from './society';
import * as staking from './staking';
import * as technicalCommittee from './technicalCommittee';
import * as treasury from './treasury';
import * as tx from './tx';

export { packageInfo } from './packageInfo';
export * from './type';

interface Avail {
  instances: string[];
  withDetect?: boolean;
}

export const derive = { accounts, balances, bounties, chain, contracts, council, crowdloan, democracy, elections, imOnline, membership, parachains, session, society, staking, technicalCommittee, treasury, tx };

type DeriveSection<Section> = {
  [Method in keyof Section]: Section[Method] extends AnyFunction
    ? ReturnType<Section[Method]> // ReturnType<Section[Method]> will be the inner function, i.e. without (api) argument
    : never;
};
type DeriveAllSections<AllSections> = {
  [Section in keyof AllSections]: DeriveSection<AllSections[Section]>
};

type DeriveCreator = (instanceId: string, api: ApiInterfaceRx) => (...args: unknown[]) => Observable<any>;

export type DeriveCustom = Record<string, Record<string, DeriveCreator>>;

export type ExactDerive = DeriveAllSections<typeof derive>;

// Enable derive only if some of these modules are available
const checks: Record<string, Avail> = {
  contracts: { instances: ['contracts'] },
  council: { instances: ['council'], withDetect: true },
  crowdloan: { instances: ['crowdloan'] },
  democracy: { instances: ['democracy'] },
  elections: { instances: ['phragmenElection', 'electionsPhragmen', 'elections', 'council'], withDetect: true },
  imOnline: { instances: ['imOnline'] },
  membership: { instances: ['membership'] },
  parachains: { instances: ['parachains', 'registrar'] },
  session: { instances: ['session'] },
  society: { instances: ['society'] },
  staking: { instances: ['staking'] },
  technicalCommittee: { instances: ['technicalCommittee'], withDetect: true },
  treasury: { instances: ['treasury'] }
};

/**
 * Returns an object that will inject `api` into all the functions inside
 * `allSections`, and keep the object architecture of `allSections`.
 */
/** @internal */
function injectFunctions<AllSections> (instanceId: string, api: ApiInterfaceRx, allSections: AllSections): DeriveAllSections<AllSections> {
  const queryKeys = Object.keys(api.query);
  const specName = api.runtimeVersion.specName.toString();
  const derives = {} as DeriveAllSections<AllSections>;
  const sectionKeys = Object.keys(allSections);

  for (let i = 0; i < sectionKeys.length; i++) {
    const sectionName = sectionKeys[i];
    const isIncluded = (
      !checks[sectionName] ||
      checks[sectionName].instances.some((q) => queryKeys.includes(q)) ||
      (
        checks[sectionName].withDetect &&
        checks[sectionName].instances.some((q) =>
          (api.registry.getModuleInstances(specName, q) || []).some((q) => queryKeys.includes(q))
        )
      )
    );

    if (isIncluded) {
      const entries = Object.entries(allSections[sectionName as keyof AllSections]) as [string, (...args: unknown[]) => any][];
      const methods: Record<string, unknown> = {};

      for (let j = 0; j < entries.length; j++) {
        methods[entries[j][0]] = entries[j][1](instanceId, api);
      }

      (derives as Record<string, Record<string, unknown>>)[sectionName] = methods;
    }
  }

  return derives;
}

// FIXME The return type of this function should be {...ExactDerive, ...DeriveCustom}
// For now we just drop the custom derive typings
/** @internal */
export function decorateDerive (instanceId: string, api: ApiInterfaceRx, custom: DeriveCustom = {}): ExactDerive {
  return {
    ...injectFunctions(instanceId, api, derive),
    ...injectFunctions(instanceId, api, custom)
  };
}
