// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Option } from '@polkadot/types';
import type { AccountId, EraIndex } from '@polkadot/types/interfaces';
import type { PalletStakingExposure, PalletStakingNominations, PalletStakingRewardDestination, PalletStakingStakingLedger, PalletStakingValidatorPrefs } from '@polkadot/types/lookup';
import type { DeriveApi, DeriveStakingQuery, StakingQueryFlags } from '../types';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { firstMemo, memo } from '../util';

function parseDetails (stashId: AccountId, controllerIdOpt: Option<AccountId> | null, nominatorsOpt: Option<PalletStakingNominations>, rewardDestination: PalletStakingRewardDestination, validatorPrefs: PalletStakingValidatorPrefs, exposure: PalletStakingExposure, stakingLedgerOpt: Option<PalletStakingStakingLedger>): DeriveStakingQuery {
  return {
    accountId: stashId,
    controllerId: controllerIdOpt && controllerIdOpt.unwrapOr(null),
    exposure,
    nominators: nominatorsOpt.isSome
      ? nominatorsOpt.unwrap().targets
      : [],
    rewardDestination,
    stakingLedger: stakingLedgerOpt.unwrapOrDefault(),
    stashId,
    validatorPrefs
  };
}

function getLedgers (api: DeriveApi, optIds: (Option<AccountId> | null)[], { withLedger = false }: StakingQueryFlags): Observable<Option<PalletStakingStakingLedger>[]> {
  const ids = optIds
    .filter((o): o is Option<AccountId> => withLedger && !!o && o.isSome)
    .map((o) => o.unwrap());
  const emptyLed = api.$registry.createType<Option<PalletStakingStakingLedger>>('Option<StakingLedger>');

  return (
    ids.length
      ? combineLatest(ids.map((s) => api.query.staking.ledger(s)))
      : of([])
  ).pipe(
    map((optLedgers): Option<PalletStakingStakingLedger>[] => {
      let offset = -1;

      return optIds.map((o): Option<PalletStakingStakingLedger> =>
        o && o.isSome
          ? optLedgers[++offset] || emptyLed
          : emptyLed
      );
    })
  );
}

function getStashInfo (api: DeriveApi, stashIds: AccountId[], activeEra: EraIndex, { withController, withDestination, withExposure, withLedger, withNominations, withPrefs }: StakingQueryFlags): Observable<[(Option<AccountId> | null)[], Option<PalletStakingNominations>[], PalletStakingRewardDestination[], PalletStakingValidatorPrefs[], PalletStakingExposure[]]> {
  const emptyNoms = api.$registry.createType<Option<PalletStakingNominations>>('Option<Nominations>');
  const emptyRewa = api.$registry.createType<PalletStakingRewardDestination>('RewardDestination');
  const emptyExpo = api.$registry.createType<PalletStakingExposure>('Exposure');
  const emptyPrefs = api.$registry.createType<PalletStakingValidatorPrefs>('ValidatorPrefs');

  return combineLatest([
    withController || withLedger
      ? combineLatest(stashIds.map((s) => api.query.staking.bonded(s)))
      : of(stashIds.map(() => null)),
    withNominations
      ? combineLatest(stashIds.map((s) => api.query.staking.nominators(s)))
      : of(stashIds.map(() => emptyNoms)),
    withDestination
      ? combineLatest(stashIds.map((s) => api.query.staking.payee(s)))
      : of(stashIds.map(() => emptyRewa)),
    withPrefs
      ? combineLatest(stashIds.map((s) => api.query.staking.validators(s)))
      : of(stashIds.map(() => emptyPrefs)),
    withExposure
      ? combineLatest(stashIds.map((s) => api.query.staking.erasStakers(activeEra, s)))
      : of(stashIds.map(() => emptyExpo))
  ]);
}

function getBatch (api: DeriveApi, activeEra: EraIndex, stashIds: AccountId[], flags: StakingQueryFlags): Observable<DeriveStakingQuery[]> {
  return getStashInfo(api, stashIds, activeEra, flags).pipe(
    switchMap(([controllerIdOpt, nominatorsOpt, rewardDestination, validatorPrefs, exposure]): Observable<DeriveStakingQuery[]> =>
      getLedgers(api, controllerIdOpt, flags).pipe(
        map((stakingLedgerOpts) =>
          stashIds.map((stashId, index) =>
            parseDetails(stashId, controllerIdOpt[index], nominatorsOpt[index], rewardDestination[index], validatorPrefs[index], exposure[index], stakingLedgerOpts[index])
          )
        )
      )
    )
  );
}

//
/**
 * @description From a stash, retrieve the controllerId and all relevant details
 */
export const query = firstMemo(
  (api: DeriveApi, accountId: Uint8Array | string, flags: StakingQueryFlags) =>
    api.derive.staking.queryMulti([accountId], flags)
);

export function queryMulti (instanceId: string, api: DeriveApi): (accountIds: (Uint8Array | string)[], flags: StakingQueryFlags) => Observable<DeriveStakingQuery[]> {
  return memo(instanceId, (accountIds: (Uint8Array | string)[], flags: StakingQueryFlags): Observable<DeriveStakingQuery[]> =>
    api.derive.session.indexes().pipe(
      switchMap(({ activeEra }): Observable<DeriveStakingQuery[]> => {
        const stashIds = accountIds.map((a) => api.$registry.createType('AccountId', a));

        return stashIds.length
          ? getBatch(api, activeEra, stashIds, flags)
          : of([]);
      })
    )
  );
}
