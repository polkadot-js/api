// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { AccountId } from '@polkadot/types/interfaces';
import type { Observable } from '@polkadot/x-rxjs';
import type { DeriveSocietyMember } from '../types';

import { map } from '@polkadot/x-rxjs/operators';

import { memo } from '../util';

/**
 * @description Get the member info for a society
 */
export function member (instanceId: string, api: ApiInterfaceRx): (accountId: AccountId) => Observable<DeriveSocietyMember> {
  return memo(instanceId, (accountId: AccountId): Observable<DeriveSocietyMember> =>
    api.derive.society._members([accountId]).pipe(
      map(([result]) => result)
    )
  );
}
