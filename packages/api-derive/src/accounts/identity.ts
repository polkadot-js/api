// Copyright 2017-2024 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Bytes, Data, Struct } from '@polkadot/types';
import type { AccountId, H160 } from '@polkadot/types/interfaces';
import type { PalletIdentityLegacyIdentityInfo, PalletIdentityRegistration } from '@polkadot/types/lookup';
import type { Option } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { DeriveAccountRegistration, DeriveApi, DeriveHasIdentity } from '../types.js';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { isHex, u8aToString } from '@polkadot/util';

import { firstMemo, memo } from '../util/index.js';

type IdentityInfoAdditional = PalletIdentityLegacyIdentityInfo['additional'][0];

interface PeopleIdentityInfo extends Struct {
  display: Data;
  legal: Data;
  web: Data;
  matrix: Data;
  email: Data;
  pgpFingerprint: Option<H160>;
  image: Data;
  twitter: Data;
  github: Data;
  discord: Data;
}

const UNDEF_HEX = { toHex: () => undefined };

function dataAsString (data: Data): string | undefined {
  if (!data) {
    return data;
  }

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

// handle compatibility between generations of structures
function identityCompat (identityOfOpt: Option<ITuple<[PalletIdentityRegistration, Option<Bytes>]>> | Option<PalletIdentityRegistration>): PalletIdentityRegistration {
  const identity = identityOfOpt.unwrap();

  return Array.isArray(identity)
    ? identity[0]
    : identity;
}

function extractIdentity (identityOfOpt?: Option<ITuple<[PalletIdentityRegistration, Option<Bytes>]>> | Option<PalletIdentityRegistration>, superOf?: [AccountId, Data]): DeriveAccountRegistration {
  if (!identityOfOpt?.isSome) {
    return { judgements: [] };
  }

  const { info, judgements } = identityCompat(identityOfOpt);
  const topDisplay = dataAsString(info.display);

  return {
    discord: dataAsString((info as unknown as PeopleIdentityInfo).discord),
    display: (superOf && dataAsString(superOf[1])) || topDisplay,
    displayParent: superOf && topDisplay,
    email: dataAsString(info.email),
    github: dataAsString((info as unknown as PeopleIdentityInfo).github),
    image: dataAsString(info.image),
    judgements,
    legal: dataAsString(info.legal),
    matrix: dataAsString((info as unknown as PeopleIdentityInfo).matrix),
    other: info.additional ? extractOther(info.additional) : {},
    parent: superOf?.[0],
    pgp: info.pgpFingerprint.unwrapOr(UNDEF_HEX).toHex(),
    riot: dataAsString(info.riot),
    twitter: dataAsString(info.twitter),
    web: dataAsString(info.web)
  };
}

function getParent (api: DeriveApi, identityOfOpt: Option<ITuple<[PalletIdentityRegistration, Option<Bytes>]>> | Option<PalletIdentityRegistration> | undefined, superOfOpt: Option<ITuple<[AccountId, Data]>> | undefined): Observable<[Option<ITuple<[PalletIdentityRegistration, Option<Bytes>]>> | Option<PalletIdentityRegistration> | undefined, [AccountId, Data] | undefined]> {
  if (identityOfOpt?.isSome) {
    // this identity has something set
    return of([identityOfOpt, undefined]);
  } else if (superOfOpt?.isSome) {
    const superOf = superOfOpt.unwrap();

    return combineLatest([
      api.derive.accounts._identity(superOf[0]).pipe(
        map(([info]) => info)
      ),
      of(superOf)
    ]);
  }

  // nothing of value returned
  return of([undefined, undefined]);
}

export function _identity (instanceId: string, api: DeriveApi): (accountId?: AccountId | Uint8Array | string) => Observable<[Option<ITuple<[PalletIdentityRegistration, Option<Bytes>]>> | Option<PalletIdentityRegistration> | undefined, Option<ITuple<[AccountId, Data]>> | undefined]> {
  return memo(instanceId, (accountId?: AccountId | Uint8Array | string): Observable<[Option<ITuple<[PalletIdentityRegistration, Option<Bytes>]>> | Option<PalletIdentityRegistration> | undefined, Option<ITuple<[AccountId, Data]>> | undefined]> =>
    accountId && api.query.identity?.identityOf
      ? combineLatest([
        api.query.identity.identityOf(accountId),
        api.query.identity.superOf(accountId)
      ])
      : of([undefined, undefined])
  );
}

/**
 * @name identity
 * @description Returns identity info for an account
 */
export function identity (instanceId: string, api: DeriveApi): (accountId?: AccountId | Uint8Array | string) => Observable<DeriveAccountRegistration> {
  return memo(instanceId, (accountId?: AccountId | Uint8Array | string): Observable<DeriveAccountRegistration> =>
    api.derive.accounts._identity(accountId).pipe(
      switchMap(([identityOfOpt, superOfOpt]) =>
        getParent(api, identityOfOpt, superOfOpt)
      ),
      map(([identityOfOpt, superOf]) =>
        extractIdentity(identityOfOpt, superOf)
      )
    )
  );
}

export const hasIdentity = /*#__PURE__*/ firstMemo(
  (api: DeriveApi, accountId: AccountId | Uint8Array | string) =>
    api.derive.accounts.hasIdentityMulti([accountId])
);

export function hasIdentityMulti (instanceId: string, api: DeriveApi): (accountIds: (AccountId | Uint8Array | string)[]) => Observable<DeriveHasIdentity[]> {
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
              const value = dataAsString(identityCompat(identityOfOpt).info.display);

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
