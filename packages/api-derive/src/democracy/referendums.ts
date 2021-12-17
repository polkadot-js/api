// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { DeriveReferendumExt } from '../types';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { memo } from '../util';

export function referendums (instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveReferendumExt[]> {
  return memo(instanceId, (): Observable<DeriveReferendumExt[]> =>
    api.derive.democracy.referendumsActive().pipe(
      switchMap((referendums) =>
        referendums.length
          ? combineLatest([
            of(referendums),
            api.derive.democracy._referendumsVotes(referendums)
          ])
          : of([[], []])
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
