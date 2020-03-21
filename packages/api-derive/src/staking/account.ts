// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Balance, BlockNumber, StakingLedger, UnlockChunk } from '@polkadot/types/interfaces';
import type { DerivedSessionInfo, DerivedStakingAccount, DerivedStakingQuery, DerivedUnlocking } from '../types';

import BN from 'bn.js';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { isUndefined } from '@polkadot/util';

import { memo } from '../util';

// groups the supplied chunks by era, i.e. { [era]: BN(total of values) }
function groupByEra (list: UnlockChunk[]): Record<string, BN> {
  return list.reduce((map: Record<string, BN>, { era, value }): Record<string, BN> => {
    const key = era.toString();

    map[key] = !map[key]
      ? value.unwrap()
      : map[key].add(value.unwrap());

    return map;
  }, {});
}

// calculate the remaining blocks in a specific unlock era
function remainingBlocks (api: ApiInterfaceRx, era: BN, sessionInfo: DerivedSessionInfo): BlockNumber {
  const remaining = era.sub(sessionInfo.currentEra);

  // on the Rust side the current-era >= era-for-unlock (removal done on >)
  return api.registry.createType('BlockNumber', remaining.gtn(0)
    ? remaining
      .subn(1)
      .mul(sessionInfo.eraLength)
      .add(sessionInfo.eraLength.sub(sessionInfo.eraProgress))
    : 0
  );
}

function calculateUnlocking (api: ApiInterfaceRx, stakingLedger: StakingLedger | undefined, sessionInfo: DerivedSessionInfo): DerivedUnlocking[] | undefined {
  if (isUndefined(stakingLedger)) {
    return undefined;
  }

  const unlockingChunks = stakingLedger.unlocking.filter(({ era }): boolean =>
    remainingBlocks(api, era.unwrap(), sessionInfo).gtn(0)
  );

  if (!unlockingChunks.length) {
    return undefined;
  }

  // group the unlock chunks that have the same era and sum their values
  const groupedResult = groupByEra(unlockingChunks);
  const results = Object.entries(groupedResult).map(([eraString, value]): DerivedUnlocking => ({
    value: api.registry.createType('Balance', value),
    remainingBlocks: remainingBlocks(api, new BN(eraString), sessionInfo)
  }));

  return results.length ? results : undefined;
}

function redeemableSum (api: ApiInterfaceRx, stakingLedger: StakingLedger | undefined, sessionInfo: DerivedSessionInfo): Balance {
  if (isUndefined(stakingLedger)) {
    return api.registry.createType('Balance');
  }

  return api.registry.createType('Balance', stakingLedger.unlocking.reduce((total, { era, value }): BN => {
    return remainingBlocks(api, era.unwrap(), sessionInfo).eqn(0)
      ? total.add(value.unwrap())
      : total;
  }, new BN(0)));
}

function parseResult (api: ApiInterfaceRx, sessionInfo: DerivedSessionInfo, query: DerivedStakingQuery): DerivedStakingAccount {
  return {
    ...query,
    redeemable: redeemableSum(api, query.stakingLedger, sessionInfo),
    unlocking: calculateUnlocking(api, query.stakingLedger, sessionInfo)
  };
}

/**
 * @description From a stash, retrieve the controllerId and fill in all the relevant staking details
 */
export function account (api: ApiInterfaceRx): (accountId: Uint8Array | string) => Observable<DerivedStakingAccount> {
  return memo((accountId: Uint8Array | string): Observable<DerivedStakingAccount> =>
    combineLatest([
      api.derive.session.info(),
      api.derive.staking.query(accountId)
    ]).pipe(
      map(([sessionInfo, query]: [DerivedSessionInfo, DerivedStakingQuery]) =>
        parseResult(api, sessionInfo, query))
    ));
}
