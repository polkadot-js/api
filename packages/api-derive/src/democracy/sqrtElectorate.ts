// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { BN } from '@polkadot/util';
import type { DeriveApi } from '../types';

import { map } from 'rxjs';

import { bnSqrt } from '@polkadot/util';

import { memo } from '../util';

export function sqrtElectorate (instanceId: string, api: DeriveApi): () => Observable<BN> {
  return memo(instanceId, (): Observable<BN> =>
    api.query.balances.totalIssuance().pipe(
      map(bnSqrt)
    )
  );
}
