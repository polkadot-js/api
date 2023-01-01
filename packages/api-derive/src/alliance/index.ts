// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { hasProposals as collectiveHasProposals, members as collectiveMembers, prime as collectivePrime, proposal as collectiveProposal, proposalCount as collectiveProposalCount, proposalHashes as collectiveProposalHashes, proposals as collectiveProposals } from '../collective';

export const members = collectiveMembers('allianceMotion');

export const hasProposals = collectiveHasProposals('allianceMotion');
export const proposal = collectiveProposal('allianceMotion');
export const proposalCount = collectiveProposalCount('allianceMotion');
export const proposalHashes = collectiveProposalHashes('allianceMotion');
export const proposals = collectiveProposals('allianceMotion');

export const prime = collectivePrime('allianceMotion');
