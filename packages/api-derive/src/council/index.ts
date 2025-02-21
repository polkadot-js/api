// Copyright 2017-2025 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { hasProposals as collectiveHasProposals, members as collectiveMembers, prime as collectivePrime, proposal as collectiveProposal, proposalCount as collectiveProposalCount, proposalHashes as collectiveProposalHashes, proposals as collectiveProposals } from '../collective/index.js';

export * from './votes.js';
export * from './votesOf.js';

/**
 * @name members
 * @description Retrieves the list of members in the "council" collective.
 * @example
 * ```javascript
 * const members = await api.derive.council.members();
 * console.log(`Members: ${JSON.stringify(members)});
 * ```
 */
export const members = /*#__PURE__*/ collectiveMembers('council');

/**
 * @name hasProposals
 * @description Checks if there are any active proposals in the "council" collective.
 * @example
 * ```javascript
 * const exists = await api.derive.council.hasProposals();
 * console.log(exists);
 * ```
 */
export const hasProposals = /*#__PURE__*/ collectiveHasProposals('council');
/**
 * @name proposal
 * @description Retrieves details of a specific proposal in the "councilMotion" collective by its hash.
 * @example
 * ```
 * const proposalDetails = await api.derive.council.proposal(PROPOSAL_HASH);
 * console.log(proposalDetails);
 * ```
 */
export const proposal = /*#__PURE__*/ collectiveProposal('council');
/**
 * @name proposalCount
 * @description Retrieves the total number of proposals in the "council" collective.
 * @example
 * ```javascript
 * const count = await api.derive.council.proposalCount();
 * console.log(`Amount of proposals: ${count}`);
 * ```
 */
export const proposalCount = /*#__PURE__*/ collectiveProposalCount('council');
/**
 * @name proposalHashes
 * @description Retrieves an array of hashes for all active proposals in the "council" collective.
 * @example
 * ```javascript
 * const hashes = await api.derive.council.proposalHashes();
 * console.log(`Proposals ${JSON.stringify(hashes)}`);
 * ```
 */
export const proposalHashes = /*#__PURE__*/ collectiveProposalHashes('council');
/**
 * @name proposals
 * @description Retrieves a list of all active proposals in the "council" collective.
 * @example
 * ```javascript
 * const proposals = await api.derive.council.proposals();
 * console.log(proposals);
 * ```
 */
export const proposals = /*#__PURE__*/ collectiveProposals('council');
/**
 * @name prime
 * @description Retrieves the prime member of the "council" collective, if one exists.
 * @example
 * ```javascript
 * const primeMember = await api.derive.council.prime();
 * console.log(primeMember);
 * ```
 */
export const prime = /*#__PURE__*/ collectivePrime('council');


