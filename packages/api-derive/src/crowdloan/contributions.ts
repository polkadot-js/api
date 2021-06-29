// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Option, StorageKey, Vec } from '@polkadot/types';
import type { FundInfo, ParaId, TrieIndex } from '@polkadot/types/interfaces';
import type { AnyTuple } from '@polkadot/types/types';
import type { Observable } from '@polkadot/x-rxjs';
import type { DeriveContributions } from '../types';

import { u8aConcat, u8aToHex } from '@polkadot/util';
import { blake2AsU8a } from '@polkadot/util-crypto';
import { combineLatest, EMPTY, of } from '@polkadot/x-rxjs';
import { map, startWith, switchMap } from '@polkadot/x-rxjs/operators';

import { memo } from '../util';

interface Changes {
  added: string[];
  blockHash: string;
  removed: string[];
}

const EMPTY_RESULT: DeriveContributions = {
  blockHash: '-',
  childKey: '',
  contributorsHex: [],
  contributorsMap: {},
  hasKeys: true
};

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

function _getUpdates (api: ApiInterfaceRx, paraId: string | number | ParaId): Observable<Changes> {
  return api.query.system.events().pipe(
    switchMap((events): Observable<Changes> => {
      const changes = events
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
        }, { added: [], blockHash: events.createdAtHash?.toHex() || '-', removed: [] });

      return changes.added.length || changes.removed.length
        ? of(changes)
        : EMPTY;
    }),
    startWith({ added: [], blockHash: '-', removed: [] })
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

function _getKeys (api: ApiInterfaceRx, paraId: string | number | ParaId, childKey: string): Observable<DeriveContributions> {
  return _eventTriggerAll(api, paraId).pipe(
    switchMap((blockHash) => combineLatest([
      of(blockHash),
      api.rpc.childstate.getKeys(childKey, '0x')
    ])),
    map(([blockHash, keys]: [string, Vec<StorageKey<AnyTuple>>]): DeriveContributions => {
      const contributorsMap: Record<string, boolean> = {};

      keys.forEach((k): void => {
        contributorsMap[k.toHex()] = true;
      });

      return {
        blockHash,
        childKey,
        contributorsHex: Object.keys(contributorsMap),
        contributorsMap,
        hasKeys: true
      };
    })
  );
}

function _contributions (api: ApiInterfaceRx, paraId: string | number | ParaId, childKey: string): Observable<DeriveContributions> {
  return combineLatest([
    _getKeys(api, paraId, childKey),
    _getUpdates(api, paraId)
  ]).pipe(
    map(([full, changes]: [DeriveContributions, Changes]): DeriveContributions => {
      changes.added.forEach((a): void => {
        full.contributorsMap[a] = true;
      });
      changes.removed.forEach((a): void => {
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
          ? _contributions(api, paraId, createChildKey(optInfo.unwrap().trieIndex))
          : of(EMPTY_RESULT)
      )
    )
  );
}
