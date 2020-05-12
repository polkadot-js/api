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
import { isFunction } from '@polkadot/util';

import { memo } from '../util';

type DepositorsNew = Option<ITuple<[Vec<AccountId>, Balance]>>;
type DepositorsOld = Option<ITuple<[Balance, Vec<AccountId>]>>;
type Depositors = DepositorsNew | DepositorsOld;
type Proposals = Vec<ITuple<[PropIndex, Hash, AccountId]>>;
type Result = [Proposals, (DeriveProposalImage | undefined)[], Depositors[]];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function isNewDepositors (depositors: ITuple<[Vec<AccountId>, Balance]> | ITuple<[Balance, Vec<AccountId>]>): depositors is ITuple<[Vec<AccountId>, Balance]> {
  // Detect balance...
  // eslint-disable-next-line @typescript-eslint/unbound-method
  return isFunction((depositors[1] as Balance).mul);
}

function parse ([proposals, images, optDepositors]: Result): DeriveProposal[] {
  return proposals
    .filter(([, , proposer], index): boolean =>
      !!(optDepositors[index]?.isSome) && !proposer.isEmpty
    )
    .map(([index, imageHash, proposer], proposalIndex): DeriveProposal => {
      const depositors = optDepositors[proposalIndex].unwrap();

      return {
        ...(
          isNewDepositors(depositors)
            ? { balance: depositors[1], seconds: depositors[0] }
            : { balance: depositors[0], seconds: depositors[1] }
        ),
        image: images[proposalIndex],
        imageHash,
        index,
        proposer
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
