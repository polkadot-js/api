// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DeriveCustom } from '@polkadot/api-base/types';
import type { AnyFunction, AnyString } from '@polkadot/types/types';
import type { ExactDerive } from './derive';
import type { DeriveApi } from './types';

import { derive } from './derive';
import { lazyDeriveSection } from './util';

export * from './derive';
export * from './type';

interface Avail {
  instances: string[];
  methods: string[];
  withDetect?: boolean;
}

export { lazyDeriveSection };

// Enable derive only if some of these modules are available
const checks: Record<string, Avail> = {
  bagsList: {
    instances: ['voterList', 'bagsList'],
    methods: [],
    withDetect: true
  },
  contracts: {
    instances: ['contracts'],
    methods: []
  },
  council: {
    instances: ['council'],
    methods: [],
    withDetect: true
  },
  crowdloan: {
    instances: ['crowdloan'],
    methods: []
  },
  democracy: {
    instances: ['democracy'],
    methods: []
  },
  elections: {
    instances: ['phragmenElection', 'electionsPhragmen', 'elections', 'council'],
    methods: [],
    withDetect: true
  },
  imOnline: {
    instances: ['imOnline'],
    methods: []
  },
  membership: {
    instances: ['membership'],
    methods: []
  },
  parachains: {
    instances: ['parachains', 'registrar'],
    methods: []
  },
  session: {
    instances: ['session'],
    methods: []
  },
  society: {
    instances: ['society'],
    methods: []
  },
  staking: {
    instances: ['staking'],
    methods: ['erasRewardPoints']
  },
  technicalCommittee: {
    instances: ['technicalCommittee'],
    methods: [],
    withDetect: true
  },
  treasury: {
    instances: ['treasury'],
    methods: []
  }
};

function getModuleInstances (api: DeriveApi, specName: AnyString, moduleName: string): string[] {
  return api.registry.getModuleInstances(specName, moduleName) || [];
}

/**
 * Returns an object that will inject `api` into all the functions inside
 * `allSections`, and keep the object architecture of `allSections`.
 */
/** @internal */
function injectFunctions (instanceId: string, api: DeriveApi, derives: DeriveCustom): ExactDerive {
  const result: Record<string, Record<string, AnyFunction>> = {};
  const names = Object.keys(derives);
  const keys = Object.keys(api.query);
  const specName = api.runtimeVersion.specName;

  const filterKeys = (q: string) => keys.includes(q);
  const filterInstances = (q: string) => getModuleInstances(api, specName, q).some(filterKeys);
  const filterMethods = (all: string[]) => (m: string) => all.some((q) => keys.includes(q) && api.query[q][m]);
  const getKeys = (s: string) => Object.keys(derives[s]);
  const creator = (s: string, m: string) => derives[s][m](instanceId, api);
  const isIncluded = (c: string) => (!checks[c] || (
    (checks[c].instances.some(filterKeys) && (
      !checks[c].methods.length ||
      checks[c].methods.every(filterMethods(checks[c].instances))
    )) ||
    (
      checks[c].withDetect &&
      checks[c].instances.some(filterInstances)
    )
  ));

  for (let i = 0; i < names.length; i++) {
    const name = names[i];

    isIncluded(name) &&
      lazyDeriveSection(result, name, getKeys, creator);
  }

  return result as ExactDerive;
}

// FIXME The return type of this function should be {...ExactDerive, ...DeriveCustom}
// For now we just drop the custom derive typings
/** @internal */
export function getAvailableDerives (instanceId: string, api: DeriveApi, custom: DeriveCustom = {}): ExactDerive {
  return {
    ...injectFunctions(instanceId, api, derive as DeriveCustom),
    ...injectFunctions(instanceId, api, custom)
  };
}
