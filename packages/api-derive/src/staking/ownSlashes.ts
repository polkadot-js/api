// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx, QueryableStorageMultiArg } from '@polkadot/api/types';
import type { Option } from '@polkadot/types';
import type { BalanceOf, EraIndex, Perbill } from '@polkadot/types/interfaces';
import type { ITuple } from '@polkadot/types/types';
import type { DeriveStakerSlashes } from '../types';

import { map, of } from 'rxjs';

import { memo } from '../util';
import { eraHistoricApplyAccount } from './util';

export function _ownSlashes (instanceId: string, api: ApiInterfaceRx): (accountId: Uint8Array | string, eras: EraIndex[], withActive: boolean) => Observable<DeriveStakerSlashes[]> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return memo(instanceId, (accountId: Uint8Array | string, eras: EraIndex[], _withActive: boolean): Observable<DeriveStakerSlashes[]> =>
    eras.length
      ? api.queryMulti<(Option<ITuple<[Perbill, BalanceOf]>> | Option<BalanceOf>)[]>([
        ...eras.map((era): QueryableStorageMultiArg<'rxjs'> => [api.query.staking.validatorSlashInEra, [era, accountId]]),
        ...eras.map((era): QueryableStorageMultiArg<'rxjs'> => [api.query.staking.nominatorSlashInEra, [era, accountId]])
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

export function ownSlash (instanceId: string, api: ApiInterfaceRx): (accountId: Uint8Array | string, era: EraIndex) => Observable<DeriveStakerSlashes> {
  return memo(instanceId, (accountId: Uint8Array | string, era: EraIndex): Observable<DeriveStakerSlashes> =>
    api.derive.staking._ownSlashes(accountId, [era], true).pipe(
      map(([first]) => first)
    )
  );
}

export function ownSlashes (instanceId: string, api: ApiInterfaceRx): (accountId: Uint8Array | string, withActive?: boolean) => Observable<DeriveStakerSlashes[]> {
  return memo(instanceId, eraHistoricApplyAccount(api, api.derive.staking._ownSlashes));
}
