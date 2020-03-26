// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ParaId } from '@polkadot/types/interfaces';
import { DeriveParachain, DeriveParachainInfo } from '../types';
import { DidUpdate, ParaInfoResult, PendingSwap, RelayDispatchQueueSize } from './types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';

import { memo } from '../util';

type Result = [
  ParaId[],
  DidUpdate,
  ParaInfoResult[],
  PendingSwap[],
  RelayDispatchQueueSize[]
];

function parse ([ids, didUpdate, infos, pendingSwaps, relayDispatchQueueSizes]: Result): DeriveParachain[] {
  return ids.map((id, index): DeriveParachain => {
    return {
      didUpdate: didUpdate.isSome
        ? !!didUpdate.unwrap().some((paraId): boolean => paraId.eq(id))
        : false,
      id,
      info: { id, ...infos[index].unwrapOr(null) } as DeriveParachainInfo,
      pendingSwapId: pendingSwaps[index].unwrapOr(null),
      relayDispatchQueueSize: relayDispatchQueueSizes[index][0].toNumber()
    };
  });
}

export function overview (api: ApiInterfaceRx): () => Observable<DeriveParachain[]> {
  return memo((): Observable<DeriveParachain[]> =>
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
        map((result: Result): DeriveParachain[] =>
          parse(result)
        )
      )
      : of([] as DeriveParachain[])
  );
}
