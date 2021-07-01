// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Option } from '@polkadot/types';
import type { AccountId } from '@polkadot/types/interfaces';
import type { Observable } from '@polkadot/x-rxjs';

import { isFunction } from '@polkadot/util';
import { of } from '@polkadot/x-rxjs';
import { map } from '@polkadot/x-rxjs/operators';

import { memo } from '../util';
import { getInstance } from './getInstance';

export function prime (instanceId: string, api: ApiInterfaceRx, _section: string): () => Observable<AccountId | null> {
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
}
