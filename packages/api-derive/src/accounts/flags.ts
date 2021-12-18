// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { AccountId, Address, Balance } from '@polkadot/types/interfaces';
import type { DeriveAccountFlags, DeriveApi } from '../types';

import { combineLatest, map, of } from 'rxjs';

import { memo } from '../util';

type FlagsIntermediate = [
  [AccountId, Balance][] | undefined,
  AccountId[],
  AccountId[],
  AccountId[],
  AccountId | undefined
];

function parseFlags (address: AccountId | Address | string | null | undefined, [electionsMembers, councilMembers, technicalCommitteeMembers, societyMembers, sudoKey]: FlagsIntermediate): DeriveAccountFlags {
  const isIncluded = (id: AccountId | Address | string) =>
    address
      ? id.toString() === address.toString()
      : false;

  return {
    isCouncil: (electionsMembers?.map(([id]) => id) || councilMembers || []).some(isIncluded),
    isSociety: (societyMembers || []).some(isIncluded),
    isSudo: sudoKey?.toString() === address?.toString(),
    isTechCommittee: (technicalCommitteeMembers || []).some(isIncluded)
  };
}

/**
 * @name info
 * @description Returns account membership flags
 */
export function flags (instanceId: string, api: DeriveApi): (address?: AccountId | Address | string | null) => Observable<DeriveAccountFlags> {
  return memo(instanceId, (address?: AccountId | Address | string | null): Observable<DeriveAccountFlags> => {
    const elections = api.query.elections || api.query.phragmenElection || api.query.electionsPhragmen;

    return combineLatest([
      address && elections?.members
        ? elections.members<[AccountId, Balance][]>()
        : of(undefined),
      address && api.query.council?.members
        ? api.query.council.members()
        : of([]),
      address && api.query.technicalCommittee?.members
        ? api.query.technicalCommittee.members()
        : of([]),
      address && api.query.society?.members
        ? api.query.society.members()
        : of([]),
      address && api.query.sudo?.key
        ? api.query.sudo.key()
        : of(undefined)
    ]).pipe(
      map((r) => parseFlags(address, r))
    );
  });
}
