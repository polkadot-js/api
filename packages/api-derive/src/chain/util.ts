// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { QueryableStorage } from '@polkadot/api-base/types';
import type { Compact, Vec } from '@polkadot/types';
import type { AccountId, BlockNumber, Header } from '@polkadot/types/interfaces';
import type { Codec, IOption } from '@polkadot/types/types';
import type { DeriveApi } from '../types.js';

import { combineLatest, map, of } from 'rxjs';

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
  const nimbus = (header.digest.logs[0]) && (
    // nimbus consensus stores the author's session key in the header digest logs
    (header.digest.logs[0].isConsensus && header.digest.logs[0].asConsensus[0].isNimbus && header.digest.logs[0].asConsensus[1]) ||
    (header.digest.logs[0].isPreRuntime && header.digest.logs[0].asPreRuntime[0].isNimbus && header.digest.logs[0].asPreRuntime[1])
  );
  const author = (!nimbus)
    // normal operation, non-mapping
    ? of(null)
    // nimbus consensus, with mapping
    : (queryAt.authorMapping && queryAt.authorMapping.mappingWithDeposit)
      // moonbeam resolves session key to author with pallet_author_mapping
      ? queryAt.authorMapping.mappingWithDeposit<IOption<{ account: AccountId } & Codec>>(nimbus).pipe(
          map((opt) => opt.unwrapOr({ account: null }).account)
        )
      // manta resolves session key to author with pallet_session
      : queryAt.session.keyOwner<IOption<{ account: AccountId } & Codec>>(header.digest.logs[0].asPreRuntime[0].toU8a(), nimbus).pipe(
          map((opt) => opt.unwrapOr({ account: null }).account)
        );
  return combineLatest([
    of(header),
    validators,
    author
  ]);
}
