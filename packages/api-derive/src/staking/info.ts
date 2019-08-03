// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, BlockNumber } from '@polkadot/types/interfaces/runtime';
import { Keys } from '@polkadot/types/interfaces/session';
import { Exposure, RewardDestination, StakingLedger, UnlockChunk, ValidatorPrefs } from '@polkadot/types/interfaces/staking';
import { Codec } from '@polkadot/types/types';

import { ApiInterfaceRx } from '@polkadot/api/types';
import { DerivedStaking, DerivedUnlocking } from '../types';

import BN from 'bn.js';
import { combineLatest, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { createType, Option, Vec } from '@polkadot/types';

import { isUndefined } from '@polkadot/util';

import { bestNumber } from '../chain/bestNumber';
import { eraLength } from '../session/eraLength';
import { drr } from '../util/drr';

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

function unwrapSessionIds (stashId: AccountId, queuedKeys: Option<AccountId> | Vec<[AccountId, Keys] & Codec>, nextKeys: Option<Keys>): { nextSessionId?: AccountId; sessionId?: AccountId } {
  // for 2.x we have a Vec<(ValidatorId,Keys)> of the keys
  if (Array.isArray(queuedKeys)) {
    const [, { ed25519: sessionId }] = queuedKeys.find(([currentId]): boolean => currentId.eq(stashId)) || [undefined, { ed25519: undefined }];

    return {
      nextSessionId: nextKeys.isSome
        ? nextKeys.unwrap().ed25519
        : undefined,
      sessionId
    };
  }

  // substrate 1.x
  const nextSessionId = queuedKeys.isSome
    ? queuedKeys.unwrap()
    : undefined;

  return {
    nextSessionId,
    sessionId: nextSessionId
  };
}

function retrieveMulti (api: ApiInterfaceRx, stashId: AccountId, controllerId: AccountId): Observable<[Option<AccountId> | Vec<[AccountId, Keys] & Codec>, Option<StakingLedger>, [AccountId[]], RewardDestination, Exposure, [ValidatorPrefs]]> {
  return api.queryMulti([
    api.query.session.queuedKeys
      ? [api.query.session.queuedKeys]
      : [api.query.session.nextKeyFor, controllerId],
    [api.query.staking.ledger, controllerId],
    [api.query.staking.nominators, stashId],
    [api.query.staking.payee, stashId],
    [api.query.staking.stakers, stashId],
    [api.query.staking.validators, stashId]
  ]) as any;
}

function retrieveInfo (api: ApiInterfaceRx, stashId: AccountId, controllerId: AccountId): Observable<DerivedStaking> {
  return (
    combineLatest([
      eraLength(api)(),
      bestNumber(api)(),
      // TODO We really want this as part of the multi, however can only do that
      // once we drop substrate 1.x support (nulti requires values for all)
      api.query.session.nextKeys
        ? api.query.session.nextKeys<Option<Keys>>(api.consts.session.dedupKeyPrefix, stashId)
        : of(createType('Option<Keys>', null)),
      retrieveMulti(api, stashId, controllerId)
    ])
  ).pipe(
    map(([eraLength, bestNumber, nextKeys, [queuedKeys, _stakingLedger, [nominators], rewardDestination, stakers, [validatorPrefs]]]): DerivedStaking => {
      const stakingLedger = _stakingLedger.unwrapOr(undefined);

      return {
        accountId: stashId,
        controllerId,
        nominators,
        redeemable: redeemableSum(stakingLedger, eraLength, bestNumber),
        rewardDestination,
        stakers,
        stakingLedger,
        stashId,
        unlocking: calculateUnlocking(stakingLedger, eraLength, bestNumber),
        validatorPrefs,
        ...unwrapSessionIds(stashId, queuedKeys, nextKeys)
      };
    })
  );
}

/**
 * @description From a stash, retrieve the controllerId and fill in all the relevant staking details
 */
export function info (api: ApiInterfaceRx): (_accountId: Uint8Array | string) => Observable<DerivedStaking> {
  return (_accountId: Uint8Array | string): Observable<DerivedStaking> => {
    const accountId = createType('AccountId', _accountId);

    return (
      // NOTE For 2.x-only support, only the first path is required, therefore we
      // can replace this with `.bonded<Option<AccountId>>(accountId)` - in 2.x
      // the session.validators return the stashes (as expected)
      api.queryMulti([
        [api.query.staking.bonded, accountId], // try to map to controller
        [api.query.staking.ledger, accountId] // try to map to stash (1.x only)
      ]) as Observable<[Option<AccountId>, Option<StakingLedger>]>
    ).pipe(
      switchMap(([controllerId, stakingLedger]): Observable<DerivedStaking> =>
        controllerId.isSome
          ? retrieveInfo(api, accountId, controllerId.unwrap())
          : stakingLedger.isSome
            ? retrieveInfo(api, stakingLedger.unwrap().stash, accountId)
            : of({ accountId })
      ),
      drr()
    );
  };
}
