// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Option } from '@polkadot/types';
import type { ProposalIndex, TreasuryProposal } from '@polkadot/types/interfaces';
import type { Observable } from '@polkadot/x-rxjs';
import type { DeriveCollectiveProposal, DeriveTreasuryProposal, DeriveTreasuryProposals } from '../types';

import { combineLatest, of } from '@polkadot/x-rxjs';
import { map, switchMap } from '@polkadot/x-rxjs/operators';

import { memo } from '../util';

interface Result {
  allIds: ProposalIndex[];
  allProposals: Option<TreasuryProposal>[];
  approvalIds: ProposalIndex[];
  councilProposals: DeriveCollectiveProposal[];
  proposalCount: ProposalIndex;
}

function parseResult (_api: ApiInterfaceRx, { allIds, allProposals, approvalIds, councilProposals, proposalCount }: Result): DeriveTreasuryProposals {
  const approvals: DeriveTreasuryProposal[] = [];
  const proposals: DeriveTreasuryProposal[] = [];
  const councilTreasury = councilProposals.filter(({ proposal: { methodName, sectionName } }): boolean =>
    sectionName === 'treasury' &&
    ['approveProposal', 'rejectProposal'].includes(methodName)
  );

  allIds.forEach((id, index): void => {
    if (allProposals[index].isSome) {
      const council = councilTreasury
        .filter(({ proposal }): boolean => id.eq(proposal.args[0]))
        .sort((a, b): number => a.proposal.methodName.localeCompare(b.proposal.methodName));
      const isApproval = approvalIds.some((approvalId): boolean => approvalId.eq(id));
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
    api.query.treasury.proposals.multi<Option<TreasuryProposal>>(allIds),
    api.derive.council.proposals()
  ]).pipe(
    map(([allProposals, councilProposals]: [Option<TreasuryProposal>[], DeriveCollectiveProposal[]]): DeriveTreasuryProposals =>
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
