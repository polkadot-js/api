// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { Balance } from '@polkadot/types/interfaces';
import { DeriveEraPoints, DeriveEraPrefs, DeriveEraRewards, DeriveEraValPrefs, DeriveStakerExposure, DeriveStakerReward } from '../types';

import BN from 'bn.js';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { memo } from '../util';

type Result = [DeriveEraPoints[], DeriveEraPrefs[], DeriveEraRewards[], DeriveStakerExposure[]];

const ZERO = new BN(0);
const COMM_DIV = new BN(1_000_000_000);

function parseRewards (api: ApiInterfaceRx, stakerId: string, [erasPoints, erasPrefs, erasRewards, exposures]: Result): DeriveStakerReward[] {
  return exposures.map(({ era, isEmpty, isValidator, nominating, validators: eraValidators }): DeriveStakerReward => {
    const { eraPoints, validators: allValPoints } = erasPoints.find((p) => p.era.eq(era)) || { eraPoints: new BN(0), validators: {} };
    const { eraReward } = erasRewards.find((r) => r.era.eq(era)) || { eraReward: ZERO };
    const { validators: allValPrefs } = erasPrefs.find((p) => p.era.eq(era)) || { validators: {} as DeriveEraValPrefs };
    const validators: Record<string, Balance> = {};
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

      validators[validatorId] = api.registry.createType('Balance', value);
    });

    return {
      era,
      isEmpty,
      isValidator,
      nominating,
      total: api.registry.createType('Balance', total),
      validators
    };
  });
}

export function stakerRewards (api: ApiInterfaceRx): (accountId: Uint8Array | string, startEra: BN | number) => Observable<DeriveStakerReward[]> {
  return memo((accountId: Uint8Array | string, startEra: BN | number): Observable<DeriveStakerReward[]> => {
    const stakerId = api.registry.createType('AccountId', accountId).toString();

    return combineLatest([
      api.derive.staking.erasPoints(startEra),
      api.derive.staking.erasPrefs(startEra),
      api.derive.staking.erasRewards(startEra),
      api.derive.staking.stakerExposure(stakerId, startEra)
    ]).pipe(
      map((result): DeriveStakerReward[] =>
        parseRewards(api, stakerId, result)
      )
    );
  });
}

export function stakerRewardsMulti (api: ApiInterfaceRx): (...params: [Uint8Array | string, BN | number][]) => Observable<DeriveStakerReward[][]> {
  return memo((...params: [Uint8Array | string, BN | number][]): Observable<DeriveStakerReward[][]> =>
    combineLatest(
      params.map(([accountId, startEra]) =>
        api.derive.staking.stakerRewards(accountId, startEra)
      )
    )
  );
}
