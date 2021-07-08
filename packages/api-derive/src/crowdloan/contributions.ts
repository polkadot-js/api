// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { StorageKey } from '@polkadot/types';
import type { ParaId } from '@polkadot/types/interfaces';
import type { DeriveContributions } from '../types';

import { BehaviorSubject, combineLatest, EMPTY, map, of, startWith, switchMap, tap, toArray } from 'rxjs';

import { arrayFlatten, isFunction } from '@polkadot/util';

import { memo } from '../util';
import { extractContributed } from './util';

interface Changes {
  added: string[];
  blockHash: string;
  removed: string[];
}

const PAGE_SIZE_K = 1000; // limit aligned with the 1k on the node (trie lookups are heavy)

function _getUpdates (api: ApiInterfaceRx, paraId: string | number | ParaId): Observable<Changes> {
  let added: string[] = [];
  let removed: string[] = [];

  return api.query.system.events().pipe(
    switchMap((events): Observable<Changes> => {
      const changes = extractContributed(paraId, events);

      if (changes.added.length || changes.removed.length) {
        added = added.concat(...changes.added);
        removed = removed.concat(...changes.removed);

        return of({ added, addedDelta: changes.added, blockHash: events.createdAtHash?.toHex() || '-', removed, removedDelta: changes.removed });
      }

      return EMPTY;
    }),
    startWith({ added, addedDelta: [], blockHash: '-', removed, removedDelta: [] })
  );
}

function _eventTriggerAll (api: ApiInterfaceRx, paraId: string | number | ParaId): Observable<string> {
  return api.query.system.events().pipe(
    switchMap((events): Observable<string> => {
      const items = events.filter(({ event: { data: [eventParaId], method, section } }) =>
        section === 'crowdloan' &&
        ['AllRefunded', 'Dissolved', 'PartiallyRefunded'].includes(method) &&
        eventParaId.eq(paraId)
      );

      return items.length
        ? of(events.createdAtHash?.toHex() || '-')
        : EMPTY;
    }),
    startWith('-')
  );
}

function _getKeysPaged (api: ApiInterfaceRx, childKey: string): Observable<StorageKey[]> {
  const startSubject = new BehaviorSubject<string | undefined>(undefined);

  return startSubject.pipe(
    switchMap((startKey) =>
      api.rpc.childstate.getKeysPaged(childKey, '0x', PAGE_SIZE_K, startKey)
    ),
    tap((keys): void => {
      setTimeout((): void => {
        keys.length === PAGE_SIZE_K
          ? startSubject.next(keys[PAGE_SIZE_K - 1].toHex())
          : startSubject.complete();
      }, 0);
    }),
    toArray(), // toArray since we want to startSubject to be completed
    map((keyArr: StorageKey[][]) => arrayFlatten(keyArr))
  );
}

function _getAll (api: ApiInterfaceRx, paraId: string | number | ParaId, childKey: string): Observable<string[]> {
  return _eventTriggerAll(api, paraId).pipe(
    switchMap(() =>
      // FIXME Needs testing and being enabled
      // eslint-disable-next-line no-constant-condition
      isFunction(api.rpc.childstate.getKeysPaged) && false
        ? _getKeysPaged(api, childKey)
        : api.rpc.childstate.getKeys(childKey, '0x')
    ),
    map((keys) =>
      keys.map((k) => k.toHex())
    )
  );
}

function _contributions (api: ApiInterfaceRx, paraId: string | number | ParaId, childKey: string): Observable<DeriveContributions> {
  return combineLatest([
    _getAll(api, paraId, childKey),
    _getUpdates(api, paraId)
  ]).pipe(
    map(([keys, { added, blockHash, removed }]): DeriveContributions => {
      const contributorsMap: Record<string, boolean> = {};

      keys.forEach((k): void => {
        contributorsMap[k] = true;
      });

      added.forEach((k): void => {
        contributorsMap[k] = true;
      });

      removed.forEach((k): void => {
        delete contributorsMap[k];
      });

      return {
        blockHash,
        contributorsHex: Object.keys(contributorsMap)
      };
    })
  );
}

export function contributions (instanceId: string, api: ApiInterfaceRx): (paraId: string | number | ParaId) => Observable<DeriveContributions> {
  return memo(instanceId, (paraId: string | number | ParaId): Observable<DeriveContributions> =>
    api.derive.crowdloan.childKey(paraId).pipe(
      switchMap((childKey) =>
        childKey
          ? _contributions(api, paraId, childKey)
          : of({ blockHash: '-', contributorsHex: [] })
      )
    )
  );
}
