// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { AnyNumber } from '@polkadot/types/types';
import type { SignedBlockExtended } from '../type/types';
import type { DeriveApi } from '../types';

import { switchMap } from 'rxjs';

import { memo } from '../util';

export function getBlockByNumber (instanceId: string, api: DeriveApi): (blockNumber: AnyNumber) => Observable<SignedBlockExtended | undefined> {
  return memo(instanceId, (blockNumber: AnyNumber): Observable<SignedBlockExtended | undefined> =>
    api.rpc.chain.getBlockHash(blockNumber).pipe(
      switchMap((h) => api.derive.chain.getBlock(h))
    )
  );
}
