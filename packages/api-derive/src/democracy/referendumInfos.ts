// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { combineLatest, Observable, of } from 'rxjs';
import { ApiInterface$Rx } from '@polkadot/api/types';
import { Option } from '@polkadot/types/index';

import { drr } from '../util/drr';
import { referendumInfo, ReferendumInfoExtended } from './referendumInfo';

export function referendumInfos (api: ApiInterface$Rx) {
  const referendumInfoOf = referendumInfo(api);

  return (ids: Array<BN | number> = []): Observable<Array<Option<ReferendumInfoExtended>>> => {
    return !ids || !ids.length
      ? of([]).pipe(drr())
      : combineLatest(
        ids.map((id) => referendumInfoOf(id))
      ).pipe(
        drr()
      );
  };

}
