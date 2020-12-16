// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { DeriveReferendum } from '../types';

import rxjs from 'rxjs';

import { switchMap } from '@polkadot/x-rxjs/operators';

import { memo } from '../util';

export function referendumsActive (instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveReferendum[]> {
  return memo(instanceId, (): Observable<DeriveReferendum[]> =>
    api.derive.democracy.referendumIds().pipe(
      switchMap((ids): Observable<DeriveReferendum[]> =>
        ids.length
          ? api.derive.democracy.referendumsInfo(ids)
          : of([])
      )
    )
  );
}
