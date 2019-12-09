// Copyright 2017-2019 @polkadot/api-derive authors & contributors
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
  queuedKeys?: [AccountId, Keys][];
  stakers: Exposure;
  stakingLedger: Option<StakingLedger>;
  stashId: AccountId;
  validatorPrefs: ValidatorPrefs;
  nextKeys?: Option<Keys>;
  nextKeyFor?: Option<AccountId>;
}

function unwrapSessionIds (stashId: AccountId, queuedKeys: Option<AccountId> | [AccountId, Keys][], nextKeys: Option<Keys>): { nextSessionIds: AccountId[]; sessionIds: AccountId[] } {
  // for 2.x we have a Vec<(ValidatorId,Keys)> of the keys
  if (Array.isArray(queuedKeys)) {
    const sessionIds = (queuedKeys.find(([currentId]): boolean =>
      currentId.eq(stashId)
    ) || [undefined, [] as AccountId[]])[1];
    const nextSessionIds = nextKeys.unwrapOr([] as AccountId[]);

    return {
      nextSessionIds,
      sessionIds
    };
  }

  // substrate 1.x
  const nextSessionIds = queuedKeys.isSome
    ? [queuedKeys.unwrap()]
    : [];

  return {
    nextSessionIds,
    sessionIds: nextSessionIds
  };
}

function parseResult (api: ApiInterfaceRx, { accountId, controllerId, stashId, nextKeyFor, queuedKeys, stakingLedger, nominators, rewardDestination, stakers, validatorPrefs, nextKeys }: ParseInput): DerivedStakingQuery {
  const _stakingLedger = stakingLedger.unwrapOr(undefined);
  const _nextKeyFor = nextKeyFor || createType(api.registry, 'Option<AccountId>', null);
  const _nextKeys = nextKeys || createType(api.registry, 'Option<Keys>', null);

  return {
    accountId,
    controllerId,
    nominators,
    rewardDestination,
    stakers,
    stakingLedger: _stakingLedger,
    stashId,
    validatorPrefs,
    ...unwrapSessionIds(stashId, queuedKeys || _nextKeyFor, _nextKeys)
  };
}

type MultiResultV1 = [Option<AccountId>, Option<StakingLedger>, [Vec<AccountId>], RewardDestination, Exposure, ITuple<[ValidatorPrefs]>];

function retrieveInfoV1 (api: ApiInterfaceRx, accountId: AccountId, stashId: AccountId, controllerId: AccountId): Observable<DerivedStakingQuery> {
  return (
    api.queryMulti([
      [api.query.session.nextKeyFor, controllerId],
      [api.query.staking.ledger, controllerId],
      [api.query.staking.nominators, stashId],
      [api.query.staking.payee, stashId],
      [api.query.staking.stakers, stashId],
      [api.query.staking.validators, stashId]
    ]) as Observable<MultiResultV1>
  ).pipe(map(([nextKeyFor, stakingLedger, [nominators], rewardDestination, stakers, [validatorPrefs]]: MultiResultV1): DerivedStakingQuery =>
    parseResult(api, {
      accountId, controllerId, stashId, nextKeyFor, stakingLedger, nominators, rewardDestination, stakers, validatorPrefs
    })
  ));
}

type MultiResultV2 = [[Vec<AccountId>] | Option<ITuple<[Nominations]>>, RewardDestination, Exposure, [ValidatorPrefs], Option<Keys>, Option<StakingLedger>];

function retrieveInfoV2 (api: ApiInterfaceRx, accountId: AccountId, stashId: AccountId, controllerId: AccountId): Observable<DerivedStakingQuery> {
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
    // if we have staking.storageVersion it indicates the new structure, unwrap as needed
    // FIXME We really want to be pulling all the new (valuable) info along
    const nominators: AccountId[] = api.query.staking.storageVersion
      ? (_nominators as Option<ITuple<[Nominations]>>).isSome
        ? (_nominators as Option<ITuple<[Nominations]>>).unwrap()[0].targets
        : []
      : (_nominators as [Vec<AccountId>])[0];

    return parseResult(api, {
      accountId, controllerId, stashId, queuedKeys, stakingLedger, nominators, rewardDestination, stakers, validatorPrefs, nextKeys
    });
  }));
}

function retrieveV1 (api: ApiInterfaceRx, accountId: AccountId): Observable<DerivedStakingQuery> {
  // depending on where we come from, this may be a controller or stash
  return combineLatest([
    api.query.staking.bonded<Option<AccountId>>(accountId),
    api.query.staking.ledger<Option<StakingLedger>>(accountId)
  ]).pipe(switchMap(([bonded, stakingLedger]): Observable<DerivedStakingQuery> =>
    stakingLedger.isSome
      ? retrieveInfoV1(api, accountId, stakingLedger.unwrap().stash, accountId)
      : bonded.isSome
        ? retrieveInfoV1(api, accountId, accountId, bonded.unwrap())
        : of({ accountId: accountId, nextSessionIds: [], sessionIds: [] })
  ));
}

function retrieveV2 (api: ApiInterfaceRx, stashId: AccountId): Observable<DerivedStakingQuery> {
  return api.query.staking
    .bonded<Option<AccountId>>(stashId)
    .pipe(switchMap((controllerId): Observable<DerivedStakingQuery> =>
      controllerId.isSome
        ? retrieveInfoV2(api, stashId, stashId, controllerId.unwrap())
        : of({ accountId: stashId, nextSessionIds: [], sessionIds: [] })
    ));
}

/**
 * @description From a stash, retrieve the controllerId and fill in all the relevant staking details
 */
export function query (api: ApiInterfaceRx): (_accountId: Uint8Array | string) => Observable<DerivedStakingQuery> {
  const retrieve = api.consts.session
    ? retrieveV2
    : retrieveV1;

  return memo((accountId: Uint8Array | string): Observable<DerivedStakingQuery> =>
    retrieve(api, createType(api.registry, 'AccountId', accountId)));
}
