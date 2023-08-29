// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { AccountId32, BalanceOf } from '@polkadot/types/interfaces';
import type { PalletSocietyBid, PalletSocietyBidKind, PalletSocietyCandidacy } from '@polkadot/types/lookup';
import type { ITuple } from '@polkadot/types/types';
import type { Option, Vec } from '@polkadot/types-codec';
import type { DeriveApi, DeriveSocietyCandidate } from '../types.js';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { memo } from '../util/index.js';

type ResultSuspend = Option<ITuple<[BalanceOf, PalletSocietyBidKind]>>;
type Result = [PalletSocietyBid[], ResultSuspend[]]

function getPrev (api: DeriveApi): Observable<DeriveSocietyCandidate[]> {
  return api.query.society.candidates<Vec<PalletSocietyBid>>().pipe(
    switchMap((candidates): Observable<Result> =>
      combineLatest([
        of(candidates),
        api.query.society['suspendedCandidates'].multi<Option<ITuple<[BalanceOf, PalletSocietyBidKind]>>>(
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
  );
}

function getCurr (api: DeriveApi) {
  return api.query.society.candidates.entries().pipe(
    map((entries) =>
      entries
        .filter(([, opt]) => opt.isSome)
        .map(([{ args: [accountId] }, opt]): [AccountId32, PalletSocietyCandidacy] => [accountId, opt.unwrap()])
        // FIXME We are missing the new fields from the candidate record
        .map(([accountId, { bid, kind }]) => ({
          accountId,
          isSuspended: false,
          kind,
          value: bid
        }))
    )
  );
}

/**
 * @description Get the candidate info for a society
 */
export function candidates (instanceId: string, api: DeriveApi): () => Observable<DeriveSocietyCandidate[]> {
  return memo(instanceId, (): Observable<DeriveSocietyCandidate[]> =>
    api.query.society['suspendedCandidates'] && api.query.society.candidates.creator.meta.type.isPlain
      ? getPrev(api)
      : getCurr(api)
  );
}
