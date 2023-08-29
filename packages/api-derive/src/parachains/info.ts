// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { CollatorId, ParaId } from '@polkadot/types/interfaces';
import type { DeriveApi, DeriveParachainActive, DeriveParachainFull, DeriveParachainInfo } from '../types.js';
import type { Active, DidUpdate, Heads, ParaInfoResult, PendingSwap, RelayDispatchQueue, RetryQueue, SelectedThreads } from './types.js';

import { map, of } from 'rxjs';

import { objectSpread } from '@polkadot/util';

import { memo } from '../util/index.js';
import { didUpdateToBool } from './util.js';

type Result = [
  Active,
  RetryQueue,
  SelectedThreads,
  DidUpdate,
  ParaInfoResult,
  PendingSwap,
  Heads,
  RelayDispatchQueue
];

function parseActive (id: ParaId, active: Active): DeriveParachainActive | null {
  const found = active.find(([paraId]) => paraId === id);

  if (found && found[1].isSome) {
    const [collatorId, retriable] = found[1].unwrap();

    return objectSpread<DeriveParachainActive>(
      { collatorId },
      retriable.isWithRetries
        ? {
          isRetriable: true,
          retries: retriable.asWithRetries.toNumber()
        }
        : {
          isRetriable: false,
          retries: 0
        }
    );
  }

  return null;
}

function parseCollators (id: ParaId, collatorQueue: SelectedThreads | RetryQueue): (CollatorId | null)[] {
  return collatorQueue.map((queue): CollatorId | null => {
    const found = queue.find(([paraId]) => paraId === id);

    return found ? found[1] : null;
  });
}

function parse (id: ParaId, [active, retryQueue, selectedThreads, didUpdate, info, pendingSwap, heads, relayDispatchQueue]: Result): DeriveParachainFull | null {
  if (info.isNone) {
    return null;
  }

  return {
    active: parseActive(id, active),
    didUpdate: didUpdateToBool(didUpdate, id),
    heads,
    id,
    info: objectSpread<DeriveParachainInfo>({ id }, info.unwrap()),
    pendingSwapId: pendingSwap.unwrapOr(null),
    relayDispatchQueue,
    retryCollators: parseCollators(id, retryQueue),
    selectedCollators: parseCollators(id, selectedThreads)
  };
}

export function info (instanceId: string, api: DeriveApi): (id: ParaId | number) => Observable<DeriveParachainFull | null> {
  return memo(instanceId, (id: ParaId | number): Observable<DeriveParachainFull | null> =>
    api.query['registrar'] && api.query['parachains']
      ? api.queryMulti<Result>([
        api.query['registrar']['active'],
        api.query['registrar']['retryQueue'],
        api.query['registrar']['selectedThreads'],
        api.query['parachains']['didUpdate'],
        [api.query['registrar']['paras'], id],
        [api.query['registrar']['pendingSwap'], id],
        [api.query['parachains']['heads'], id],
        [api.query['parachains']['relayDispatchQueue'], id]
      ])
        .pipe(
          map((result: Result): DeriveParachainFull | null =>
            parse(api.registry.createType('ParaId', id), result)
          )
        )
      : of(null)
  );
}
