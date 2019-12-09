// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { Hash, Proposal, Votes } from '@polkadot/types/interfaces';
import { DerivedCouncilProposals } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Option } from '@polkadot/types';

import { memo } from '../util';

function retrieveProposals (api: ApiInterfaceRx, hashes: Hash[]): Observable<DerivedCouncilProposals> {
  return combineLatest([
    api.query.council.proposalOf.multi<Option<Proposal>>(hashes),
    api.query.council.voting.multi<Option<Votes>>(hashes)
  ]).pipe(
    map(([proposals, votes]: [Option<Proposal>[], Option<Votes>[]]): DerivedCouncilProposals => {
      const result: DerivedCouncilProposals = [];

      proposals.forEach((proposalOpt, index): void => {
        if (proposalOpt.isSome) {
          result.push({
            hash: hashes[index],
            proposal: proposalOpt.unwrap(),
            votes: votes[index].unwrapOr(null)
          });
        }
      });

      return result;
    })
  );
}

export function proposals (api: ApiInterfaceRx): () => Observable<DerivedCouncilProposals> {
  return memo((): Observable<DerivedCouncilProposals> =>
    api.query.council
      ? api.query.council.proposals().pipe(
        switchMap((proposals: Hash[]): Observable<DerivedCouncilProposals> =>
          retrieveProposals(api, proposals)
        )
      )
      : of([] as DerivedCouncilProposals)
  );
}
