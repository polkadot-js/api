// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Option } from '@polkadot/types';
import type { AccountId, EraIndex, Exposure, Nominations, RewardDestination, StakingLedger, ValidatorPrefs } from '@polkadot/types/interfaces';
import type { Observable } from '@polkadot/x-rxjs';
import type { DeriveStakingQuery, StakingQueryFlags } from '../types';

import { combineLatest, of } from '@polkadot/x-rxjs';
import { map, switchMap } from '@polkadot/x-rxjs/operators';

import { memo } from '../util';

const MAX_QUERY_SIZE = 1024;

function parseDetails (stashId: AccountId, controllerIdOpt: Option<AccountId> | null, nominatorsOpt: Option<Nominations>, rewardDestination: RewardDestination, validatorPrefs: ValidatorPrefs, exposure: Exposure, stakingLedgerOpt: Option<StakingLedger>): DeriveStakingQuery {
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

function retrieveControllers (api: ApiInterfaceRx, optIds: (Option<AccountId> | null)[]): Observable<Option<StakingLedger>[]> {
  const ids = optIds
    .filter((opt): opt is Option<AccountId> => !!opt && opt.isSome)
    .map((opt) => opt.unwrap());
  const emptyLed = api.registry.createType('Option<StakingLedger>');

  return (
    ids.length
      ? api.query.staking.ledger.multi<Option<StakingLedger>>(ids)
      : of([])
  ).pipe(
    map((optLedgers): Option<StakingLedger>[] => {
      let offset = -1;

      return optIds.map((opt): Option<StakingLedger> =>
        opt && opt.isSome
          ? optLedgers[++offset]
          : emptyLed
      );
    })
  );
}

function retrieve (api: ApiInterfaceRx, stashIds: AccountId[], activeEra: EraIndex, { withDestination, withExposure, withLedger, withNominations, withPrefs }: StakingQueryFlags): Observable<[(Option<AccountId> | null)[], Option<Nominations>[], RewardDestination[], ValidatorPrefs[], Exposure[]]> {
  const emptyNoms = api.registry.createType('Option<Nominations>');
  const emptyRewa = api.registry.createType('RewardDestination');
  const emptyExpo = api.registry.createType('Exposure');
  const emptyPrefs = api.registry.createType('ValidatorPrefs');

  return combineLatest([
    withLedger
      ? api.query.staking.bonded.multi<Option<AccountId>>(stashIds)
      : of(stashIds.map(() => null)),
    withNominations && api.query.staking.nominators
      ? api.query.staking.nominators.multi<Option<Nominations>>(stashIds)
      : of(stashIds.map(() => emptyNoms)),
    withDestination
      ? api.query.staking.payee.multi<RewardDestination>(stashIds)
      : of(stashIds.map(() => emptyRewa)),
    withPrefs
      ? api.query.staking.validators.multi<ValidatorPrefs>(stashIds)
      : of(stashIds.map(() => emptyPrefs)),
    withExposure
      ? api.query.staking.erasStakers.multi<Exposure>(stashIds.map((stashId) => [activeEra, stashId]))
      : of(stashIds.map(() => emptyExpo))
  ]);
}

function getBatch (api: ApiInterfaceRx, activeEra: EraIndex, stashIds: AccountId[], flags: StakingQueryFlags): Observable<DeriveStakingQuery[]> {
  return retrieve(api, stashIds, activeEra, flags).pipe(
    switchMap(([controllerIdOpt, nominatorsOpt, rewardDestination, validatorPrefs, exposure]): Observable<DeriveStakingQuery[]> =>
      retrieveControllers(api, controllerIdOpt).pipe(
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
          const stashIds = accountIds.map((accountId) => api.registry.createType('AccountId', accountId)).slice(0, MAX_QUERY_SIZE);

          return getBatch(api, activeEra, stashIds, flags);
        })
      )
      : of([])
  );
}
