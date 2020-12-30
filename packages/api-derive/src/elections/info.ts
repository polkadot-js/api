// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { u32, Vec } from '@polkadot/types';
import type { AccountId, Balance, BlockNumber } from '@polkadot/types/interfaces';
import type { ITuple } from '@polkadot/types/types';
import type { Observable } from '@polkadot/x-rxjs';
import type { DeriveElectionsInfo } from './types';

import { map } from '@polkadot/x-rxjs/operators';

import { memo } from '../util';

function sortAccounts ([, balanceA]: ITuple<[AccountId, Balance]>, [, balanceB]: ITuple<[AccountId, Balance]>): number {
  return balanceB.cmp(balanceA);
}

function queryElections (api: ApiInterfaceRx): Observable<DeriveElectionsInfo> {
  const section = api.query.electionsPhragmen ? 'electionsPhragmen' : 'elections';

  return api.queryMulti<[Vec<AccountId>, Vec<AccountId>, Vec<ITuple<[AccountId, Balance]>>, Vec<ITuple<[AccountId, Balance]>>]>([
    api.query.council.members,
    api.query[section].candidates,
    api.query[section].members,
    api.query[section].runnersUp
  ]).pipe(
    map(([councilMembers, candidates, members, runnersUp]): DeriveElectionsInfo => ({
      candidacyBond: api.consts[section].candidacyBond as Balance,
      candidateCount: api.registry.createType('u32', candidates.length),
      candidates,
      desiredRunnersUp: api.consts[section].desiredRunnersUp as u32,
      desiredSeats: api.consts[section].desiredMembers as u32,
      members: members.length
        ? members.sort(sortAccounts)
        : councilMembers.map((accountId): [AccountId, Balance] => [accountId, api.registry.createType('Balance')]),
      runnersUp: runnersUp.sort(sortAccounts),
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
export function info (instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveElectionsInfo> {
  return memo(instanceId, (): Observable<DeriveElectionsInfo> => queryElections(api));
}
