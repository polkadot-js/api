// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { BN } from '@polkadot/util';
import type { DeriveApi } from '../types';
import type { Bag } from './types';

import { map, switchMap } from 'rxjs';

import { memo } from '../util';

export function getExpanded (instanceId: string, api: DeriveApi): (id: BN | number) => Observable<Bag> {
  return memo(instanceId, (id: BN | number): Observable<Bag> =>
    api.derive.bagsList.get(id).pipe(
      switchMap((base) =>
        api.derive.bagsList.listNodes(base.bag).pipe(
          map((nodes) => ({ ...base, nodes }))
        )
      )
    )
  );
}
