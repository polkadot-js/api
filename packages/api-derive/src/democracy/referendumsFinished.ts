// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Option } from '@polkadot/types';
import type { ReferendumInfo, ReferendumInfoFinished } from '@polkadot/types/interfaces';
import type { Observable } from '@polkadot/x-rxjs';

import { map, switchMap } from '@polkadot/x-rxjs/operators';

import { memo } from '../util';

export function referendumsFinished (instanceId: string, api: ApiInterfaceRx): () => Observable<ReferendumInfoFinished[]> {
  return memo(instanceId, (): Observable<ReferendumInfoFinished[]> =>
    api.derive.democracy.referendumIds().pipe(
      switchMap((ids) => api.query.democracy.referendumInfoOf.multi<Option<ReferendumInfo>>(ids)),
      map((infos): ReferendumInfoFinished[] =>
        infos
          .filter((optInfo) => optInfo.isSome)
          .map((optInfo) => optInfo.unwrap())
          .filter((info) => info.isFinished)
          .map((info) => info.asFinished)
      )
    )
  );
}
