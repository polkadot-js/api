// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Option } from '@polkadot/types';
import type { AccountId, EraIndex, Exposure, Nominations, RewardDestination, StakingLedger, ValidatorPrefs } from '@polkadot/types/interfaces';
import type { ITuple } from '@polkadot/types/types';
import type { DeriveStakingQuery } from '../types';

import { combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { isFunction } from '@polkadot/util';

import { memo } from '../util';

type MultiResultPrev = [Option<AccountId>, Option<ITuple<[Nominations]>>, RewardDestination, ITuple<[ValidatorPrefs]> | ValidatorPrefs, Exposure];

type MultiResultCombo = [Option<AccountId>, Option<ITuple<[Nominations]> | Nominations>, RewardDestination, ITuple<[ValidatorPrefs]> | ValidatorPrefs, Exposure];

function parseDetails (stashId: AccountId, [controllerIdOpt, nominatorsOpt, rewardDestination, validatorPrefs, exposure]: MultiResultCombo, stakingLedgerOpt: Option<StakingLedger>): DeriveStakingQuery {
  const nominators = nominatorsOpt && nominatorsOpt.unwrapOr(null);

  return {
    accountId: stashId,
    controllerId: controllerIdOpt && controllerIdOpt.unwrapOr(null),
    exposure,
    nominators: nominators
      ? Array.isArray(nominators)
        ? nominators[0].targets
        : nominators.targets
      : [],
    rewardDestination,
    stakingLedger: stakingLedgerOpt.unwrapOrDefault(),
    stashId,
    validatorPrefs: Array.isArray(validatorPrefs)
      ? validatorPrefs[0]
      : validatorPrefs
  };
}

function retrievePrev (api: ApiInterfaceRx, stashId: AccountId): Observable<MultiResultPrev> {
  return api.queryMulti<MultiResultPrev>([
    [api.query.staking.bonded, stashId],
    [api.query.staking.nominators, stashId],
    [api.query.staking.payee, stashId],
    [api.query.staking.validators, stashId],
    [api.query.staking.stakers, stashId]
  ]);
}

function retrieveCurr (api: ApiInterfaceRx, stashIds: AccountId[], activeEra: EraIndex, withFull: boolean): Observable<MultiResultCombo[]> {
  const emptyCont = api.registry.createType('Option<AccountId>');
  const emptyNoms = api.registry.createType('Option<Nominations>');
  const emptyRewa = api.registry.createType('RewardDestination');

  return combineLatest([
    withFull
      ? api.query.staking.bonded.multi<Option<AccountId>>(stashIds)
      : of(stashIds.map(() => emptyCont)),
    withFull && api.query.staking.nominators
      ? api.query.staking.nominators.multi<Option<Nominations>>(stashIds)
      : of(stashIds.map(() => emptyNoms)),
    withFull
      ? api.query.staking.payee.multi<RewardDestination>(stashIds)
      : of(stashIds.map(() => emptyRewa)),
    api.query.staking.validators.multi<ValidatorPrefs>(stashIds),
    api.query.staking.erasStakers.multi<Exposure>(stashIds.map((stashId) => [activeEra, stashId]))
  ]).pipe(
    map(([controllerIdOpt, nominatorsOpt, rewardDestination, validatorPrefs, exposure]): MultiResultCombo[] =>
      controllerIdOpt.map((controllerIdOpt, index): MultiResultCombo =>
        [controllerIdOpt, nominatorsOpt[index], rewardDestination[index], validatorPrefs[index], exposure[index]]
      )
    )
  );
}

function retrieveControllers (api: ApiInterfaceRx, optControllerIds: Option<AccountId>[]): Observable<Option<StakingLedger>[]> {
  const ids = optControllerIds.filter((opt) => opt.isSome).map((opt) => opt.unwrap());
  const emptyLed = api.registry.createType('Option<StakingLedger>');

  if (!ids.length) {
    return of(optControllerIds.map(() => emptyLed));
  }

  return api.query.staking.ledger.multi<Option<StakingLedger>>(ids).pipe(
    map((optLedgers): Option<StakingLedger>[] => {
      let offset = -1;

      return optControllerIds.map((opt): Option<StakingLedger> =>
        opt.isSome
          ? optLedgers[++offset]
          : emptyLed
      );
    })
  );
}

/**
 * @description From a stash, retrieve the controllerId and all relevant details
 */
export function query (instanceId: string, api: ApiInterfaceRx): (accountId: Uint8Array | string, withFull?: boolean) => Observable<DeriveStakingQuery> {
  return memo(instanceId, (accountId: Uint8Array | string, withFull?: boolean): Observable<DeriveStakingQuery> =>
    api.derive.staking.queryMulti([accountId], withFull).pipe(
      map(([first]) => first)
    )
  );
}

export function queryMulti (instanceId: string, api: ApiInterfaceRx): (accountIds: (Uint8Array | string)[], withFull?: boolean) => Observable<DeriveStakingQuery[]> {
  return memo(instanceId, (accountIds: (Uint8Array | string)[], withFull = true): Observable<DeriveStakingQuery[]> =>
    accountIds.length
      ? api.derive.session.indexes().pipe(
        switchMap(({ activeEra }): Observable<DeriveStakingQuery[]> => {
          const stashIds = accountIds.map((accountId) => api.registry.createType('AccountId', accountId));
          const emptyLed = api.registry.createType('Option<StakingLedger>');

          return (
            isFunction(api.query.staking.erasStakers)
              ? retrieveCurr(api, stashIds, activeEra, withFull)
              : combineLatest(stashIds.map((stashId) => retrievePrev(api, stashId)))
          ).pipe(
            withFull
              ? switchMap((results): Observable<DeriveStakingQuery[]> =>
                retrieveControllers(api, results.map(([optController]) => optController)).pipe(
                  map((stakingLedgerOpts) =>
                    stashIds.map((stashId, index) => parseDetails(stashId, results[index], stakingLedgerOpts[index]))
                  )
                )
              )
              : map((results): DeriveStakingQuery[] =>
                stashIds.map((stashId, index) => parseDetails(stashId, results[index], emptyLed))
              )
          );
        })
      )
      : of([])
  );
}
