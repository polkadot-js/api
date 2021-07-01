// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { AccountId } from '@polkadot/types/interfaces';
import type { Observable } from '@polkadot/x-rxjs';

import { isFunction } from '@polkadot/util';
import { of } from '@polkadot/x-rxjs';

import { memo } from '../util';

export function members (instanceId: string, api: ApiInterfaceRx, section: string): () => Observable<AccountId[]> {
  return memo(instanceId, (): Observable<AccountId[]> =>
    isFunction(api.query[section]?.members)
      ? api.query[section as 'council'].members()
      : of([])
  );
}
