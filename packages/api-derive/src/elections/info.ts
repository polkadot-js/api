// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { u32, Vec } from '@polkadot/types';
import type { AccountId, Balance, BlockNumber, SeatHolder } from '@polkadot/types/interfaces';
import type { ITuple } from '@polkadot/types/types';
import type { DeriveElectionsInfo } from './types';

import { combineLatest, map, of } from 'rxjs';

import { memo } from '../util';

// SeatHolder is current tuple is 2.x-era Substrate
type Member = SeatHolder | ITuple<[AccountId, Balance]>;

type Candidate = AccountId | ITuple<[AccountId, Balance]>;

function isSeatHolder (value: Member): value is SeatHolder {
  return !Array.isArray(value);
}

function isCandidateTuple (value: Candidate): value is ITuple<[AccountId, Balance]> {
  return Array.isArray(value);
}

function getAccountTuple (value: Member): [AccountId, Balance] {
  return isSeatHolder(value)
    ? [value.who, value.stake]
    : value;
}

function getCandidate (value: Candidate): AccountId {
  return isCandidateTuple(value)
    ? value[0]
    : value;
}

function sortAccounts ([, balanceA]: [AccountId, Balance], [, balanceB]: [AccountId, Balance]): number {
  return balanceB.cmp(balanceA);
}

function queryElections (api: ApiInterfaceRx): Observable<DeriveElectionsInfo> {
  const elections = api.query.phragmenElection
    ? 'phragmenElection'
    : api.query.electionsPhragmen
      ? 'electionsPhragmen'
      : api.query.elections
        ? 'elections'
        : null;
  const [council] = api.registry.getModuleInstances(api.runtimeVersion.specName.toString(), 'council') || ['council'];

  return (
    elections
      ? api.queryMulti<[Vec<AccountId>, Vec<Candidate>, Vec<Member>, Vec<Member>]>([
        api.query[council].members,
        api.query[elections].candidates,
        api.query[elections].members,
        api.query[elections].runnersUp
      ])
      : combineLatest([
        api.query[council].members<Vec<AccountId>>(),
        of<Candidate[]>([]),
        of<Member[]>([]),
        of<Member[]>([])
      ])
  ).pipe(
    map(([councilMembers, candidates, members, runnersUp]): DeriveElectionsInfo => ({
      ...(
        elections
          ? {
            candidacyBond: api.consts[elections].candidacyBond as Balance,
            desiredRunnersUp: api.consts[elections].desiredRunnersUp as u32,
            desiredSeats: api.consts[elections].desiredMembers as u32,
            termDuration: api.consts[elections].termDuration as BlockNumber,
            votingBond: api.consts[elections].votingBond as Balance
          }
          : {}
      ),
      candidateCount: api.registry.createType('u32', candidates.length),
      candidates: candidates.map(getCandidate),
      members: members.length
        ? members.map(getAccountTuple).sort(sortAccounts)
        : councilMembers.map((accountId): [AccountId, Balance] => [accountId, api.registry.createType('Balance')]),
      runnersUp: runnersUp.map(getAccountTuple).sort(sortAccounts)
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
