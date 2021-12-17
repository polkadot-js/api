// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { PalletDemocracyReferendumInfo } from '@polkadot/types/lookup';
import type { Option } from '@polkadot/types-codec';
import type { DeriveApi } from '../types';

import { map, switchMap } from 'rxjs';

import { memo } from '../util';

type ReferendumInfoFinished = PalletDemocracyReferendumInfo['asFinished'];

export function referendumsFinished (instanceId: string, api: DeriveApi): () => Observable<ReferendumInfoFinished[]> {
  return memo(instanceId, (): Observable<ReferendumInfoFinished[]> =>
    api.derive.democracy.referendumIds().pipe(
      switchMap((ids) =>
        api.query.democracy.referendumInfoOf.multi<Option<PalletDemocracyReferendumInfo>>(ids)
      ),
      map((infos): ReferendumInfoFinished[] =>
        infos
          .map((o) => o.unwrapOr(null))
          .filter((info): info is PalletDemocracyReferendumInfo => !!info && info.isFinished)
          .map((info) => info.asFinished)
      )
    )
  );
}
