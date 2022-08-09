// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { QueryableStorage } from '@polkadot/api-base/types';
import type { Compact, Vec } from '@polkadot/types';
import type { AccountId, BlockNumber, Header } from '@polkadot/types/interfaces';
import type { Codec, IOption } from '@polkadot/types/types';
import type { DeriveApi } from '../types';

import { combineLatest, map, of } from 'rxjs';

import { memo, unwrapBlockNumber } from '../util';

// re-export these - since these needs to be resolvable from api-derive, i.e. without this
// we would emit code with ../<somewhere>/src embedded in the *.d.ts files
export type { BlockNumber } from '@polkadot/types/interfaces';

export function createBlockNumberDerive<T extends { number: Compact<BlockNumber> | BlockNumber }>(fn: (api: DeriveApi) => Observable<T>): (instanceId: string, api: DeriveApi) => () => Observable<BlockNumber> {
  return (instanceId: string, api: DeriveApi) =>
    memo(instanceId, () =>
      fn(api).pipe(
        map(unwrapBlockNumber)
      )
    );
}

export function getAuthorDetails(header: Header, queryAt: QueryableStorage<'rxjs'>): Observable<[Header, Vec<AccountId> | null, AccountId | null]> {
  // Some consensus systems store author info in a digest item, e.g. Nimbus Consensus and can directly return the block author
  let author_accountId: Observable<AccountId | null> = of(null);
  // the consensusId from the digest must be mapped to a corresponding accountId first. The following is Nimbus specific
  const author_consensusId = header.digest.logs[0] && (
    (header.digest.logs[0].isConsensus && header.digest.logs[0].asConsensus[0].isNimbus && header.digest.logs[0].asConsensus[1]) ||
    (header.digest.logs[0].isPreRuntime && header.digest.logs[0].asPreRuntime[0].isNimbus && header.digest.logs[0].asPreRuntime[1])
  );
  if (author_consensusId) {
    // Nimbus specifics - Moonbeam variant, resolving NimbusId with pallet_author_mapping
    if (queryAt.authorMapping && queryAt.authorMapping.mappingWithDeposit) {
      author_accountId = queryAt.authorMapping.mappingWithDeposit<IOption<{ account: AccountId } & Codec>>(author_consensusId).pipe(
        map((opt) =>
          opt.unwrapOr({ account: null }).account
        )
      )
    }
    // Nimbus specifics - Manta variant, resolving NimbusId with pallet_session
    else {
      author_accountId = queryAt.session.keyOwner<IOption<{ account: AccountId } & Codec>>(header.digest.logs[0].asPreRuntime[0].toU8a(), author_consensusId).pipe(
        map((opt) =>
          opt.unwrapOr({ account: null }).account
        )
      );
    }
  }

  // other chains just look up the author from the full validator set
  const validators = queryAt.session
    ? queryAt.session.validators()
    : of(null);

  return combineLatest([
    of(header),
    validators,
    author_accountId
  ]);
}
