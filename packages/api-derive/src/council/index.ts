// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { hasProposals as collectiveHasProposals, members as collectiveMembers, prime as collectivePrime, proposal as collectiveProposal, proposalCount as collectiveProposalCount, proposalHashes as collectiveProposalHashes, proposals as collectiveProposals } from '../collective';

export * from './votes';
export * from './votesOf';

export const members = collectiveMembers('council');

export const hasProposals = collectiveHasProposals('council');
export const proposal = collectiveProposal('council');
export const proposalCount = collectiveProposalCount('council');
export const proposalHashes = collectiveProposalHashes('council');
export const proposals = collectiveProposals('council');

export const prime = collectivePrime('council');
