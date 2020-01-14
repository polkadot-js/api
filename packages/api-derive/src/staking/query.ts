// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, Exposure, Keys, Nominations, RewardDestination, StakingLedger, ValidatorPrefs } from '@polkadot/types/interfaces';
import { ITuple } from '@polkadot/types/types';
import { DerivedStakingQuery } from '../types';

import { combineLatest, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { createType, Option, Vec } from '@polkadot/types';

import { memo } from '../util';

interface ParseInput {
  accountId: AccountId;
  controllerId: AccountId;
  nominators: AccountId[];
  rewardDestination: RewardDestination;
  queuedKeys: [AccountId, Keys][];
  stakers: Exposure;
  stakingLedger: Option<StakingLedger>;
  stashId: AccountId;
  validatorPrefs: ValidatorPrefs;
  nextKeys: Option<Keys>;
}

type MultiResultV2 = [[Vec<AccountId>] | Option<ITuple<[Nominations]>>, RewardDestination, Exposure, [ValidatorPrefs], Option<Keys>, Option<StakingLedger>];

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

function parseResult (api: ApiInterfaceRx, { accountId, controllerId, stashId, queuedKeys, stakingLedger, nominators, rewardDestination, stakers, validatorPrefs, nextKeys }: ParseInput): DerivedStakingQuery {
  const _stakingLedger = stakingLedger.unwrapOr(undefined);

  return {
    accountId,
    controllerId,
    nominators,
    rewardDestination,
    stakers,
    stakingLedger: _stakingLedger,
    stashId,
    validatorPrefs,
    ...unwrapSessionIds(stashId, queuedKeys, nextKeys)
  };
}

function retrieveInfo (api: ApiInterfaceRx, accountId: AccountId, stashId: AccountId, controllerId: AccountId): Observable<DerivedStakingQuery> {
  return combineLatest([
    api.query.session.queuedKeys<Vec<ITuple<[AccountId, Keys]>>>(),
    api.queryMulti([
      [api.query.staking.nominators, stashId],
      [api.query.staking.payee, stashId],
      [api.query.staking.stakers, stashId],
      [api.query.staking.validators, stashId],
      [api.query.session.nextKeys, [api.consts.session.dedupKeyPrefix, stashId]],
      [api.query.staking.ledger, controllerId]
    ]) as Observable<MultiResultV2>
  ]).pipe(map(([queuedKeys, [_nominators, rewardDestination, stakers, [validatorPrefs], nextKeys, stakingLedger]]: [[AccountId, Keys][], MultiResultV2]): DerivedStakingQuery => {
    const nominators: AccountId[] = (_nominators as Option<ITuple<[Nominations]>>).isSome
      ? (_nominators as Option<ITuple<[Nominations]>>).unwrap()[0].targets
      : [];

    return parseResult(api, {
      accountId, controllerId, stashId, queuedKeys, stakingLedger, nominators, rewardDestination, stakers, validatorPrefs, nextKeys
    });
  }));
}

/**
 * @description From a stash, retrieve the controllerId and fill in all the relevant staking details
 */
export function query (api: ApiInterfaceRx): (accountId: Uint8Array | string) => Observable<DerivedStakingQuery> {
  return memo((accountId: Uint8Array | string): Observable<DerivedStakingQuery> => {
    const stashId = createType(api.registry, 'AccountId', accountId);

    return api.query.staking
      .bonded<Option<AccountId>>(stashId)
      .pipe(
        switchMap((controllerId): Observable<DerivedStakingQuery> =>
          controllerId.isSome
            ? retrieveInfo(api, stashId, stashId, controllerId.unwrap())
            : of({ accountId: stashId, nextSessionIds: [], sessionIds: [] })
        )
      );
  });
}
