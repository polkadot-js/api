// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Observable } from '@polkadot/x-rxjs';
import type { DeriveReferendumExt } from '../types';

import { combineLatest, of } from '@polkadot/x-rxjs';
import { map, switchMap } from '@polkadot/x-rxjs/operators';

import { memo } from '../util';

export function referendums (instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveReferendumExt[]> {
  return memo(instanceId, (): Observable<DeriveReferendumExt[]> =>
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
