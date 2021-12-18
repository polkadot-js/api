// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Option, u32 } from '@polkadot/types';
import type { ActiveEraInfo, EraIndex } from '@polkadot/types/interfaces';
import type { BN } from '@polkadot/util';
import type { DeriveApi } from '../types';

import { map } from 'rxjs';

import { BN_ONE, BN_ZERO } from '@polkadot/util';

import { memo } from '../util';

export function erasHistoric (instanceId: string, api: DeriveApi): (withActive?: boolean) => Observable<EraIndex[]> {
  return memo(instanceId, (withActive?: boolean): Observable<EraIndex[]> =>
    api.queryMulti<[Option<ActiveEraInfo>, u32]>([
      api.query.staking.activeEra,
      api.query.staking.historyDepth
    ]).pipe(
      map(([activeEraOpt, historyDepth]): EraIndex[] => {
        const result: EraIndex[] = [];
        const max = historyDepth.toNumber();
        const activeEra: BN = activeEraOpt.unwrapOrDefault().index;
        let lastEra = activeEra;

        while (lastEra.gte(BN_ZERO) && (result.length < max)) {
          if ((lastEra !== activeEra) || (withActive === true)) {
            result.push(api.registry.createType('EraIndex', lastEra));
          }

          lastEra = lastEra.sub(BN_ONE);
        }

        // go from oldest to newest
        return result.reverse();
      })
    )
  );
}
