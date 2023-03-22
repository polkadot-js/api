// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { AnyNumber } from '@polkadot/types/types';
import type { SignedBlockExtended } from '../type/types.js';
import type { DeriveApi } from '../types.js';

import { switchMap } from 'rxjs';

import { memo } from '../util/index.js';

export function getBlockByNumber (instanceId: string, api: DeriveApi): (blockNumber: AnyNumber) => Observable<SignedBlockExtended> {
  return memo(instanceId, (blockNumber: AnyNumber): Observable<SignedBlockExtended> =>
    api.rpc.chain.getBlockHash(blockNumber).pipe(
      switchMap((h) => api.derive.chain.getBlock(h))
    )
  );
}
