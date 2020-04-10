// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { Hash, Proposal, Votes } from '@polkadot/types/interfaces';
import { DeriveCollectiveProposal } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Option } from '@polkadot/types';

import { memo } from '../util';

type Result = [Hash[], Option<Proposal>[], Option<Votes>[]];

function parse ([hashes, proposals, votes]: Result): DeriveCollectiveProposal[] {
  return proposals
    .map((proposalOpt, index): DeriveCollectiveProposal | null =>
      proposalOpt.isSome
        ? {
          hash: hashes[index],
          proposal: proposalOpt.unwrap(),
          votes: votes[index].unwrapOr(null)
        }
        : null
    )
    .filter((proposal): proposal is DeriveCollectiveProposal => !!proposal);
}

export function proposals (api: ApiInterfaceRx, section: 'council' | 'technicalCommittee'): () => Observable<DeriveCollectiveProposal[]> {
  return memo((): Observable<DeriveCollectiveProposal[]> =>
    api.query[section]?.proposals
      ? api.query[section].proposals().pipe(
        switchMap((hashes: Hash[]): Observable<Result> =>
          hashes.length
            ? combineLatest([
              of(hashes),
              api.query[section].proposalOf.multi<Option<Proposal>>(hashes),
              api.query[section].voting.multi<Option<Votes>>(hashes)
            ])
            : of([[], [], []])
        ),
        map(parse)
      )
      : of([] as DeriveCollectiveProposal[])
  );
}
