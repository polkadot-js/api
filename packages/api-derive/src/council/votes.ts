// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Vec } from '@polkadot/types';
import type { AccountId, Balance } from '@polkadot/types/interfaces';
import type { PalletElectionsPhragmenVoter } from '@polkadot/types/lookup';
import type { ITuple } from '@polkadot/types/types';
import type { ApiInterfaceRx, QueryableModuleStorage } from '../../types';
import type { DeriveCouncilVote, DeriveCouncilVotes } from '../types';

import { combineLatest, map, of } from 'rxjs';

import { memo } from '../util';

// Voter is current tuple is 2.x-era
type VoteEntry = PalletElectionsPhragmenVoter | ITuple<[Balance, Vec<AccountId>]>;

function isVoter (value: VoteEntry): value is PalletElectionsPhragmenVoter {
  return !Array.isArray(value);
}

function retrieveStakeOf (elections: QueryableModuleStorage<'rxjs'>): Observable<[AccountId, Balance][]> {
  return elections.stakeOf.entries<Balance, [AccountId]>().pipe(
    map((entries) =>
      entries.map(([{ args: [accountId] }, stake]) => [accountId, stake])
    )
  );
}

function retrieveVoteOf (elections: QueryableModuleStorage<'rxjs'>): Observable<[AccountId, AccountId[]][]> {
  return elections.votesOf.entries<Vec<AccountId>, [AccountId]>().pipe(
    map((entries) =>
      entries.map(([{ args: [accountId] }, votes]) => [accountId, votes])
    )
  );
}

function retrievePrev (api: ApiInterfaceRx, elections: QueryableModuleStorage<'rxjs'>): Observable<DeriveCouncilVotes> {
  return combineLatest([
    retrieveStakeOf(elections),
    retrieveVoteOf(elections)
  ]).pipe(
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

function retrieveCurrent (elections: QueryableModuleStorage<'rxjs'>): Observable<DeriveCouncilVotes> {
  return elections.voting.entries<VoteEntry, [AccountId]>().pipe(
    map((entries): DeriveCouncilVotes =>
      entries.map(([{ args: [accountId] }, value]): [AccountId, DeriveCouncilVote] => [
        accountId,
        isVoter(value)
          ? { stake: value.stake, votes: value.votes }
          : { stake: value[0], votes: value[1] }
      ])
    )
  );
}

export function votes (instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveCouncilVotes> {
  const elections = api.query.phragmenElection || api.query.electionsPhragmen || api.query.elections;

  return memo(instanceId, (): Observable<DeriveCouncilVotes> =>
    elections
      ? elections.stakeOf
        ? retrievePrev(api, elections)
        : retrieveCurrent(elections)
      : of([])
  );
}
