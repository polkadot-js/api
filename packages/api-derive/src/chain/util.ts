// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { QueryableStorage } from '@polkadot/api-base/types';
import type { Compact, Vec } from '@polkadot/types';
import type { AccountId, Address, BlockNumber, Header } from '@polkadot/types/interfaces';
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
    ? queryAt.session.validators<Vec<AccountId>>()
    : of(null);

  // nimbus consensus stores authorship in the header logs
  const { logs: [log] } = header.digest;
  const loggedAuthor = (log && (
    (log.isConsensus && log.asConsensus[0].isNimbus && log.asConsensus[1]) ||
    (log.isPreRuntime && log.asPreRuntime[0].isNimbus && log.asPreRuntime[1])
  ));

  if (loggedAuthor) {
    // use the author mapping pallet if available (ie: moonbeam, moonriver)
    if (queryAt.authorMapping && queryAt.authorMapping.mappingWithDeposit) {
      return combineLatest([
        of(header),
        validators,
        queryAt.authorMapping.mappingWithDeposit<IOption<{ account: AccountId } & Codec>>(loggedAuthor)
          .pipe(map((opt) => opt.unwrapOr({ account: null }).account))
      ]);
    }

    // use the session pallet if available (ie: manta, calamari)
    if (queryAt.session && queryAt.session.queuedKeys) {
      return combineLatest([
        of(header),
        validators,
        queryAt.session.queuedKeys<Array<[AccountId, { nimbus: Address }]>>().pipe(
          map((x) => x.find((t) => t[1].nimbus.toHex() === loggedAuthor.toHex())),
          map((x) => (x) ? x[0] : null)
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
