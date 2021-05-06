// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { AccountId, EraIndex, StakingLedger } from '@polkadot/types/interfaces';
import type { Observable } from '@polkadot/x-rxjs';
import type { DeriveEraPoints, DeriveEraPrefs, DeriveEraRewards, DeriveEraValPrefs, DeriveStakerExposure, DeriveStakerReward, DeriveStakerRewardValidator } from '../types';
import type { DeriveStakingQuery } from './types';

import BN from 'bn.js';

import { BN_BILLION, BN_ZERO } from '@polkadot/util';
import { combineLatest, of } from '@polkadot/x-rxjs';
import { map, switchMap } from '@polkadot/x-rxjs/operators';

import { memo } from '../util';

type ErasResult = [DeriveEraPoints[], DeriveEraPrefs[], DeriveEraRewards[]];

function parseRewards (api: ApiInterfaceRx, stashId: AccountId, [erasPoints, erasPrefs, erasRewards]: ErasResult, exposures: DeriveStakerExposure[]): DeriveStakerReward[] {
  return exposures.map(({ era, isEmpty, isValidator, nominating, validators: eraValidators }): DeriveStakerReward => {
    const { eraPoints, validators: allValPoints } = erasPoints.find((p) => p.era.eq(era)) || { eraPoints: BN_ZERO, validators: {} };
    const { eraReward } = erasRewards.find((r) => r.era.eq(era)) || { eraReward: api.registry.createType('Balance') };
    const { validators: allValPrefs } = erasPrefs.find((p) => p.era.eq(era)) || { validators: {} as DeriveEraValPrefs };
    const validators: Record<string, DeriveStakerRewardValidator> = {};
    const stakerId = stashId.toString();

    Object.entries(eraValidators).forEach(([validatorId, exposure]): void => {
      const valPoints = allValPoints[validatorId] || BN_ZERO;
      const valComm = allValPrefs[validatorId]?.commission.unwrap() || BN_ZERO;
      const expTotal = exposure.total?.unwrap() || BN_ZERO;
      let avail = BN_ZERO;
      let value: BN | undefined;

      if (!(expTotal.isZero() || valPoints.isZero() || eraPoints.isZero())) {
        avail = eraReward.mul(valPoints).div(eraPoints);

        const valCut = valComm.mul(avail).div(BN_BILLION);
        let staked: BN;

        if (validatorId === stakerId) {
          staked = exposure.own.unwrap();
        } else {
          const stakerExp = exposure.others.find(({ who }) => who.eq(stakerId));

          staked = stakerExp
            ? stakerExp.value.unwrap()
            : BN_ZERO;
        }

        value = avail.sub(valCut).imul(staked).div(expTotal).iadd(validatorId === stakerId ? valCut : BN_ZERO);
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

function allUniqValidators (rewards: DeriveStakerReward[][]): [string[], string[][]] {
  return rewards.reduce(([all, perStash]: [string[], string[][]], rewards) => {
    const uniq: string[] = [];

    perStash.push(uniq);
    rewards.forEach(({ validators }) =>
      Object.keys(validators).forEach((validatorId): void => {
        if (!uniq.includes(validatorId)) {
          uniq.push(validatorId);

          if (!all.includes(validatorId)) {
            all.push(validatorId);
          }
        }
      })
    );

    return [all, perStash];
  }, [[], []]);
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

function filterRewards (eras: EraIndex[], valInfo: [string, DeriveStakingQuery][], { rewards, stakingLedger }: { rewards: DeriveStakerReward[]; stakingLedger: StakingLedger }): DeriveStakerReward[] {
  const filter = eras.filter((era) => !stakingLedger.claimedRewards.some((e) => e.eq(era)));
  const validators = valInfo.map(([v]) => v);
  const queryValidators = valInfo.map(([, q]) => q);

  return rewards
    .filter(({ isEmpty }) => !isEmpty)
    .filter((reward): boolean => {
      if (!filter.some((filter) => reward.era.eq(filter))) {
        return false;
      }

      reward.isStakerPayout = true;

      removeClaimed(validators, queryValidators, reward);

      return true;
    })
    .filter(({ validators }) => Object.keys(validators).length !== 0)
    .map((reward) => ({
      ...reward,
      nominators: reward.nominating.filter((n) => reward.validators[n.validatorId])
    }));
}

export function _stakerRewardsEras (instanceId: string, api: ApiInterfaceRx): (eras: EraIndex[], withActive: boolean) => Observable<ErasResult> {
  return memo(instanceId, (eras: EraIndex[], withActive: boolean): Observable<ErasResult> =>
    combineLatest([
      api.derive.staking._erasPoints(eras, withActive),
      api.derive.staking._erasPrefs(eras, withActive),
      api.derive.staking._erasRewards(eras, withActive)
    ])
  );
}

export function _stakerRewards (instanceId: string, api: ApiInterfaceRx): (accountIds: (Uint8Array | string)[], eras: EraIndex[], withActive: boolean) => Observable<DeriveStakerReward[][]> {
  return memo(instanceId, (accountIds: (Uint8Array | string)[], eras: EraIndex[], withActive: boolean): Observable<DeriveStakerReward[][]> =>
    combineLatest([
      api.derive.staking.queryMulti(accountIds, { withLedger: true }),
      api.derive.staking._stakerExposures(accountIds, eras, withActive),
      api.derive.staking._stakerRewardsEras(eras, withActive)
    ]).pipe(
      switchMap(([queries, exposures, erasResult]): Observable<DeriveStakerReward[][]> => {
        const allRewards = queries.map(({ stakingLedger, stashId }, index): DeriveStakerReward[] =>
          (!stashId || !stakingLedger)
            ? []
            : parseRewards(api, stashId, erasResult, exposures[index])
        );

        if (withActive) {
          return of(allRewards);
        }

        const [allValidators, stashValidators] = allUniqValidators(allRewards);

        return api.derive.staking.queryMulti(allValidators, { withLedger: true }).pipe(
          map((queriedVals): DeriveStakerReward[][] => {
            return queries.map(({ stakingLedger }, index): DeriveStakerReward[] => {
              const rewards = allRewards[index];
              const ownValidators = stashValidators[index].map((validatorId): [string, DeriveStakingQuery] => [
                validatorId,
                queriedVals.find((q) => q.accountId.eq(validatorId)) as DeriveStakingQuery
              ]);

              return filterRewards(eras, ownValidators, { rewards, stakingLedger });
            });
          })
        );
      })
    )
  );
}

export function stakerRewards (instanceId: string, api: ApiInterfaceRx): (accountId: Uint8Array | string, withActive?: boolean) => Observable<DeriveStakerReward[]> {
  return memo(instanceId, (accountId: Uint8Array | string, withActive = false): Observable<DeriveStakerReward[]> =>
    api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) => api.derive.staking._stakerRewards([accountId], eras, withActive)),
      map(([first]) => first)
    )
  );
}

export function stakerRewardsMultiEras (instanceId: string, api: ApiInterfaceRx): (accountIds: (Uint8Array | string)[], eras: EraIndex[]) => Observable<DeriveStakerReward[][]> {
  return memo(instanceId, (accountIds: (Uint8Array | string)[], eras: EraIndex[]): Observable<DeriveStakerReward[][]> =>
    accountIds.length && eras.length
      ? api.derive.staking._stakerRewards(accountIds, eras, false)
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
