// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { SessionKey, Keys } from '@polkadot/types/srml/session/types';

import { ApiInterfaceRx } from '@polkadot/api/types';
import { DerivedStaking, DerivedUnlocking } from '../types';

import BN from 'bn.js';
import { combineLatest, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AccountId, BlockNumber, Exposure, Option, RewardDestination, StakingLedger, Tuple, ValidatorPrefs, Vector, UnlockChunk } from '@polkadot/types';

import { isUndefined } from '@polkadot/util';

import { bestNumber } from '../chain/bestNumber';
import { eraLength } from '../session/eraLength';
import { drr } from '../util/drr';

function groupByEra (list: UnlockChunk[]): Record<string, BN> {
  return list.reduce((map, { era, value }): Record<string, BN> => {
    const key = era.toString();

    if (!map[key]) {
      map[key] = value;
    } else {
      map[key] = map[key].add(value);
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
    remainingBlocks(chunk.era, eraLength, bestNumber).gtn(0)
  );

  if (!unlockingChunks.length) {
    return undefined;
  }

  // group the Unlockchunks that have the same era and sum their values
  const groupedResult = groupByEra(unlockingChunks);
  const results = Object.entries(groupedResult).map(([eraString, value]): { value: BN; remainingBlocks: BN } => ({
    value,
    remainingBlocks: remainingBlocks(new BlockNumber(eraString), eraLength, bestNumber)
  }));

  return results.length ? results : undefined;
}

function redeemableSum (stakingLedger: StakingLedger | undefined, eraLength: BN, bestNumber: BlockNumber): BN {
  if (isUndefined(stakingLedger)) {
    return new BN(0);
  }

  return stakingLedger.unlocking
    .filter((chunk): boolean => remainingBlocks(chunk.era, eraLength, bestNumber).eqn(0))
    .reduce((curr, prev): BN => {
      return curr.add(prev.value);
    }, new BN(0));
}

function unwrapSessionIds (stashId: AccountId, validatorIds: AccountId[], auraIds: AccountId[], nextKeys: Option<SessionKey> | Vector<Tuple>): { nextSessionId?: AccountId; sessionId?: AccountId } {
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

  return (
    combineLatest([
      eraLength(api)(),
      bestNumber(api)(),
      // FIXME while we have 2.x and 1.x support, don't add this to .multi -
      // should be added when only 2.x
      api.query.aura && api.query.aura.authorities
        ? api.query.aura.authorities<Vector<AccountId>>()
        : of([] as AccountId[]),
      api.queryMulti([
        api.query.session.queuedKeys
          ? [api.query.session.queuedKeys]
          : [api.query.session.nextKeyFor, controllerId],
        api.query.session.validators,
        [api.query.staking.ledger, controllerId],
        [api.query.staking.nominators, stashId],
        [api.query.staking.payee, stashId],
        [api.query.staking.stakers, stashId],
        [api.query.staking.validators, stashId]
      ])
    ]) as Observable<[BN, BlockNumber, AccountId[], [Option<SessionKey> | Vector<Tuple>, AccountId[], Option<StakingLedger>, [AccountId[]], RewardDestination, Exposure, [ValidatorPrefs]]]>
  ).pipe(
    map(([eraLength, bestNumber, auraIds, [nextKeys, validatorIds, _stakingLedger, [nominators], rewardDestination, stakers, [validatorPrefs]]]): DerivedStaking => {
      const stakingLedger = _stakingLedger.unwrapOr(null) || undefined;
      const { sessionId, nextSessionId } = unwrapSessionIds(stashId, validatorIds, auraIds, nextKeys);
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
        stashId,
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

  return (
    combineLatest([
      // FIXME while we have 2.x and 1.x support, don't add this to .multi -
      // should be added when only 2.x
      api.query.aura && api.query.aura.authorities
        ? api.query.aura.authorities<Vector<AccountId>>()
        : of([] as AccountId[]),
      api.queryMulti([
        api.query.session.queuedKeys
          ? [api.query.session.queuedKeys]
          : [api.query.session.nextKeyFor, controllerId],
        api.query.session.validators,
        [api.query.staking.nominators, stashId],
        [api.query.staking.payee, stashId],
        [api.query.staking.stakers, stashId],
        [api.query.staking.validators, stashId]
      ])
    ]) as Observable<[AccountId[], [Option<SessionKey> | Vector<Tuple>, AccountId[], [AccountId[]], RewardDestination, Exposure, [ValidatorPrefs]]]>
  ).pipe(
    map(([auraIds, [nextKeys, validatorIds, [nominators], rewardDestination, stakers, [validatorPrefs]]]): DerivedStaking => {
      const { nextSessionId, sessionId } = unwrapSessionIds(stashId, validatorIds, auraIds, nextKeys);
      const result: DerivedStaking = {
        accountId,
        controllerId,
        nextSessionId,
        nominators,
        rewardDestination,
        sessionId,
        stakers,
        stakingLedger,
        stashId,
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
    const accountId = new AccountId(_accountId);

    return (
      api.queryMulti([
        [api.query.staking.bonded, accountId], // try to map to controller
        [api.query.staking.ledger, accountId] // try to map to stash
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
