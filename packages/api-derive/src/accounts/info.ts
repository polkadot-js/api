// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, AccountIndex, Address, Balance, Registration } from '@polkadot/types/interfaces';
import { ITuple } from '@polkadot/types/types';
import { DeriveAccountInfo, DeriveAccountRegistration } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Bytes, Option, u32 } from '@polkadot/types';
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

function retrieveIdentity (api: ApiInterfaceRx, accountId?: AccountId): Observable<DeriveAccountRegistration> {
  return ((
    accountId && api.query.identity?.identityOf
      ? api.query.identity.identityOf<Option<Registration>>(accountId)
      : of(undefined)
  ) as Observable<Option<Registration> | undefined>).pipe(
    map((identityOfOpt): DeriveAccountRegistration => {
      if (!identityOfOpt?.isSome) {
        return { judgements: [] };
      }

      const { info, judgements } = identityOfOpt.unwrap();

      return {
        displayName: info.display.isRaw
          ? u8aToString(info.display.asRaw.toU8a(true))
          : undefined,
        judgements
      };
    })
  );
}

/**
 * @name info
 * @description Returns aux. info with regards to an account, current that includes the accountId, accountIndex and nickname
 */
export function info (api: ApiInterfaceRx): (address?: AccountIndex | AccountId | Address | string | null) => Observable<DeriveAccountInfo> {
  return memo((address?: AccountIndex | AccountId | Address | string | null): Observable<DeriveAccountInfo> =>
    api.derive.accounts.idAndIndex(address).pipe(
      switchMap(([accountId, accountIndex]): Observable<[Partial<DeriveAccountInfo>, DeriveAccountRegistration, string?]> =>
        combineLatest([
          of({ accountId, accountIndex }),
          retrieveIdentity(api, accountId),
          retrieveNick(api, accountId)
        ])
      ),
      map(([{ accountId, accountIndex }, identity, nickname]): DeriveAccountInfo => ({
        accountId, accountIndex, identity, nickname
      }))
    ));
}
