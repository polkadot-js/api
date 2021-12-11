// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { AccountId } from '@polkadot/types/interfaces';
import type { Collective } from './types';

import { of } from 'rxjs';

import { isFunction } from '@polkadot/util';

import { memo } from '../util';
import { withSection } from './helpers';

// We are re-exporting these from here to ensure that *.d.ts generation is correct
export type { ApiInterfaceRx } from '@polkadot/api/types';
export type { AccountId } from '@polkadot/types/interfaces';

export function members (_section: Collective): (instanceId: string, api: ApiInterfaceRx) => () => Observable<AccountId[]> {
  return withSection(_section, (section, instanceId, api) =>
    memo(instanceId, (): Observable<AccountId[]> =>
      isFunction(api.query[section]?.members)
        ? api.query[section as 'council'].members()
        : of([])
    )
  );
}
