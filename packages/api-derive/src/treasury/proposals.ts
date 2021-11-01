// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Option } from '@polkadot/types';
import type { ProposalIndex } from '@polkadot/types/interfaces';
import type { PalletTreasuryProposal } from '@polkadot/types/lookup';
import type { DeriveCollectiveProposal, DeriveTreasuryProposal, DeriveTreasuryProposals } from '../types';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { memo } from '../util';

interface Result {
  allIds: ProposalIndex[];
  allProposals: Option<PalletTreasuryProposal>[];
  approvalIds: ProposalIndex[];
  councilProposals: DeriveCollectiveProposal[];
  proposalCount: ProposalIndex;
}

function parseResult (api: ApiInterfaceRx, { allIds, allProposals, approvalIds, councilProposals, proposalCount }: Result): DeriveTreasuryProposals {
  const approvals: DeriveTreasuryProposal[] = [];
  const proposals: DeriveTreasuryProposal[] = [];
  const councilTreasury = councilProposals.filter(({ proposal }) =>
    api.tx.treasury.approveProposal.is(proposal) ||
    api.tx.treasury.rejectProposal.is(proposal)
  );

  allIds.forEach((id, index): void => {
    if (allProposals[index].isSome) {
      const council = councilTreasury
        .filter(({ proposal }) => id.eq(proposal.args[0]))
        .sort((a, b) => a.proposal.method.localeCompare(b.proposal.method));
      const isApproval = approvalIds.some((approvalId) => approvalId.eq(id));
      const derived = { council, id, proposal: allProposals[index].unwrap() };

      if (isApproval) {
        approvals.push(derived);
      } else {
        proposals.push(derived);
      }
    }
  });

  return { approvals, proposalCount, proposals };
}

function retrieveProposals (api: ApiInterfaceRx, proposalCount: ProposalIndex, approvalIds: ProposalIndex[]): Observable<DeriveTreasuryProposals> {
  const proposalIds: ProposalIndex[] = [];
  const count = proposalCount.toNumber();

  for (let index = 0; index < count; index++) {
    if (!approvalIds.some((id) => id.eqn(index))) {
      proposalIds.push(api.registry.createType('ProposalIndex', index));
    }
  }

  const allIds = [...proposalIds, ...approvalIds];

  return combineLatest([
    api.query.treasury.proposals.multi(allIds),
    api.derive.council
      ? api.derive.council.proposals()
      : of([] as DeriveCollectiveProposal[])
  ]).pipe(
    map(([allProposals, councilProposals]: [Option<PalletTreasuryProposal>[], DeriveCollectiveProposal[]]): DeriveTreasuryProposals =>
      parseResult(api, { allIds, allProposals, approvalIds, councilProposals, proposalCount })
    )
  );
}

/**
 * @description Retrieve all active and approved treasury proposals, along with their info
 */
export function proposals (instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveTreasuryProposals> {
  return memo(instanceId, (): Observable<DeriveTreasuryProposals> =>
    api.query.treasury
      ? combineLatest([
        api.query.treasury.proposalCount(),
        api.query.treasury.approvals()
      ]).pipe(
        switchMap(([proposalCount, approvalIds]: [ProposalIndex, ProposalIndex[]]) =>
          retrieveProposals(api, proposalCount, approvalIds)
        )
      )
      : of({
        approvals: [],
        proposalCount: api.registry.createType('ProposalIndex'),
        proposals: []
      } as DeriveTreasuryProposals)
  );
}
