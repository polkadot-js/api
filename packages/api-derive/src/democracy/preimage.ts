// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Hash, PreimageStatus } from '@polkadot/types/interfaces';
import type { Option } from '@polkadot/types-codec';
import type { DeriveApi, DeriveProposalImage } from '../types';

import { map } from 'rxjs';

import { memo } from '../util';
import { parseImage } from './util';

export function preimage (instanceId: string, api: DeriveApi): (hash: Hash) => Observable<DeriveProposalImage | undefined> {
  return memo(instanceId, (hash: Hash): Observable<DeriveProposalImage | undefined> =>
    api.query.democracy.preimages<Option<PreimageStatus>>(hash).pipe(
      map((imageOpt) => parseImage(api, imageOpt))
    )
  );
}
