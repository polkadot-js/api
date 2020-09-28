// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, EraIndex, Exposure, Nominations, RewardDestination, StakingLedger, ValidatorPrefs } from '@polkadot/types/interfaces';
import { ITuple } from '@polkadot/types/types';
import { DeriveStakingQuery } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Option } from '@polkadot/types';
import { isFunction } from '@polkadot/util';

import { memo } from '../util';

type MultiResult = [Option<AccountId>, Option<ITuple<[Nominations]> | Nominations>, RewardDestination, ITuple<[ValidatorPrefs]> | ValidatorPrefs, Exposure];

function parseController (stashId: AccountId, [controllerIdOpt, nominatorsOpt, rewardDestination, validatorPrefs, exposure]: MultiResult, stakingLedgerOpt: Option<StakingLedger>): DeriveStakingQuery {
  const nominators = nominatorsOpt.unwrapOr(null);

  return {
    accountId: stashId,
    controllerId: controllerIdOpt.unwrapOr(null),
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

function retrievePrev (api: ApiInterfaceRx, stashId: AccountId): Observable<MultiResult> {
  return api.queryMulti<MultiResult>([
    [api.query.staking.bonded, stashId],
    [api.query.staking.nominators, stashId],
    [api.query.staking.payee, stashId],
    [api.query.staking.validators, stashId],
    [api.query.staking.stakers, stashId]
  ]);
}

function retrieveCurr (api: ApiInterfaceRx, stashIds: AccountId[], activeEra: EraIndex): Observable<MultiResult[]> {
  return combineLatest([
    api.query.staking.bonded.multi<Option<AccountId>>(stashIds),
    api.query.staking.nominators
      ? api.query.staking.nominators.multi<Option<Nominations>>(stashIds)
      : of(stashIds.map(() => api.registry.createType('Option<Nominations>'))),
    api.query.staking.payee.multi<RewardDestination>(stashIds),
    api.query.staking.validators.multi<ValidatorPrefs>(stashIds),
    api.query.staking.erasStakers.multi<Exposure>(stashIds.map((stashId) => [activeEra, stashId]))
  ]).pipe(
    map(([controllerIdOpt, nominatorsOpt, rewardDestination, validatorPrefs, exposure]): MultiResult[] =>
      controllerIdOpt.map((controllerIdOpt, index): MultiResult =>
        [controllerIdOpt, nominatorsOpt[index], rewardDestination[index], validatorPrefs[index], exposure[index]]
      )
    )
  );
}

function retrieveControllers (api: ApiInterfaceRx, optControllerIds: Option<AccountId>[]): Observable<Option<StakingLedger>[]> {
  const ids = optControllerIds.filter((opt) => opt.isSome).map((opt) => opt.unwrap());

  if (!ids.length) {
    return of(optControllerIds.map(() => api.registry.createType('Option<StakingLedger>')));
  }

  return api.query.staking.ledger.multi<Option<StakingLedger>>(ids).pipe(
    map((optLedgers): Option<StakingLedger>[] => {
      let offset = -1;

      return optControllerIds.map((opt): Option<StakingLedger> =>
        opt.isSome
          ? optLedgers[++offset]
          : api.registry.createType('Option<StakingLedger>')
      );
    })
  );
}

/**
 * @description From a stash, retrieve the controllerId and all relevant details
 */
export function query (instanceId: string, api: ApiInterfaceRx): (accountId: Uint8Array | string) => Observable<DeriveStakingQuery> {
  return memo(instanceId, (accountId: Uint8Array | string): Observable<DeriveStakingQuery> =>
    api.derive.staking.queryMulti([accountId]).pipe(
      map(([first]) => first)
    )
  );
}

export function queryMulti (instanceId: string, api: ApiInterfaceRx): (accountIds: (Uint8Array | string)[]) => Observable<DeriveStakingQuery[]> {
  return memo(instanceId, (accountIds: (Uint8Array | string)[]): Observable<DeriveStakingQuery[]> =>
    accountIds.length
      ? api.derive.session.indexes().pipe(
        switchMap(({ activeEra }): Observable<DeriveStakingQuery[]> => {
          const stashIds = accountIds.map((accountId) => api.registry.createType('AccountId', accountId));

          return (
            isFunction(api.query.staking.erasStakers)
              ? retrieveCurr(api, stashIds, activeEra)
              : combineLatest(stashIds.map((stashId) => retrievePrev(api, stashId)))
          ).pipe(
            switchMap((results): Observable<DeriveStakingQuery[]> =>
              retrieveControllers(api, results.map(([optController]) => optController)).pipe(
                map((stakingLedgerOpts) =>
                  stashIds.map((stashId, index) => parseController(stashId, results[index], stakingLedgerOpts[index]))
                )
              )
            )
          );
        })
      )
      : of([])
  );
}
