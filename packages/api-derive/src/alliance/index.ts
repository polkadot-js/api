// Copyright 2017-2025 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { hasProposals as collectiveHasProposals, members as collectiveMembers, prime as collectivePrime, proposal as collectiveProposal, proposalCount as collectiveProposalCount, proposalHashes as collectiveProposalHashes, proposals as collectiveProposals } from '../collective/index.js';

export const members = /*#__PURE__*/ collectiveMembers('allianceMotion');

export const hasProposals = /*#__PURE__*/ collectiveHasProposals('allianceMotion');
export const proposal = /*#__PURE__*/ collectiveProposal('allianceMotion');
export const proposalCount = /*#__PURE__*/ collectiveProposalCount('allianceMotion');
export const proposalHashes = /*#__PURE__*/ collectiveProposalHashes('allianceMotion');
export const proposals = /*#__PURE__*/ collectiveProposals('allianceMotion');

export const prime = /*#__PURE__*/ collectivePrime('allianceMotion');
