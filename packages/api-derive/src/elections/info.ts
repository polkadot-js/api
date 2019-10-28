// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, BlockNumber, SetIndex, VoteIndex } from '@polkadot/types/interfaces';
import { Codec } from '@polkadot/types/types';

import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { createType, Vec, u32 } from '@polkadot/types';

import { DerivedElectionsInfo } from '../types';
import { drr } from '../util/drr';

type ResultElectionsInner = [u32, u32, Vec<[AccountId, BlockNumber] & Codec>, SetIndex, BlockNumber, VoteIndex, SetIndex];
type ResultElections = [Vec<AccountId>, ResultElectionsInner];

type ResultPhragmenInner = [u32, Vec<AccountId>, BlockNumber];
type ResultPhragmen = [Vec<AccountId>, ResultPhragmenInner];

function deriveElections ([candidates, [candidateCount, desiredSeats, members, nextVoterSet, termDuration, voteCount, voterCount]]: ResultElections): DerivedElectionsInfo {
  return {
    candidates,
    candidateCount,
    desiredSeats,
    nextVoterSet,
    members: members.map(([accountId]): AccountId => accountId),
    termDuration,
    voteCount,
    voterCount
  };
}

function queryElections (api: ApiInterfaceRx): Observable<DerivedElectionsInfo> {
  // NOTE We have an issue where candidates can return `null` for an empty array
  return combineLatest([
    api.query.elections.candidates,
    api.queryMulti<ResultElectionsInner>([
      api.query.elections.candidateCount,
      api.query.elections.desiredSeats,
      api.query.elections.members,
      api.query.elections.nextVoterSet,
      api.query.elections.termDuration,
      api.query.elections.voteCount,
      api.query.elections.voterCount
    ])
  ]).pipe(map(deriveElections), drr());
}

function derivePhragmen ([candidates, [desiredMembers, members, termDuration]]: ResultPhragmen): DerivedElectionsInfo {
  return {
    candidates,
    candidateCount: createType('u32', candidates.length),
    desiredSeats: desiredMembers,
    members,
    termDuration
  };
}

function queryPhragmen (api: ApiInterfaceRx): Observable<DerivedElectionsInfo> {
  // NOTE We have an issue where candidates can return `null` for an empty array
  return combineLatest([
    api.query.electionsPhragmen.candidates,
    api.queryMulti<ResultPhragmenInner>([
      api.query.electionsPhragmen.desiredMembers,
      api.query.electionsPhragmen.members,
      api.query.electionsPhragmen.termDuration
    ])
  ]).pipe(map(derivePhragmen), drr());
}

/**
 * @name info
 * @returns An object containing the combined results of the storage queries for
 * all relevant election module properties.
 * @example
 * <BR>
 *
 * ```javascript
 * api.derive.elections.info(({ members, candidates }) => {
 *   console.log(`There are currently ${members.length} council members and ${candidates.length} prospective council candidates.`);
 * });
 * ```
 */
export function info (api: ApiInterfaceRx): () => Observable<DerivedElectionsInfo> {
  return (): Observable<DerivedElectionsInfo> => {
    return api.query.electionsPhragmen
      ? queryPhragmen(api)
      : queryElections(api);
  };
}
