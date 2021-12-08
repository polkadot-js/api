// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Option } from '@polkadot/types';
import type { AccountId } from '@polkadot/types/interfaces';

import { map, of } from 'rxjs';

import { isFunction } from '@polkadot/util';

import { memo } from '../util';
import { getInstance } from './getInstance';

export function prime (_section: string): (instanceId: string, api: ApiInterfaceRx) => () => Observable<AccountId | null> {
  return (instanceId: string, api: ApiInterfaceRx) => {
    const section = getInstance(api, _section);

    return memo(instanceId, (): Observable<AccountId | null> =>
      isFunction(api.query[section as 'council']?.prime)
        ? api.query[section as 'council'].prime<Option<AccountId>>().pipe(
          map((optPrime): AccountId | null =>
            optPrime.unwrapOr(null)
          )
        )
        : of(null)
    );
  };
}
