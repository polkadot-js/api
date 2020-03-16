// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

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
export function stashes (api: ApiInterfaceRx): () => Observable<AccountId[]> {
  return memo((): Observable<AccountId[]> =>
    api.query.staking.validators.creator.meta.type.asMap.linked.isTrue
      ? api.query.staking.validators<ITuple<[Vec<AccountId>, Vec<ValidatorPrefs>]>>().pipe(
        map(([stashIds]) => stashIds)
      )
      : api.query.staking.validators.keys().pipe(
        map((keys) => keys.map((key) => key.args[0] as AccountId))
      )
  );
}
