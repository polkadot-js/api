// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterface$Rx } from '@plugnet/api/types';
import { AccountId, BlockNumber, Exposure, Option, StakingLedger,StructAny, ValidatorPrefs, UnlockChunk } from '@plugnet/types';
import { DerivedStaking, DerivedUnlocking } from '../types';

import BN from 'bn.js';
import { combineLatest, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { bestNumber } from '../chain/bestNumber';
import { drr } from '../util/drr';
import { eraLength } from '../session/eraLength';
import { isUndefined } from '@plugnet/util';

function calculateUnlocking (stakingLedger: StakingLedger | undefined, eraLength: BN, bestNumber: BlockNumber): DerivedUnlocking | undefined {
  if (isUndefined(stakingLedger)) {
    return undefined;
  }

  // select the Unlockchunks that can't be redeemed yet.
  const unlockingChunks = stakingLedger.unlocking.filter((chunk) => remainingBlocks(chunk.era, eraLength, bestNumber).gtn(0));

  if (!unlockingChunks.length) {
    return undefined;
  }

  // group the Unlockchunks that have the same era and sum their values
  const groupedResult = groupByEra(unlockingChunks);
  const results = Object.entries(groupedResult).map(([eraString, value]) => ({
    value,
    remainingBlocks: remainingBlocks(new BlockNumber(eraString), eraLength, bestNumber)
  }));

  return results.length ? results : undefined;
}

function groupByEra (list: UnlockChunk[]) {
  return list.reduce((map, { era, value }) => {
    const key = era.toString();

    if (!map[key]) {
      map[key] = value;
    } else {
      map[key] = map[key].add(value);
    }

    return map;
  }, {} as { [index: string]: BN });
}

function redeemableSum (stakingLedger: StakingLedger | undefined, eraLength: BN, bestNumber: BlockNumber) {
  if (isUndefined(stakingLedger)) {
    return new BN(0);
  }

  return stakingLedger.unlocking
    .filter((chunk) => remainingBlocks(chunk.era, eraLength, bestNumber).eqn(0))
    .reduce((curr, prev) => {
      return curr.add(prev.value);
    }, new BN(0));
}

function remainingBlocks (era: BN, eraLength: BN, bestNumber: BlockNumber) {
  const remaining = eraLength.mul(era).sub(bestNumber);

  return remaining.lten(0) ? new BN(0) : remaining;
}

function withStashController (api: ApiInterface$Rx, accountId: AccountId, controllerId: AccountId): Observable<DerivedStaking> {
  const stashId = accountId;

  return (
  combineLatest([
    eraLength(api)(),
    bestNumber(api)(),
    api.queryMulti([
      [api.query.session.nextKeyFor, controllerId],
      [api.query.staking.ledger, controllerId],
      [api.query.staking.nominators, stashId],
      [api.query.staking.stakers, stashId],
      [api.query.staking.validators, stashId]
    ])
  ]) as any as Observable<[BN, BlockNumber, [Option<AccountId>, Option<StakingLedger>, [Array<AccountId>], Exposure, [ValidatorPrefs]]]>
  ).pipe(
    map(([eraLength, bestNumber,[nextKeyFor, _stakingLedger, [nominators], stakers, [validatorPrefs]]]) => {
      const stakingLedger = _stakingLedger.isSome ? _stakingLedger.unwrap() : undefined;

      return new StructAny({
        accountId,
        controllerId,
        nextSessionId: nextKeyFor.isSome
          ? nextKeyFor.unwrap()
          : undefined,
        nominators,
        redeemable: redeemableSum(stakingLedger, eraLength, bestNumber),
        stakers,
        stakingLedger,
        stashId,
        unlocking: calculateUnlocking(stakingLedger, eraLength, bestNumber),
        validatorPrefs
      }) as DerivedStaking;
    }),
    drr()
  );
}

function withControllerLedger (api: ApiInterface$Rx, accountId: AccountId, stakingLedger: StakingLedger): Observable<DerivedStaking> {
  const controllerId = accountId;
  const stashId = stakingLedger.stash;

  return (
    api.queryMulti([
      [api.query.session.nextKeyFor, controllerId],
      [api.query.staking.nominators, stashId],
      [api.query.staking.stakers, stashId],
      [api.query.staking.validators, stashId]
    ]) as any as Observable<[Option<AccountId>, [Array<AccountId>], Exposure, [ValidatorPrefs]]>
  ).pipe(
    map(([nextKeyFor, [nominators], stakers, [validatorPrefs]]) =>
      new StructAny({
        accountId,
        controllerId,
        nextSessionId: nextKeyFor.isSome
          ? nextKeyFor.unwrap()
          : undefined,
        nominators,
        stakers,
        stakingLedger,
        stashId,
        validatorPrefs
      }) as DerivedStaking),
    drr()
  );
}

/**
 * @description From either a stash or controller id, retrieve the controllerId, stashId, nextSessionId, stakingLedger and preferences
 */
export function info (api: ApiInterface$Rx) {
  return (_accountId: Uint8Array | string): Observable<DerivedStaking> => {
    const accountId = new AccountId(_accountId);

    return (
      api.queryMulti([
        [api.query.staking.bonded, accountId], // try to map to controller
        [api.query.staking.ledger, accountId] // try to map to stash
      ]) as any as Observable<[Option<AccountId>, Option<StakingLedger>]>
    ).pipe(
      switchMap(([controllerId, stakingLedger]) =>
        controllerId.isSome
          // we have a controller, so input was a stash, great
          ? withStashController(api, accountId, controllerId.unwrap())
          : (
            stakingLedger.isSome
              ? withControllerLedger(api, accountId, stakingLedger.unwrap())
              // dangit, this is something else, ok, we are done
              : of(new StructAny({ accountId }) as DerivedStaking)
          )
      ),
      drr()
    );
  };
}
