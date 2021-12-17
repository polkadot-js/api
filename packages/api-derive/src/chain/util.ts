// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Compact } from '@polkadot/types';
import type { BlockNumber } from '@polkadot/types/interfaces';

import { map } from 'rxjs';

import { memo } from '../util';

// re-export these - since these needs to be resolvable from api-derive, i.e. without this
// we would emit code with ../<somewhere>/src embedded in the *.d.ts files
export type { BlockNumber } from '@polkadot/types/interfaces';

export function unwrapBlockNumber <T extends { number: Compact<BlockNumber> }> (fn: (api: ApiInterfaceRx) => Observable<T>): (instanceId: string, api: ApiInterfaceRx) => () => Observable<BlockNumber> {
  return (instanceId: string, api: ApiInterfaceRx) =>
    memo(instanceId, () => fn(api).pipe(
      map((r) => r.number.unwrap())
    ));
}
