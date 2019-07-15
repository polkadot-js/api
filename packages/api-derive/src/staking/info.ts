// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { DerivedStaking, DerivedUnlocking } from '../types';

import BN from 'bn.js';
import { combineLatest, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AccountId, BlockNumber, Exposure, Keys, Option, RewardDestination, SessionKey, SessionKeys, StakingLedger, ValidatorPrefs, UnlockChunk } from '@polkadot/types';

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

function nextSessionId (_nextKeyFor: Option<Keys | SessionKey>): AccountId | undefined {
  const nextKeyFor: SessionKeys | SessionKey | null = _nextKeyFor.unwrapOr(null);

  // For substrate 2.x, nextKeyFor is SessionKeys/Keys, for 1.x it is SessionKey
  return nextKeyFor
    ? (nextKeyFor as SessionKeys).auraKey || nextKeyFor
    : undefined;
}

function withStashController (api: ApiInterfaceRx, accountId: AccountId, controllerId: AccountId): Observable<DerivedStaking> {
  const stashId = accountId;

  return (
    combineLatest([
      eraLength(api)(),
      bestNumber(api)(),
      api.queryMulti([
        [api.query.session.nextKeyFor, controllerId],
        [api.query.staking.ledger, controllerId],
        [api.query.staking.nominators, stashId],
        [api.query.staking.payee, stashId],
        [api.query.staking.stakers, stashId],
        [api.query.staking.validators, stashId]
      ])
    ]) as any as Observable<[BN, BlockNumber, [Option<Keys | SessionKey>, Option<StakingLedger>, [AccountId[]], RewardDestination, Exposure, [ValidatorPrefs]]]>
  ).pipe(
    map(([eraLength, bestNumber, [nextKeyFor, _stakingLedger, [nominators], rewardDestination, stakers, [validatorPrefs]]]): DerivedStaking => {
      const stakingLedger = _stakingLedger.unwrapOr(null) || undefined;

      return {
        accountId,
        controllerId,
        nextSessionId: nextSessionId(nextKeyFor),
        nominators,
        redeemable: redeemableSum(stakingLedger, eraLength, bestNumber),
        rewardDestination,
        stakers,
        stakingLedger,
        stashId,
        unlocking: calculateUnlocking(stakingLedger, eraLength, bestNumber),
        validatorPrefs
      } as unknown as DerivedStaking;
    }),
    drr()
  );
}

function withControllerLedger (api: ApiInterfaceRx, accountId: AccountId, stakingLedger: StakingLedger): Observable<DerivedStaking> {
  const controllerId = accountId;
  const stashId = stakingLedger.stash;

  return (
    api.queryMulti([
      [api.query.session.nextKeyFor, controllerId],
      [api.query.staking.nominators, stashId],
      [api.query.staking.payee, stashId],
      [api.query.staking.stakers, stashId],
      [api.query.staking.validators, stashId]
    ]) as any as Observable<[Option<Keys | SessionKey>, [AccountId[]], RewardDestination, Exposure, [ValidatorPrefs]]>
  ).pipe(
    map(([nextKeyFor, [nominators], rewardDestination, stakers, [validatorPrefs]]): DerivedStaking => ({
      accountId,
      controllerId,
      nextSessionId: nextSessionId(nextKeyFor),
      nominators,
      rewardDestination,
      stakers,
      stakingLedger,
      stashId,
      validatorPrefs
    } as unknown as DerivedStaking)),
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
      ]) as any as Observable<[Option<AccountId>, Option<StakingLedger>]>
    ).pipe(
      switchMap(([controllerId, stakingLedger]): Observable<DerivedStaking> =>
        controllerId.isSome
          // we have a controller, so input was a stash, great
          ? withStashController(api, accountId, controllerId.unwrap())
          : (
            stakingLedger.isSome
              ? withControllerLedger(api, accountId, stakingLedger.unwrap())
              // dangit, this is something else, ok, we are done
              : of({ accountId } as unknown as DerivedStaking)
          )
      ),
      drr()
    );
  };
}
