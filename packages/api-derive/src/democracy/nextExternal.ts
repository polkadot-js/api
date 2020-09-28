// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Hash, VoteThreshold } from '@polkadot/types/interfaces';
import { ITuple } from '@polkadot/types/types';
import { DeriveProposalExternal } from '../types';

import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { Option } from '@polkadot/types';

import { memo } from '../util';

function withImage (api: ApiInterfaceRx, nextOpt: Option<ITuple<[Hash, VoteThreshold]>>): Observable<DeriveProposalExternal | null> {
  if (nextOpt.isNone) {
    return of(null);
  }

  const [imageHash, threshold] = nextOpt.unwrap();

  return api.derive.democracy.preimage(imageHash).pipe(
    map((image): DeriveProposalExternal => ({
      image,
      imageHash,
      threshold
    }))
  );
}

export function nextExternal (instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveProposalExternal | null> {
  return memo(instanceId, (): Observable<DeriveProposalExternal | null> =>
    api.query.democracy?.nextExternal
      ? api.query.democracy.nextExternal<Option<ITuple<[Hash, VoteThreshold]>>>().pipe(
        switchMap((nextOpt) => withImage(api, nextOpt))
      )
      : of(null)
  );
}
