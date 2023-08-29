// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Option, u32 } from '@polkadot/types';
import type { AccountId } from '@polkadot/types/interfaces';
import type { Codec } from '@polkadot/types/types';
import type { DeriveApi, DeriveHeartbeats } from '../types.js';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { BN_ZERO } from '@polkadot/util';

import { memo } from '../util/index.js';

type Result = [DeriveHeartbeats, AccountId[], Option<Codec>[], u32[]];

function mapResult ([result, validators, heartbeats, numBlocks]: Result): DeriveHeartbeats {
  validators.forEach((validator, index): void => {
    const validatorId = validator.toString();
    const blockCount = numBlocks[index];
    const hasMessage = !heartbeats[index].isEmpty;
    const prev = result[validatorId];

    if (!prev || prev.hasMessage !== hasMessage || !prev.blockCount.eq(blockCount)) {
      result[validatorId] = {
        blockCount,
        hasMessage,
        isOnline: hasMessage || blockCount.gt(BN_ZERO)
      };
    }
  });

  return result;
}

/**
 * @description Return a boolean array indicating whether the passed accounts had received heartbeats in the current session
 */
export function receivedHeartbeats (instanceId: string, api: DeriveApi): () => Observable<DeriveHeartbeats> {
  return memo(instanceId, (): Observable<DeriveHeartbeats> =>
    api.query.imOnline?.receivedHeartbeats
      ? api.derive.staking.overview().pipe(
        switchMap(({ currentIndex, validators }): Observable<Result> =>
          combineLatest([
            of({}),
            of(validators),
            api.query.imOnline.receivedHeartbeats.multi(
              validators.map((_address, index) => [currentIndex, index])),
            api.query.imOnline.authoredBlocks.multi(
              validators.map((address) => [currentIndex, address]))
          ])
        ),
        map(mapResult)
      )
      : of({})
  );
}
