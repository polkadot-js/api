// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId } from '@polkadot/types/interfaces';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { memo } from '../util';

/**
 * @description Retrieve the list of all validator stashes
 */
export function stashes (instanceId: string, api: ApiInterfaceRx): () => Observable<AccountId[]> {
  return memo(instanceId, (): Observable<AccountId[]> =>
    api.query.staking.validators.keys().pipe(
      map((keys) => keys.map((key) => key.args[0] as AccountId).filter((a) => a))
    )
  );
}
