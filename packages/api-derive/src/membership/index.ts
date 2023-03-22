// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { hasProposals as collectiveHasProposals, members as collectiveMembers, prime as collectivePrime, proposal as collectiveProposal, proposalCount as collectiveProposalCount, proposalHashes as collectiveProposalHashes, proposals as collectiveProposals } from '../collective/index.js';

export const members = /*#__PURE__*/ collectiveMembers('membership');

export const hasProposals = /*#__PURE__*/ collectiveHasProposals('membership');
export const proposal = /*#__PURE__*/ collectiveProposal('membership');
export const proposalCount = /*#__PURE__*/ collectiveProposalCount('membership');
export const proposalHashes = /*#__PURE__*/ collectiveProposalHashes('membership');
export const proposals = /*#__PURE__*/ collectiveProposals('membership');

export const prime = /*#__PURE__*/ collectivePrime('membership');
