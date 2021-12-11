// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Data, Option } from '@polkadot/types';
import type { AccountId } from '@polkadot/types/interfaces';
import type { PalletIdentityIdentityInfo, PalletIdentityRegistration } from '@polkadot/types/lookup';
import type { ITuple } from '@polkadot/types/types';
import type { DeriveAccountRegistration, DeriveHasIdentity } from '../types';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { isHex, u8aToString } from '@polkadot/util';

import { firstMemo, memo } from '../util';

type IdentityInfoAdditional = PalletIdentityIdentityInfo['additional'][0];

const UNDEF_HEX = { toHex: () => undefined };

function dataAsString (data: Data): string | undefined {
  return data.isRaw
    ? u8aToString(data.asRaw.toU8a(true))
    : data.isNone
      ? undefined
      : data.toHex();
}

function extractOther (additional: IdentityInfoAdditional[]): Record<string, string> {
  return additional.reduce((other: Record<string, string>, [_key, _value]): Record<string, string> => {
    const key = dataAsString(_key);
    const value = dataAsString(_value);

    if (key && value) {
      other[key] = value;
    }

    return other;
  }, {});
}

function extractIdentity (identityOfOpt?: Option<PalletIdentityRegistration>, superOf?: [AccountId, Data]): DeriveAccountRegistration {
  if (!identityOfOpt?.isSome) {
    return { judgements: [] };
  }

  const { info, judgements } = identityOfOpt.unwrap();
  const topDisplay = dataAsString(info.display);

  return {
    display: (superOf && dataAsString(superOf[1])) || topDisplay,
    displayParent: superOf && topDisplay,
    email: dataAsString(info.email),
    image: dataAsString(info.image),
    judgements,
    legal: dataAsString(info.legal),
    other: extractOther(info.additional),
    parent: superOf && superOf[0],
    pgp: info.pgpFingerprint.unwrapOr(UNDEF_HEX).toHex(),
    riot: dataAsString(info.riot),
    twitter: dataAsString(info.twitter),
    web: dataAsString(info.web)
  };
}

function getParent (api: ApiInterfaceRx, identityOfOpt: Option<PalletIdentityRegistration> | undefined, superOfOpt: Option<ITuple<[AccountId, Data]>> | undefined): Observable<[Option<PalletIdentityRegistration> | undefined, [AccountId, Data] | undefined]> {
  if (identityOfOpt?.isSome) {
    // this identity has something set
    return of([identityOfOpt, undefined]);
  } else if (superOfOpt?.isSome) {
    const superOf = superOfOpt.unwrap();

    // we have a super
    return combineLatest([
      api.query.identity.identityOf(superOf[0]),
      of(superOf)
    ]);
  }

  // nothing of value returned
  return of([undefined, undefined]);
}

function getBase (api: ApiInterfaceRx, accountId?: AccountId | Uint8Array | string): Observable<[Option<PalletIdentityRegistration> | undefined, Option<ITuple<[AccountId, Data]>> | undefined]> {
  return accountId && api.query.identity?.identityOf
    ? api.queryMulti<[Option<PalletIdentityRegistration>, Option<ITuple<[AccountId, Data]>>]>([
      [api.query.identity.identityOf, accountId],
      [api.query.identity.superOf, accountId]
    ])
    : of([undefined, undefined]);
}

/**
 * @name identity
 * @description Returns identity info for an account
 */
export function identity (instanceId: string, api: ApiInterfaceRx): (accountId?: AccountId | Uint8Array | string) => Observable<DeriveAccountRegistration> {
  return memo(instanceId, (accountId?: AccountId | Uint8Array | string): Observable<DeriveAccountRegistration> =>
    getBase(api, accountId).pipe(
      switchMap(([identityOfOpt, superOfOpt]) => getParent(api, identityOfOpt, superOfOpt)),
      map(([identityOfOpt, superOf]) => extractIdentity(identityOfOpt, superOf))
    )
  );
}

export const hasIdentity = firstMemo(
  (api: ApiInterfaceRx) =>
    (accountId: AccountId | Uint8Array | string) =>
      api.derive.accounts.hasIdentityMulti([accountId])
);

export function hasIdentityMulti (instanceId: string, api: ApiInterfaceRx): (accountIds: (AccountId | Uint8Array | string)[]) => Observable<DeriveHasIdentity[]> {
  return memo(instanceId, (accountIds: (AccountId | Uint8Array | string)[]): Observable<DeriveHasIdentity[]> =>
    api.query.identity?.identityOf
      ? combineLatest([
        api.query.identity.identityOf.multi(accountIds),
        api.query.identity.superOf.multi(accountIds)
      ]).pipe(
        map(([identities, supers]) =>
          identities.map((identityOfOpt, index): DeriveHasIdentity => {
            const superOfOpt = supers[index];
            const parentId = superOfOpt && superOfOpt.isSome
              ? superOfOpt.unwrap()[0].toString()
              : undefined;
            let display: string | undefined;

            if (identityOfOpt && identityOfOpt.isSome) {
              const value = dataAsString(identityOfOpt.unwrap().info.display);

              if (value && !isHex(value)) {
                display = value;
              }
            }

            return { display, hasIdentity: !!(display || parentId), parentId };
          })
        )
      )
      : of(accountIds.map(() => ({ hasIdentity: false })))
  );
}
