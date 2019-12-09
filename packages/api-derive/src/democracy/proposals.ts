// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, Balance, BlockNumber, Hash, PropIndex } from '@polkadot/types/interfaces';
import { ITuple } from '@polkadot/types/types';
import { DeriveProposal } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { Bytes, Option, Vec, createType } from '@polkadot/types';

import { memo } from '../util';

export type PreImage = Option<ITuple<[Bytes, AccountId, Balance, BlockNumber]>>;
type Depositors = Option<ITuple<[Balance, Vec<AccountId>]>>;

export function proposals (api: ApiInterfaceRx): () => Observable<DeriveProposal[]> {
  return memo((): Observable<DeriveProposal[]> =>
    api.query.democracy?.publicProps
      ? api.query.democracy
        .publicProps<Vec<ITuple<[PropIndex, Hash, AccountId]>>>()
        .pipe(
          switchMap((proposals) =>
            combineLatest([
              of(proposals),
              combineLatest(
                ...proposals.map(([, hash]) =>
                  api.query.democracy.preimages<PreImage>(hash)
                )
              )
            ])
          ),
          switchMap(([proposals, preimages]) =>
            combineLatest([
              of(proposals),
              of(preimages),
              combineLatest(
                ...proposals.map(([index]) =>
                  api.query.democracy.depositOf<Depositors>(index)
                )
              )
            ])
          ),
          map(([proposals, _preImages, _depositors]): DeriveProposal[] =>
            proposals
              .filter(([, , proposer], index): boolean =>
                !!(_preImages[index]?.isSome) && !!(_depositors[index]?.isSome) && !proposer.isEmpty
              )
              .map(([propIndex, hash, proposer], index): DeriveProposal => {
                const preImage = _preImages[index].unwrapOr(null);
                const depositors = _depositors[index].unwrap();

                return {
                  balance: depositors[0],
                  hash,
                  index: propIndex,
                  preimage: preImage
                    ? {
                      at: preImage[3],
                      balance: preImage[2],
                      proposer: preImage[1]
                    }
                    : undefined,
                  proposal: preImage
                    ? createType(api.registry, 'Proposal', preImage[0].toU8a(true))
                    : undefined,
                  proposer,
                  seconds: depositors[1]
                };
              })
          )
        )
      : of([] as DeriveProposal[])
  );
}
