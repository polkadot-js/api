// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Vec } from '@polkadot/types';
import type { AccountId, Address, Balance } from '@polkadot/types/interfaces';
import type { ITuple } from '@polkadot/types/types';
import type { Observable } from '@polkadot/x-rxjs';
import type { DeriveAccountFlags } from '../types';

import { combineLatest, of } from '@polkadot/x-rxjs';
import { map } from '@polkadot/x-rxjs/operators';

import { memo } from '../util';

type FlagsIntermediate = [
  Vec<ITuple<[AccountId, Balance]>> | undefined,
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
    isCouncil: (electionsMembers?.map(([id]: ITuple<[AccountId, Balance]>) => id) || councilMembers || []).some(isIncluded),
    isSociety: (societyMembers || []).some(isIncluded),
    isSudo: sudoKey?.toString() === address?.toString(),
    isTechCommittee: (technicalCommitteeMembers || []).some(isIncluded)
  };
}

/**
 * @name info
 * @description Returns account membership flags
 */
export function flags (instanceId: string, api: ApiInterfaceRx): (address?: AccountId | Address | string | null) => Observable<DeriveAccountFlags> {
  return memo(instanceId, (address?: AccountId | Address | string | null): Observable<DeriveAccountFlags> => {
    const councilSection = api.query.electionsPhragmen ? 'electionsPhragmen' : 'elections';

    return combineLatest<FlagsIntermediate>([
      address && api.query[councilSection]?.members
        ? api.query[councilSection].members()
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
      map((result) => parseFlags(address, result))
    );
  });
}
