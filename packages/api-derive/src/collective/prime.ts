// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { AccountId } from '@polkadot/types/interfaces';
import type { DeriveApi } from '../types.js';
import type { Collective } from './types.js';

import { map, of } from 'rxjs';

import { isFunction } from '@polkadot/util';

import { withSection } from './helpers.js';

// We are re-exporting these from here to ensure that *.d.ts generation is correct
export type { AccountId } from '@polkadot/types/interfaces';

export function prime (section: Collective): (instanceId: string, api: DeriveApi) => () => Observable<AccountId | null> {
  return withSection(section, (query) =>
    (): Observable<AccountId | null> =>
      isFunction(query?.prime)
        ? query.prime().pipe(
          map((o): AccountId | null =>
            o.unwrapOr(null)
          )
        )
        : of(null)
  );
}
