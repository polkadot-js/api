// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { EraIndex, StakingLedger, StakingLedgerTo240 } from '@polkadot/types/interfaces';
import { DeriveEraPoints, DeriveEraPrefs, DeriveEraRewards, DeriveEraValPrefs, DeriveStakerExposure, DeriveStakerReward, DeriveStakerRewardValidator } from '../types';

import BN from 'bn.js';
import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Option } from '@polkadot/types';

import { memo } from '../util';

type Result = [DeriveEraPoints[], DeriveEraPrefs[], DeriveEraRewards[], DeriveStakerExposure[]];

const ZERO = new BN(0);
const COMM_DIV = new BN(1_000_000_000);

function parseRewards (api: ApiInterfaceRx, stakerId: string, [erasPoints, erasPrefs, erasRewards, exposures]: Result): DeriveStakerReward[] {
  return exposures.map(({ era, isEmpty, isValidator, nominating, validators: eraValidators }): DeriveStakerReward => {
    const { eraPoints, validators: allValPoints } = erasPoints.find((p) => p.era.eq(era)) || { eraPoints: ZERO, validators: {} };
    const { eraReward } = erasRewards.find((r) => r.era.eq(era)) || { eraReward: api.registry.createType('Balance') };
    const { validators: allValPrefs } = erasPrefs.find((p) => p.era.eq(era)) || { validators: {} as DeriveEraValPrefs };
    const validators: Record<string, DeriveStakerRewardValidator> = {};
    let total = ZERO;

    Object.entries(eraValidators).forEach(([validatorId, exposure]): void => {
      const valPoints = allValPoints[validatorId] || ZERO;
      const valComm = allValPrefs[validatorId]?.commission.unwrap() || ZERO;
      const avail = eraReward.mul(valPoints).div(eraPoints);
      const valCut = valComm.mul(avail).div(COMM_DIV);
      const expTotal = exposure.total.unwrap();
      let value: BN | undefined;

      if (!expTotal.isZero() && !valPoints.isZero()) {
        let staked: BN;

        if (validatorId === stakerId) {
          staked = exposure.own.unwrap();
        } else {
          const stakerExp = exposure.others.find(({ who }): boolean => who.eq(stakerId));

          staked = stakerExp
            ? stakerExp.value.unwrap()
            : ZERO;
        }

        value = avail.sub(valCut).mul(staked).div(expTotal).add(validatorId === stakerId ? valCut : ZERO);
        total = total.add(value);
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
      total: api.registry.createType('Balance', total),
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

function isOldLedger (ledger: StakingLedger | StakingLedgerTo240): ledger is StakingLedgerTo240 {
  return !!(ledger as StakingLedgerTo240).lastReward;
}

function filterRewards (api: ApiInterfaceRx, accountId: Uint8Array | string, rewards: DeriveStakerReward[], withActive?: boolean): Observable<DeriveStakerReward[]> {
  if (withActive) {
    return of(rewards);
  }

  const validators = uniqValidators(rewards);

  return combineLatest([
    api.query.staking.migrateEra
      ? api.query.staking.migrateEra<Option<EraIndex>>()
      : of(api.registry.createType('Option<EraIndex>', api.tx.staking.payoutStakers ? 0 : 1_000_000_000)),
    api.derive.staking.query(accountId),
    api.derive.staking.queryMulti(validators)
  ]).pipe(
    map(([optMigrate, { stakingLedger }, queryValidators]): DeriveStakerReward[] => {
      const migrateEra = optMigrate.unwrapOr(new BN(-1));

      return rewards
        .filter(({ isEmpty }) => !isEmpty)
        .filter((reward): boolean => {
          if (reward.era.lte(migrateEra)) {
            return !stakingLedger
              ? true
              : isOldLedger(stakingLedger)
                ? reward.era.gt(stakingLedger.lastReward.unwrapOr(new BN(-1)))
                : !stakingLedger.claimedRewards.some((claimEra) => reward.era.eq(claimEra));
          }

          reward.isStakerPayout = true;

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

          return true;
        })
        .filter(({ validators }) => Object.keys(validators).length !== 0)
        .map((reward) => ({
          ...reward,
          nominators: reward.nominating.filter(({ validatorId }) => !!reward.validators[validatorId])
        }));
    })
  );
}

export function stakerRewards (api: ApiInterfaceRx): (accountId: Uint8Array | string, withActive?: boolean) => Observable<DeriveStakerReward[]> {
  return memo((accountId: Uint8Array | string, withActive?: boolean): Observable<DeriveStakerReward[]> => {
    const stakerId = api.registry.createType('AccountId', accountId).toString();

    return combineLatest([
      api.derive.staking.erasPoints(withActive),
      api.derive.staking.erasPrefs(withActive),
      api.derive.staking.erasRewards(withActive),
      api.derive.staking.stakerExposure(stakerId, withActive)
    ]).pipe(
      switchMap((result) => filterRewards(api, accountId, parseRewards(api, stakerId, result), withActive))
    );
  });
}

export function stakerRewardsMulti (api: ApiInterfaceRx): (accountIds: (Uint8Array | string)[], withActive?: boolean) => Observable<DeriveStakerReward[][]> {
  return memo((accountIds: (Uint8Array | string)[], withActive?: boolean): Observable<DeriveStakerReward[][]> =>
    accountIds.length
      ? combineLatest(accountIds.map((acc) => api.derive.staking.stakerRewards(acc, withActive)))
      : of([])
  );
}
