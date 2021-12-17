// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { ParaId } from '@polkadot/types/interfaces';
import type { DeriveParachain, DeriveParachainInfo } from '../types';
import type { DidUpdate, ParaInfoResult, PendingSwap, RelayDispatchQueueSize } from './types';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { memo } from '../util';
import { didUpdateToBool } from './util';

type Result = [
  ParaId[],
  DidUpdate,
  ParaInfoResult[],
  PendingSwap[],
  RelayDispatchQueueSize[]
];

function parse ([ids, didUpdate, infos, pendingSwaps, relayDispatchQueueSizes]: Result): DeriveParachain[] {
  return ids.map((id, index): DeriveParachain => ({
    didUpdate: didUpdateToBool(didUpdate, id),
    id,
    info: { id, ...infos[index].unwrapOr(null) } as DeriveParachainInfo,
    pendingSwapId: pendingSwaps[index].unwrapOr(null),
    relayDispatchQueueSize: relayDispatchQueueSizes[index][0].toNumber()
  }));
}

export function overview (instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveParachain[]> {
  return memo(instanceId, (): Observable<DeriveParachain[]> =>
    api.query.registrar?.parachains && api.query.parachains
      ? api.query.registrar.parachains<ParaId[]>().pipe(
        switchMap((paraIds) =>
          combineLatest([
            of(paraIds),
            api.query.parachains.didUpdate<DidUpdate>(),
            api.query.registrar.paras.multi<ParaInfoResult>(paraIds),
            api.query.registrar.pendingSwap.multi<PendingSwap>(paraIds),
            api.query.parachains.relayDispatchQueueSize.multi<RelayDispatchQueueSize>(paraIds)
          ])
        ),
        map(parse)
      )
      : of([] as DeriveParachain[])
  );
}
