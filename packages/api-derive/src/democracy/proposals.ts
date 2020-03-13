// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, Balance, BlockNumber, Hash, PropIndex, Proposal } from '@polkadot/types/interfaces';
import { ITuple } from '@polkadot/types/types';
import { DeriveProposal } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { Bytes, Option, Vec } from '@polkadot/types';

import { memo } from '../util';

export type PreImage = Option<ITuple<[Bytes, AccountId, Balance, BlockNumber]>>;

type Depositors = Option<ITuple<[Balance, Vec<AccountId>]>>;
type Proposals = Vec<ITuple<[PropIndex, Hash, AccountId]>>;

interface Result {
  depositors: Depositors[];
  preimages: PreImage[];
  proposals: Proposals;
}

function parse (api: ApiInterfaceRx, { depositors, proposals, preimages }: Result): DeriveProposal[] {
  return proposals
    .filter(([, , proposer], index): boolean =>
      !!(depositors[index]?.isSome) && !proposer.isEmpty
    )
    .map(([propIndex, hash, proposer], index): DeriveProposal => {
      const preimage = preimages[index].unwrapOr(null);
      const depositor = depositors[index].unwrap();
      let proposal: undefined | Proposal;

      // we could end up in a situation where the proposal is non-decodable, e.g. after an upgrade
      if (preimage) {
        try {
          proposal = api.registry.createType('Proposal', preimage[0].toU8a(true));
        } catch (error) {
          console.error(error);
        }
      }

      return {
        balance: depositor[0],
        hash,
        index: propIndex,
        preimage: preimage
          ? {
            at: preimage[3],
            balance: preimage[2],
            proposer: preimage[1]
          }
          : undefined,
        proposal,
        proposer,
        seconds: depositor[1]
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
            api.query.democracy.preimages.multi<PreImage>(
              proposals.map(([, hash]): Hash => hash)),
            api.query.democracy.depositOf.multi<Depositors>(
              proposals.map(([index]): PropIndex => index))
          ])
        ),
        map(([proposals, preimages, depositors]): DeriveProposal[] =>
          parse(api, { depositors, proposals, preimages })
        )
      )
      : of([] as DeriveProposal[])
  );
}
