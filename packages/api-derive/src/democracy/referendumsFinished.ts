// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiInterfaceRx } from '@polkadot/api/types';
import { ReferendumInfo, ReferendumInfoFinished } from '@polkadot/types/interfaces';

import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Option } from '@polkadot/types';

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
