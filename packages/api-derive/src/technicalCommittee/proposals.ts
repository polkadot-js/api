// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { DerivedCollectiveProposals } from '../types';

import { Observable } from 'rxjs';
import { proposals as collectiveProposals } from '../collective';

export function proposals (api: ApiInterfaceRx): () => Observable<DerivedCollectiveProposals> {
  return collectiveProposals(api, 'technicalCommittee');
}
