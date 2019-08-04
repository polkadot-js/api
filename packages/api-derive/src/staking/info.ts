// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, BlockNumber } from '@polkadot/types/interfaces/runtime';
import { Keys } from '@polkadot/types/interfaces/session';
import { Exposure, RewardDestination, StakingLedger, UnlockChunk, ValidatorPrefs } from '@polkadot/types/interfaces/staking';

import { ApiInterfaceRx } from '@polkadot/api/types';
import { DerivedStaking, DerivedUnlocking } from '../types';

import BN from 'bn.js';
import { combineLatest, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { createType, Option, Tuple, Vec } from '@polkadot/types';

import { isUndefined } from '@polkadot/util';

import { bestNumber } from '../chain/bestNumber';
import { eraLength } from '../session/eraLength';
import { recentlyOffline } from './recentlyOffline';
import { drr } from '../util/drr';
import { addOnlineStatusToStakingAccount } from '../util/addOnlineStatusToStakingAccount';

function groupByEra (list: UnlockChunk[]): Record<string, BN> {
  return list.reduce((map, { era, value }): Record<string, BN> => {
    const key = era.toString();

    if (!map[key]) {
      map[key] = value.unwrap();
    } else {
      map[key] = map[key].add(value.unwrap());
    }

    return map;
  }, {} as unknown as Record<string, BN>);
}

function remainingBlocks (era: BN, eraLength: BN, bestNumber: BlockNumber): BN {
  const remaining = eraLength.mul(era).sub(bestNumber);

  return remaining.lten(0) ? new BN(0) : remaining;
}

function calculateUnlocking (stakingLedger: StakingLedger | undefined, eraLength: BN, bestNumber: BlockNumber): DerivedUnlocking | undefined {
  if (isUndefined(stakingLedger)) {
    return undefined;
  }

  // select the Unlockchunks that can't be redeemed yet.
  const unlockingChunks = stakingLedger.unlocking.filter((chunk): boolean =>
    remainingBlocks(chunk.era.unwrap(), eraLength, bestNumber).gtn(0)
  );

  if (!unlockingChunks.length) {
    return undefined;
  }

  // group the Unlockchunks that have the same era and sum their values
  const groupedResult = groupByEra(unlockingChunks);
  const results = Object.entries(groupedResult).map(([eraString, value]): { value: BN; remainingBlocks: BN } => ({
    value,
    remainingBlocks: remainingBlocks(createType('BlockNumber', eraString), eraLength, bestNumber)
  }));

  return results.length ? results : undefined;
}

function redeemableSum (stakingLedger: StakingLedger | undefined, eraLength: BN, bestNumber: BlockNumber): BN {
  if (isUndefined(stakingLedger)) {
    return new BN(0);
  }

  return stakingLedger.unlocking
    .filter((chunk): boolean => remainingBlocks(chunk.era.unwrap(), eraLength, bestNumber).eqn(0))
    .reduce((curr, prev): BN => curr.add(prev.value.unwrap()), new BN(0));
}

function unwrapSessionIds (stashId: AccountId, validatorIds: AccountId[], auraIds: AccountId[], nextKeys: Option<AccountId> | Vec<Tuple>): { nextSessionId?: AccountId; sessionId?: AccountId } {
  // for 2.x we have a Vec<(ValidatorId,Keys)> of the keys
  if (Array.isArray(nextKeys)) {
    const validatorIdx = validatorIds.indexOf(stashId);
    const sessionId = auraIds[validatorIdx];
    const keys = nextKeys.find(([currentId]): boolean => currentId.eq(stashId)) as [AccountId, Keys] | undefined;
    const nextSessionId = keys
      ? keys[1].ed25519
      : sessionId;

    return {
      nextSessionId,
      sessionId
    };
  }

  // substrate 1.x
  const nextSessionId = nextKeys.isSome
    ? nextKeys.unwrap()
    : undefined;

  return {
    nextSessionId,
    sessionId: nextSessionId
  };
}

function withStashController (api: ApiInterfaceRx, accountId: AccountId, controllerId: AccountId): Observable<DerivedStaking> {
  const stashId = accountId;

  return combineLatest([
    // FIXME while we have 2.x and 1.x support, don't add this to .multi -
    // should be added when only 2.x
    api.query.aura && api.query.aura.authorities
      ? api.query.aura.authorities<Vec<AccountId>>()
      : of([] as AccountId[]),
    eraLength(api)(),
    bestNumber(api)(),
    recentlyOffline(api)(),
    api.queryMulti([
      api.query.session.queuedKeys
        ? [api.query.session.queuedKeys]
        : [api.query.session.nextKeyFor, controllerId],
      api.query.session.validators,
      [api.query.staking.nominators, stashId],
      [api.query.staking.ledger, controllerId.toString()],
      [api.query.staking.payee, stashId.toString()],
      [api.query.staking.stakers, stashId.toString()],
      [api.query.staking.validators, stashId.toString()]
    ]) as Observable<[Option<AccountId> | Vec<Tuple>, AccountId[], [AccountId[]], Option<StakingLedger>, RewardDestination, Exposure, [ValidatorPrefs]]>
  ])
    .pipe(
      map(([auraIds, eraLength, bestNumber, recentlyOffline, [nextKeys, validatorIds, [nominators], _stakingLedger, rewardDestination, stakers, [validatorPrefs]]]): DerivedStaking => {
        const { sessionId, nextSessionId } = unwrapSessionIds(stashId, validatorIds, auraIds, nextKeys);
        const stakingLedger = _stakingLedger.unwrapOr(null) || undefined;

        const result: DerivedStaking = {
          accountId,
          controllerId,
          nextSessionId,
          nominators,
          redeemable: redeemableSum(stakingLedger, eraLength, bestNumber),
          rewardDestination,
          sessionId,
          stakers,
          stakingLedger,
          stash: addOnlineStatusToStakingAccount(recentlyOffline)(stashId),
          unlocking: calculateUnlocking(stakingLedger, eraLength, bestNumber),
          validatorPrefs
        };

        return result;
      }),
      drr()
    );
}

function withControllerLedger (api: ApiInterfaceRx, accountId: AccountId, stakingLedger: StakingLedger): Observable<DerivedStaking> {
  const controllerId = accountId;
  const stashId = stakingLedger.stash;

  return combineLatest([
    // FIXME while we have 2.x and 1.x support, don't add this to .multi -
    // should be added when only 2.x
    api.query.aura && api.query.aura.authorities
      ? api.query.aura.authorities<Vec<AccountId>>()
      : of([] as AccountId[]),
    recentlyOffline(api)(),
    api.queryMulti([
      api.query.session.queuedKeys
        ? [api.query.session.queuedKeys]
        : [api.query.session.nextKeyFor, controllerId.toString()],
      api.query.session.validators,
      [api.query.staking.nominators, stashId.toString()],
      [api.query.staking.payee, stashId.toString()],
      [api.query.staking.stakers, stashId.toString()],
      [api.query.staking.validators, stashId.toString()]
    ]) as Observable<[Option<AccountId> | Vec<Tuple>, AccountId[], [AccountId[]], RewardDestination, Exposure, [ValidatorPrefs]]>
  ])
    .pipe(
      map(([auraIds, recentlyOffline, [nextKeys, validatorIds, [nominators], rewardDestination, stakers, [validatorPrefs]]]): DerivedStaking => {
        const { sessionId, nextSessionId } = unwrapSessionIds(stashId, validatorIds, auraIds, nextKeys);

        const result: DerivedStaking = {
          accountId,
          controllerId,
          nextSessionId,
          nominators,
          rewardDestination,
          sessionId,
          stakers,
          stakingLedger,
          stash: addOnlineStatusToStakingAccount(recentlyOffline)(stashId),
          validatorPrefs
        };

        return result;
      }),
      drr()
    );
}

/**
 * @description From either a stash or controller id, retrieve the controllerId, stashId, nextSessionId, stakingLedger and preferences
 */
export function info (api: ApiInterfaceRx): (_accountId: Uint8Array | string) => Observable<DerivedStaking> {
  return (_accountId: Uint8Array | string): Observable<DerivedStaking> => {
    const accountId = createType('AccountId', _accountId);

    return (
      api.queryMulti([
        [api.query.staking.bonded, accountId.toString()], // try to map to controller
        [api.query.staking.ledger, accountId.toString()] // try to map to stash,
      ]) as Observable<[Option<AccountId>, Option<StakingLedger>]>
    ).pipe(
      switchMap(([controllerId, stakingLedger]): Observable<DerivedStaking> =>
        controllerId.isSome
          // we have a controller, so input was a stash, great
          ? withStashController(api, accountId, controllerId.unwrap())
          : stakingLedger.isSome
            ? withControllerLedger(api, accountId, stakingLedger.unwrap())
            // dangit, this is something else, ok, we are done
            : of({ accountId })
      ),
      drr()
    );
  };
}
