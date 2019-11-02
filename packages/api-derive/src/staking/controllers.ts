// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId } from '@polkadot/types/interfaces';
import { Codec } from '@polkadot/types/types';

import { Observable, combineLatest, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Option } from '@polkadot/types';

import { drr, memo } from '../util';

/**
 * @description From the list of stash accounts, retrieve the list of controllers
 */
export const controllers = memo((api: ApiInterfaceRx): () => Observable<[AccountId[], Option<AccountId>[]]> => {
  return memo((): Observable<[AccountId[], Option<AccountId>[]]> =>
    api.query.staking.validators<[AccountId[]] & Codec>().pipe(
      switchMap(([stashIds]): Observable<[AccountId[], Option<AccountId>[]]> =>
        combineLatest([
          of(stashIds),
          // for V2, don't return all the controllers, we call bonded at a later point
          api.consts.session
            ? of([])
            : api.query.staking.bonded.multi<Option<AccountId>>(stashIds)
        ])
      ),
      drr()
    )
  );
}, true);
