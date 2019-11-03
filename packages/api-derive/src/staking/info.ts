// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, Balance, BlockNumber, Exposure, Keys, RewardDestination, StakingLedger, UnlockChunk, ValidatorPrefs } from '@polkadot/types/interfaces';
import { Codec } from '@polkadot/types/types';

import { ApiInterfaceRx } from '@polkadot/api/types';
import { DerivedRecentlyOffline, DerivedStaking, DerivedUnlocking } from '../types';

import BN from 'bn.js';
import { combineLatest, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { createType, Option, Vec } from '@polkadot/types';

import { isUndefined } from '@polkadot/util';

import { bestNumber } from '../chain/bestNumber';
import { eraLength } from '../session/eraLength';
import { recentlyOffline } from './recentlyOffline';
import { drr, memo } from '../util';

interface Calls {
  bestNumberCall (): Observable<BlockNumber>;
  eraLengthCall (): Observable<BlockNumber>;
  recentlyOfflineCall (): Observable<DerivedRecentlyOffline>;
}

interface ParseInput {
  accountId: AccountId;
  bestNumber: BlockNumber;
  controllerId: AccountId;
  eraLength: BlockNumber;
  recentlyOffline?: DerivedRecentlyOffline;
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

// calculate the remining blocks in a specific unlock era
function remainingBlocks (era: BN, eraLength: BN, bestNumber: BlockNumber): BlockNumber {
  const remaining = eraLength.mul(era).sub(bestNumber);

  return createType('BlockNumber', remaining.lten(0)
    ? new BN(0)
    : remaining
  );
}

function calculateUnlocking (stakingLedger: StakingLedger | undefined, eraLength: BN, bestNumber: BlockNumber): DerivedUnlocking[] | undefined {
  if (isUndefined(stakingLedger)) {
    return undefined;
  }

  const unlockingChunks = stakingLedger.unlocking.filter(({ era }): boolean =>
    remainingBlocks(era.unwrap(), eraLength, bestNumber).gtn(0)
  );

  if (!unlockingChunks.length) {
    return undefined;
  }

  // group the Unlockchunks that have the same era and sum their values
  const groupedResult = groupByEra(unlockingChunks);
  const results = Object.entries(groupedResult).map(([eraString, value]): DerivedUnlocking => ({
    value: createType('Balance', value),
    remainingBlocks: remainingBlocks(createType('BlockNumber', eraString), eraLength, bestNumber)
  }));

  return results.length ? results : undefined;
}

function redeemableSum (stakingLedger: StakingLedger | undefined, eraLength: BN, bestNumber: BlockNumber): Balance {
  if (isUndefined(stakingLedger)) {
    return createType('Balance');
  }

  return createType('Balance', stakingLedger.unlocking.reduce((total, { era, value }): BN => {
    return remainingBlocks(era.unwrap(), eraLength, bestNumber).eqn(0)
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

function parseResult ({ accountId, controllerId, stashId, eraLength, bestNumber, recentlyOffline = {}, nextKeyFor = createType('Option<AccountId>', null), queuedKeys, stakingLedger, nominators, rewardDestination, stakers, validatorPrefs, nextKeys = createType('Option<Keys>', null) }: ParseInput): DerivedStaking {
  const _stakingLedger = stakingLedger.unwrapOr(undefined);

  return {
    accountId,
    controllerId,
    nominators,
    offline: recentlyOffline[stashId.toString()],
    redeemable: redeemableSum(_stakingLedger, eraLength, bestNumber),
    rewardDestination,
    stakers,
    stakingLedger: _stakingLedger,
    stashId,
    unlocking: calculateUnlocking(_stakingLedger, eraLength, bestNumber),
    validatorPrefs,
    ...unwrapSessionIds(stashId, queuedKeys || nextKeyFor, nextKeys)
  };
}

type MultiResultV1 = [Option<AccountId>, Option<StakingLedger>, [Vec<AccountId>], RewardDestination, Exposure, [ValidatorPrefs] & Codec];

function retrieveInfoV1 (api: ApiInterfaceRx, { bestNumberCall, eraLengthCall, recentlyOfflineCall }: Calls, accountId: AccountId, stashId: AccountId, controllerId: AccountId): Observable<DerivedStaking> {
  return combineLatest([
    bestNumberCall(),
    eraLengthCall(),
    recentlyOfflineCall(),
    api.queryMulti([
      [api.query.session.nextKeyFor, controllerId],
      [api.query.staking.ledger, controllerId],
      [api.query.staking.nominators, stashId],
      [api.query.staking.payee, stashId],
      [api.query.staking.stakers, stashId],
      [api.query.staking.validators, stashId]
    ]) as Observable<MultiResultV1>
  ]).pipe(map(([
    bestNumber, eraLength, recentlyOffline,
    [nextKeyFor, stakingLedger, [nominators], rewardDestination, stakers, [validatorPrefs]]
  ]: [BlockNumber, BlockNumber, DerivedRecentlyOffline, MultiResultV1]): DerivedStaking =>
    parseResult({
      accountId, controllerId, stashId, eraLength, bestNumber, recentlyOffline, nextKeyFor, stakingLedger, nominators, rewardDestination, stakers, validatorPrefs
    })
  ));
}

type MultiResultV2 = [Option<StakingLedger>, [Vec<AccountId>], RewardDestination, Exposure, [ValidatorPrefs], Option<Keys>];

function retrieveInfoV2 (api: ApiInterfaceRx, { bestNumberCall, eraLengthCall }: Calls, accountId: AccountId, stashId: AccountId, controllerId: AccountId): Observable<DerivedStaking> {
  return combineLatest([
    bestNumberCall(),
    eraLengthCall(),
    api.query.session.queuedKeys<Vec<[AccountId, Keys] & Codec>>(),
    api.queryMulti([
      [api.query.staking.ledger, controllerId],
      [api.query.staking.nominators, stashId],
      [api.query.staking.payee, stashId],
      [api.query.staking.stakers, stashId],
      [api.query.staking.validators, stashId],
      [api.query.session.nextKeys, [api.consts.session.dedupKeyPrefix, stashId]]
    ]) as Observable<MultiResultV2>
  ]).pipe(map(([
    bestNumber, eraLength, queuedKeys,
    [stakingLedger, [nominators], rewardDestination, stakers, [validatorPrefs], nextKeys]
  ]: [BlockNumber, BlockNumber, [AccountId, Keys][], MultiResultV2]): DerivedStaking =>
    parseResult({
      accountId, controllerId, stashId, eraLength, bestNumber, queuedKeys, stakingLedger, nominators, rewardDestination, stakers, validatorPrefs, nextKeys
    })
  ));
}

function retrieveV1 (api: ApiInterfaceRx, calls: Calls, controllerId: AccountId): Observable<DerivedStaking> {
  return api.query.staking
    .ledger<Option<StakingLedger>>(controllerId)
    .pipe(
      switchMap((stakingLedger): Observable<DerivedStaking> =>
        stakingLedger.isSome
          ? retrieveInfoV1(api, calls, controllerId, stakingLedger.unwrap().stash, controllerId)
          : of({ accountId: controllerId, nextSessionIds: [], sessionIds: [] })
      )
    );
}

function retrieveV2 (api: ApiInterfaceRx, calls: Calls, stashId: AccountId): Observable<DerivedStaking> {
  return api.query.staking
    .bonded<Option<AccountId>>(stashId)
    .pipe(
      switchMap((controllerId): Observable<DerivedStaking> =>
        controllerId.isSome
          ? retrieveInfoV2(api, calls, stashId, stashId, controllerId.unwrap())
          : of({ accountId: stashId, nextSessionIds: [], sessionIds: [] })
      )
    );
}

/**
 * @description From a stash, retrieve the controllerId and fill in all the relevant staking details
 */
export const info = memo((api: ApiInterfaceRx): (_accountId: Uint8Array | string) => Observable<DerivedStaking> => {
  const calls = {
    eraLengthCall: eraLength(api),
    bestNumberCall: bestNumber(api),
    recentlyOfflineCall: recentlyOffline(api)
  };
  const query = api.consts.session
    ? retrieveV2
    : retrieveV1;

  return memo((accountId: Uint8Array | string): Observable<DerivedStaking> =>
    query(api, calls, createType('AccountId', accountId)).pipe(drr()));
}, true);
