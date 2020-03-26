// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';

import BN from 'bn.js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { bnSqrt } from '@polkadot/util';

import { memo } from '../util';

export function sqrtElectorate (api: ApiInterfaceRx): () => Observable<BN> {
  return memo((): Observable<BN> =>
    api.query.balances.totalIssuance().pipe(
      map((totalIssuance) =>
        bnSqrt(totalIssuance)
      )
    )
  );
}
