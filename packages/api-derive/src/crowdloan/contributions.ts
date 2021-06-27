// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Option, StorageKey, Vec } from '@polkadot/types';
import type { EventRecord, FundInfo, ParaId, TrieIndex } from '@polkadot/types/interfaces';
import type { AnyTuple } from '@polkadot/types/types';
import type { Observable } from '@polkadot/x-rxjs';
import type { DeriveContributions } from '../types';

import { u8aConcat, u8aToHex } from '@polkadot/util';
import { blake2AsU8a } from '@polkadot/util-crypto';
import { of } from '@polkadot/x-rxjs';
import { map, startWith, switchMap } from '@polkadot/x-rxjs/operators';

import { memo } from '../util';

const EMPTY_RESULT: DeriveContributions = {
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

function _eventTriggerSingle (api: ApiInterfaceRx, paraId: string | number | ParaId) {
  api.query.system.events().pipe(
    map((events) => {
      events.filter(({ event: { data: [, eventParaId], method, section } }) =>
        section === 'crowdloan' &&
        ['Contributed', 'Withdrew'].includes(method) &&
        eventParaId.eq(paraId)
      )
    }),
    startWith('-')
  );
}

function _eventTriggerAll (api: ApiInterfaceRx, paraId: string | number | ParaId) {
  api.query.system.events().pipe(
    map((events) => {
      events.filter(({ event: { data: [eventParaId], method, section } }) =>
        section === 'crowdloan' &&
        ['AllRefunded', 'Dissolved', 'PartiallyRefunded'].includes(method) &&
        eventParaId.eq(paraId)
      );
    }),
    startWith('-')
  );
}

function _getKeys (api: ApiInterfaceRx, paraId: string | number | ParaId, childKey: string): Observable<DeriveContributions> {
  return _eventTriggerAll(api, paraId).pipe(
    switchMap(() => combineLatest([
      api.rpc.childstate.getKeys(childKey, '0x'),
      _eventTriggerSingle(api, paraId)
    ])),
    map((keys: Vec<StorageKey<AnyTuple>>): DeriveContributions => {
      const contributorsMap: Record<string, boolean> = {};

      keys.forEach((k): void => {
        contributorsMap[k.toHex()] = true;
      });

      return {
        childKey,
        contributorsHex: Object.keys(contributorsMap),
        contributorsMap,
        hasKeys: true
      };
    })
  );
}

function _contributions (api: ApiInterfaceRx, paraId: string | number | ParaId, childKey: string): Observable<DeriveContributions> {

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
