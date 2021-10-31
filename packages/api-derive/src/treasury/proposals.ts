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

function sortProposals (a: DeriveCollectiveProposal, b: DeriveCollectiveProposal): number {
  return a.proposal.method.localeCompare(b.proposal.method);
}

function parseResult (api: ApiInterfaceRx, { allIds, allProposals, approvalIds, councilProposals, proposalCount }: Result): DeriveTreasuryProposals {
  const filterProposal = ({ proposal }: DeriveCollectiveProposal) => (
    api.tx.treasury.approveProposal.is(proposal) ||
    api.tx.treasury.rejectProposal.is(proposal)
  );
  const councilTreasury = councilProposals.filter(filterProposal);
  const approvals: DeriveTreasuryProposal[] = [];
  const proposals: DeriveTreasuryProposal[] = [];

  for (let i = 0; i < allIds.length; i++) {
    if (allProposals[i].isSome) {
      const id = allIds[i];
      const filterIds = ({ proposal }: DeriveCollectiveProposal) => id.eq(proposal.args[0]);
      const council = councilTreasury.filter(filterIds).sort(sortProposals);
      const isApproval = approvalIds.some((approvalId) => approvalId.eq(id));
      const derived = { council, id, proposal: allProposals[i].unwrap() };

      if (isApproval) {
        approvals.push(derived);
      } else {
        proposals.push(derived);
      }
    }
  }

  return { approvals, proposalCount, proposals };
}

function retrieveProposals (api: ApiInterfaceRx, proposalCount: ProposalIndex, approvalIds: ProposalIndex[]): Observable<DeriveTreasuryProposals> {
  const proposalIds: ProposalIndex[] = [];
  const count = proposalCount.toNumber();

  for (let index = 0; index < count; index++) {
    const filterIds = (id: ProposalIndex) => id.eqn(index);

    if (!approvalIds.some(filterIds)) {
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
