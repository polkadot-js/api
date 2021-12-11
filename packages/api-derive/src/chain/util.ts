// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Compact } from '@polkadot/types';
import type { BlockNumber } from '@polkadot/types/interfaces';

import { map } from 'rxjs';

import { memo } from '../util';

export function unwrapBlockNumber <T extends { number: Compact<BlockNumber> }> (fn: (api: ApiInterfaceRx) => Observable<T>): (instanceId: string, api: ApiInterfaceRx) => () => Observable<BlockNumber> {
  return (instanceId: string, api: ApiInterfaceRx) =>
    memo(instanceId, () => fn(api).pipe(
      map((r) => r.number.unwrap())
    ));
}
