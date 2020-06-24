// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, EraIndex, StakingLedger, StakingLedgerTo240 } from '@polkadot/types/interfaces';
import { DeriveEraPoints, DeriveEraPrefs, DeriveEraRewards, DeriveEraValPrefs, DeriveStakerExposure, DeriveStakerReward, DeriveStakerRewardValidator } from '../types';

import BN from 'bn.js';
import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Option } from '@polkadot/types';
import { isFunction } from '@polkadot/util';

import { memo } from '../util';

type ErasResult = [{ unwrapOr: (value: BN) => BN }, DeriveEraPoints[], DeriveEraPrefs[], DeriveEraRewards[]];

const ZERO = new BN(0);
const MIN_ONE = new BN(-1);
const COMM_DIV = new BN(1_000_000_000);
const MAX_ERAS = new BN(1_000_000_000);

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

function filterRewards (api: ApiInterfaceRx, eras: EraIndex[], migrateEra: BN, rewards: DeriveStakerReward[], stakingLedger: StakingLedger, withActive: boolean): Observable<DeriveStakerReward[]> {
  if (withActive) {
    return of(rewards);
  }

  const validators = uniqValidators(rewards);

  return (
    isFunction(api.tx.staking.payoutStakers)
      ? api.derive.staking.queryMulti(validators)
      : of([])
  ).pipe(
    map((queryValidators): DeriveStakerReward[] => {
      const filter = withActive
        ? eras
        : filterEras(eras, stakingLedger);

      return rewards
        .filter(({ isEmpty }) => !isEmpty)
        .filter((reward): boolean => {
          if (!filter.some((filter) => reward.era.eq(filter))) {
            return false;
          } else if (reward.era.lt(migrateEra)) {
            // we filter again here, the actual ledger may have changed, e.g. something has been claimed
            return filterEra(reward.era, stakingLedger);
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

export function _stakerRewardsEras (api: ApiInterfaceRx): (eras: EraIndex[], withActive: boolean) => Observable<ErasResult> {
  return memo((eras: EraIndex[], withActive: boolean): Observable<ErasResult> =>
    combineLatest([
      isFunction(api.query.staking.migrateEra)
        ? api.query.staking.migrateEra<Option<EraIndex>>()
        : of({ unwrapOr: () => isFunction(api.tx.staking.payoutStakers) ? ZERO : MAX_ERAS }),
      api.derive.staking._erasPoints(eras, withActive),
      api.derive.staking._erasPrefs(eras, withActive),
      api.derive.staking._erasRewards(eras, withActive)
    ])
  );
}

export function _stakerRewards (api: ApiInterfaceRx): (accountId: Uint8Array | string, eras: EraIndex[], withActive: boolean) => Observable<DeriveStakerReward[]> {
  return memo((accountId: Uint8Array | string, eras: EraIndex[], withActive: boolean): Observable<DeriveStakerReward[]> =>
    combineLatest([
      api.derive.staking.query(accountId),
      api.derive.staking._stakerExposure(accountId, eras, withActive),
      api.derive.staking._stakerRewardsEras(eras, withActive)
    ]).pipe(
      switchMap(([{ stakingLedger, stashId }, exposures, erasResult]): Observable<DeriveStakerReward[]> => {
        const migrateEra: BN = erasResult[0].unwrapOr(ZERO);

        if (!stashId || !stakingLedger) {
          return of([]);
        }

        return filterRewards(api, eras, migrateEra, parseRewards(api, stashId, erasResult, exposures), stakingLedger, withActive);
      })
    )
  );
}

export function stakerRewards (api: ApiInterfaceRx): (accountId: Uint8Array | string, withActive?: boolean) => Observable<DeriveStakerReward[]> {
  return memo((accountId: Uint8Array | string, withActive = false): Observable<DeriveStakerReward[]> =>
    api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) => api.derive.staking._stakerRewards(accountId, eras, withActive))
    )
  );
}

export function stakerRewardsMultiEras (api: ApiInterfaceRx): (accountIds: (Uint8Array | string)[], eras: EraIndex[]) => Observable<DeriveStakerReward[][]> {
  return memo((accountIds: (Uint8Array | string)[], eras: EraIndex[]): Observable<DeriveStakerReward[][]> =>
    accountIds.length && eras.length
      ? combineLatest(accountIds.map((acc) => api.derive.staking._stakerRewards(acc, eras, false)))
      : of([])
  );
}

export function stakerRewardsMulti (api: ApiInterfaceRx): (accountIds: (Uint8Array | string)[], withActive?: boolean) => Observable<DeriveStakerReward[][]> {
  return memo((accountIds: (Uint8Array | string)[], withActive = false): Observable<DeriveStakerReward[][]> =>
    api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) => api.derive.staking.stakerRewardsMultiEras(accountIds, eras))
    )
  );
}
