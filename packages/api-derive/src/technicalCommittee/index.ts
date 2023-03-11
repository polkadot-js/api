// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { hasProposals as collectiveHasProposals, members as collectiveMembers, prime as collectivePrime, proposal as collectiveProposal, proposalCount as collectiveProposalCount, proposalHashes as collectiveProposalHashes, proposals as collectiveProposals } from '../collective/index.js';

// We are re-exporting these from here to ensure that *.d.ts generation is correct
export type { u32 } from '@polkadot/types';
export type { AccountId } from '@polkadot/types/interfaces';

export const members = /*#__PURE__*/ collectiveMembers('technicalCommittee');

export const hasProposals = /*#__PURE__*/ collectiveHasProposals('technicalCommittee');
export const proposal = /*#__PURE__*/ collectiveProposal('technicalCommittee');
export const proposalCount = /*#__PURE__*/ collectiveProposalCount('technicalCommittee');
export const proposalHashes = /*#__PURE__*/ collectiveProposalHashes('technicalCommittee');
export const proposals = /*#__PURE__*/ collectiveProposals('technicalCommittee');

export const prime = /*#__PURE__*/ collectivePrime('technicalCommittee');
