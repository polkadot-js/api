// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { AccountId } from '@polkadot/types/interfaces';
import type { Collective, PrimeFnRet } from './types.js';

import { map, of } from 'rxjs';

import { isFunction } from '@polkadot/util';

import { withSection } from './helpers.js';

export function prime (section: Collective): PrimeFnRet {
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
