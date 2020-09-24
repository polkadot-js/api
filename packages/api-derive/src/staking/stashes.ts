// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, ValidatorPrefs } from '@polkadot/types/interfaces';
import { ITuple } from '@polkadot/types/types';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Vec } from '@polkadot/types';

import { memo } from '../util';

/**
 * @description Retrieve the list of all validator stashes
 */
export function stashes (instanceId: string, api: ApiInterfaceRx): () => Observable<AccountId[]> {
  return memo(instanceId, (): Observable<AccountId[]> =>
    api.query.staking.validators.creator.meta.type.asMap.linked.isTrue
      ? api.query.staking.validators<ITuple<[Vec<AccountId>, Vec<ValidatorPrefs>]>>().pipe(
        map(([stashIds]) => stashIds)
      )
      : api.query.staking.validators.keys().pipe(
        map((keys) => keys.map((key) => key.args[0] as AccountId).filter((a) => a))
      )
  );
}
