// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Option, StorageKey } from '@polkadot/types';
import type { EventRecord, FundInfo, ParaId, TrieIndex } from '@polkadot/types/interfaces';
import type { DeriveContributions } from '../types';

import { BehaviorSubject, combineLatest, EMPTY, map, of, startWith, switchMap, tap, toArray } from 'rxjs';

import { arrayFlatten, isFunction, u8aConcat, u8aToHex } from '@polkadot/util';
import { blake2AsU8a } from '@polkadot/util-crypto';

import { memo } from '../util';

interface Changes {
  added: string[];
  removed: string[];
}

const PAGE_SIZE_K = 1000; // limit aligned with the 1k on the node (trie lookups are heavy)

function createChildKey (trieIndex: TrieIndex): string {
  return u8aToHex(
    u8aConcat(
      ':child_storage:default:',
      blake2AsU8a(
        u8aConcat('crowdloan', trieIndex.toU8a())
      )
    )
  );
}

function _extractChanges (paraId: string | number | ParaId, events: EventRecord[]): Changes {
  return events
    .filter(({ event: { data: [, eventParaId], method, section } }) =>
      section === 'crowdloan' &&
      ['Contributed', 'Withdrew'].includes(method) &&
      eventParaId.eq(paraId)
    )
    .reduce((result: Changes, { event: { data: [accountId], method } }): Changes => {
      if (method === 'Contributed') {
        result.added.push(accountId.toHex());
      } else {
        result.removed.push(accountId.toHex());
      }

      return result;
    }, { added: [], removed: [] });
}

function _getUpdates (api: ApiInterfaceRx, paraId: string | number | ParaId): Observable<Changes> {
  let added: string[] = [];
  let removed: string[] = [];

  return api.query.system.events().pipe(
    switchMap((events): Observable<Changes> => {
      const changes = _extractChanges(paraId, events);

      if (changes.added.length || changes.removed.length) {
        added = added.concat(...changes.added);
        removed = removed.concat(...changes.removed);

        return of({ added, removed });
      }

      return EMPTY;
    }),
    startWith({ added, removed })
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

function _getAll (api: ApiInterfaceRx, paraId: string | number | ParaId, childKey: string): Observable<DeriveContributions> {
  return _eventTriggerAll(api, paraId).pipe(
    switchMap(() =>
      // FIXME Needs testing and being enabled
      // eslint-disable-next-line no-constant-condition
      isFunction(api.rpc.childstate.getKeysPaged) && false
        ? _getKeysPaged(api, childKey)
        : api.rpc.childstate.getKeys(childKey, '0x')
    ),
    map((keys): DeriveContributions => {
      const contributorsMap: Record<string, boolean> = {};

      keys.forEach((k): void => {
        contributorsMap[k.toHex()] = true;
      });

      return {
        childKey,
        contributorsHex: [], // to be filled-in by the result mapping
        contributorsMap
      };
    })
  );
}

function _contributions (api: ApiInterfaceRx, paraId: string | number | ParaId, { trieIndex }: FundInfo): Observable<DeriveContributions> {
  return combineLatest([
    _getAll(api, paraId, createChildKey(trieIndex)),
    _getUpdates(api, paraId)
  ]).pipe(
    map(([full, { added, removed }]: [DeriveContributions, Changes]): DeriveContributions => {
      added.forEach((a): void => {
        full.contributorsMap[a] = true;
      });
      removed.forEach((a): void => {
        delete full.contributorsMap[a];
      });

      full.contributorsHex = Object.keys(full.contributorsMap);

      return full;
    })
  );
}

export function contributions (instanceId: string, api: ApiInterfaceRx): (paraId: string | number | ParaId) => Observable<DeriveContributions> {
  return memo(instanceId, (paraId: string | number | ParaId): Observable<DeriveContributions> =>
    api.query.crowdloan.funds<Option<FundInfo>>(paraId).pipe(
      switchMap((optInfo) =>
        optInfo.isSome
          ? _contributions(api, paraId, optInfo.unwrap())
          : of({ childKey: '', contributorsHex: [], contributorsMap: {} })
      )
    )
  );
}
