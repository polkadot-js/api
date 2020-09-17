// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, Keys } from '@polkadot/types/interfaces';
import { ITuple } from '@polkadot/types/types';
import { DeriveStakingKeys } from './types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Option, Vec } from '@polkadot/types';

import { memo } from '../util';

function extractsIds (stashId: Uint8Array | string, queuedKeys: [AccountId, Keys][], nextKeys: Option<Keys>): DeriveStakingKeys {
  const sessionIds = (queuedKeys.find(([currentId]) => currentId.eq(stashId)) || [undefined, [] as AccountId[]])[1];
  const nextSessionIds = nextKeys.unwrapOr([] as AccountId[]);

  return {
    nextSessionIds,
    sessionIds
  };
}

export function keys (instanceId: string, api: ApiInterfaceRx): (stashId: Uint8Array | string) => Observable<DeriveStakingKeys> {
  return memo(instanceId, (stashId: Uint8Array | string): Observable<DeriveStakingKeys> =>
    api.derive.staking.keysMulti([stashId]).pipe(
      map(([first]) => first)
    )
  );
}

export function keysMulti (instanceId: string, api: ApiInterfaceRx): (stashIds: (Uint8Array | string)[]) => Observable<DeriveStakingKeys[]> {
  return memo(instanceId, (stashIds: (Uint8Array | string)[]): Observable<DeriveStakingKeys[]> =>
    stashIds.length
      ? api.query.session.queuedKeys<Vec<ITuple<[AccountId, Keys]>>>().pipe(
        switchMap((queuedKeys): Observable<[Vec<ITuple<[AccountId, Keys]>>, Option<Keys>[]]> =>
          combineLatest([
            of(queuedKeys),
            api.consts.session?.dedupKeyPrefix
              ? api.query.session.nextKeys.multi<Option<Keys>>(stashIds.map((stashId) => [api.consts.session.dedupKeyPrefix, stashId]))
              : api.query.session.nextKeys.multi<Option<Keys>>(stashIds)
          ])
        ),
        map(([queuedKeys, nextKeys]) =>
          stashIds.map((stashId, index) => extractsIds(stashId, queuedKeys, nextKeys[index]))
        )
      )
      : of([])
  );
}
