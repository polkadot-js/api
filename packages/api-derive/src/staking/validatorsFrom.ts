// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, Nominations } from '@polkadot/types/interfaces';
import { DeriveStakingQuery } from '../types';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Option } from '@polkadot/types';

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
