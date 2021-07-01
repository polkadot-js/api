// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Hash } from '@polkadot/types/interfaces';
import type { Observable } from '@polkadot/x-rxjs';
import type { DeriveCollectiveProposal } from '../types';

import { proposal as collectiveProposal, proposalHashes as collectiveProposalHashes, proposals as collectiveProposals } from '../collective';
import { memo } from '../util';

export function proposal (instanceId: string, api: ApiInterfaceRx): (hash: Hash | Uint8Array | string) => Observable<DeriveCollectiveProposal | null> {
  return memo(instanceId, collectiveProposal(instanceId, api, 'membership'));
}

export function proposalHashes (instanceId: string, api: ApiInterfaceRx): () => Observable<Hash[]> {
  return memo(instanceId, collectiveProposalHashes(instanceId, api, 'membership'));
}

export function proposals (instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveCollectiveProposal[]> {
  return memo(instanceId, collectiveProposals(instanceId, api, 'membership'));
}
