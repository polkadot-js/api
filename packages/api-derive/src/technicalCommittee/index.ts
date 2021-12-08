// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { hasProposals as collectiveHasProposals, prime as collectivePrime, proposal as collectiveProposal, proposalCount as collectiveProposalCount, proposalHashes as collectiveProposalHashes, proposals as collectiveProposals } from '../collective';

export * from './members';

export const hasProposals = collectiveHasProposals('technicalCommittee');
export const proposal = collectiveProposal('technicalCommittee');
export const proposalCount = collectiveProposalCount('technicalCommittee');
export const proposalHashes = collectiveProposalHashes('technicalCommittee');
export const proposals = collectiveProposals('technicalCommittee');

export const prime = collectivePrime('technicalCommittee');
