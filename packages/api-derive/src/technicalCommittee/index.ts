// Copyright 2017-2025 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { hasProposals as collectiveHasProposals, members as collectiveMembers, prime as collectivePrime, proposal as collectiveProposal, proposalCount as collectiveProposalCount, proposalHashes as collectiveProposalHashes, proposals as collectiveProposals } from '../collective/index.js';

/**
 * @name members
 * @description Retrieves the list of members in the "technicalCommittee" collective.
 * @example
 * ```javascript
 * const members = await api.derive.technicalCommittee.members();
 * console.log(`Members: ${JSON.stringify(members)});
 * ```
 */
export const members = /*#__PURE__*/ collectiveMembers('technicalCommittee');

/**
 * @name hasProposals
 * @description Checks if there are any active proposals in the "technicalCommittee" collective.
 * @example
 * ```javascript
 * const exists = await api.derive.technicalCommittee.hasProposals();
 * console.log(exists);
 * ```
 */
export const hasProposals = /*#__PURE__*/ collectiveHasProposals('technicalCommittee');
/**
 * @name proposal
 * @description Retrieves details of a specific proposal in the "technicalCommitteeMotion" collective by its hash.
 * @example
 * ```javascript
 * const proposalDetails = await api.derive.technicalCommittee.proposal(PROPOSAL_HASH);
 * console.log(proposalDetails);
 * ```
 */
export const proposal = /*#__PURE__*/ collectiveProposal('technicalCommittee');
/**
 * @name proposalCount
 * @description Retrieves the total number of proposals in the "technicalCommittee" collective.
 * @example
 * ```javascript
 * const count = await api.derive.technicalCommittee.proposalCount();
 * console.log(`Amount of proposals: ${count}`);
 * ```
 */
export const proposalCount = /*#__PURE__*/ collectiveProposalCount('technicalCommittee');
/**
 * @name proposalHashes
 * @description Retrieves an array of hashes for all active proposals in the "technicalCommittee" collective.
 * @example
 * ```javascript
 * const hashes = await api.derive.technicalCommittee.proposalHashes();
 * console.log(`Proposals ${JSON.stringify(hashes)}`);
 * ```
 */
export const proposalHashes = /*#__PURE__*/ collectiveProposalHashes('technicalCommittee');
/**
 * @name proposals
 * @description Retrieves a list of all active proposals in the "technicalCommittee" collective.
 * @example
 * ```javascript
 * const proposals = await api.derive.technicalCommittee.proposals();
 * console.log(proposals);
 * ```
 */
export const proposals = /*#__PURE__*/ collectiveProposals('technicalCommittee');
/**
 * @name prime
 * @description Retrieves the prime member of the "technicalCommittee" collective, if one exists.
 * @example
 * ```javascript
 * const primeMember = await api.derive.technicalCommittee.prime();
 * console.log(primeMember);
 * ```
 */
export const prime = /*#__PURE__*/ collectivePrime('technicalCommittee');
