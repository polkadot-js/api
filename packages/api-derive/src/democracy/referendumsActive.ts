// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveReferendum } from '../types';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { memo } from '../util';

export function referendumsActive (api: ApiInterfaceRx): () => Observable<DeriveReferendum[]> {
  return memo((): Observable<DeriveReferendum[]> =>
    api.derive.democracy.referendumIds().pipe(
      switchMap((ids): Observable<DeriveReferendum[]> =>
        ids.length
          ? api.derive.democracy.referendumsInfo(ids)
          : of([])
      )
    )
  );
}
