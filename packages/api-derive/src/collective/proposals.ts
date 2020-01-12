// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { Option } from '@polkadot/types';
import { Hash, Proposal, Votes } from '@polkadot/types/interfaces';
import { DerivedCollectiveProposals } from '../types';
// import { Hash } from '@polkadot/types/interfaces';

import { combineLatest, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

export function proposals (api: ApiInterfaceRx, section: 'council' | 'technicalCommittee'): () => Observable<DerivedCollectiveProposals> {
  return (): Observable<DerivedCollectiveProposals> =>
    api.query[section]
      ? api.query[section].proposals()
        .pipe(
          switchMap((hashes: Hash[]): Observable<[Hash[], Option<Proposal>[], Option<Votes>[]]> => {
            return combineLatest([
              of(hashes),
              combineLatest(
                hashes.map((hash): Observable<Option<Proposal>> => api.query[section].proposalOf(hash))
              ),
              api.query[section].voting.multi<Option<Votes>>(hashes)
            ]);
          }),
          map(([hashes, proposals, votes]): DerivedCollectiveProposals => {
            const result: DerivedCollectiveProposals = [];

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
        )
      : of([] as DerivedCollectiveProposals);
}
