// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { EventRecord, Hash, SignedBlock } from '@polkadot/types/interfaces';
import type { DeriveApi } from '../types';

import { combineLatest, map, switchMap } from 'rxjs';

import { memo } from '../util';

interface Result {
  block: SignedBlock;
  events: EventRecord[];
}

export function events (instanceId: string, api: DeriveApi): (at: Hash) => Observable<Result> {
  return memo(instanceId, (blockHash: Hash) =>
    combineLatest([
      api.rpc.chain.getBlock(blockHash),
      api.queryAt(blockHash).pipe(
        switchMap((queryAt) =>
          queryAt.system.events()
        )
      )
    ]).pipe(
      map(([block, events]) => ({ block, events }))
    )
  );
}
