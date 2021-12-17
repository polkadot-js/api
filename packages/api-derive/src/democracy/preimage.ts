// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Hash } from '@polkadot/types/interfaces';
import type { ApiInterfaceRx } from '../../types';
import type { DeriveProposalImage } from '../types';

import { map } from 'rxjs';

import { memo } from '../util';
import { parseImage } from './util';

export function preimage (instanceId: string, api: ApiInterfaceRx): (hash: Hash) => Observable<DeriveProposalImage | undefined> {
  return memo(instanceId, (hash: Hash): Observable<DeriveProposalImage | undefined> =>
    api.query.democracy.preimages(hash).pipe(
      map((imageOpt) => parseImage(api, imageOpt))
    )
  );
}
