// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DeriveApi, DeriveCollectiveProposal } from '../../types';

export function filterBountiesProposals (api: DeriveApi, allProposals: DeriveCollectiveProposal[]): DeriveCollectiveProposal[] {
  const bountyTxBase = api.tx.bounties ? api.tx.bounties : api.tx.treasury;
  const bountyProposalCalls = [bountyTxBase.approveBounty, bountyTxBase.closeBounty, bountyTxBase.proposeCurator, bountyTxBase.unassignCurator];

  return allProposals.filter((proposal) => bountyProposalCalls.find((bountyCall) => bountyCall.is(proposal.proposal)));
}
