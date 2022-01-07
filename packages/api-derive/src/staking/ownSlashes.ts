// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { QueryableStorageMultiArg } from '@polkadot/api-base/types';
import type { Option } from '@polkadot/types';
import type { BalanceOf, EraIndex, Perbill } from '@polkadot/types/interfaces';
import type { ITuple } from '@polkadot/types/types';
import type { DeriveApi, DeriveStakerSlashes } from '../types';

import { map, of } from 'rxjs';

import { firstMemo, memo } from '../util';
import { erasHistoricApplyAccount } from './util';

export function _ownSlashes (instanceId: string, api: DeriveApi): (accountId: Uint8Array | string, eras: EraIndex[], withActive: boolean) => Observable<DeriveStakerSlashes[]> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return memo(instanceId, (accountId: Uint8Array | string, eras: EraIndex[], _withActive: boolean): Observable<DeriveStakerSlashes[]> =>
    eras.length
      ? api.queryMulti<(Option<ITuple<[Perbill, BalanceOf]>> | Option<BalanceOf>)[]>([
        ...eras.map((e): QueryableStorageMultiArg<'rxjs'> => [api.query.staking.validatorSlashInEra, [e, accountId]]),
        ...eras.map((e): QueryableStorageMultiArg<'rxjs'> => [api.query.staking.nominatorSlashInEra, [e, accountId]])
      ]).pipe(
        map((values): DeriveStakerSlashes[] =>
          eras.map((era, index) => ({
            era,
            total: values[index].isSome
              ? (values[index].unwrap() as ITuple<[Perbill, BalanceOf]>)[1]
              : (values[index + eras.length].unwrapOrDefault() as BalanceOf)
          }))
        )
      )
      : of([])
  );
}

export const ownSlash = firstMemo(
  (api: DeriveApi, accountId: Uint8Array | string, era: EraIndex) =>
    api.derive.staking._ownSlashes(accountId, [era], true)
);

export const ownSlashes = erasHistoricApplyAccount('_ownSlashes');
