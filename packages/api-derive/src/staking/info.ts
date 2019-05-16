// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DerivedStaking } from '../types';

import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiInterface$Rx } from '@polkadot/api/types';
import { AccountId, Option, StakingLedger, ValidatorPrefs } from '@polkadot/types';

import { drr } from '../util/drr';

function withStashController (api: ApiInterface$Rx, accountId: AccountId, controllerId: AccountId): Observable<DerivedStaking> {
  const stashId = accountId;

  return (
    api.queryMulti([
      [api.query.staking.ledger, controllerId],
      [api.query.staking.validators, stashId],
      [api.query.session.nextKeyFor, controllerId]
    ]) as any as Observable<[Option<StakingLedger>, [ValidatorPrefs], Option<AccountId>]>
  ).pipe(
    map(([stakingLedger, [validatorPrefs], nextKeyFor]) => ({
      accountId,
      controllerId,
      nextSessionId: nextKeyFor.isSome
        ? nextKeyFor.unwrap()
        : undefined,
      stakingLedger: stakingLedger.isSome
        ? stakingLedger.unwrap()
        : undefined,
      stashId,
      validatorPrefs
    })),
    drr()
  );
}

function withControllerLedger (api: ApiInterface$Rx, accountId: AccountId, stakingLedger: StakingLedger): Observable<DerivedStaking> {
  const controllerId = accountId;
  const stashId = stakingLedger.stash;

  return (
    api.queryMulti([
      [api.query.staking.validators, stashId],
      [api.query.session.nextKeyFor, controllerId]
    ]) as any as Observable<[[ValidatorPrefs], Option<AccountId>]>
  ).pipe(
    map(([[validatorPrefs], nextKeyFor]) => ({
      accountId,
      controllerId,
      nextSessionId: nextKeyFor.isSome
        ? nextKeyFor.unwrap()
        : undefined,
      stakingLedger,
      stashId,
      validatorPrefs
    })),
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
              : of({ accountId })
          )
      ),
      drr()
    );
  };
}
