// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { QueryableStorage } from '@polkadot/api-base/types';
import type { Compact, Vec } from '@polkadot/types';
import type { AccountId, BlockNumber, Header } from '@polkadot/types/interfaces';
import type { Codec, IOption } from '@polkadot/types/types';
import type { DeriveApi } from '../types';

import { combineLatest, map, of } from 'rxjs';

import { memo } from '../util';

// re-export these - since these needs to be resolvable from api-derive, i.e. without this
// we would emit code with ../<somewhere>/src embedded in the *.d.ts files
export type { BlockNumber } from '@polkadot/types/interfaces';

export function unwrapBlockNumber <T extends { number: Compact<BlockNumber> }> (fn: (api: DeriveApi) => Observable<T>): (instanceId: string, api: DeriveApi) => () => Observable<BlockNumber> {
  return (instanceId: string, api: DeriveApi) =>
    memo(instanceId, () => fn(api).pipe(
      map((r) => r.number.unwrap())
    ));
}

export function getAuthorDetails (header: Header, queryAt: QueryableStorage<'rxjs'>): Observable<[Header, Vec<AccountId> | null, AccountId | null]> {
  // this is Moonbeam specific
  if (queryAt.authorMapping) {
    const mapId = (header.digest.logs[0] && header.digest.logs[0].isConsensus && header.digest.logs[0].asConsensus[1]) || (header.digest.logs[0] && header.digest.logs[0].isPreRuntime && header.digest.logs[0].asPreRuntime[1]);

    if (mapId) {
      return combineLatest([
        of(header),
        queryAt.session
          ? queryAt.session.validators()
          : of(null),
        queryAt.authorMapping.mappingWithDeposit<IOption<{ account: AccountId } & Codec>>(mapId).pipe(
          map((opt) =>
            opt.isSome
              ? opt.unwrap().account
              : null
          )
        )
      ]);
    }
  }

  // normal operation, non-mapping
  return combineLatest([
    of(header),
    queryAt.session
      ? queryAt.session.validators()
      : of(null),
    of(null)
  ]);
}
