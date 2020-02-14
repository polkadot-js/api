// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, Exposure, Keys, Nominations, RewardDestination, ValidatorPrefs } from '@polkadot/types/interfaces';
import { DerivedStakingStash } from '../types';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Option } from '@polkadot/types';

import { memo } from '../util';

type Result = [Option<AccountId>, Nominations, RewardDestination, Exposure, ValidatorPrefs, Option<Keys>];

function parse (stashId: AccountId, [_controllerId, nominators, rewardDestination, stakers, validatorPrefs, _nextKeys]: Result): DerivedStakingStash {
  return {
    controllerId: _controllerId.unwrapOr(undefined),
    nextKeys: _nextKeys.unwrapOr(undefined),
    nominators: nominators.targets,
    nominateAt: nominators.submittedIn,
    rewardDestination,
    stakers,
    stashId,
    validatorPrefs
  };
}

function query (api: ApiInterfaceRx, stashId: AccountId): Observable<Result> {
  return api.queryMulti<Result>([
    [api.query.staking.bonded, stashId],
    [api.query.staking.nominators, stashId],
    [api.query.staking.payee, stashId],
    [api.query.staking.stakers, stashId],
    [api.query.staking.validators, stashId],
    [api.query.session.nextKeys, [api.consts.session.dedupKeyPrefix, stashId]]
  ]);
}

export function infoStash (api: ApiInterfaceRx): (stashId: AccountId) => Observable<DerivedStakingStash> {
  return memo((stashId: AccountId): Observable<DerivedStakingStash> =>
    query(api, stashId).pipe(
      map((result): DerivedStakingStash => parse(stashId, result))
    ));
}
