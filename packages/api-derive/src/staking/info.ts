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

function retrieveInfo (api: ApiInterfaceRx, stashId: AccountId, controllerId: AccountId): Observable<DerivedStaking> {
  return (
    combineLatest([
      eraLength(api)(),
      bestNumber(api)(),
      api.queryMulti([
        api.query.session.queuedKeys
          ? [api.query.session.queuedKeys]
          : [api.query.session.nextKeyFor, controllerId],
        api.query.session.nextKeys
          ? [api.query.session.nextKeys, [
            api.consts.session.dedupKeyPrefix,
            stashId
          ]] as any
          : of(createType('Option<Keys>', null)),
        [api.query.staking.ledger, controllerId],
        [api.query.staking.nominators, stashId],
        [api.query.staking.payee, stashId],
        [api.query.staking.stakers, stashId],
        [api.query.staking.validators, stashId]
      ])
    ]) as Observable<[BN, BlockNumber, [Option<AccountId> | Vec<[AccountId, Keys] & Codec>, Option<Keys>, Option<StakingLedger>, [AccountId[]], RewardDestination, Exposure, [ValidatorPrefs]]]>
  ).pipe(
    map(([eraLength, bestNumber, [queuedKeys, nextKeys, _stakingLedger, [nominators], rewardDestination, stakers, [validatorPrefs]]]): DerivedStaking => {
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
    }),
    drr()
  );
}

/**
 * @description From a stash, retrieve the controllerId and fill in all the relevant staking details
 */
export function info (api: ApiInterfaceRx): (_accountId: Uint8Array | string) => Observable<DerivedStaking> {
  return (_accountId: Uint8Array | string): Observable<DerivedStaking> => {
    const accountId = createType('AccountId', _accountId);

    return api.query.staking
      .bonded<Option<AccountId>>(accountId) // try to map to controller
      .pipe(
        switchMap((controllerId): Observable<DerivedStaking> =>
          controllerId.isSome
            ? retrieveInfo(api, accountId, controllerId.unwrap())
            : of({ accountId })
        ),
        drr()
      );
  };
}
