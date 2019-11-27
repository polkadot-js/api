// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ReferendumInfo } from '@polkadot/types/interfaces/democracy';

import BN from 'bn.js';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { Option, Vec } from '@polkadot/types';

import { ReferendumInfoExtended } from '../type';
import { memo } from '../util';
import { constructInfo } from './referendumInfo';

export function referendumInfos (api: ApiInterfaceRx): (ids?: (BN | number)[]) => Observable<Option<ReferendumInfoExtended>[]> {
  return memo((ids: (BN | number)[] = []): Observable<Option<ReferendumInfoExtended>[]> =>
    (
      !ids || !ids.length
        ? of([] as Option<ReferendumInfo>[])
        : api.query.democracy.referendumInfoOf.multi(ids) as Observable<Vec<Option<ReferendumInfo>>>
    ).pipe(
      map((infos): Option<ReferendumInfoExtended>[] =>
        ids.map((id, index): Option<ReferendumInfoExtended> =>
          constructInfo(api, id, infos[index])
        )
      )
    ));
}
