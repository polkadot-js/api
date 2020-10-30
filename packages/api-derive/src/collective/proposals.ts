// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiInterfaceRx } from '@polkadot/api/types';
import { Hash, Proposal, Votes } from '@polkadot/types/interfaces';
import { DeriveCollectiveProposal } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Option } from '@polkadot/types';
import { isFunction } from '@polkadot/util';

import { memo } from '../util';

type Result = [(Hash | Uint8Array | string)[], Option<Proposal>[], Option<Votes>[]];

function parse (api: ApiInterfaceRx, [hashes, proposals, votes]: Result): DeriveCollectiveProposal[] {
  return proposals
    .map((proposalOpt, index): DeriveCollectiveProposal | null =>
      proposalOpt.isSome
        ? {
          hash: api.registry.createType('Hash', hashes[index]),
          proposal: proposalOpt.unwrap(),
          votes: votes[index].unwrapOr(null)
        }
        : null
    )
    .filter((proposal): proposal is DeriveCollectiveProposal => !!proposal);
}

function _proposalsFrom (instanceId: string, api: ApiInterfaceRx, section: 'council' | 'technicalCommittee' = 'council'): (hashes: (Hash | Uint8Array | string)[]) => Observable<DeriveCollectiveProposal[]> {
  return memo(instanceId, (hashes: (Hash | Uint8Array | string)[]): Observable<DeriveCollectiveProposal[]> =>
    (isFunction(api.query[section]?.proposals) && hashes.length
      ? combineLatest<Result>([
        of(hashes),
        api.query[section].proposalOf.multi<Option<Proposal>>(hashes),
        api.query[section].voting.multi<Option<Votes>>(hashes)
      ])
      : of([[], [], []] as Result)
    ).pipe(
      map((result) => parse(api, result))
    )
  );
}

export function proposals (instanceId: string, api: ApiInterfaceRx, section: 'council' | 'technicalCommittee' = 'council'): () => Observable<DeriveCollectiveProposal[]> {
  const proposalsFrom = _proposalsFrom(instanceId, api, section);

  return memo(instanceId, (): Observable<DeriveCollectiveProposal[]> =>
    isFunction(api.query[section]?.proposals)
      ? api.query[section].proposals().pipe(
        switchMap(proposalsFrom)
      )
      : of([] as DeriveCollectiveProposal[])
  );
}

export function proposal (instanceId: string, api: ApiInterfaceRx, section: 'council' | 'technicalCommittee' = 'council'): (hash: Hash | Uint8Array | string) => Observable<DeriveCollectiveProposal | null> {
  const proposalsFrom = _proposalsFrom(instanceId, api, section);

  return memo(instanceId, (hash: Hash | Uint8Array | string): Observable<DeriveCollectiveProposal | null> =>
    isFunction(api.query[section]?.proposals)
      ? proposalsFrom([hash]).pipe(
        map(([proposal]) => proposal)
      )
      : of(null)
  );
}
