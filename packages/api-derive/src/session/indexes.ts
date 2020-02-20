// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { EraIndex, MomentOf, SessionIndex } from '@polkadot/types/interfaces';
import { DeriveSessionIndexes } from '../types';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { createType, Option, u32 } from '@polkadot/types';

import { memo } from '../util';

type Result = [EraIndex, Option<MomentOf>, EraIndex, SessionIndex, u32];

// parse into Indexes
function parse ([activeEra, activeEraStart, currentEra, currentIndex, validatorCount]: Result): DeriveSessionIndexes {
  return {
    activeEra,
    activeEraStart,
    currentEra,
    currentIndex,
    validatorCount
  };
}

// query for previous V2
function queryNoActive (api: ApiInterfaceRx): Observable<Result> {
  return api.queryMulti<[EraIndex, SessionIndex, u32]>([
    api.query.staking.currentEra,
    api.query.session.currentIndex,
    api.query.staking.validatorCount
  ]).pipe(
    map(([currentEra, currentIndex, validatorCount]): Result => [
      currentEra,
      createType(api.registry, 'Option<MomentOf>'),
      currentEra,
      currentIndex,
      validatorCount
    ])
  );
}

// query based on latest
function query (api: ApiInterfaceRx): Observable<Result> {
  return api.queryMulti<[Option<EraIndex>, Option<MomentOf>, Option<EraIndex>, SessionIndex, u32]>([
    api.query.staking.activeEra,
    api.query.staking.activeEraStart,
    api.query.staking.currentEra,
    api.query.session.currentIndex,
    api.query.staking.validatorCount
  ]).pipe(
    map(([activeEra, activeEraStart, currentEra, currentIndex, validatorCount]): Result => [
      activeEra.unwrapOr(createType(api.registry, 'EraIndex', 1)),
      activeEraStart,
      currentEra.unwrapOr(createType(api.registry, 'EraIndex', 1)),
      currentIndex,
      validatorCount
    ])
  );
}

// empty set when none is available
function empty (api: ApiInterfaceRx): Observable<Result> {
  return of([
    createType(api.registry, 'EraIndex', 1),
    createType(api.registry, 'Option<MomentOf>'),
    createType(api.registry, 'EraIndex', 1),
    createType(api.registry, 'SessionIndex', 1),
    createType(api.registry, 'u32')
  ]);
}

export function indexes (api: ApiInterfaceRx): () => Observable<DeriveSessionIndexes> {
  return memo((): Observable<DeriveSessionIndexes> =>
    (
      api.query.session && api.query.staking
        ? api.query.staking.activeEra
          ? query(api)
          : queryNoActive(api)
        : empty(api)
    ).pipe(map(parse))
  );
}
