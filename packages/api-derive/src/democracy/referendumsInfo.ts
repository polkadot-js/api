// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { ReferendumInfo } from '@polkadot/types/interfaces';
import { DerivedReferendum } from '../types';

import BN from 'bn.js';
import { Observable, of, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Option } from '@polkadot/types';

import { memo } from '../util';

export function referendumsInfo (api: ApiInterfaceRx): (ids: BN[]) => Observable<DerivedReferendum[]> {
  return memo((ids: BN[]): Observable<DerivedReferendum[]> =>
    ids.length
      ? api.query.democracy.referendumInfoOf.multi<Option<ReferendumInfo>>(ids).pipe(
        switchMap((infos): Observable<(DerivedReferendum | null)[]> =>
          combineLatest(
            ids.map((id, index): Observable<DerivedReferendum | null> =>
              api.derive.democracy._referendumInfo(id, infos[index])
            )
          )
        ),
        map((infos) =>
          infos.filter((referendum): referendum is DerivedReferendum => !!referendum)
        )
      )
      : of([])
  );
}
