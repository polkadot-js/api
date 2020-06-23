// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { Balance, StakingLedger, UnlockChunk } from '@polkadot/types/interfaces';
import { DeriveSessionInfo, DeriveStakingAccount, DeriveStakingQuery, DeriveUnlocking } from '../types';

import BN from 'bn.js';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { isUndefined } from '@polkadot/util';

import { memo } from '../util';

// groups the supplied chunks by era, i.e. { [era]: BN(total of values) }
function groupByEra (list: UnlockChunk[]): Record<string, BN> {
  return list.reduce((map: Record<string, BN>, { era, value }): Record<string, BN> => {
    const key = era.toString();

    map[key] = !map[key]
      ? value.unwrap()
      : map[key].iadd(value.unwrap());

    return map;
  }, {});
}

function calculateUnlocking (api: ApiInterfaceRx, stakingLedger: StakingLedger | undefined, sessionInfo: DeriveSessionInfo): DeriveUnlocking[] | undefined {
  if (isUndefined(stakingLedger)) {
    return undefined;
  }

  const unlockingChunks = stakingLedger.unlocking.filter(({ era }) =>
    era.unwrap().gt(sessionInfo.activeEra)
  );

  if (!unlockingChunks.length) {
    return undefined;
  }

  // group the unlock chunks that have the same era and sum their values
  const groupedResult = groupByEra(unlockingChunks);
  const results = Object.entries(groupedResult).map(([eraString, value]): DeriveUnlocking => ({
    remainingEras: new BN(eraString).isub(sessionInfo.activeEra),
    value: api.registry.createType('Balance', value)
  }));

  return results.length
    ? results
    : undefined;
}

function redeemableSum (api: ApiInterfaceRx, stakingLedger: StakingLedger | undefined, sessionInfo: DeriveSessionInfo): Balance {
  if (isUndefined(stakingLedger)) {
    return api.registry.createType('Balance');
  }

  return api.registry.createType('Balance', stakingLedger.unlocking.reduce((total, { era, value }): BN => {
    return sessionInfo.activeEra.gte(era.unwrap())
      ? total.iadd(value.unwrap())
      : total;
  }, new BN(0)));
}

function parseResult (api: ApiInterfaceRx, sessionInfo: DeriveSessionInfo, query: DeriveStakingQuery): DeriveStakingAccount {
  return {
    ...query,
    redeemable: redeemableSum(api, query.stakingLedger, sessionInfo),
    unlocking: calculateUnlocking(api, query.stakingLedger, sessionInfo)
  };
}

/**
 * @description From a list of stashes, fill in all the relevant staking details
 */
export function accounts (api: ApiInterfaceRx): (accountIds: (Uint8Array | string)[]) => Observable<DeriveStakingAccount[]> {
  return memo((accountIds: (Uint8Array | string)[]): Observable<DeriveStakingAccount[]> =>
    api.derive.session.info().pipe(
      switchMap((sessionInfo) =>
        api.derive.staking.queryMulti(accountIds).pipe(
          map((queries) => queries.map((query) => parseResult(api, sessionInfo, query)))
        )
      )
    )
  );
}

/**
 * @description From a stash, retrieve the controllerId and fill in all the relevant staking details
 */
export function account (api: ApiInterfaceRx): (accountId: Uint8Array | string) => Observable<DeriveStakingAccount> {
  return memo((accountId: Uint8Array | string): Observable<DeriveStakingAccount> =>
    api.derive.staking.accounts([accountId]).pipe(
      map(([first]) => first)
    )
  );
}
