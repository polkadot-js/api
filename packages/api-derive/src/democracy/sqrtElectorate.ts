// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Observable } from '@polkadot/x-rxjs';

import BN from 'bn.js';

import { bnSqrt } from '@polkadot/util';
import { map } from '@polkadot/x-rxjs/operators';

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
