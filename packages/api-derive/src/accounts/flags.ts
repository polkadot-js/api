// Copyright 2017-2024 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { AccountId, Address, Balance } from '@polkadot/types/interfaces';
import type{ PalletElectionsPhragmenSeatHolder } from '@polkadot/types/lookup';
import type { Codec } from '@polkadot/types/types';
import type { Option } from '@polkadot/types-codec';
import type { DeriveAccountFlags, DeriveApi } from '../types.js';

import { map, of } from 'rxjs';

import { isFunction } from '@polkadot/util';

import { memo } from '../util/index.js';

type FlagsIntermediate = [
  PalletElectionsPhragmenSeatHolder[] | [AccountId, Balance][] | undefined,
  AccountId[],
  AccountId[],
  AccountId[],
  Option<AccountId> | AccountId | undefined
];

function parseFlags (address: AccountId | Address | string | null | undefined, [electionsMembers, councilMembers, technicalCommitteeMembers, societyMembers, sudoKey]: FlagsIntermediate): DeriveAccountFlags {
  const addrStr = address?.toString();
  const isIncluded = (id: AccountId | Address | string) =>
    id.toString() === addrStr;

  return {
    isCouncil: (electionsMembers?.map((r) => Array.isArray(r) ? r[0] : r.who) || councilMembers || []).some(isIncluded),
    isSociety: (societyMembers || []).some(isIncluded),
    isSudo: sudoKey?.toString() === addrStr,
    isTechCommittee: (technicalCommitteeMembers || []).some(isIncluded)
  };
}

export function _flags (instanceId: string, api: DeriveApi): () => Observable<FlagsIntermediate> {
  return memo(instanceId, (): Observable<FlagsIntermediate> => {
    const results: unknown[] = [undefined, [], [], [], undefined];
    const calls = [
      (api.query.elections || api.query['phragmenElection'] || api.query['electionsPhragmen'])?.members,
      api.query.council?.members,
      api.query.technicalCommittee?.members,
      api.query.society?.members,
      api.query.sudo?.key
    ];
    const filtered = calls.filter((c) => c);

    if (!filtered.length) {
      return of(results as FlagsIntermediate);
    }

    return api.queryMulti(filtered).pipe(
      map((values: Codec[]): FlagsIntermediate => {
        let resultIndex = -1;

        for (let i = 0, count = calls.length; i < count; i++) {
          if (isFunction(calls[i])) {
            results[i] = values[++resultIndex];
          }
        }

        return results as FlagsIntermediate;
      })
    );
  });
}

/**
 * @name info
 * @description Returns account membership flags
 */
export function flags (instanceId: string, api: DeriveApi): (address?: AccountId | Address | string | null) => Observable<DeriveAccountFlags> {
  return memo(instanceId, (address?: AccountId | Address | string | null): Observable<DeriveAccountFlags> =>
    api.derive.accounts._flags().pipe(
      map((r) => parseFlags(address, r))
    )
  );
}
