// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId } from '@polkadot/types/interfaces';
import { ApiInterfaceRx } from '@polkadot/api/types';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { drr, memo } from '../util';
import { overview } from './overview';

/**
 * @description Retrieve latest list of validators
 */
export const validators = memo((api: ApiInterfaceRx): () => Observable<AccountId[]> => {
  const overviewCall = overview(api);

  return memo((): Observable<AccountId[]> =>
    overviewCall().pipe(
      map(({ validators }): AccountId[] => validators),
      drr()
    ));
}, true);
