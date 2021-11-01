// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Balance } from '@polkadot/types/interfaces';
import type { PalletStakingStakingLedger, PalletStakingUnlockChunk } from '@polkadot/types/lookup';
import type { DeriveSessionInfo, DeriveStakingAccount, DeriveStakingKeys, DeriveStakingQuery, DeriveUnlocking } from '../types';

import { combineLatest, map, switchMap } from 'rxjs';

import { BN, BN_ZERO } from '@polkadot/util';

import { memo } from '../util';

const QUERY_OPTS = {
  withDestination: true,
  withLedger: true,
  withNominations: true,
  withPrefs: true
};

function groupByEra (list: PalletStakingUnlockChunk[]): Record<string, BN> {
  const map: Record<string, BN> = {};

  for (let i = 0; i < list.length; i++) {
    const { era, value } = list[i];
    const key = era.toString();

    map[key] = (map[key] || BN_ZERO).add(value.unwrap());
  }

  return map;
}

function calculateUnlocking (api: ApiInterfaceRx, stakingLedger: PalletStakingStakingLedger | undefined, sessionInfo: DeriveSessionInfo): DeriveUnlocking[] | undefined {
  const filterByEra = ({ era }: PalletStakingUnlockChunk) => era.unwrap().gt(sessionInfo.activeEra);
  const results = Object
    .entries(groupByEra((stakingLedger?.unlocking || []).filter(filterByEra)))
    .map(([eraString, value]): DeriveUnlocking => ({
      remainingEras: new BN(eraString).isub(sessionInfo.activeEra),
      value: api.registry.createType('Balance', value)
    }));

  return results.length
    ? results
    : undefined;
}

function redeemableSum (api: ApiInterfaceRx, stakingLedger: PalletStakingStakingLedger | undefined, sessionInfo: DeriveSessionInfo): Balance {
  const sum = new BN(0);

  if (stakingLedger && stakingLedger.unlocking) {
    for (let i = 0; i < stakingLedger.unlocking.length; i++) {
      const { era, value } = stakingLedger.unlocking[i];

      if (sessionInfo.activeEra.gte(era.unwrap())) {
        sum.iadd(value.unwrap());
      }
    }
  }

  return api.registry.createType('Balance', sum);
}

function parseResult (api: ApiInterfaceRx, sessionInfo: DeriveSessionInfo, keys: DeriveStakingKeys, query: DeriveStakingQuery): DeriveStakingAccount {
  return {
    ...keys,
    ...query,
    redeemable: redeemableSum(api, query.stakingLedger, sessionInfo),
    unlocking: calculateUnlocking(api, query.stakingLedger, sessionInfo)
  };
}

/**
 * @description From a list of stashes, fill in all the relevant staking details
 */
export function accounts (instanceId: string, api: ApiInterfaceRx): (accountIds: (Uint8Array | string)[]) => Observable<DeriveStakingAccount[]> {
  return memo(instanceId, (accountIds: (Uint8Array | string)[]): Observable<DeriveStakingAccount[]> =>
    api.derive.session.info().pipe(
      switchMap((sessionInfo) =>
        combineLatest([
          api.derive.staking.keysMulti(accountIds),
          api.derive.staking.queryMulti(accountIds, QUERY_OPTS)
        ]).pipe(
          map(([keys, queries]) => queries.map((query, index) => parseResult(api, sessionInfo, keys[index], query)))
        )
      )
    )
  );
}

/**
 * @description From a stash, retrieve the controllerId and fill in all the relevant staking details
 */
export function account (instanceId: string, api: ApiInterfaceRx): (accountId: Uint8Array | string) => Observable<DeriveStakingAccount> {
  return memo(instanceId, (accountId: Uint8Array | string): Observable<DeriveStakingAccount> =>
    api.derive.staking.accounts([accountId]).pipe(
      map(([first]) => first)
    )
  );
}
