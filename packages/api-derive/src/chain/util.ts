// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { QueryableStorage } from '@polkadot/api-base/types';
import type { Compact, Vec } from '@polkadot/types';
import type { AccountId, BlockNumber, Header } from '@polkadot/types/interfaces';
import type { SpCoreSr25519Public } from '@polkadot/types/lookup';
import type { Codec, IOption } from '@polkadot/types/types';
import type { DeriveApi } from '../types.js';

import { combineLatest, map, mergeMap, of } from 'rxjs';

import { memo, unwrapBlockNumber } from '../util/index.js';

export type BlockNumberDerive = (instanceId: string, api: DeriveApi) => () => Observable<BlockNumber>;

export function createBlockNumberDerive <T extends { number: Compact<BlockNumber> | BlockNumber }> (fn: (api: DeriveApi) => Observable<T>): BlockNumberDerive {
  return (instanceId: string, api: DeriveApi) =>
    memo(instanceId, () =>
      fn(api).pipe(
        map(unwrapBlockNumber)
      )
    );
}

export function getAuthorDetails (header: Header, queryAt: QueryableStorage<'rxjs'>): Observable<[Header, Vec<AccountId> | null, AccountId | null]> {
  const validators = queryAt.session
    ? queryAt.session.validators()
    : of(null);

  // nimbus consensus stores the session key of the block author in header logs
  const { logs: [log] } = header.digest;
  const loggedAuthor = (log && (
    (log.isConsensus && log.asConsensus[0].isNimbus && log.asConsensus[1]) ||
    (log.isPreRuntime && log.asPreRuntime[0].isNimbus && log.asPreRuntime[1])
  ));

  if (loggedAuthor) {
    // use the author mapping pallet, if available (ie: moonbeam, moonriver), to map session (nimbus) key to author (collator/validator) key
    if (queryAt.authorMapping && queryAt.authorMapping.mappingWithDeposit) {
      return combineLatest([
        of(header),
        validators,
        queryAt.authorMapping.mappingWithDeposit<IOption<{ account: AccountId } & Codec>>(loggedAuthor)
          .pipe(map((opt) => opt.unwrapOr({ account: null }).account))
      ]);
    }

    // fall back to session and parachain staking pallets, if available (ie: manta, calamari), to map session (nimbus) key to author (collator) key
    if (queryAt.parachainStaking && queryAt.parachainStaking.selectedCandidates && queryAt.session && queryAt.session.nextKeys && queryAt.session.nextKeys.multi) {
      return combineLatest([
        of(header),
        validators,
        queryAt.parachainStaking.selectedCandidates<AccountId[]>().pipe(
          mergeMap((selectedCandidates) => combineLatest([
            of(selectedCandidates),
            queryAt.session.nextKeys.multi<IOption<{ nimbus: SpCoreSr25519Public } & Codec>>(selectedCandidates).pipe(
              map((nextKeys) => nextKeys.findIndex((option) => option.unwrapOrDefault().nimbus.toHex() === loggedAuthor.toHex()))
            )
          ])),
          map(([selectedCandidates, index]) => selectedCandidates[index])
        )
      ]);
    }
  }

  // normal operation, non-mapping
  return combineLatest([
    of(header),
    validators,
    of(null)
  ]);
}
