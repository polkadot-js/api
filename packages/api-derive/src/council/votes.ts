// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { AccountId, Balance } from '@polkadot/types/interfaces';
import { ITuple } from '@polkadot/types/types';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveCouncilVote, DeriveCouncilVotes } from '../types';

import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Vec } from '@polkadot/types';

import { memo } from '../util';

function retrieveStakeOf (api: ApiInterfaceRx): Observable<[AccountId, Balance][]> {
  return (api.query.electionsPhragmen || api.query.elections).stakeOf.entries<Balance>().pipe(
    map((entries) =>
      entries.map(([key, stake]) => [key.args[0] as AccountId, stake])
    )
  );
}

function retrieveVoteOf (api: ApiInterfaceRx): Observable<[AccountId, AccountId[]][]> {
  return (api.query.electionsPhragmen || api.query.elections).votesOf.entries<Vec<AccountId>>().pipe(
    map((entries) =>
      entries.map(([key, votes]) => [key.args[0] as AccountId, votes])
    )
  );
}

function retrievePrev (api: ApiInterfaceRx): Observable<DeriveCouncilVotes> {
  return combineLatest([retrieveStakeOf(api), retrieveVoteOf(api)]).pipe(
    map(([stakes, votes]): DeriveCouncilVotes => {
      const result: DeriveCouncilVotes = [];

      votes.forEach(([voter, votes]): void => {
        result.push([voter, { stake: api.registry.createType('Balance'), votes }]);
      });

      stakes.forEach(([staker, stake]): void => {
        const entry = result.find(([voter]) => voter.eq(staker));

        if (entry) {
          entry[1].stake = stake;
        } else {
          result.push([staker, { stake, votes: [] }]);
        }
      });

      return result;
    })
  );
}

function retrieveCurrent (api: ApiInterfaceRx): Observable<DeriveCouncilVotes> {
  const elections = (api.query.electionsPhragmen || api.query.elections);

  return elections.voting.entries<ITuple<[Balance, Vec<AccountId>]>>().pipe(
    map((entries): DeriveCouncilVotes =>
      entries.map(([key, [stake, votes]]): [AccountId, DeriveCouncilVote] =>
        [key.args[0] as AccountId, { stake, votes }]
      )
    )
  );
}

export function votes (instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveCouncilVotes> {
  return memo(instanceId, (): Observable<DeriveCouncilVotes> =>
    (api.query.electionsPhragmen || api.query.elections).stakeOf
      ? retrievePrev(api)
      : retrieveCurrent(api)
  );
}
