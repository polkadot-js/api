// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, Balance, BlockNumber } from '@polkadot/types/interfaces';
import { ITuple } from '@polkadot/types/types';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { createType, Vec, u32 } from '@polkadot/types';

import { DerivedElectionsInfo } from '../types';
import { memo } from '../util';

function queryElections (api: ApiInterfaceRx): Observable<DerivedElectionsInfo> {
  const section = api.query.electionsPhragmen ? 'electionsPhragmen' : 'elections';

  return api.queryMulti<[Vec<AccountId>, Vec<ITuple<[AccountId, Balance]>>, Vec<ITuple<[AccountId, Balance]>>]>([
    api.query[section].candidates,
    api.query[section].members,
    api.query[section].runnersUp
  ]).pipe(
    map(([candidates, members, runnersUp]): DerivedElectionsInfo => ({
      candidates,
      candidateCount: createType(api.registry, 'u32', candidates.length),
      candidacyBond: api.consts[section].candidacyBond as Balance,
      desiredSeats: api.consts[section].desiredMembers as u32,
      members: members.sort((a, b): number => b[1].cmp(a[1])),
      runnersUp: runnersUp.sort((a, b): number => b[1].cmp(a[1])),
      termDuration: api.consts[section].termDuration as BlockNumber,
      votingBond: api.consts[section].votingBond as Balance
    }))
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
