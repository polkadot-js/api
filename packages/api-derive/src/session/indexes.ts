// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Option, u32 } from '@polkadot/types';
import type { ActiveEraInfo, EraIndex, Moment, SessionIndex } from '@polkadot/types/interfaces';
import type { Observable } from '@polkadot/x-rxjs';
import type { DeriveSessionIndexes } from '../types';

import { of } from '@polkadot/x-rxjs';
import { map } from '@polkadot/x-rxjs/operators';

import { memo } from '../util';

// parse into Indexes
function parse ([activeEra, activeEraStart, currentEra, currentIndex, validatorCount]: [EraIndex, Option<Moment>, EraIndex, SessionIndex, u32]): DeriveSessionIndexes {
  return {
    activeEra,
    activeEraStart,
    currentEra,
    currentIndex,
    validatorCount
  };
}

// query based on latest
function query (api: ApiInterfaceRx): Observable<DeriveSessionIndexes> {
  return api.queryMulti<[Option<ActiveEraInfo>, Option<EraIndex>, SessionIndex, u32]>([
    api.query.staking.activeEra,
    api.query.staking.currentEra,
    api.query.session.currentIndex,
    api.query.staking.validatorCount
  ]).pipe(
    map(([activeOpt, currentEra, currentIndex, validatorCount]): DeriveSessionIndexes => {
      const { index, start } = activeOpt.unwrapOrDefault();

      return parse([
        index,
        start,
        currentEra.unwrapOrDefault(),
        currentIndex,
        validatorCount
      ]);
    })
  );
}

// empty set when none is available
function empty (api: ApiInterfaceRx): Observable<DeriveSessionIndexes> {
  return of(parse([
    api.registry.createType('EraIndex'),
    api.registry.createType('Option<Moment>'),
    api.registry.createType('EraIndex'),
    api.registry.createType('SessionIndex', 1),
    api.registry.createType('u32')
  ]));
}

export function indexes (instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveSessionIndexes> {
  return memo(instanceId, (): Observable<DeriveSessionIndexes> =>
    api.query.session && api.query.staking
      ? query(api)
      : empty(api)
  );
}
