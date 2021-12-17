// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { BalanceOf } from '@polkadot/types/interfaces';
import type { PalletSocietyBid, PalletSocietyBidKind } from '@polkadot/types/lookup';
import type { ITuple } from '@polkadot/types/types';
import type { Option, u128 } from '@polkadot/types-codec';
import type { DeriveApi, DeriveSocietyCandidate } from '../types';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { memo } from '../util';

type ResultSuspend = Option<ITuple<[BalanceOf, PalletSocietyBidKind]>>;
type Result = [PalletSocietyBid[], ResultSuspend[]]

/**
 * @description Get the candidate info for a society
 */
export function candidates (instanceId: string, api: DeriveApi): () => Observable<DeriveSocietyCandidate[]> {
  return memo(instanceId, (): Observable<DeriveSocietyCandidate[]> =>
    api.query.society.candidates<PalletSocietyBid[]>().pipe(
      switchMap((candidates): Observable<Result> =>
        combineLatest([
          of(candidates),
          api.query.society.suspendedCandidates.multi<Option<ITuple<[u128, PalletSocietyBidKind]>>>(
            candidates.map(({ who }) => who)
          )
        ])
      ),
      map(([candidates, suspended]: Result): DeriveSocietyCandidate[] =>
        candidates.map(({ kind, value, who }, index) => ({
          accountId: who,
          isSuspended: suspended[index].isSome,
          kind,
          value
        }))
      )
    )
  );
}
