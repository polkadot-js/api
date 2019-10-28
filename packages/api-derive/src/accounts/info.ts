// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, Balance } from '@polkadot/types/interfaces';
import { Codec } from '@polkadot/types/types';
import { DeriveAccountInfo } from '../types';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Bytes, Option, u32 } from '@polkadot/types';
import { u8aToString } from '@polkadot/util';

import { drr } from '../util/drr';

type Result = Option<[Bytes, Balance] & Codec>;

function formatNickname (api: ApiInterfaceRx, result: Result): string | undefined {
  return result.isSome
    ? u8aToString(result.unwrap()[0]).substr(0, (api.consts.nicks.maxLength as u32).toNumber())
    : undefined;
}

/**
 * @name info
 * @description Returns aux. info with regards to an  account, current that includes the nickname
 */
export function info (api: ApiInterfaceRx): (address?: AccountId | string | null) => Observable<DeriveAccountInfo> {
  // TODO We would really like to pass in an Address or AccountIndex here as well
  return (address?: AccountId | string | null): Observable<DeriveAccountInfo> => {
    return address && api.query.nicks
      ? api.query.nicks.nameOf<Result>(address).pipe(
        map((result): DeriveAccountInfo => ({
          nickname: formatNickname(api, result)
        })),
        drr()
      )
      : of({} as DeriveAccountInfo);
  };
}
