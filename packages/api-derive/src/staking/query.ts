// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, Exposure, Keys, Nominations, RewardDestination, ValidatorPrefs } from '@polkadot/types/interfaces';
import { ITuple } from '@polkadot/types/types';
import { DerivedStakingQuery } from '../types';

import { combineLatest, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { createType, Option, Vec } from '@polkadot/types';

import { memo } from '../util';

type MultiResult = [Option<AccountId>, Option<ITuple<[Nominations]>>, RewardDestination, ITuple<[ValidatorPrefs]>, Option<Keys>, Exposure];

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
        [api.query.session.nextKeys, [api.consts.session.dedupKeyPrefix, stashId]],
        [api.query.staking.erasStakers, [activeEra, stashId]]
      ])
    )
  );
}

function retrieveController (api: ApiInterfaceRx, stashId: AccountId, [queuedKeys, [controllerIdOpt, nominatorsOpt, rewardDestination, [validatorPrefs], nextKeys, exposure]]: [Vec<ITuple<[AccountId, Keys]>>, MultiResult]): Observable<DerivedStakingQuery> {
  const controllerId = controllerIdOpt.unwrapOr(null);

  return controllerId
    ? api.query.staking.ledger(controllerId).pipe(
      map((stakingLedgerOpt): DerivedStakingQuery => ({
        accountId: stashId,
        controllerId,
        exposure,
        nominators: nominatorsOpt.unwrapOr([{ targets: [] }])[0].targets,
        rewardDestination,
        stakingLedger: stakingLedgerOpt.unwrapOr(undefined),
        stashId,
        validatorPrefs,
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
    const stashId = createType(api.registry, 'AccountId', accountId);

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
