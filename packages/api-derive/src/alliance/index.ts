// Copyright 2017-2025 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { hasProposals as collectiveHasProposals, members as collectiveMembers, prime as collectivePrime, proposal as collectiveProposal, proposalCount as collectiveProposalCount, proposalHashes as collectiveProposalHashes, proposals as collectiveProposals } from '../collective/index.js';

/**
 * @name members
 */
export const members = /*#__PURE__*/ collectiveMembers('allianceMotion');

/**
 * @name hasProposals
 */
export const hasProposals = /*#__PURE__*/ collectiveHasProposals('allianceMotion');
/**
 * @name proposal
 */
export const proposal = /*#__PURE__*/ collectiveProposal('allianceMotion');
/**
 * @name proposalCount
 */
export const proposalCount = /*#__PURE__*/ collectiveProposalCount('allianceMotion');
/**
 * @name proposalHashes
 */
export const proposalHashes = /*#__PURE__*/ collectiveProposalHashes('allianceMotion');
/**
 * @name proposals
 */
export const proposals = /*#__PURE__*/ collectiveProposals('allianceMotion');
/**
 * @name prime
 */
export const prime = /*#__PURE__*/ collectivePrime('allianceMotion');
