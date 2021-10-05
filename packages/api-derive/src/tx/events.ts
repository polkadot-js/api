// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { EventRecord, Hash, SignedBlock } from '@polkadot/types/interfaces';

import { map, switchMap } from 'rxjs';

import { memo } from '../util';

interface Result {
  block: SignedBlock;
  events: EventRecord[];
}

export function events (instanceId: string, api: ApiInterfaceRx): (at: Hash) => Observable<Result> {
  return memo(instanceId, (at: Hash) =>
    // we get the block first, setting up the registry
    api.rpc.chain.getBlock(at).pipe(
      switchMap((block) =>
        api.query.system.events.at(at).pipe(
          map((events): Result => ({
            block,
            events
          }))
        )
      )
    )
  );
}
