// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, Exposure, Keys, RewardDestination, ValidatorPrefs } from '@polkadot/types/interfaces';
import { ITuple } from '@polkadot/types/types';
import { DerivedStakingStash } from '../types';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Option, Vec } from '@polkadot/types';

import { drr, memo } from '../util';

// NOTE Unused ATM, preparing for V2-only

type Result = [Option<AccountId>, [Vec<AccountId>], RewardDestination, Exposure, ValidatorPrefs, Option<Keys>?];
type ResultV1 = [Option<AccountId>, ITuple<[Vec<AccountId>]>, RewardDestination, Exposure, ValidatorPrefs];
type ResultV2 = [Option<AccountId>, ITuple<[Vec<AccountId>]>, RewardDestination, Exposure, ValidatorPrefs, Option<Keys>];

function parse (stashId: AccountId, [_controllerId, [nominators], rewardDestination, stakers, validatorPrefs, _nextKeys]: Result): DerivedStakingStash {
  return {
    controllerId: _controllerId.unwrapOr(undefined),
    nextKeys: _nextKeys && _nextKeys.unwrapOr(undefined),
    nominators,
    rewardDestination,
    stakers,
    stashId,
    validatorPrefs
  };
}

function retrieveV1 (api: ApiInterfaceRx, stashId: AccountId): Observable<Result> {
  return api.queryMulti<ResultV1>([
    [api.query.staking.bonded, stashId],
    [api.query.staking.nominators, stashId],
    [api.query.staking.payee, stashId],
    [api.query.staking.stakers, stashId],
    [api.query.staking.validators, stashId]
  ]);
}

function retrieveV2 (api: ApiInterfaceRx, stashId: AccountId): Observable<Result> {
  return api.queryMulti<ResultV2>([
    [api.query.staking.bonded, stashId],
    [api.query.staking.nominators, stashId],
    [api.query.staking.payee, stashId],
    [api.query.staking.stakers, stashId],
    [api.query.staking.validators, stashId],
    [api.query.session.nextKeys, [api.consts.session.dedupKeyPrefix, stashId]]
  ]);
}

export const infoStash = memo((api: ApiInterfaceRx): (stashId: AccountId) => Observable<DerivedStakingStash> => {
  const query = api.consts.session
    ? retrieveV2
    : retrieveV1;

  return memo((stashId: AccountId): Observable<DerivedStakingStash> =>
    query(api, stashId).pipe(
      map((result): DerivedStakingStash => parse(stashId, result)),
      drr()
    ));
}, true);
