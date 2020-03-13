// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ReferendumInfo } from '@polkadot/types/interfaces/democracy';
import { DerivedReferendum } from '../types';

import BN from 'bn.js';
import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { Option } from '@polkadot/types';

import { memo } from '../util';
import { retrieveInfo } from './referendumInfo';

export function referendumInfos (api: ApiInterfaceRx): (ids?: (BN | number)[]) => Observable<DerivedReferendum[]> {
  return memo((ids: (BN | number)[] = []): Observable<DerivedReferendum[]> =>
    (
      !ids?.length
        ? of([] as Option<ReferendumInfo>[])
        : api.query.democracy.referendumInfoOf.multi<Option<ReferendumInfo>>(ids)
    ).pipe(
      switchMap((infos): Observable<(DerivedReferendum | null)[]> =>
        combineLatest(
          ids.map((id, index): Observable<DerivedReferendum | null> =>
            retrieveInfo(api, id, infos[index])
          )
        )
      ),
      map((infos): DerivedReferendum[] =>
        infos.filter((referendum): referendum is DerivedReferendum => !!referendum)
      )
    ));
}
