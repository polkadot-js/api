// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { Observable, of } from 'rxjs';
import { ApiInterface$Rx } from '@polkadot/api/types';
import { Option } from '@polkadot/types';

import { drr } from '../util/drr';
import { constructInfo, ReferendumInfoExtended } from './referendumInfo';

export function referendumInfos (api: ApiInterface$Rx) {
  return (ids: Array<BN | number> = []): Observable<Array<Option<ReferendumInfoExtended>>> => {
    return ((!ids || !ids.length
      ? of([])
      : api.query.democracy.referendumInfoOf.multi(ids)
    ) as Observable<any>).pipe(
        map((infos): Array<Option<ReferendumInfo>> =>
          ids.map((id, index) =>
            constructInfo(id, info[index])
          )
        ),
        drr()
      );
  };

}
