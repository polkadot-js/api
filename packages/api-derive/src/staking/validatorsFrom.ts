// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Option } from '@polkadot/types';
import type { AccountId, Nominations } from '@polkadot/types/interfaces';
import type { DeriveStakingQuery } from '../types';

import { switchMap } from 'rxjs/operators';

import { memo } from '../util';

/**
 * @description From a list of stashIds, staking ledgers for those acting as validators and those being nominated
 */
export function validatorsFrom (instanceId: string, api: ApiInterfaceRx): (stashIds: (Uint8Array | string)[]) => Observable<DeriveStakingQuery[]> {
  return memo(instanceId, (stashIds: (Uint8Array | string)[]): Observable<DeriveStakingQuery[]> =>
    api.query.staking.nominators.multi<Option<Nominations>>(stashIds).pipe(
      switchMap((optNoms) =>
        api.derive.staking.queryMulti(
          optNoms.reduce((validatorIds: AccountId[], optNom): AccountId[] => {
            return optNom.unwrapOrDefault().targets.reduce((validatorIds: AccountId[], targetId): AccountId[] => {
              if (!validatorIds.find((validatorId) => validatorId.eq(targetId))) {
                validatorIds.push(targetId);
              }

              return validatorIds;
            }, validatorIds);
          }, [])
        )
      )
    )
  );
}
