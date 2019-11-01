// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DerivedStaking } from '../types';

import { Observable, combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';

import { drr } from '../util';
import { controllers } from './controllers';
import { info } from './info';

/**
 * @description Retrieve all the staking info available for the chain
 */
export function all (api: ApiInterfaceRx): () => Observable<DerivedStaking[]> {
  const infoCall = info(api);
  const controllersCall = controllers(api);

  return (): Observable<DerivedStaking[]> =>
    controllersCall().pipe(
      switchMap(([accountIds]): Observable<DerivedStaking[]> =>
        combineLatest(
          accountIds.map((accountId): Observable<DerivedStaking> => infoCall(accountId))
        )
      ),
      drr()
    );
}
