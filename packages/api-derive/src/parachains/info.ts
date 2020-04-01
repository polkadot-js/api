// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { CollatorId, ParaId } from '@polkadot/types/interfaces';
import { DeriveParachainInfo, DeriveParachainFull, DeriveParachainActive } from '../types';
import { Active, DidUpdate, Heads, ParaInfoResult, PendingSwap, RelayDispatchQueue, RetryQueue, SelectedThreads } from './types';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';

import { memo } from '../util';

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
  const found = active.find(([paraId]): boolean => paraId === id);

  if (found && found[1].isSome) {
    const [collatorId, retriable] = found[1].unwrap();

    return {
      collatorId,
      ...(
        retriable.isWithRetries
          ? {
            isRetriable: true,
            retries: retriable.asWithRetries.toNumber()
          }
          : {
            isRetriable: false,
            retries: 0
          }
      )
    };
  }

  return null;
}

function parseCollators (id: ParaId, collatorQueue: SelectedThreads | RetryQueue): (CollatorId | null)[] {
  return collatorQueue
    .map((queue): CollatorId | null => {
      const found = queue.find(([paraId]): boolean => paraId === id);

      return found ? found[1] : null;
    });
}

function parse (id: ParaId, [active, retryQueue, selectedThreads, didUpdate, info, pendingSwap, heads, relayDispatchQueue]: Result): DeriveParachainFull | null {
  if (info.isNone) {
    return null;
  }

  return {
    active: parseActive(id, active),
    didUpdate: didUpdate.isSome
      ? !!didUpdate.unwrap().some((paraId): boolean => paraId.eq(id))
      : false,
    heads,
    id,
    info: { id, ...info.unwrap() } as DeriveParachainInfo,
    pendingSwapId: pendingSwap.unwrapOr(null),
    relayDispatchQueue,
    retryCollators: parseCollators(id, retryQueue),
    selectedCollators: parseCollators(id, selectedThreads)
  };
}

export function info (api: ApiInterfaceRx): (id: ParaId | number) => Observable<DeriveParachainFull | null> {
  return memo((id: ParaId | number): Observable<DeriveParachainFull | null> =>
    api.query.registrar && api.query.parachains
      ? api.queryMulti<Result>([
        api.query.registrar.active,
        api.query.registrar.retryQueue,
        api.query.registrar.selectedThreads,
        api.query.parachains.didUpdate,
        [api.query.registrar.paras, id],
        [api.query.registrar.pendingSwap, id],
        [api.query.parachains.heads, id],
        [api.query.parachains.relayDispatchQueue, id]
      ])
        .pipe(
          map((result: Result): DeriveParachainFull | null =>
            parse(api.registry.createType('ParaId', id), result)
          )
        )
      : of(null)
  );
}
