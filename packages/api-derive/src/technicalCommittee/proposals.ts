// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveCollectiveProposals } from '../types';

import { Observable } from 'rxjs';
import { proposals as collectiveProposals } from '../collective';
import { memo } from '../util';

export function proposals (instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveCollectiveProposals> {
  return memo(instanceId, collectiveProposals(instanceId, api, 'technicalCommittee'));
}
