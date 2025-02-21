// Copyright 2017-2025 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { hasProposals as collectiveHasProposals, members as collectiveMembers, prime as collectivePrime, proposal as collectiveProposal, proposalCount as collectiveProposalCount, proposalHashes as collectiveProposalHashes, proposals as collectiveProposals } from '../collective/index.js';

/**
 * @name members
 * @description Retrieves the list of members in the "allianceMotion" collective.
 * @example
 * ```javascript
 * const members = await api.derive.alliance.members();
 * console.log(`Members: ${JSON.stringify(members)});
 * ```
 */
export const members = /*#__PURE__*/ collectiveMembers('allianceMotion');

/**
 * @name hasProposals
 * @description Checks if there are any active proposals in the "allianceMotion" collective.
 * @example
 * ```javascript
 * const exists = await api.derive.alliance.hasProposals();
 * console.log(exists);
 * ```
 */
export const hasProposals = /*#__PURE__*/ collectiveHasProposals('allianceMotion');
/**
 * @name proposal
 * @description Retrieves details of a specific proposal in the "allianceMotion" collective by its hash.
 * @example
 * ```javascript
 * const proposalDetails = await api.derive.alliance.proposal(PROPOSAL_HASH);
 * console.log(proposalDetails);
 * ```
 */
export const proposal = /*#__PURE__*/ collectiveProposal('allianceMotion');
/**
 * @name proposalCount
 * @description Retrieves the total number of proposals in the "allianceMotion" collective.
 * @example
 * ```javascript
 * const count = await api.derive.alliance.proposalCount();
 * console.log(`Amount of proposals: ${count}`);
 * ```
 */
export const proposalCount = /*#__PURE__*/ collectiveProposalCount('allianceMotion');
/**
 * @name proposalHashes
 * @description Retrieves an array of hashes for all active proposals in the "allianceMotion" collective.
 * @example
 * ```javascript
 * const hashes = await api.derive.alliance.proposalHashes();
 * console.log(`Proposals ${JSON.stringify(hashes)}`);
 * ```
 */
export const proposalHashes = /*#__PURE__*/ collectiveProposalHashes('allianceMotion');
/**
 * @name proposals
 * @description Retrieves a list of all active proposals in the "allianceMotion" collective.
 * @example
 * ```javascript
 * const proposals = await api.derive.alliance.proposals();
 * console.log(proposals);
 * ```
 */
export const proposals = /*#__PURE__*/ collectiveProposals('allianceMotion');
/**
 * @name prime
 * @description Retrieves the prime member of the "allianceMotion" collective, if one exists.
 * @example
 * ```javascript
 * const primeMember = await api.derive.alliance.prime();
 * console.log(primeMember);
 * ```
 */
export const prime = /*#__PURE__*/ collectivePrime('allianceMotion');
