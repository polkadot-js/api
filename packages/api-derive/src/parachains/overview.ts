// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ParaId } from '@polkadot/types/interfaces';
import type { DeriveApi, DeriveParachain, DeriveParachainInfo } from '../types.js';
import type { DidUpdate, ParaInfoResult, PendingSwap, RelayDispatchQueueSize } from './types.js';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { objectSpread } from '@polkadot/util';

import { memo } from '../util/index.js';
import { didUpdateToBool } from './util.js';

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
    info: objectSpread<DeriveParachainInfo>({ id }, infos[index].unwrapOr(null)),
    pendingSwapId: pendingSwaps[index].unwrapOr(null),
    relayDispatchQueueSize: relayDispatchQueueSizes[index][0].toNumber()
  }));
}

export function overview (instanceId: string, api: DeriveApi): () => Observable<DeriveParachain[]> {
  return memo(instanceId, (): Observable<DeriveParachain[]> =>
    // eslint-disable-next-line @typescript-eslint/dot-notation
    api.query['registrar']?.['parachains'] && api.query['parachains']
      // eslint-disable-next-line @typescript-eslint/dot-notation
      ? api.query['registrar']['parachains']<ParaId[]>().pipe(
        switchMap((paraIds) =>
          combineLatest([
            of(paraIds),
            api.query['parachains']['didUpdate']<DidUpdate>(),
            // eslint-disable-next-line @typescript-eslint/dot-notation
            api.query['registrar']['paras'].multi<ParaInfoResult>(paraIds),
            // eslint-disable-next-line @typescript-eslint/dot-notation
            api.query['registrar']['pendingSwap'].multi<PendingSwap>(paraIds),
            api.query['parachains']['relayDispatchQueueSize'].multi<RelayDispatchQueueSize>(paraIds)
          ])
        ),
        map(parse)
      )
      : of([] as DeriveParachain[])
  );
}
