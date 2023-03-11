// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { hasProposals as collectiveHasProposals, members as collectiveMembers, prime as collectivePrime, proposal as collectiveProposal, proposalCount as collectiveProposalCount, proposalHashes as collectiveProposalHashes, proposals as collectiveProposals } from '../collective/index.js';

export * from './votes.js';
export * from './votesOf.js';

// We are re-exporting these from here to ensure that *.d.ts generation is correct
export type { u32 } from '@polkadot/types';
export type { AccountId } from '@polkadot/types/interfaces';

export const members = collectiveMembers('council');

export const hasProposals = collectiveHasProposals('council');
export const proposal = collectiveProposal('council');
export const proposalCount = collectiveProposalCount('council');
export const proposalHashes = collectiveProposalHashes('council');
export const proposals = collectiveProposals('council');

export const prime = collectivePrime('council');
