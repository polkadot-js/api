// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Bytes, Option } from '@polkadot/types';
import type { AccountId, Balance, BlockNumber, Hash } from '@polkadot/types/interfaces';
import type { ITuple } from '@polkadot/types/types';
import type { DeriveProposalImage } from '../types';

import { map, of } from 'rxjs';

import { memo } from '../util';
import { parseImage } from './util';

type PreImage = Option<ITuple<[Bytes, AccountId, Balance, BlockNumber]>>;

export function preimages (instanceId: string, api: ApiInterfaceRx): (hashes: Hash[]) => Observable<(DeriveProposalImage | undefined)[]> {
  return memo(instanceId, (hashes: Hash[]): Observable<(DeriveProposalImage | undefined)[]> =>
    hashes.length
      ? api.query.democracy.preimages.multi<PreImage>(hashes).pipe(
        map((images): (DeriveProposalImage | undefined)[] =>
          images.map((imageOpt) => parseImage(api, imageOpt))
        )
      )
      : of([])
  );
}
