// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Option } from '@polkadot/types';
import type { AccountId, EraIndex, StakingLedger, StakingLedgerTo240 } from '@polkadot/types/interfaces';
import type { Observable } from '@polkadot/x-rxjs';
import type { DeriveEraPoints, DeriveEraPrefs, DeriveEraRewards, DeriveEraValPrefs, DeriveStakerExposure, DeriveStakerReward, DeriveStakerRewardValidator } from '../types';
import type { DeriveStakingQuery } from './types';

import BN from 'bn.js';

import { isFunction } from '@polkadot/util';
import { combineLatest, of } from '@polkadot/x-rxjs';
import { map, switchMap } from '@polkadot/x-rxjs/operators';

import { memo } from '../util';

type ErasResult = [{ unwrapOr: (value: BN) => BN }, DeriveEraPoints[], DeriveEraPrefs[], DeriveEraRewards[]];

const ZERO = new BN(0);
const MIN_ONE = new BN(-1);
const COMM_DIV = new BN(1_000_000_000);

function parseRewards (api: ApiInterfaceRx, stashId: AccountId, [, erasPoints, erasPrefs, erasRewards]: ErasResult, exposures: DeriveStakerExposure[]): DeriveStakerReward[] {
  return exposures.map(({ era, isEmpty, isValidator, nominating, validators: eraValidators }): DeriveStakerReward => {
    const { eraPoints, validators: allValPoints } = erasPoints.find((p) => p.era.eq(era)) || { eraPoints: ZERO, validators: {} };
    const { eraReward } = erasRewards.find((r) => r.era.eq(era)) || { eraReward: api.registry.createType('Balance') };
    const { validators: allValPrefs } = erasPrefs.find((p) => p.era.eq(era)) || { validators: {} as DeriveEraValPrefs };
    const validators: Record<string, DeriveStakerRewardValidator> = {};
    const stakerId = stashId.toString();

    Object.entries(eraValidators).forEach(([validatorId, exposure]): void => {
      const valPoints = allValPoints[validatorId] || ZERO;
      const valComm = allValPrefs[validatorId]?.commission.unwrap() || ZERO;
      const expTotal = exposure.total.unwrap();
      let avail = ZERO;
      let value: BN | undefined;

      if (!(expTotal.isZero() || valPoints.isZero() || eraPoints.isZero())) {
        avail = eraReward.mul(valPoints).div(eraPoints);

        const valCut = valComm.mul(avail).div(COMM_DIV);
        let staked: BN;

        if (validatorId === stakerId) {
          staked = exposure.own.unwrap();
        } else {
          const stakerExp = exposure.others.find(({ who }) => who.eq(stakerId));

          staked = stakerExp
            ? stakerExp.value.unwrap()
            : ZERO;
        }

        value = avail.sub(valCut).imul(staked).div(expTotal).iadd(validatorId === stakerId ? valCut : ZERO);
      }

      validators[validatorId] = {
        total: api.registry.createType('Balance', avail),
        value: api.registry.createType('Balance', value)
      };
    });

    return {
      era,
      eraReward,
      isEmpty,
      isValidator,
      nominating,
      validators
    };
  });
}

function uniqValidators (rewards: DeriveStakerReward[]): string[] {
  const uniq: string[] = [];

  rewards.forEach(({ validators }): void => {
    Object.keys(validators).forEach((validatorId): void => {
      if (!uniq.includes(validatorId)) {
        uniq.push(validatorId);
      }
    });
  });

  return uniq;
}

function isOldLedger (ledger?: StakingLedger | StakingLedgerTo240): ledger is StakingLedgerTo240 {
  return !!(ledger as StakingLedgerTo240)?.lastReward;
}

function filterEra (era: EraIndex, stakingLedger: StakingLedger): boolean {
  return isOldLedger(stakingLedger)
    ? era.gt(stakingLedger.lastReward.unwrapOr(MIN_ONE))
    : !stakingLedger.claimedRewards.some((e) => e.eq(era));
}

function filterEras (eras: EraIndex[], stakingLedger: StakingLedger): EraIndex[] {
  return eras.filter((era) => filterEra(era, stakingLedger));
}

function removeClaimed (validators: string[], queryValidators: DeriveStakingQuery[], reward: DeriveStakerReward): void {
  const rm: string[] = [];

  Object.keys(reward.validators).forEach((validatorId): void => {
    const index = validators.indexOf(validatorId);

    if (index !== -1) {
      const valLedger = queryValidators[index].stakingLedger;

      if (valLedger?.claimedRewards.some((era) => reward.era.eq(era))) {
        rm.push(validatorId);
      }
    }
  });

  rm.forEach((validatorId): void => {
    delete reward.validators[validatorId];
  });
}

function filterRewards (api: ApiInterfaceRx, eras: EraIndex[], { migrateEra, rewards, stakingLedger }: { migrateEra: BN, rewards: DeriveStakerReward[]; stakingLedger: StakingLedger }): Observable<DeriveStakerReward[]> {
  const validators = uniqValidators(rewards);
  const filter = filterEras(eras, stakingLedger);

  return api.derive.staking.queryMulti(validators, { withLedger: true }).pipe(
    map((queryValidators): DeriveStakerReward[] =>
      rewards
        .filter(({ isEmpty }) => !isEmpty)
        .filter((reward): boolean => {
          if (!filter.some((filter) => reward.era.eq(filter))) {
            return false;
          } else if (reward.era.lt(migrateEra)) {
            // we filter again here, the actual ledger may have changed, e.g. something has been claimed
            return filterEra(reward.era, stakingLedger);
          }

          reward.isStakerPayout = true;

          removeClaimed(validators, queryValidators, reward);

          return true;
        })
        .filter(({ validators }) => Object.keys(validators).length !== 0)
        .map((reward) => ({
          ...reward,
          nominators: reward.nominating.filter((n) => reward.validators[n.validatorId])
        }))
    )
  );
}

export function _stakerRewardsEras (instanceId: string, api: ApiInterfaceRx): (eras: EraIndex[], withActive: boolean) => Observable<ErasResult> {
  return memo(instanceId, (eras: EraIndex[], withActive: boolean): Observable<ErasResult> =>
    combineLatest([
      isFunction(api.query.staking.migrateEra)
        ? api.query.staking.migrateEra<Option<EraIndex>>()
        : of(api.registry.createType('Option<EraIndex>')),
      api.derive.staking._erasPoints(eras, withActive),
      api.derive.staking._erasPrefs(eras, withActive),
      api.derive.staking._erasRewards(eras, withActive)
    ])
  );
}

export function _stakerRewards (instanceId: string, api: ApiInterfaceRx): (accountId: Uint8Array | string, eras: EraIndex[], withActive: boolean) => Observable<DeriveStakerReward[]> {
  return memo(instanceId, (accountId: Uint8Array | string, eras: EraIndex[], withActive: boolean): Observable<DeriveStakerReward[]> =>
    combineLatest([
      api.derive.staking.query(accountId, { withLedger: true }),
      api.derive.staking._stakerExposure(accountId, eras, withActive),
      api.derive.staking._stakerRewardsEras(eras, withActive)
    ]).pipe(
      switchMap(([{ stakingLedger, stashId }, exposures, erasResult]): Observable<DeriveStakerReward[]> => {
        if (!stashId || !stakingLedger) {
          return of([]);
        }

        const rewards = parseRewards(api, stashId, erasResult, exposures);

        return withActive
          ? of(rewards)
          : filterRewards(api, eras, { migrateEra: erasResult[0].unwrapOr(ZERO), rewards, stakingLedger });
      })
    )
  );
}

export function stakerRewards (instanceId: string, api: ApiInterfaceRx): (accountId: Uint8Array | string, withActive?: boolean) => Observable<DeriveStakerReward[]> {
  return memo(instanceId, (accountId: Uint8Array | string, withActive = false): Observable<DeriveStakerReward[]> =>
    api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) => api.derive.staking._stakerRewards(accountId, eras, withActive))
    )
  );
}

export function stakerRewardsMultiEras (instanceId: string, api: ApiInterfaceRx): (accountIds: (Uint8Array | string)[], eras: EraIndex[]) => Observable<DeriveStakerReward[][]> {
  return memo(instanceId, (accountIds: (Uint8Array | string)[], eras: EraIndex[]): Observable<DeriveStakerReward[][]> =>
    accountIds.length && eras.length
      ? combineLatest(accountIds.map((acc) => api.derive.staking._stakerRewards(acc, eras, false)))
      : of([])
  );
}

export function stakerRewardsMulti (instanceId: string, api: ApiInterfaceRx): (accountIds: (Uint8Array | string)[], withActive?: boolean) => Observable<DeriveStakerReward[][]> {
  return memo(instanceId, (accountIds: (Uint8Array | string)[], withActive = false): Observable<DeriveStakerReward[][]> =>
    api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) => api.derive.staking.stakerRewardsMultiEras(accountIds, eras))
    )
  );
}
