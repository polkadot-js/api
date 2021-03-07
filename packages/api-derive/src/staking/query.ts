// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Option } from '@polkadot/types';
import type { AccountId, EraIndex, Exposure, Hash, Nominations, RewardDestination, StakingLedger, ValidatorPrefs } from '@polkadot/types/interfaces';
import type { Observable } from '@polkadot/x-rxjs';
import type { DeriveStakingQuery, StakingQueryFlags } from '../types';

import { combineLatest, of } from '@polkadot/x-rxjs';
import { map, switchMap } from '@polkadot/x-rxjs/operators';

import { memo } from '../util';

function parseDetails (stashId: AccountId, optControllerId: Option<AccountId> | null, nominatorsOpt: Option<Nominations>, rewardDestination: RewardDestination, validatorPrefs: ValidatorPrefs, exposure: Exposure, stakingLedgerOpt: Option<StakingLedger>): DeriveStakingQuery {
  return {
    accountId: stashId,
    controllerId: optControllerId && optControllerId.unwrapOr(null),
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

function getLedgers (api: ApiInterfaceRx, optIds: (Option<AccountId> | null)[], { withLedger = false }: StakingQueryFlags): Observable<Option<StakingLedger>[]> {
  const ids = optIds
    .filter((opt): opt is Option<AccountId> => withLedger && !!opt && opt.isSome)
    .map((opt) => opt.unwrap());
  const emptyLed = api.registry.createType('Option<StakingLedger>');

  return (
    ids.length
      ? api.query.staking.ledger.multi<Option<StakingLedger>>(ids)
      : of([api.registry.createType('Hash'), []] as [Hash | null, Option<StakingLedger>[]])
  ).pipe(
    map(([, optLedgers]): Option<StakingLedger>[] => {
      let offset = -1;

      return optIds.map((opt): Option<StakingLedger> =>
        opt && opt.isSome
          ? optLedgers[++offset] || emptyLed
          : emptyLed
      );
    })
  );
}

function getStashInfo (api: ApiInterfaceRx, stashIds: AccountId[], activeEra: EraIndex, { withController, withDestination, withExposure, withLedger, withNominations, withPrefs }: StakingQueryFlags): Observable<[[Hash | null, (Option<AccountId> | null)[]], [Hash | null, Option<Nominations>[]], [Hash | null, RewardDestination[]], [Hash | null, ValidatorPrefs[]], [Hash | null, Exposure[]]]> {
  const emptyNoms = api.registry.createType('Option<Nominations>');
  const emptyRewa = api.registry.createType('RewardDestination');
  const emptyExpo = api.registry.createType('Exposure');
  const emptyPrefs = api.registry.createType('ValidatorPrefs');

  return combineLatest([
    withController || withLedger
      ? api.query.staking.bonded.multi<Option<AccountId>>(stashIds)
      : of([null, stashIds.map(() => null)] as [null, null[]]),
    withNominations
      ? api.query.staking.nominators.multi<Option<Nominations>>(stashIds)
      : of([null, stashIds.map(() => emptyNoms)] as [null, Option<Nominations>[]]),
    withDestination
      ? api.query.staking.payee.multi<RewardDestination>(stashIds)
      : of([null, stashIds.map(() => emptyRewa)] as [null, RewardDestination[]]),
    withPrefs
      ? api.query.staking.validators.multi<ValidatorPrefs>(stashIds)
      : of([null, stashIds.map(() => emptyPrefs)] as [null, ValidatorPrefs[]]),
    withExposure
      ? api.query.staking.erasStakers.multi<Exposure>(stashIds.map((stashId) => [activeEra, stashId]))
      : of([null, stashIds.map(() => emptyExpo)] as [null, Exposure[]])
  ]);
}

function getBatch (api: ApiInterfaceRx, activeEra: EraIndex, stashIds: AccountId[], flags: StakingQueryFlags): Observable<DeriveStakingQuery[]> {
  return getStashInfo(api, stashIds, activeEra, flags).pipe(
    switchMap(([[, controllerIdOpt], [, nominatorsOpt], [, rewardDestination], [, validatorPrefs], [, exposure]]): Observable<DeriveStakingQuery[]> =>
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
