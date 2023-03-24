// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { QueryableStorage } from '@polkadot/api-base/types';
import type { Compact, Vec } from '@polkadot/types';
import type { AccountId, Address, BlockNumber, Header } from '@polkadot/types/interfaces';
import type { AccountId32 } from '@polkadot/types/interfaces/runtime';
import type { Codec, IOption } from '@polkadot/types/types';
import type { Struct } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { DeriveApi } from '../types.js';

import { map, of } from 'rxjs';

import { memo, unwrapBlockNumber } from '../util/index.js';

interface INimbusSessionKeys extends Struct {
  nimbus: Address;
}

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
  const loggedAuthor = (log && (
    (log.isConsensus && log.asConsensus[0].isNimbus && log.asConsensus[1]) ||
    (log.isPreRuntime && log.asPreRuntime[0].isNimbus && log.asPreRuntime[1])
  )) || null;

  const validators = (queryAt.session) ? queryAt.session.validators() : null;

  const mappedAuthor = (loggedAuthor)
    // use the author mapping pallet if available (ie: moonbeam, moonriver)
    ? (queryAt.authorMapping && queryAt.authorMapping.mappingWithDeposit)
      ? queryAt.authorMapping.mappingWithDeposit<IOption<{ account: AccountId } & Codec>>(loggedAuthor)
        .pipe(map((opt) => opt.unwrapOr({ account: null }).account))
      // use the session pallet if available (ie: manta, calamari)
      : (queryAt.session && queryAt.session.queuedKeys)
        ? queryAt.session.queuedKeys<Observable<Vec<ITuple<[AccountId32, INimbusSessionKeys]>>>>()
          .pipe(map((o: Observable<Vec<ITuple<[AccountId32, INimbusSessionKeys]>>>) => o.pipe(
            map((qk: ITuple<[AccountId32, INimbusSessionKeys]>[]) =>
              (qk.find(([_, { nimbus }]) => nimbus.toHex() === loggedAuthor.toHex()) || [null])[0]
            )))
          )
        : null
    : null;

  return of([header, validators, mappedAuthor]) as Observable<[Header, Vec<AccountId> | null, AccountId | null]>;
}
