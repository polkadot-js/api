// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, Exposure, Keys, Nominations, RewardDestination, StakingLedger, ValidatorPrefs } from '@polkadot/types/interfaces';
import { ITuple } from '@polkadot/types/types';
import { DeriveStakingQuery } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Option, Vec } from '@polkadot/types';
import { isFunction } from '@polkadot/util';

import { memo } from '../util';

type MultiResult = [Option<AccountId>, Option<ITuple<[Nominations]> | Nominations>, RewardDestination, ITuple<[ValidatorPrefs]> | ValidatorPrefs, Option<Keys>, Exposure];

function parseSessionIds (stashId: AccountId, queuedKeys: [AccountId, Keys][], nextKeys: Option<Keys>): { nextSessionIds: AccountId[]; sessionIds: AccountId[] } {
  const sessionIds = (queuedKeys.find(([currentId]): boolean =>
    currentId.eq(stashId)
  ) || [undefined, [] as AccountId[]])[1];
  const nextSessionIds = nextKeys.unwrapOr([] as AccountId[]);

  return {
    nextSessionIds,
    sessionIds
  };
}

function parseController (stashId: AccountId, queuedKeys: Vec<ITuple<[AccountId, Keys]>>, [controllerIdOpt, nominatorsOpt, rewardDestination, validatorPrefs, nextKeys, exposure]: MultiResult, stakingLedgerOpt: Option<StakingLedger>): DeriveStakingQuery {
  const controllerId = controllerIdOpt.unwrapOr(null);
  const nominators = nominatorsOpt.unwrapOr(null);

  return controllerId && stakingLedgerOpt.isSome
    ? {
      accountId: stashId,
      controllerId,
      exposure,
      nominators: nominators
        ? Array.isArray(nominators)
          ? nominators[0].targets
          : nominators.targets
        : [],
      rewardDestination,
      stakingLedger: stakingLedgerOpt.unwrapOr(undefined),
      stashId,
      validatorPrefs: Array.isArray(validatorPrefs)
        ? validatorPrefs[0]
        : validatorPrefs,
      ...parseSessionIds(stashId, queuedKeys, nextKeys)
    }
    : { accountId: stashId, nextSessionIds: [], sessionIds: [] };
}

function retrievePrev (api: ApiInterfaceRx, stashId: AccountId): Observable<MultiResult> {
  return api.queryMulti<MultiResult>([
    [api.query.staking.bonded, stashId],
    [api.query.staking.nominators, stashId],
    [api.query.staking.payee, stashId],
    [api.query.staking.validators, stashId],
    [api.query.session.nextKeys, [api.consts.session.dedupKeyPrefix, stashId]],
    [api.query.staking.stakers, stashId]
  ]);
}

function retrieveCurr (api: ApiInterfaceRx, stashId: AccountId): Observable<MultiResult> {
  return api.derive.session.indexes().pipe(
    switchMap(({ activeEra }) =>
      api.queryMulti<MultiResult>([
        [api.query.staking.bonded, stashId],
        [api.query.staking.nominators, stashId],
        [api.query.staking.payee, stashId],
        [api.query.staking.validators, stashId],
        api.consts.session?.dedupKeyPrefix
          ? [api.query.session.nextKeys, [api.consts.session.dedupKeyPrefix, stashId]]
          : [api.query.session.nextKeys, stashId],
        [api.query.staking.erasStakers, [activeEra, stashId]]
      ])
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
export function query (api: ApiInterfaceRx): (accountId: Uint8Array | string) => Observable<DeriveStakingQuery> {
  return memo((accountId: Uint8Array | string): Observable<DeriveStakingQuery> =>
    api.derive.staking.queryMulti([accountId]).pipe(
      map(([first]) => first)
    )
  );
}

export function queryMulti (api: ApiInterfaceRx): (accountIds: (Uint8Array | string)[]) => Observable<DeriveStakingQuery[]> {
  return memo((accountIds: (Uint8Array | string)[]): Observable<DeriveStakingQuery[]> =>
    accountIds.length
      ? api.query.session.queuedKeys<Vec<ITuple<[AccountId, Keys]>>>().pipe(
        switchMap((queuedKeys): Observable<DeriveStakingQuery[]> => {
          const stashIds = accountIds.map((accountId) => api.registry.createType('AccountId', accountId));

          return combineLatest(
            isFunction(api.query.staking.erasStakers)
              ? stashIds.map((stashId) => retrieveCurr(api, stashId))
              : stashIds.map((stashId) => retrievePrev(api, stashId))
          ).pipe(
            switchMap((results): Observable<DeriveStakingQuery[]> =>
              retrieveControllers(api, results.map(([optController]) => optController)).pipe(
                map((stakingLedgerOpts) =>
                  stashIds.map((stashId, index) => parseController(stashId, queuedKeys, results[index], stakingLedgerOpts[index]))
                )
              )
            )
          );
        })
      )
      : of([])
  );
}
