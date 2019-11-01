// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, AccountIndex, Address, Balance } from '@polkadot/types/interfaces';
import { Codec } from '@polkadot/types/types';
import { DeriveAccountInfo } from '../types';

import { Observable, of, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Bytes, Option, u32 } from '@polkadot/types';
import { u8aToString } from '@polkadot/util';

import { drr, memo } from '../util';
import { idAndIndex } from './idAndIndex';

function retrieveNick (api: ApiInterfaceRx): (accountId?: AccountId) => Observable<Option<[Bytes, Balance] & Codec> | undefined> {
  return (accountId?: AccountId): Observable<Option<[Bytes, Balance] & Codec> | undefined> =>
    accountId && api.query.nicks
      ? api.query.nicks.nameOf<Option<[Bytes, Balance] & Codec>>(accountId)
      : of(undefined);
}

/**
 * @name info
 * @description Returns aux. info with regards to an account, current that includes the accountId, accountIndex and nickname
 */
export function info (api: ApiInterfaceRx): (address?: AccountIndex | AccountId | Address | string | null) => Observable<DeriveAccountInfo> {
  const idAndIndexCall = idAndIndex(api);
  const nickCall = memo(retrieveNick(api));

  return (address?: AccountIndex | AccountId | Address | string | null): Observable<DeriveAccountInfo> =>
    idAndIndexCall(address).pipe(
      switchMap(([accountId, accountIndex]): Observable<[DeriveAccountInfo, Option<[Bytes, Balance] & Codec>?]> => {
        return combineLatest([
          of({ accountId, accountIndex }),
          nickCall(accountId)
        ]);
      }),
      map(([{ accountId, accountIndex }, nameOf]): DeriveAccountInfo => ({
        accountId,
        accountIndex,
        nickname: nameOf && nameOf.isSome
          ? u8aToString(nameOf.unwrap()[0]).substr(0, (api.consts.nicks.maxLength as u32).toNumber())
          : undefined
      })),
      drr()
    );
}
