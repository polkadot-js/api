// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Option } from '@polkadot/types';
import type { ParaId, StorageData } from '@polkadot/types/interfaces';
import type { DeriveOwnContributions } from '../types';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { memo } from '../util';

// We actually would love to use multi-keys https://github.com/paritytech/substrate/issues/9203
function getValues (api: ApiInterfaceRx, childKey: string, keys: string[]): Observable<Option<StorageData>[]> {
  return combineLatest(
    keys.map((k) => api.rpc.childstate.getStorage(childKey, k))
  );
}

export function ownContributions (instanceId: string, api: ApiInterfaceRx): (paraId: string | number | ParaId, keys: string[]) => Observable<DeriveOwnContributions> {
  return memo(instanceId, (paraId: string | number | ParaId, keys: string[]): Observable<DeriveOwnContributions> =>
    api.derive.crowdloan.childKey(paraId).pipe(
      switchMap((childKey) =>
        childKey && keys.length
          ? getValues(api, childKey, keys).pipe(
            map((values) =>
              values
                .map((v) => api.registry.createType('Option<StorageData>', v))
                .map((o) =>
                  o.isSome
                    ? api.registry.createType('Balance', o.unwrap())
                    : api.registry.createType('Balance')
                )
                .reduce((all: DeriveOwnContributions, b, index): DeriveOwnContributions => ({ ...all, [keys[index]]: b }), {})
            )
          )
          : of({})
      )
    )
  );
}
