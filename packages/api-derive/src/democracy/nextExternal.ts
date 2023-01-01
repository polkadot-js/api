// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Option } from '@polkadot/types';
import type { H256 } from '@polkadot/types/interfaces';
import type { FrameSupportPreimagesBounded, PalletDemocracyVoteThreshold } from '@polkadot/types/lookup';
import type { ITuple } from '@polkadot/types/types';
import type { DeriveApi, DeriveProposalExternal } from '../types';

import { map, of, switchMap } from 'rxjs';

import { memo } from '../util';
import { getImageHashBounded } from './util';

function withImage (api: DeriveApi, nextOpt: Option<ITuple<[H256 | FrameSupportPreimagesBounded, PalletDemocracyVoteThreshold]>>): Observable<DeriveProposalExternal | null> {
  if (nextOpt.isNone) {
    return of(null);
  }

  const [hash, threshold] = nextOpt.unwrap();

  return api.derive.democracy.preimage(hash).pipe(
    map((image): DeriveProposalExternal => ({
      image,
      imageHash: getImageHashBounded(hash),
      threshold
    }))
  );
}

export function nextExternal (instanceId: string, api: DeriveApi): () => Observable<DeriveProposalExternal | null> {
  return memo(instanceId, (): Observable<DeriveProposalExternal | null> =>
    api.query.democracy?.nextExternal
      ? api.query.democracy.nextExternal().pipe(
        switchMap((nextOpt) => withImage(api, nextOpt))
      )
      : of(null)
  );
}
