// Copyright 2017-2025 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { hasProposals as collectiveHasProposals, members as collectiveMembers, prime as collectivePrime, proposal as collectiveProposal, proposalCount as collectiveProposalCount, proposalHashes as collectiveProposalHashes, proposals as collectiveProposals } from '../collective/index.js';

export * from './votes.js';
export * from './votesOf.js';

/**
 * @name members
 */
export const members = /*#__PURE__*/ collectiveMembers('council');

/**
 * @name hasProposals
 */
export const hasProposals = /*#__PURE__*/ collectiveHasProposals('council');
/**
 * @name proposal
 */
export const proposal = /*#__PURE__*/ collectiveProposal('council');
/**
 * @name proposalCount
 */
export const proposalCount = /*#__PURE__*/ collectiveProposalCount('council');
/**
 * @name proposalHashes
 */
export const proposalHashes = /*#__PURE__*/ collectiveProposalHashes('council');
/**
 * @name proposals
 */
export const proposals = /*#__PURE__*/ collectiveProposals('council');
/**
 * @name prime
 */
export const prime = /*#__PURE__*/ collectivePrime('council');

