// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, Balance, BlockNumber, Exposure, Keys, Nominations, RewardDestination, StakingLedger, UnlockChunk, ValidatorPrefs } from '@polkadot/types/interfaces';
import { ITuple } from '@polkadot/types/types';
import { DerivedRecentlyOffline, DerivedSessionInfo, DerivedStaking, DerivedUnlocking } from '../types';

import BN from 'bn.js';
import { combineLatest, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { createType, Option, Vec } from '@polkadot/types';

import { isUndefined } from '@polkadot/util';

import { memo } from '../util';

interface ParseInput {
  accountId: AccountId;
  controllerId: AccountId;
  recentlyOffline?: DerivedRecentlyOffline;
  nominators: AccountId[];
  rewardDestination: RewardDestination;
  queuedKeys?: [AccountId, Keys][];
  sessionInfo: DerivedSessionInfo;
  stakers: Exposure;
  stakingLedger: Option<StakingLedger>;
  stashId: AccountId;
  validatorPrefs: ValidatorPrefs;
  nextKeys?: Option<Keys>;
  nextKeyFor?: Option<AccountId>;
}

// groups the supplied chunks by era, i.e. { [era]: BN(total of values) }
function groupByEra (list: UnlockChunk[]): Record<string, BN> {
  return list.reduce((map: Record<string, BN>, { era, value }): Record<string, BN> => {
    const key = era.toString();

    map[key] = !map[key]
      ? value.unwrap()
      : map[key].add(value.unwrap());

    return map;
  }, {});
}

// calculate the remaining blocks in a specific unlock era
function remainingBlocks (era: BN, sessionInfo: DerivedSessionInfo): BlockNumber {
  const remaining = era.sub(sessionInfo.currentEra);

  // on the Rust side the current-era >= era-for-unlock (removal done on >)
  return createType('BlockNumber', remaining.gtn(0)
    ? remaining
      .subn(1)
      .mul(sessionInfo.eraLength)
      .add(sessionInfo.eraLength.sub(sessionInfo.eraProgress))
    : 0
  );
}

function calculateUnlocking (stakingLedger: StakingLedger | undefined, sessionInfo: DerivedSessionInfo): DerivedUnlocking[] | undefined {
  if (isUndefined(stakingLedger)) {
    return undefined;
  }

  const unlockingChunks = stakingLedger.unlocking.filter(({ era }): boolean =>
    remainingBlocks(era.unwrap(), sessionInfo).gtn(0)
  );

  if (!unlockingChunks.length) {
    return undefined;
  }

  // group the unlock chunks that have the same era and sum their values
  const groupedResult = groupByEra(unlockingChunks);
  const results = Object.entries(groupedResult).map(([eraString, value]): DerivedUnlocking => ({
    value: createType('Balance', value),
    remainingBlocks: remainingBlocks(new BN(eraString), sessionInfo)
  }));

  return results.length ? results : undefined;
}

function redeemableSum (stakingLedger: StakingLedger | undefined, sessionInfo: DerivedSessionInfo): Balance {
  if (isUndefined(stakingLedger)) {
    return createType('Balance');
  }

  return createType('Balance', stakingLedger.unlocking.reduce((total, { era, value }): BN => {
    return remainingBlocks(era.unwrap(), sessionInfo).eqn(0)
      ? total.add(value.unwrap())
      : total;
  }, new BN(0)));
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

function parseResult ({ accountId, controllerId, stashId, sessionInfo, recentlyOffline = {}, nextKeyFor = createType('Option<AccountId>', null), queuedKeys, stakingLedger, nominators, rewardDestination, stakers, validatorPrefs, nextKeys = createType('Option<Keys>', null) }: ParseInput): DerivedStaking {
  const _stakingLedger = stakingLedger.unwrapOr(undefined);

  return {
    accountId,
    controllerId,
    nominators,
    offline: recentlyOffline[stashId.toString()],
    redeemable: redeemableSum(_stakingLedger, sessionInfo),
    rewardDestination,
    stakers,
    stakingLedger: _stakingLedger,
    stashId,
    unlocking: calculateUnlocking(_stakingLedger, sessionInfo),
    validatorPrefs,
    ...unwrapSessionIds(stashId, queuedKeys || nextKeyFor, nextKeys)
  };
}

type MultiResultV1 = [Option<AccountId>, Option<StakingLedger>, [Vec<AccountId>], RewardDestination, Exposure, ITuple<[ValidatorPrefs]>];

function retrieveInfoV1 (api: ApiInterfaceRx, accountId: AccountId, stashId: AccountId, controllerId: AccountId): Observable<DerivedStaking> {
  return combineLatest([
    api.derive.session.info(),
    api.derive.staking.recentlyOffline(),
    api.queryMulti([
      [api.query.session.nextKeyFor, controllerId],
      [api.query.staking.ledger, controllerId],
      [api.query.staking.nominators, stashId],
      [api.query.staking.payee, stashId],
      [api.query.staking.stakers, stashId],
      [api.query.staking.validators, stashId]
    ]) as Observable<MultiResultV1>
  ]).pipe(map(([sessionInfo, recentlyOffline, [nextKeyFor, stakingLedger, [nominators], rewardDestination, stakers, [validatorPrefs]]]: [DerivedSessionInfo, DerivedRecentlyOffline, MultiResultV1]): DerivedStaking =>
    parseResult({
      accountId, controllerId, stashId, sessionInfo, recentlyOffline, nextKeyFor, stakingLedger, nominators, rewardDestination, stakers, validatorPrefs
    })
  ));
}

type MultiResultV2 = [[Vec<AccountId>] | Option<ITuple<[Nominations]>>, RewardDestination, Exposure, [ValidatorPrefs], Option<Keys>, Option<StakingLedger>];

function retrieveInfoV2 (api: ApiInterfaceRx, accountId: AccountId, stashId: AccountId, controllerId: AccountId): Observable<DerivedStaking> {
  return combineLatest([
    api.derive.session.info(),
    api.query.session.queuedKeys<Vec<ITuple<[AccountId, Keys]>>>(),
    api.queryMulti([
      [api.query.staking.nominators, stashId],
      [api.query.staking.payee, stashId],
      [api.query.staking.stakers, stashId],
      [api.query.staking.validators, stashId],
      [api.query.session.nextKeys, [api.consts.session.dedupKeyPrefix, stashId]],
      [api.query.staking.ledger, controllerId]
    ]) as Observable<MultiResultV2>
  ]).pipe(map(([sessionInfo, queuedKeys, [_nominators, rewardDestination, stakers, [validatorPrefs], nextKeys, stakingLedger]]: [DerivedSessionInfo, [AccountId, Keys][], MultiResultV2]): DerivedStaking => {
    // if we have staking.storageVersion it indicates the new structure, unwrap as needed
    // FIXME We really want to be pulling all the new (valuable) info along
    const nominators: AccountId[] = api.query.staking.storageVersion
      ? (_nominators as Option<ITuple<[Nominations]>>).isSome
        ? (_nominators as Option<ITuple<[Nominations]>>).unwrap()[0].targets
        : []
      : (_nominators as [Vec<AccountId>])[0];

    return parseResult({
      accountId, controllerId, stashId, sessionInfo, queuedKeys, stakingLedger, nominators, rewardDestination, stakers, validatorPrefs, nextKeys
    });
  }));
}

function retrieveV1 (api: ApiInterfaceRx, accountId: AccountId): Observable<DerivedStaking> {
  // depending on where we come from, this may be a controller or stash
  return combineLatest([
    api.query.staking.bonded<Option<AccountId>>(accountId),
    api.query.staking.ledger<Option<StakingLedger>>(accountId)
  ]).pipe(switchMap(([bonded, stakingLedger]): Observable<DerivedStaking> =>
    stakingLedger.isSome
      ? retrieveInfoV1(api, accountId, stakingLedger.unwrap().stash, accountId)
      : bonded.isSome
        ? retrieveInfoV1(api, accountId, accountId, bonded.unwrap())
        : of({ accountId: accountId, nextSessionIds: [], sessionIds: [] })
  ));
}

function retrieveV2 (api: ApiInterfaceRx, stashId: AccountId): Observable<DerivedStaking> {
  return api.query.staking
    .bonded<Option<AccountId>>(stashId)
    .pipe(switchMap((controllerId): Observable<DerivedStaking> =>
      controllerId.isSome
        ? retrieveInfoV2(api, stashId, stashId, controllerId.unwrap())
        : of({ accountId: stashId, nextSessionIds: [], sessionIds: [] })
    ));
}

/**
 * @description From a stash, retrieve the controllerId and fill in all the relevant staking details
 */
export function info (api: ApiInterfaceRx): (_accountId: Uint8Array | string) => Observable<DerivedStaking> {
  const query = api.consts.session
    ? retrieveV2
    : retrieveV1;

  return memo((accountId: Uint8Array | string): Observable<DerivedStaking> =>
    query(api, createType('AccountId', accountId)));
}
