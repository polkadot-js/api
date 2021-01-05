// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveCollectiveProposal } from '@polkadot/api-derive/types';

export function filterBountiesProposals (api: ApiInterfaceRx, allProposals: DeriveCollectiveProposal[]): DeriveCollectiveProposal[] {
  const bountyTxBase = api.tx.bounties ? api.tx.bounties : api.tx.treasury;
  const bountyProposalCalls = [bountyTxBase.approveBounty, bountyTxBase.closeBounty, bountyTxBase.proposeCurator, bountyTxBase.unassignCurator];

  return allProposals.filter((proposal) => bountyProposalCalls.find((bountyCall) => bountyCall.is(proposal.proposal)));
}
