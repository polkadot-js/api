// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { AccountId, EraIndex } from '@polkadot/types/interfaces';
import type { PalletStakingStakingLedger } from '@polkadot/types/lookup';
import type { BN } from '@polkadot/util';
import type { DeriveEraPoints, DeriveEraPrefs, DeriveEraRewards, DeriveEraValPrefs, DeriveStakerExposure, DeriveStakerReward, DeriveStakerRewardValidator } from '../types';
import type { DeriveStakingQuery } from './types';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { BN_BILLION, BN_ZERO } from '@polkadot/util';

import { memo } from '../util';

type ErasResult = [DeriveEraPoints[], DeriveEraPrefs[], DeriveEraRewards[]];

function parseRewards (api: ApiInterfaceRx, stashId: AccountId, [erasPoints, erasPrefs, erasRewards]: ErasResult, exposures: DeriveStakerExposure[]): DeriveStakerReward[] {
  return exposures.map(({ era, isEmpty, isValidator, nominating, validators: eraValidators }): DeriveStakerReward => {
    const { eraPoints, validators: allValPoints } = erasPoints.find((p) => p.era.eq(era)) || { eraPoints: BN_ZERO, validators: {} };
    const { eraReward } = erasRewards.find((r) => r.era.eq(era)) || { eraReward: api.registry.createType('Balance') };
    const { validators: allValPrefs } = erasPrefs.find((p) => p.era.eq(era)) || { validators: {} as DeriveEraValPrefs };
    const validators: Record<string, DeriveStakerRewardValidator> = {};
    const stakerId = stashId.toString();

    for (const [validatorId, exposure] of Object.entries(eraValidators)) {
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
    }

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
  const all: string[] = [];
  const perStash: string[][] = [];

  for (let i = 0; i < rewards.length; i++) {
    const uniq: string[] = [];

    for (let j = 0; j < rewards[i].length; j++) {
      const validators = rewards[i][j];
      const ids = Object.keys(validators);

      for (let k = 0; k < ids.length; k++) {
        const validatorId = ids[k];

        if (!uniq.includes(validatorId)) {
          uniq.push(validatorId);

          if (!all.includes(validatorId)) {
            all.push(validatorId);
          }
        }
      }
    }

    perStash.push(uniq);
  }

  return [all, perStash];
}

function removeClaimed (validators: string[], queryValidators: DeriveStakingQuery[], reward: DeriveStakerReward): void {
  const removal: string[] = [];

  for (const validatorId of Object.keys(reward.validators)) {
    const index = validators.indexOf(validatorId);

    if (index !== -1) {
      const valLedger = queryValidators[index].stakingLedger;

      if (valLedger?.claimedRewards.some((e) => reward.era.eq(e))) {
        removal.push(validatorId);
      }
    }
  }

  for (const v of removal) {
    delete reward.validators[v];
  }
}

function filterRewards (eras: EraIndex[], valInfo: [string, DeriveStakingQuery][], { rewards, stakingLedger }: { rewards: DeriveStakerReward[]; stakingLedger: PalletStakingStakingLedger }): DeriveStakerReward[] {
  const filter = eras.filter((era) => !stakingLedger.claimedRewards.some((e) => e.eq(era)));
  const validators = valInfo.map(([v]) => v);
  const queryValidators = valInfo.map(([, q]) => q);
  const result: DeriveStakerReward[] = [];

  for (const reward of rewards) {
    if (!reward.isEmpty && filter.some((f) => reward.era.eq(f))) {
      removeClaimed(validators, queryValidators, reward);

      if (Object.keys(reward.validators).length) {
        result.push(reward);
      }
    }
  }

  return result;
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
        const allRewards = new Array<DeriveStakerReward[]>(queries.length);

        for (let i = 0; i < queries.length; i++) {
          const { stakingLedger, stashId } = queries[i];

          allRewards[i] = (!stashId || !stakingLedger)
            ? []
            : parseRewards(api, stashId, erasResult, exposures[i]);
        }

        if (withActive) {
          return of(allRewards);
        }

        const [allValidators, stashValidators] = allUniqValidators(allRewards);

        return api.derive.staking.queryMulti(allValidators, { withLedger: true }).pipe(
          map((queried): DeriveStakerReward[][] => {
            const result = new Array<DeriveStakerReward[]>(queries.length);

            for (let i = 0; i < queries.length; i++) {
              const validators = new Array<[string, DeriveStakingQuery]>(stashValidators[i].length);

              for (let j = 0; j < stashValidators[i].length; j++) {
                const validatorId = stashValidators[i][j];

                validators[j] = [validatorId, queried.find((q) => q.accountId.eq(validatorId)) as DeriveStakingQuery];
              }

              result[i] = filterRewards(eras, validators, {
                rewards: allRewards[i],
                stakingLedger: queries[i].stakingLedger
              });
            }

            return result;
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
