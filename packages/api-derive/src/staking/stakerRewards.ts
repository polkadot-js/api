// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { AccountId, EraIndex } from '@polkadot/types/interfaces';
import type { PalletStakingStakingLedger } from '@polkadot/types/lookup';
import type { u32 } from '@polkadot/types-codec';
import type { BN } from '@polkadot/util';
import type { DeriveApi, DeriveEraPoints, DeriveEraPrefs, DeriveEraRewards, DeriveEraValPoints, DeriveEraValPrefs, DeriveStakerExposure, DeriveStakerReward, DeriveStakerRewardValidator } from '../types.js';
import type { DeriveStakingQuery } from './types.js';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { BN_BILLION, BN_ZERO, objectSpread } from '@polkadot/util';

import { firstMemo, memo } from '../util/index.js';

type ErasResult = [DeriveEraPoints[], DeriveEraPrefs[], DeriveEraRewards[]];

function parseRewards (api: DeriveApi, stashId: AccountId, [erasPoints, erasPrefs, erasRewards]: ErasResult, exposures: DeriveStakerExposure[]): DeriveStakerReward[] {
  return exposures.map(({ era, isEmpty, isValidator, nominating, validators: eraValidators }): DeriveStakerReward => {
    const { eraPoints, validators: allValPoints } = erasPoints.find((p) => p.era.eq(era)) || { eraPoints: BN_ZERO, validators: {} as DeriveEraValPoints };
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

function getClaimedRewards (valLedger?: PalletStakingStakingLedger): undefined | u32[] {
  return valLedger && (valLedger.legacyClaimedRewards || (valLedger as unknown as { claimedRewards: u32[] }).claimedRewards);
}

function removeClaimed (validators: string[], queryValidators: DeriveStakingQuery[], reward: DeriveStakerReward): void {
  const rm: string[] = [];

  Object.keys(reward.validators).forEach((validatorId): void => {
    const index = validators.indexOf(validatorId);

    if (index !== -1) {
      if (getClaimedRewards(queryValidators[index].stakingLedger)?.some((e) => reward.era.eq(e))) {
        rm.push(validatorId);
      }
    }
  });

  rm.forEach((validatorId): void => {
    delete reward.validators[validatorId];
  });
}

function filterRewards (eras: EraIndex[], valInfo: [string, DeriveStakingQuery][], { rewards, stakingLedger }: { rewards: DeriveStakerReward[]; stakingLedger: PalletStakingStakingLedger }): DeriveStakerReward[] {
  const filter = eras.filter((e) => !getClaimedRewards(stakingLedger)?.some((s) => s.eq(e)));
  const validators = valInfo.map(([v]) => v);
  const queryValidators = valInfo.map(([, q]) => q);

  return rewards
    .filter(({ isEmpty }) => !isEmpty)
    .filter((reward): boolean => {
      if (!filter.some((e) => reward.era.eq(e))) {
        return false;
      }

      removeClaimed(validators, queryValidators, reward);

      return true;
    })
    .filter(({ validators }) => Object.keys(validators).length !== 0)
    .map((reward) =>
      objectSpread({}, reward, {
        nominators: reward.nominating.filter((n) => reward.validators[n.validatorId])
      })
    );
}

export function _stakerRewardsEras (instanceId: string, api: DeriveApi): (eras: EraIndex[], withActive?: boolean) => Observable<ErasResult> {
  return memo(instanceId, (eras: EraIndex[], withActive = false): Observable<ErasResult> =>
    combineLatest([
      api.derive.staking._erasPoints(eras, withActive),
      api.derive.staking._erasPrefs(eras, withActive),
      api.derive.staking._erasRewards(eras, withActive)
    ])
  );
}

export function _stakerRewards (instanceId: string, api: DeriveApi): (accountIds: (Uint8Array | string)[], eras: EraIndex[], withActive?: boolean) => Observable<DeriveStakerReward[][]> {
  return memo(instanceId, (accountIds: (Uint8Array | string)[], eras: EraIndex[], withActive = false): Observable<DeriveStakerReward[][]> =>
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
          map((queriedVals): DeriveStakerReward[][] =>
            queries.map(({ stakingLedger }, index): DeriveStakerReward[] =>
              filterRewards(
                eras,
                stashValidators[index]
                  .map((validatorId): [string, DeriveStakingQuery | undefined] => [
                    validatorId,
                    queriedVals.find((q) => q.accountId.eq(validatorId))
                  ])
                  .filter((v): v is [string, DeriveStakingQuery] => !!v[1]),
                {
                  rewards: allRewards[index],
                  stakingLedger
                }
              )
            )
          )
        );
      })
    )
  );
}

export const stakerRewards = /*#__PURE__*/ firstMemo(
  (api: DeriveApi, accountId: Uint8Array | string, withActive?: boolean) =>
    api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) => api.derive.staking._stakerRewards([accountId], eras, withActive))
    )
);

export function stakerRewardsMultiEras (instanceId: string, api: DeriveApi): (accountIds: (Uint8Array | string)[], eras: EraIndex[]) => Observable<DeriveStakerReward[][]> {
  return memo(instanceId, (accountIds: (Uint8Array | string)[], eras: EraIndex[]): Observable<DeriveStakerReward[][]> =>
    accountIds.length && eras.length
      ? api.derive.staking._stakerRewards(accountIds, eras, false)
      : of([])
  );
}

export function stakerRewardsMulti (instanceId: string, api: DeriveApi): (accountIds: (Uint8Array | string)[], withActive?: boolean) => Observable<DeriveStakerReward[][]> {
  return memo(instanceId, (accountIds: (Uint8Array | string)[], withActive = false): Observable<DeriveStakerReward[][]> =>
    api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) => api.derive.staking.stakerRewardsMultiEras(accountIds, eras))
    )
  );
}
