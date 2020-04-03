// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, Balance, Hash, PropIndex } from '@polkadot/types/interfaces';
import { ITuple } from '@polkadot/types/types';
import { DeriveProposalImage, DeriveProposal } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { Option, Vec } from '@polkadot/types';

import { memo } from '../util';

type Depositors = Option<ITuple<[Balance, Vec<AccountId>]>>;
type Proposals = Vec<ITuple<[PropIndex, Hash, AccountId]>>;

function parse ([proposals, images, depositors]: [Proposals, (DeriveProposalImage | undefined)[], Depositors[]]): DeriveProposal[] {
  return proposals
    .filter(([, , proposer], index): boolean =>
      !!(depositors[index]?.isSome) && !proposer.isEmpty
    )
    .map(([index, imageHash, proposer], proposalIndex): DeriveProposal => {
      const [balance, seconds] = depositors[proposalIndex].unwrap();

      return {
        balance,
        image: images[proposalIndex],
        imageHash,
        index,
        proposer,
        seconds
      };
    });
}

export function proposals (api: ApiInterfaceRx): () => Observable<DeriveProposal[]> {
  return memo((): Observable<DeriveProposal[]> =>
    api.query.democracy?.publicProps && api.query.democracy?.preimages
      ? api.query.democracy.publicProps<Proposals>().pipe(
        switchMap((proposals) =>
          combineLatest([
            of(proposals),
            api.derive.democracy.preimages(
              proposals.map(([, hash]): Hash => hash)),
            api.query.democracy.depositOf.multi<Depositors>(
              proposals.map(([index]): PropIndex => index))
          ])
        ),
        map(parse)
      )
      : of([])
  );
}
