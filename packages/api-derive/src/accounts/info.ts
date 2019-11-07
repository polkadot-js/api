// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, AccountIndex, Address, Balance } from '@polkadot/types/interfaces';
import { Codec } from '@polkadot/types/types';
import { DeriveAccountInfo } from '../types';
import { AccountIdAndIndex } from './idAndIndex';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Bytes, Option, u32 } from '@polkadot/types';
import { u8aToString } from '@polkadot/util';

import { drr } from '../util';

function retrieveNick (api: ApiInterfaceRx): (accountId?: AccountId) => Observable<string | undefined> {
  return (accountId?: AccountId): Observable<string | undefined> =>
    accountId && api.query.nicks
      ? api.query.nicks
        .nameOf<Option<[Bytes, Balance] & Codec>>(accountId)
        .pipe(
          map((nameOf): string | undefined =>
            nameOf?.isSome
              ? u8aToString(nameOf.unwrap()[0]).substr(0, (api.consts.nicks.maxLength as u32).toNumber())
              : undefined
          )
        )
      : of(undefined);
}

/**
 * @name info
 * @description Returns aux. info with regards to an account, current that includes the accountId, accountIndex and nickname
 */
export function info (api: ApiInterfaceRx): (address?: AccountIndex | AccountId | Address | string | null) => Observable<DeriveAccountInfo> {
  const nickCall = retrieveNick(api);

  return (address?: AccountIndex | AccountId | Address | string | null): Observable<DeriveAccountInfo> =>
    (api.derive.accounts.idAndIndex(address) as Observable<AccountIdAndIndex>).pipe(
      switchMap(([accountId, accountIndex]): Observable<[DeriveAccountInfo, string?]> =>
        combineLatest([
          of({ accountId, accountIndex }),
          nickCall(accountId)
        ])
      ),
      map(([{ accountId, accountIndex }, nickname]): DeriveAccountInfo => ({
        accountId, accountIndex, nickname
      })),
      drr()
    );
}
