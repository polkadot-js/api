// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Bytes, Option } from '@polkadot/types';
import type { Bounty, BountyIndex, ProposalIndex } from '@polkadot/types/interfaces';
import type { DeriveBounties, DeriveCollectiveProposal } from '../types';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { memo } from '../util';
import { filterBountiesProposals } from './helpers/filterBountyProposals';

type Result = [Option<Bounty>[], Option<Bytes>[], BountyIndex[], DeriveCollectiveProposal[]];

function parseResult ([maybeBounties, maybeDescriptions, ids, bountyProposals]: Result): DeriveBounties {
  const bounties: DeriveBounties = [];

  maybeBounties.forEach((bounty, index) => {
    if (bounty.isSome) {
      bounties.push({
        bounty: bounty.unwrap(),
        description: maybeDescriptions[index].unwrapOrDefault().toUtf8(),
        index: ids[index],
        proposals: bountyProposals.filter((bountyProposal) => ids[index].eq(bountyProposal.proposal.args[0]))
      });
    }
  });

  return bounties;
}

export function bounties (instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveBounties> {
  const bountyBase = api.query.bounties || api.query.treasury;

  return memo(instanceId, (): Observable<DeriveBounties> =>
    combineLatest([
      bountyBase.bountyCount<BountyIndex>(),
      api.query.council
        ? api.query.council.proposalCount<ProposalIndex>()
        : of(0)
    ]).pipe(
      switchMap(() =>
        combineLatest([
          bountyBase.bounties.keys<[BountyIndex]>(),
          api.derive.council
            ? api.derive.council.proposals()
            : of([])
        ])
      ),
      switchMap(([keys, proposals]): Observable<Result> => {
        const ids = keys.map(({ args: [id] }) => id);

        return combineLatest([
          bountyBase.bounties.multi<Option<Bounty>>(ids),
          bountyBase.bountyDescriptions.multi<Option<Bytes>>(ids),
          of(ids),
          of(filterBountiesProposals(api, proposals))
        ]);
      }),
      map(parseResult)
    )
  );
}
