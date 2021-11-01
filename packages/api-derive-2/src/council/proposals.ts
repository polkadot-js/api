// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { u32 } from '@polkadot/types';
import type { Hash } from '@polkadot/types/interfaces';
import type { DeriveCollectiveProposal } from '../types';

import { hasProposals as collectiveHasProposals, proposal as collectiveProposal, proposalCount as collectiveProposalCount, proposalHashes as collectiveProposalHashes, proposals as collectiveProposals } from '../collective';
import { memo } from '../util';

export function hasProposals (instanceId: string, api: ApiInterfaceRx): () => Observable<boolean> {
  return memo(instanceId, collectiveHasProposals(instanceId, api, 'council'));
}

export function proposal (instanceId: string, api: ApiInterfaceRx): (hash: Hash | Uint8Array | string) => Observable<DeriveCollectiveProposal | null> {
  return memo(instanceId, collectiveProposal(instanceId, api, 'council'));
}

export function proposalCount (instanceId: string, api: ApiInterfaceRx): () => Observable<u32 | null> {
  return memo(instanceId, collectiveProposalCount(instanceId, api, 'council'));
}

export function proposalHashes (instanceId: string, api: ApiInterfaceRx): () => Observable<Hash[]> {
  return memo(instanceId, collectiveProposalHashes(instanceId, api, 'council'));
}

export function proposals (instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveCollectiveProposal[]> {
  return memo(instanceId, collectiveProposals(instanceId, api, 'council'));
}
