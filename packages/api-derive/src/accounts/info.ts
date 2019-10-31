// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, AccountIndex, Address, Balance } from '@polkadot/types/interfaces';
import { Codec } from '@polkadot/types/types';
import { DeriveAccountInfo } from '../types';

import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Bytes, Option, u32 } from '@polkadot/types';
import { u8aToString } from '@polkadot/util';

import { drr } from '../util/drr';
import { idAndIndex } from './idAndIndex';

/**
 * @name info
 * @description Returns aux. info with regards to an account, current that includes the accountId, accountIndex and nickname
 */
export function info (api: ApiInterfaceRx): (address?: AccountIndex | AccountId | Address | string | null) => Observable<DeriveAccountInfo> {
  const idAndIndexCall = idAndIndex(api);

  // TODO We would really like to pass in an Address or AccountIndex here as well
  return (address?: AccountIndex | AccountId | Address | string | null): Observable<DeriveAccountInfo> =>
    idAndIndexCall(address).pipe(
      switchMap(([accountId, accountIndex]): Observable<DeriveAccountInfo> =>
        accountId && api.query.nicks
          ? api.query.nicks
            .nameOf<Option<[Bytes, Balance] & Codec>>(accountId)
            .pipe(
              map((result): DeriveAccountInfo => ({
                accountId,
                accountIndex,
                nickname: result.isSome
                  ? u8aToString(result.unwrap()[0]).substr(0, (api.consts.nicks.maxLength as u32).toNumber())
                  : undefined
              }))
            )
          : of({ accountId, accountIndex })
      ),
      drr()
    );
}
