// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ReferendumInfo } from '@polkadot/types/interfaces/democracy';

import BN from 'bn.js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { Option } from '@polkadot/types';
import { isNull } from '@polkadot/util';

import { ReferendumInfoExtended } from '../type';
import { drr, memo } from '../util';

export function constructInfo (index: BN | number, optionInfo?: Option<ReferendumInfo>): Option<ReferendumInfoExtended> {
  const info = optionInfo
    ? optionInfo.unwrapOr(null)
    : null;

  return new Option<ReferendumInfoExtended>(
    ReferendumInfoExtended,
    isNull(info)
      ? null
      : new ReferendumInfoExtended(info, index)
  );
}

export const referendumInfo = memo((api: ApiInterfaceRx): (index: BN | number) => Observable<Option<ReferendumInfoExtended>> => {
  return (index: BN | number): Observable<Option<ReferendumInfoExtended>> =>
    api.query.democracy.referendumInfoOf<Option<ReferendumInfo>>(index).pipe(
      map((optionInfo): Option<ReferendumInfoExtended> =>
        constructInfo(index, optionInfo)
      ),
      drr()
    );
}, true);
