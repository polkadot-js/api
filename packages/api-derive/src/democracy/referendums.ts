// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveReferendumExt } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { memo } from '../util';

export function referendums (api: ApiInterfaceRx): () => Observable<DeriveReferendumExt[]> {
  return memo((): Observable<DeriveReferendumExt[]> =>
    api.derive.democracy.referendumsActive().pipe(
      switchMap((referendums) =>
        combineLatest([
          of(referendums),
          api.derive.democracy._referendumsVotes(referendums)
        ])
      ),
      map(([referendums, votes]) =>
        referendums.map((referendum, index): DeriveReferendumExt => ({
          ...referendum,
          ...votes[index]
        }))
      )
    )
  );
}
