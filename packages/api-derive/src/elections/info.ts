// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, Balance, BlockNumber } from '@polkadot/types/interfaces';
import { ITuple } from '@polkadot/types/types';

import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { createType, Vec, u32 } from '@polkadot/types';

import { DerivedElectionsInfo } from '../types';
import { memo } from '../util';

function deriveElections (api: ApiInterfaceRx, candidates: AccountId[], members: [AccountId, Balance][], runnersUp: [AccountId, Balance][], candidacyBond: Balance, desiredSeats: u32, termDuration: BlockNumber, votingBond: Balance): DerivedElectionsInfo {
  return {
    candidates,
    candidateCount: createType(api.registry, 'u32', candidates.length),
    candidacyBond,
    desiredSeats,
    members: members.sort((a, b): number => b[1].cmp(a[1])),
    runnersUp: runnersUp.sort((a, b): number => b[1].cmp(a[1])),
    termDuration,
    votingBond
  };
}

function queryElections (api: ApiInterfaceRx): Observable<DerivedElectionsInfo> {
  const section = api.query.electionsPhragmen ? 'electionsPhragmen' : 'elections';

  // NOTE We have an issue where candidates can return `null` for an empty array, hence
  // we are not using multi queries here, so empty array is empty (instead of space-filled)
  return combineLatest([
    api.query[section].candidates<Vec<AccountId>>(),
    api.query[section].members<Vec<ITuple<[AccountId, Balance]>>>(),
    api.query[section].runnersUp<Vec<ITuple<[AccountId, Balance]>>>()
  ]).pipe(
    map(([candidates, members, runnersUp]): DerivedElectionsInfo => deriveElections(
      api,
      candidates,
      members,
      runnersUp,
      api.consts[section].candidacyBond as Balance,
      api.consts[section].desiredMembers as u32,
      api.consts[section].termDuration as BlockNumber,
      api.consts[section].votingBond as Balance
    ))
  );
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
  return memo((): Observable<DerivedElectionsInfo> => queryElections(api));
}
