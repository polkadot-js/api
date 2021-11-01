// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Bytes, Option, u32 } from '@polkadot/types';
import type { AccountId, AccountIndex, Address, Balance } from '@polkadot/types/interfaces';
import type { ITuple } from '@polkadot/types/types';
import type { DeriveAccountInfo, DeriveAccountRegistration } from '../types';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { u8aToString } from '@polkadot/util';

import { memo } from '../util';

function retrieveNick (api: ApiInterfaceRx, accountId?: AccountId): Observable<string | undefined> {
  return ((
    accountId && api.query.nicks?.nameOf
      ? api.query.nicks.nameOf<Option<ITuple<[Bytes, Balance]>>>(accountId)
      : of(undefined)
  ) as Observable<Option<ITuple<[Bytes, Balance]>> | undefined>).pipe(
    map((nameOf): string | undefined =>
      nameOf?.isSome
        ? u8aToString(nameOf.unwrap()[0]).substr(0, (api.consts.nicks.maxLength as u32).toNumber())
        : undefined
    )
  );
}

/**
 * @name info
 * @description Returns aux. info with regards to an account, current that includes the accountId, accountIndex and nickname
 */
export function info (instanceId: string, api: ApiInterfaceRx): (address?: AccountIndex | AccountId | Address | Uint8Array | string | null) => Observable<DeriveAccountInfo> {
  return memo(instanceId, (address?: AccountIndex | AccountId | Address | Uint8Array | string | null): Observable<DeriveAccountInfo> =>
    api.derive.accounts.idAndIndex(address).pipe(
      switchMap(([accountId, accountIndex]): Observable<[Partial<DeriveAccountInfo>, DeriveAccountRegistration, string?]> =>
        combineLatest([
          of({ accountId, accountIndex }),
          api.derive.accounts.identity(accountId),
          retrieveNick(api, accountId)
        ])
      ),
      map(([{ accountId, accountIndex }, identity, nickname]): DeriveAccountInfo => ({
        accountId, accountIndex, identity, nickname
      }))
    ));
}
