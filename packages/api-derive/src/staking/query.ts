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

interface QueryFlags {
  withDestination?: boolean;
  withExposure?: boolean;
  withLedger?: boolean;
  withNominations?: boolean;
  withPrefs?: boolean;
}

type MultiResult = [Option<StakingLedger>, Option<AccountId>, Option<ITuple<[Nominations]> | Nominations>, RewardDestination, ITuple<[ValidatorPrefs]> | ValidatorPrefs, Exposure];

function parseDetails (stashId: AccountId, [, controllerIdOpt, nominatorsOpt, rewardDestination, validatorPrefs, exposure]: MultiResult, stakingLedgerOpt: Option<StakingLedger>): DeriveStakingQuery {
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

function retrievePrev (api: ApiInterfaceRx, stashId: AccountId): Observable<MultiResult> {
  return api.queryMulti<MultiResult>([
    [api.query.staking.ledger, stashId],
    [api.query.staking.bonded, stashId],
    [api.query.staking.nominators, stashId],
    [api.query.staking.payee, stashId],
    [api.query.staking.validators, stashId],
    [api.query.staking.stakers, stashId]
  ]);
}

function retrieveCurr (api: ApiInterfaceRx, stashIds: AccountId[], activeEra: EraIndex, { withDestination, withExposure, withLedger, withNominations, withPrefs }: QueryFlags): Observable<MultiResult[]> {
  const emptyCont = api.registry.createType('Option<AccountId>');
  const emptyLed = api.registry.createType('Option<StakingLedger>');
  const emptyNoms = api.registry.createType('Option<Nominations>');
  const emptyRewa = api.registry.createType('RewardDestination');
  const emptyExpo = api.registry.createType('Exposure');
  const emptyPrefs = api.registry.createType('ValidatorPrefs');

  return combineLatest([
    withLedger
      ? api.query.staking.ledger.multi<Option<StakingLedger>>(stashIds)
      : of(stashIds.map(() => emptyLed)),
    withLedger
      ? api.query.staking.bonded.multi<Option<AccountId>>(stashIds)
      : of(stashIds.map(() => emptyCont)),
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
  ]).pipe(
    map(([ledgersOpt, controllerIdOpt, nominatorsOpt, rewardDestination, validatorPrefs, exposure]): MultiResult[] =>
      controllerIdOpt.map((controllerIdOpt, index): MultiResult =>
        [ledgersOpt[index], controllerIdOpt, nominatorsOpt[index], rewardDestination[index], validatorPrefs[index], exposure[index]]
      )
    )
  );
}

function retrieveControllers (api: ApiInterfaceRx, list: [Option<StakingLedger>, Option<AccountId>][]): Observable<Option<StakingLedger>[]> {
  const ids = list.filter(([l, c]) => !l.isSome && c.isSome).map(([, c]) => c.unwrap());

  if (!ids.length) {
    return of(list.map(([l]) => l));
  }

  return api.query.staking.ledger.multi<Option<StakingLedger>>(ids).pipe(
    map((optLedgers): Option<StakingLedger>[] => {
      let offset = -1;

      return list.map(([l, c]): Option<StakingLedger> =>
        !l.isSome && c.isSome
          ? optLedgers[++offset]
          : l
      );
    })
  );
}

/**
 * @description From a stash, retrieve the controllerId and all relevant details
 */
export function query (instanceId: string, api: ApiInterfaceRx): (accountId: Uint8Array | string, flags: QueryFlags) => Observable<DeriveStakingQuery> {
  return memo(instanceId, (accountId: Uint8Array | string, flags: QueryFlags): Observable<DeriveStakingQuery> =>
    api.derive.staking.queryMulti([accountId], flags).pipe(
      map(([first]) => first)
    )
  );
}

export function queryMulti (instanceId: string, api: ApiInterfaceRx): (accountIds: (Uint8Array | string)[], flags: QueryFlags) => Observable<DeriveStakingQuery[]> {
  return memo(instanceId, (accountIds: (Uint8Array | string)[], flags: QueryFlags): Observable<DeriveStakingQuery[]> =>
    accountIds.length
      ? api.derive.session.indexes().pipe(
        switchMap(({ activeEra }): Observable<DeriveStakingQuery[]> => {
          const stashIds = accountIds.map((accountId) => api.registry.createType('AccountId', accountId));

          return (
            isFunction(api.query.staking.erasStakers)
              ? retrieveCurr(api, stashIds, activeEra, flags)
              : combineLatest(stashIds.map((stashId) => retrievePrev(api, stashId)))
          ).pipe(
            switchMap((results): Observable<DeriveStakingQuery[]> =>
              retrieveControllers(api, results.map(([l, c]) => [l, c])).pipe(
                map((stakingLedgerOpts) =>
                  stashIds.map((stashId, index) => parseDetails(stashId, results[index], stakingLedgerOpts[index]))
                )
              )
            )
          );
        })
      )
      : of([])
  );
}
