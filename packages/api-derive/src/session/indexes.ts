// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { ActiveEraInfo, EraIndex, Moment, SessionIndex } from '@polkadot/types/interfaces';
import { DeriveSessionIndexes } from '../types';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Option, u32 } from '@polkadot/types';
import { isFunction } from '@polkadot/util';

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

// query for previous V2
function queryNoActive (api: ApiInterfaceRx): Observable<DeriveSessionIndexes> {
  return api.queryMulti<[Option<EraIndex>, SessionIndex, u32]>([
    api.query.staking.currentEra,
    api.query.session.currentIndex,
    api.query.staking.validatorCount
  ]).pipe(
    map(([currentEra, currentIndex, validatorCount]): DeriveSessionIndexes => parse([
      currentEra.unwrapOrDefault(),
      api.registry.createType('Option<Moment>'),
      currentEra.unwrapOrDefault(),
      currentIndex,
      validatorCount
    ]))
  );
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
      ? isFunction(api.query.staking.activeEra)
        ? query(api)
        : queryNoActive(api)
      : empty(api)
  );
}
