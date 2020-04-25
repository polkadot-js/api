// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, Address, Balance } from '@polkadot/types/interfaces';
import { ITuple } from '@polkadot/types/types';
import { DeriveAccountFlags } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Vec } from '@polkadot/types';

import { memo } from '../util';

type FlagsIntermediate = [
  Vec<ITuple<[AccountId, Balance]>> | undefined,
  AccountId[],
  AccountId[],
  AccountId[],
  AccountId | undefined
];

function isIncludedFn (accountId: AccountId | Address | string): (_: AccountId | Address |string) => boolean {
  return function (id: AccountId | Address | string): boolean {
    return id.toString() === accountId.toString();
  };
}

/**
 * @name info
 * @description Returns account membership flags
 */
export function flags (api: ApiInterfaceRx): (address?: AccountId | Address | string | null) => Observable<DeriveAccountFlags> {
  return memo((address?: AccountId | Address | string | null): Observable<DeriveAccountFlags> => {
    const councilSection = api.query.electionsPhragmen ? 'electionsPhragmen' : 'elections';

    return (
      combineLatest([
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
      ]) as Observable<FlagsIntermediate>
    ).pipe(
      map(([electionsMembers, councilMembers, technicalCommitteeMembers, societyMembers, sudoKey]): DeriveAccountFlags => {
        const isIncluded = address ? isIncludedFn(address) : (): boolean => false;

        return {
          isCouncil: (electionsMembers?.map(([id]: ITuple<[AccountId, Balance]>) => id) || councilMembers || []).some(isIncluded),
          isSociety: (societyMembers || []).some(isIncluded),
          isSudo: sudoKey?.toString() === address?.toString(),
          isTechCommittee: (technicalCommitteeMembers || []).some(isIncluded)
        };
      })
    );
  });
}
