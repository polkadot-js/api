// Copyright 2017-2025 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { hasProposals as collectiveHasProposals, members as collectiveMembers, prime as collectivePrime, proposal as collectiveProposal, proposalCount as collectiveProposalCount, proposalHashes as collectiveProposalHashes, proposals as collectiveProposals } from '../collective/index.js';

export * from './votes.js';
export * from './votesOf.js';

export const members = /*#__PURE__*/ collectiveMembers('council');

export const hasProposals = /*#__PURE__*/ collectiveHasProposals('council');
export const proposal = /*#__PURE__*/ collectiveProposal('council');
export const proposalCount = /*#__PURE__*/ collectiveProposalCount('council');
export const proposalHashes = /*#__PURE__*/ collectiveProposalHashes('council');
export const proposals = /*#__PURE__*/ collectiveProposals('council');

export const prime = /*#__PURE__*/ collectivePrime('council');
