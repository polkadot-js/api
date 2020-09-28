// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { AccountId, Balance, BlockNumber, Hash } from '@polkadot/types/interfaces';
import { ITuple } from '@polkadot/types/types';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveProposalImage } from '../types';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Bytes, Option } from '@polkadot/types';

import { memo } from '../util';
import { parseImage } from './util';

type PreImage = Option<ITuple<[Bytes, AccountId, Balance, BlockNumber]>>;

export function preimage (instanceId: string, api: ApiInterfaceRx): (hash: Hash) => Observable<DeriveProposalImage | undefined> {
  return memo(instanceId, (hash: Hash): Observable<DeriveProposalImage | undefined> =>
    api.query.democracy.preimages<PreImage>(hash).pipe(
      map((imageOpt) => parseImage(api, imageOpt))
    )
  );
}
