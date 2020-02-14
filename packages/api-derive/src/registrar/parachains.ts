// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BlockNumber, CollatorId, ParaId, ParaInfo, Retriable, UpwardMessage } from '@polkadot/types/interfaces';
import { ITuple } from '@polkadot/types/types';
import { DeriveParachain, DeriveParachainActive } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { Bytes, Option, Vec } from '@polkadot/types';

import { memo } from '../util';

type ParaIds = ParaId[];
type ParaInfoResult = Option<ParaInfo>;
type PendingSwap = Option<ParaId>;
type Active = ITuple<[ParaId, Option<ITuple<[CollatorId, Retriable]>>]>[];
type RetryQueue = ITuple<[ParaId, CollatorId]>[][]
type SelectedThreads = ITuple<[ParaId, CollatorId]>[][];
type Heads = Bytes;
type RelayDispatchQueue = Vec<UpwardMessage>
type Watermarks = Option<BlockNumber>;
type DidUpdate = Option<Vec<ParaId>>;

type Result = [
  ParaId[],
  ParaInfoResult[],
  PendingSwap[],
  Active,
  RetryQueue,
  SelectedThreads,
  Heads[],
  RelayDispatchQueue[],
  Watermarks[],
  DidUpdate
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

function parse ([ids, infos, pendingSwaps, active, retryQueue, selectedThreads, heads, relayDispatchQueues, watermarks, didUpdate]: Result): DeriveParachain[] {
  return ids.map((id, index): DeriveParachain => {
    return {
      active: parseActive(id, active),
      didUpdate: didUpdate.isSome
        ? !!didUpdate.unwrap().find((paraId): boolean => paraId === id)
        : false,
      heads: heads[index],
      id,
      info: infos[index].unwrapOr(null),
      pendingSwapId: pendingSwaps[index].unwrapOr(null),
      relayDispatchQueue: relayDispatchQueues[index],
      retryCollators: parseCollators(id, retryQueue),
      selectedCollators: parseCollators(id, selectedThreads),
      watermarks: watermarks[index].unwrapOr(null)
    };
  });
}

export function parachains (api: ApiInterfaceRx): () => Observable<DeriveParachain[]> {
  return memo((): Observable<DeriveParachain[]> =>
    api.query.registrar?.parachains && api.query.parachains
      ? api.query.registrar.parachains<ParaIds>().pipe(
        switchMap((paraIds) =>
          combineLatest([
            of(paraIds),
            api.query.registrar.paras.multi<ParaInfo>(paraIds),
            api.query.registrar.pendingSwap.multi<PendingSwap>(paraIds),
            api.query.registrar.active<Active>(),
            api.query.registrar.retryQueue<RetryQueue>(),
            api.query.registrar.selectedThreads<SelectedThreads>(),
            api.query.parachains.heads.multi<Heads>(paraIds),
            api.query.parachains.relayDispatchQueue.multi<RelayDispatchQueue>(paraIds),
            api.query.parachains.watermarks.multi<Watermarks>(paraIds),
            api.query.parachains.didUpdate<DidUpdate>()
          ]) as Observable<Result>
        ),
        map((result: Result): DeriveParachain[] =>
          parse(result)
        )
      )
      : of([] as DeriveParachain[])
  );
}
