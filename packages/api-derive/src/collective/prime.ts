// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Option } from '@polkadot/types';
import type { AccountId } from '@polkadot/types/interfaces';
import type { Collective } from './types';

import { map, of } from 'rxjs';

import { isFunction } from '@polkadot/util';

import { memo } from '../util';
import { withSection } from './helpers';

// We are re-exporting these from here to ensure that *.d.ts generation is correct
export type { ApiInterfaceRx } from '@polkadot/api/types';
export type { AccountId } from '@polkadot/types/interfaces';

export function prime (_section: Collective): (instanceId: string, api: ApiInterfaceRx) => () => Observable<AccountId | null> {
  return withSection(_section, (section, instanceId, api) =>
    memo(instanceId, (): Observable<AccountId | null> =>
      isFunction(api.query[section as 'council']?.prime)
        ? api.query[section as 'council'].prime<Option<AccountId>>().pipe(
          map((optPrime): AccountId | null =>
            optPrime.unwrapOr(null)
          )
        )
        : of(null)
    )
  );
}
