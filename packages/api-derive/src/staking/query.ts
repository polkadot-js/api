// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, Exposure, Keys, Nominations, RewardDestination, ValidatorPrefs } from '@polkadot/types/interfaces';
import { ITuple } from '@polkadot/types/types';
import { DerivedStakingQuery } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Option, Vec } from '@polkadot/types';

import { memo } from '../util';

type MultiResult = [Option<AccountId>, Option<ITuple<[Nominations]> | Nominations>, RewardDestination, ITuple<[ValidatorPrefs]> | ValidatorPrefs, Option<Keys>, Exposure];

function unwrapSessionIds (stashId: AccountId, queuedKeys: [AccountId, Keys][], nextKeys: Option<Keys>): { nextSessionIds: AccountId[]; sessionIds: AccountId[] } {
  const sessionIds = (queuedKeys.find(([currentId]): boolean =>
    currentId.eq(stashId)
  ) || [undefined, [] as AccountId[]])[1];
  const nextSessionIds = nextKeys.unwrapOr([] as AccountId[]);

  return {
    nextSessionIds,
    sessionIds
  };
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

function retrieveController (api: ApiInterfaceRx, stashId: AccountId, [queuedKeys, [controllerIdOpt, nominatorsOpt, rewardDestination, validatorPrefs, nextKeys, exposure]]: [Vec<ITuple<[AccountId, Keys]>>, MultiResult]): Observable<DerivedStakingQuery> {
  const controllerId = controllerIdOpt.unwrapOr(null);
  const nominators = nominatorsOpt.unwrapOr(null);

  return controllerId
    ? api.query.staking.ledger(controllerId).pipe(
      map((stakingLedgerOpt): DerivedStakingQuery => ({
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
        ...unwrapSessionIds(stashId, queuedKeys, nextKeys)
      }))
    )
    : of({ accountId: stashId, nextSessionIds: [], sessionIds: [] });
}

/**
 * @description From a stash, retrieve the controllerId and all relevant details
 */
export function query (api: ApiInterfaceRx): (accountId: Uint8Array | string) => Observable<DerivedStakingQuery> {
  return memo((accountId: Uint8Array | string): Observable<DerivedStakingQuery> => {
    const stashId = api.registry.createType('AccountId', accountId);

    return combineLatest([
      api.query.session.queuedKeys<Vec<ITuple<[AccountId, Keys]>>>(),
      api.query.staking.erasStakers
        ? retrieveCurr(api, stashId)
        : retrievePrev(api, stashId)
    ]).pipe(
      switchMap((result): Observable<DerivedStakingQuery> =>
        retrieveController(api, stashId, result)
      )
    );
  });
}

export function queryMulti (api: ApiInterfaceRx): (...accountIds: (Uint8Array | string)[]) => Observable<DerivedStakingQuery[]> {
  return memo((...accountIds: (Uint8Array | string)[]): Observable<DerivedStakingQuery[]> =>
    combineLatest(
      accountIds.map((accountId) => api.derive.staking.query(accountId))
    )
  );
}
