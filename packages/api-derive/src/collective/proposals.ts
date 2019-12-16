// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { Hash, Proposal, Votes } from '@polkadot/types/interfaces';
import { DerivedCollectiveProposals } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Option } from '@polkadot/types';

import { memo } from '../util';

function retrieveProposals (api: ApiInterfaceRx, section: 'council' | 'technicalCommittee', hashes: Hash[]): Observable<DerivedCollectiveProposals> {
  return combineLatest([
    api.query[section].proposalOf.multi<Option<Proposal>>(hashes),
    api.query[section].voting.multi<Option<Votes>>(hashes)
  ]).pipe(
    map(([proposals, votes]: [Option<Proposal>[], Option<Votes>[]]): DerivedCollectiveProposals => {
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
  );
}

export function proposals (api: ApiInterfaceRx, section: 'council' | 'technicalCommittee'): () => Observable<DerivedCollectiveProposals> {
  return memo((): Observable<DerivedCollectiveProposals> =>
    api.query[section]
      ? api.query[section].proposals().pipe(
        switchMap((proposals: Hash[]): Observable<DerivedCollectiveProposals> =>
          retrieveProposals(api, section, proposals)
        )
      )
      : of([] as DerivedCollectiveProposals)
  );
}
