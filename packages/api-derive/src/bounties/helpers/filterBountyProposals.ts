// Copyright 2017-2024 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DeriveApi, DeriveCollectiveProposal } from '../../types.js';

export function filterBountiesProposals (api: DeriveApi, allProposals: DeriveCollectiveProposal[]): DeriveCollectiveProposal[] {
  const bountyTxBase = api.tx.bounties ? api.tx.bounties : api.tx.treasury;
  const bountyProposalCalls = [bountyTxBase.approveBounty, bountyTxBase.closeBounty, bountyTxBase.proposeCurator, bountyTxBase.unassignCurator];

  return allProposals.filter((proposal) => bountyProposalCalls.find((bountyCall) =>
    proposal.proposal && bountyCall.is(proposal.proposal))
  );
}
