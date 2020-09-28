// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiInterfaceRx } from '@polkadot/api/types';

import BN from 'bn.js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { bnSqrt } from '@polkadot/util';

import { memo } from '../util';

export function sqrtElectorate (instanceId: string, api: ApiInterfaceRx): () => Observable<BN> {
  return memo(instanceId, (): Observable<BN> =>
    api.query.balances.totalIssuance().pipe(
      map((totalIssuance) =>
        bnSqrt(totalIssuance)
      )
    )
  );
}
