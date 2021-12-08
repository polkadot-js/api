// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { hasProposals as collectiveHasProposals, prime as collectivePrime, proposal as collectiveProposal, proposalCount as collectiveProposalCount, proposalHashes as collectiveProposalHashes, proposals as collectiveProposals } from '../collective';

export * from './members';
export * from './votes';
export * from './votesOf';

export const hasProposals = collectiveHasProposals('council');
export const proposal = collectiveProposal('council');
export const proposalCount = collectiveProposalCount('council');
export const proposalHashes = collectiveProposalHashes('council');
export const proposals = collectiveProposals('council');

export const prime = collectivePrime('council');
