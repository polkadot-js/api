// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiInterface$Rx } from '@polkadot/api/types';
import { Option, ReferendumInfo, VectorAny } from '@polkadot/types';

import { ReferendumInfoExtended } from '../type';
import { drr } from '../util/drr';
import { constructInfo } from './referendumInfo';

export function referendumInfos (api: ApiInterface$Rx) {
  return (ids: Array<BN | number> = []): Observable<VectorAny<Option<ReferendumInfoExtended>>> => {
    return (
      !ids || !ids.length
        ? of([])
        : api.query.democracy.referendumInfoOf.multi(ids) as any as Observable<Array<Option<ReferendumInfo>>>
    ).pipe(
        map((infos) =>
          new VectorAny(
            ...ids.map((id, index) =>
              constructInfo(id, infos[index])
            )
          )
        ),
        drr()
      );
  };

}
