// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DerivedStaking } from '../types';

import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiInterface$Rx } from '@plugnet/api/types';
import { AccountId, Exposure, Option, StakingLedger, StructAny, ValidatorPrefs } from '@plugnet/types';

import { drr } from '../util/drr';

function withStashController (api: ApiInterface$Rx, accountId: AccountId, controllerId: AccountId): Observable<DerivedStaking> {
  const stashId = accountId;

  return (
    api.queryMulti([
      [api.query.session.nextKeyFor, controllerId],
      [api.query.staking.ledger, controllerId],
      [api.query.staking.nominators, stashId],
      [api.query.staking.stakers, stashId],
      [api.query.staking.validators, stashId]
    ]) as any as Observable<[Option<AccountId>, Option<StakingLedger>, [Array<AccountId>], Exposure, [ValidatorPrefs]]>
  ).pipe(
    map(([nextKeyFor, stakingLedger, [nominators], stakers, [validatorPrefs]]) =>
      new StructAny({
        accountId,
        controllerId,
        nextSessionId: nextKeyFor.isSome
          ? nextKeyFor.unwrap()
          : undefined,
        nominators,
        stakers,
        stakingLedger: stakingLedger.isSome
          ? stakingLedger.unwrap()
          : undefined,
        stashId,
        validatorPrefs
      }) as DerivedStaking),
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
