// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { combineLatest, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ApiInterface$Rx } from '@polkadot/api/types';
import { ReferendumInfo } from '@polkadot/types/index';

import { drr } from '../util/drr';

export function referendumInfos (api: ApiInterface$Rx) {
  return (...params: Array<any>): Observable<Array<ReferendumInfo>> => {
    const ids: Array<BN | number> = params.slice(0, params.length - 1);

    return combineLatest(
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
