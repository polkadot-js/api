// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, AccountIndex, Address, Balance, Registration } from '@polkadot/types/interfaces';
import { ITuple } from '@polkadot/types/types';
import { DeriveAccountInfo, DeriveAccountRegistration } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Bytes, Data, Option, u32 } from '@polkadot/types';
import { u8aToString } from '@polkadot/util';

import { memo } from '../util';

function dataAsString (data: Data): string | undefined {
  return data.isRaw
    ? u8aToString(data.asRaw.toU8a(true))
    : data.isNone
      ? undefined
      : data.toHex();
}

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

function extractIdentity (identityOfOpt?: Option<Registration>, superOf?: [AccountId, Data]): DeriveAccountRegistration {
  if (!identityOfOpt?.isSome) {
    return { judgements: [] };
  }

  const { info, judgements } = identityOfOpt.unwrap();
  const topDisplay = dataAsString(info.display);

  return {
    display: superOf
      ? dataAsString(superOf[1]) || topDisplay
      : topDisplay,
    displayParent: superOf
      ? topDisplay
      : undefined,
    email: dataAsString(info.email),
    image: dataAsString(info.image),
    judgements,
    legal: dataAsString(info.legal),
    other: info.additional.reduce((other: Record<string, string>, [_key, _value]): Record<string, string> => {
      const key = dataAsString(_key);
      const value = dataAsString(_value);

      if (key && value) {
        other[key] = value;
      }

      return other;
    }, {}),
    parent: superOf
      ? superOf[0]
      : undefined,
    pgp: info.pgpFingerprint.isSome
      ? info.pgpFingerprint.unwrap().toHex()
      : undefined,
    riot: dataAsString(info.riot),
    twitter: dataAsString(info.twitter),
    web: dataAsString(info.web)
  };
}

function retrieveIdentity (api: ApiInterfaceRx, accountId?: AccountId): Observable<DeriveAccountRegistration> {
  return ((
    accountId && api.query.identity?.identityOf
      ? api.queryMulti([
        [api.query.identity.identityOf, accountId],
        [api.query.identity.superOf, accountId]
      ])
      : of([undefined, undefined])
  ) as Observable<[Option<Registration> | undefined, Option<ITuple<[AccountId, Data]>> | undefined]>).pipe(
    switchMap(([identityOfOpt, superOfOpt]): Observable<[Option<Registration> | undefined, [AccountId, Data] | undefined]> => {
      if (identityOfOpt?.isSome) {
        // this identity has something set
        return of([identityOfOpt, undefined]);
      } else if (superOfOpt?.isSome) {
        const superOf = superOfOpt.unwrap();

        // we have a super
        return combineLatest([
          api.query.identity.identityOf<Option<Registration>>(superOf[0]),
          of(superOf)
        ]);
      }

      // nothing of value returned
      return of([undefined, undefined]);
    }),
    map(([identityOfOpt, superOf]): DeriveAccountRegistration =>
      extractIdentity(identityOfOpt, superOf)
    )
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
