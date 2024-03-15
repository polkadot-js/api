// Copyright 2017-2024 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Option } from '@polkadot/types';
import type { AccountId, EraIndex } from '@polkadot/types/interfaces';
import type { PalletStakingNominations, PalletStakingRewardDestination, PalletStakingStakingLedger, PalletStakingValidatorPrefs, SpStakingExposure } from '@polkadot/types/lookup';
import type { DeriveApi, DeriveStakingQuery, StakingQueryFlags } from '../types.js';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { firstMemo, memo } from '../util/index.js';

// handle compatibility between generations of structures
function rewardDestinationCompat (rewardDestination: PalletStakingRewardDestination | Option<PalletStakingRewardDestination>): PalletStakingRewardDestination | null {
  // We ensure the type is an Option by checking if isSome is a boolean. When isSome doesn't exist it will always return undefined.
  return typeof (rewardDestination as Option<PalletStakingRewardDestination>).isSome === 'boolean'
    ? (rewardDestination as Option<PalletStakingRewardDestination>).unwrapOr(null)
    : (rewardDestination as PalletStakingRewardDestination);
}

function parseDetails (stashId: AccountId, controllerIdOpt: Option<AccountId> | null, nominatorsOpt: Option<PalletStakingNominations>, rewardDestinationOpts: Option<PalletStakingRewardDestination> | PalletStakingRewardDestination, validatorPrefs: PalletStakingValidatorPrefs, exposure: SpStakingExposure, stakingLedgerOpt: Option<PalletStakingStakingLedger>): DeriveStakingQuery {
  return {
    accountId: stashId,
    controllerId: controllerIdOpt?.unwrapOr(null) || null,
    exposure,
    nominators: nominatorsOpt.isSome
      ? nominatorsOpt.unwrap().targets
      : [],
    rewardDestination: rewardDestinationCompat(rewardDestinationOpts),
    stakingLedger: stakingLedgerOpt.unwrapOrDefault(),
    stashId,
    validatorPrefs
  };
}

function getLedgers (api: DeriveApi, optIds: (Option<AccountId> | null)[], { withLedger = false }: StakingQueryFlags): Observable<Option<PalletStakingStakingLedger>[]> {
  const ids = optIds
    .filter((o): o is Option<AccountId> => withLedger && !!o && o.isSome)
    .map((o) => o.unwrap());
  const emptyLed = api.registry.createType<Option<PalletStakingStakingLedger>>('Option<StakingLedger>');

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

function getStashInfo (api: DeriveApi, stashIds: AccountId[], activeEra: EraIndex, { withController, withDestination, withExposure, withLedger, withNominations, withPrefs }: StakingQueryFlags): Observable<[(Option<AccountId> | null)[], Option<PalletStakingNominations>[], Option<PalletStakingRewardDestination>[], PalletStakingValidatorPrefs[], SpStakingExposure[]]> {
  const emptyNoms = api.registry.createType<Option<PalletStakingNominations>>('Option<Nominations>');
  const emptyRewa = api.registry.createType<Option<PalletStakingRewardDestination>>('RewardDestination');
  const emptyExpo = api.registry.createType<SpStakingExposure>('Exposure');
  const emptyPrefs = api.registry.createType<PalletStakingValidatorPrefs>('ValidatorPrefs');

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
export const query = /*#__PURE__*/ firstMemo(
  (api: DeriveApi, accountId: Uint8Array | string, flags: StakingQueryFlags) =>
    api.derive.staking.queryMulti([accountId], flags)
);

export function queryMulti (instanceId: string, api: DeriveApi): (accountIds: (Uint8Array | string)[], flags: StakingQueryFlags) => Observable<DeriveStakingQuery[]> {
  return memo(instanceId, (accountIds: (Uint8Array | string)[], flags: StakingQueryFlags): Observable<DeriveStakingQuery[]> =>
    api.derive.session.indexes().pipe(
      switchMap(({ activeEra }): Observable<DeriveStakingQuery[]> => {
        const stashIds = accountIds.map((a) => api.registry.createType('AccountId', a));

        return stashIds.length
          ? getBatch(api, activeEra, stashIds, flags)
          : of([]);
      })
    )
  );
}
