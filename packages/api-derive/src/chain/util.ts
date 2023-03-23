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
  // nimbus consensus stores authorship in the header logs
  const { logs: [log] } = header.digest;
  const authorSessionKey = (log && (
    (log.isConsensus && log.asConsensus[0].isNimbus && log.asConsensus[1]) ||
    (log.isPreRuntime && log.asPreRuntime[0].isNimbus && log.asPreRuntime[1])
  )) || null;

  const validators = queryAt.session
    ? queryAt.session.validators()
    : of(null);

  const author = authorSessionKey
    // use the author mapping pallet if available (ie: moonbeam, moonriver)
    ? queryAt.authorMapping && queryAt.authorMapping.mappingWithDeposit
      ? queryAt.authorMapping.mappingWithDeposit<IOption<{ account: AccountId } & Codec>>(authorSessionKey).pipe(
          map(opt => opt.unwrapOr({ account: null }).account)
        )
      // use the author session pallet if available (ie: manta, calamari)
      : queryAt.session && queryAt.session.queuedKeys
        ? queryAt.session.queuedKeys<Vec<(AccountId, { nimbus: Address })>>().pipe(
            map(queuedKeys => queuedKeys.find(([_, { nimbus }]) => nimbus.toHex() === authorSessionKey.toHex())),
            map(([collator]) => collator || null)
          )
        : null
    : null;

  return combineLatest([of(header), validators, author]);
}
