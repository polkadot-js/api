// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { hasProposals as collectiveHasProposals, prime as collectivePrime, proposal as collectiveProposal, proposalCount as collectiveProposalCount, proposalHashes as collectiveProposalHashes, proposals as collectiveProposals } from '../collective';

export * from './members';

export const hasProposals = collectiveHasProposals('membership');
export const proposal = collectiveProposal('membership');
export const proposalCount = collectiveProposalCount('membership');
export const proposalHashes = collectiveProposalHashes('membership');
export const proposals = collectiveProposals('membership');

export const prime = collectivePrime('membership');
