// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Option } from '@polkadot/types';
import type { AccountId, EraIndex } from '@polkadot/types/interfaces';
import type { PalletStakingExposure, PalletStakingNominations, PalletStakingRewardDestination, PalletStakingStakingLedger, PalletStakingValidatorPrefs } from '@polkadot/types/lookup';
import type { DeriveStakingQuery, StakingQueryFlags } from '../types';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { memo } from '../util';

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

function getLedgers (api: ApiInterfaceRx, optIds: (Option<AccountId> | null)[], { withLedger = false }: StakingQueryFlags): Observable<Option<PalletStakingStakingLedger>[]> {
  const ids = optIds
    .filter((o): o is Option<AccountId> => withLedger && !!o && o.isSome)
    .map((o) => o.unwrap());
  const emptyLed = api.registry.createType<Option<PalletStakingStakingLedger>>('Option<StakingLedger>');

  return (
    ids.length
      ? api.query.staking.ledger.multi(ids)
      : of([])
  ).pipe(
    map((optLedgers): Option<PalletStakingStakingLedger>[] => {
      let offset = -1;

      return optIds.map((opt): Option<PalletStakingStakingLedger> =>
        opt && opt.isSome
          ? optLedgers[++offset] || emptyLed
          : emptyLed
      );
    })
  );
}

function getStashInfo (api: ApiInterfaceRx, stashIds: AccountId[], activeEra: EraIndex, { withController, withDestination, withExposure, withLedger, withNominations, withPrefs }: StakingQueryFlags): Observable<[(Option<AccountId> | null)[], Option<PalletStakingNominations>[], PalletStakingRewardDestination[], PalletStakingValidatorPrefs[], PalletStakingExposure[]]> {
  const emptyNoms = api.registry.createType<Option<PalletStakingNominations>>('Option<Nominations>');
  const emptyRewa = api.registry.createType<PalletStakingRewardDestination>('RewardDestination');
  const emptyExpo = api.registry.createType<PalletStakingExposure>('Exposure');
  const emptyPrefs = api.registry.createType<PalletStakingValidatorPrefs>('ValidatorPrefs');

  return combineLatest([
    withController || withLedger
      ? api.query.staking.bonded.multi(stashIds)
      : of(stashIds.map(() => null)),
    withNominations
      ? api.query.staking.nominators.multi(stashIds)
      : of(stashIds.map(() => emptyNoms)),
    withDestination
      ? api.query.staking.payee.multi(stashIds)
      : of(stashIds.map(() => emptyRewa)),
    withPrefs
      ? api.query.staking.validators.multi(stashIds)
      : of(stashIds.map(() => emptyPrefs)),
    withExposure
      ? api.query.staking.erasStakers.multi(stashIds.map((stashId) => [activeEra, stashId]))
      : of(stashIds.map(() => emptyExpo))
  ]);
}

function getBatch (api: ApiInterfaceRx, activeEra: EraIndex, stashIds: AccountId[], flags: StakingQueryFlags): Observable<DeriveStakingQuery[]> {
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
export function query (instanceId: string, api: ApiInterfaceRx): (accountId: Uint8Array | string, flags: StakingQueryFlags) => Observable<DeriveStakingQuery> {
  return memo(instanceId, (accountId: Uint8Array | string, flags: StakingQueryFlags): Observable<DeriveStakingQuery> =>
    api.derive.staking.queryMulti([accountId], flags).pipe(
      map(([first]) => first)
    )
  );
}

export function queryMulti (instanceId: string, api: ApiInterfaceRx): (accountIds: (Uint8Array | string)[], flags: StakingQueryFlags) => Observable<DeriveStakingQuery[]> {
  return memo(instanceId, (accountIds: (Uint8Array | string)[], flags: StakingQueryFlags): Observable<DeriveStakingQuery[]> =>
    accountIds.length
      ? api.derive.session.indexes().pipe(
        switchMap(({ activeEra }): Observable<DeriveStakingQuery[]> => {
          const stashIds = accountIds.map((accountId) => api.registry.createType('AccountId', accountId));

          return getBatch(api, activeEra, stashIds, flags);
        })
      )
      : of([])
  );
}
