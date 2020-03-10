// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { ActiveEraInfo, EraIndex } from '@polkadot/types/interfaces';

import BN from 'bn.js';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Option, u32 } from '@polkadot/types';
import { isBoolean, isUndefined } from '@polkadot/util';

import { memo } from '../util';

export function erasHistoric (api: ApiInterfaceRx): (withActive?: boolean | BN) => Observable<EraIndex[]> {
  return memo((withActive?: boolean | BN): Observable<EraIndex[]> =>
    api.query.staking?.activeEra
      ? api.queryMulti<[Option<ActiveEraInfo>, u32]>([
        api.query.staking.activeEra,
        api.query.staking.historyDepth
      ]).pipe(
        map(([activeEraOpt, historyDepth]): EraIndex[] => {
          const result: (EraIndex | null)[] = [];
          const max = historyDepth.toNumber();
          const activeEra = activeEraOpt.unwrapOrDefault().index.toBn();
          let lastEra = activeEra;

          while (lastEra.gten(0) && (result.length < max)) {
            result.push(
              ((lastEra !== activeEra) || (withActive === true))
                ? api.registry.createType('EraIndex', lastEra)
                : null
            );

            lastEra = lastEra.subn(1);
          }

          // go from oldest to newest
          return result
            .filter((era): era is EraIndex =>
              era
                ? isUndefined(withActive) || isBoolean(withActive)
                  ? true
                  : era.gte(withActive)
                : false
            )
            .reverse();
        })
      )
      : of([])
  );
}
