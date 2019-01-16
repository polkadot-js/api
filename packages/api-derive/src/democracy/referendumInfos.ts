// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { combineLatest, Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ApiInterface$Rx } from '@polkadot/api/types';
import { ReferendumInfo } from '@polkadot/types/index';

import { drr } from '../util/drr';

export function referendumInfos (api: ApiInterface$Rx) {
  return (ids: Array<BN | number> = []): Observable<Array<ReferendumInfo>> => {
    return !ids || !ids.length
      ? of([]).pipe(drr())
      : combineLatest(
        ids.map(
          (id) => (api.query.democracy.referendumInfoOf(id) as Observable<ReferendumInfo>).pipe(
            filter((info) => !!info)
          )
        )
      ).pipe(
        drr()
      );
  };

}
