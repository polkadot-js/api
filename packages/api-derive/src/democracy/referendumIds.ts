// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { ReferendumIndex } from '@polkadot/types/interfaces';
import type { Observable } from '@polkadot/x-rxjs';

import BN from 'bn.js';

import { of } from '@polkadot/x-rxjs';
import { map } from '@polkadot/x-rxjs/operators';

import { memo } from '../util';

export function referendumIds (instanceId: string, api: ApiInterfaceRx): () => Observable<BN[]> {
  return memo(instanceId, (): Observable<BN[]> =>
    api.query.democracy?.lowestUnbaked
      ? api.queryMulti<[ReferendumIndex, ReferendumIndex]>([
        api.query.democracy.lowestUnbaked,
        api.query.democracy.referendumCount
      ]).pipe(
        map(([first, total]): BN[] =>
          total.gt(first)
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            ? [...Array(total.sub(first).toNumber())].map((_, i): BN => first.addn(i))
            : []
        )
      )
      : of([])
  );
}
